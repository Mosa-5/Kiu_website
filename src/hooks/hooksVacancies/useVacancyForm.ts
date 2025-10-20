import { useState } from "react";
import emailjs from "@emailjs/browser";
import { z } from "zod";

const VacancySchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  fieldOfInterest: z.string().min(1, "Field of Interest is required"),
  currentPosition: z.string().min(1, "Current Position is required"),
  address: z.string().min(1, "Address is required"),
  email: z.string().email("Invalid email format"),
  phoneNumber: z
    .string()
    .min(5, "Phone number is required")
    .regex(/^[\d+\-()\s]+$/, "Invalid phone number"),
  academicPosition: z.string().min(1, "Academic Position is required"),
  assignmentType: z.string().min(1, "Assignment Type is required"),
  teaching: z.string().min(1, "Teaching preference is required"),
  instructionLanguage: z.string().min(1, "Instruction Language is required"),
  fieldsOfInterest: z.array(z.string()).min(1, "At least one field of interest is required").max(3, "Maximum 3 fields allowed"),
});

type VacancyFormData = z.infer<typeof VacancySchema>;

const initialFormState: VacancyFormData = {
  firstName: "",
  lastName: "",
  fieldOfInterest: "",
  currentPosition: "",
  address: "",
  email: "",
  phoneNumber: "",
  academicPosition: "",
  assignmentType: "",
  teaching: "",
  instructionLanguage: "",
  fieldsOfInterest: [],
};

export const useVacancyForm = () => {
  const [formData, setFormData] = useState<VacancyFormData>(initialFormState);
  const [errors, setErrors] = useState<Partial<Record<keyof VacancyFormData, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const updateField = (field: keyof VacancyFormData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    updateField(e.target.name as keyof VacancyFormData, e.target.value);
  };

  const handleButtonSelect = (field: keyof VacancyFormData, value: string) => {
    updateField(field, value);
  };

  const toggleSubject = (subject: string) => {
    const current = formData.fieldsOfInterest;
    const updated = current.includes(subject)
      ? current.filter(s => s !== subject)
      : current.length < 3 
        ? [...current, subject]
        : current;
    updateField('fieldsOfInterest', updated);
  };

  const validateForm = () => {
    const validation = VacancySchema.safeParse(formData);
    
    if (!validation.success) {
      const newErrors = validation.error.issues.reduce((acc, issue) => {
        const fieldName = issue.path[0] as keyof VacancyFormData;
        acc[fieldName] = issue.message;
        return acc;
      }, {} as Partial<Record<keyof VacancyFormData, string>>);
      
      setErrors(newErrors);
      alert("Please fill all required fields correctly.");
      return false;
    }
    return true;
  };

  const sendEmails = async () => {
    const { VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY } = import.meta.env;
    
    const templateParams = {
      ...formData,
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
    };

    await emailjs.send(VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, templateParams, VITE_EMAILJS_PUBLIC_KEY);
    await emailjs.send(VITE_EMAILJS_SERVICE_ID, "thank_you_template_id", templateParams, VITE_EMAILJS_PUBLIC_KEY);
  };

  const resetForm = () => {
    setFormData(initialFormState);
    setErrors({});
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setSubmitting(true);
    setSubmitStatus("idle");

    try {
      await sendEmails();
      setSubmitStatus("success");
      resetForm();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return {
    formData,
    handleChange,
    handleButtonSelect,
    handleSubmit,
    submitting,
    submitStatus,
    errors,
    toggleSubject
  };
};