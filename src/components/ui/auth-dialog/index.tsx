import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { useAuth } from "@/hooks/hooksHeader/useAuth";
import {
  triggerButton,
  dialogContent,
  dialogTitle,
  form,
  label,
  input,
  errorMessage,
  successMessage,
  submitButton,
  toggleContainer,
  toggleButton,
} from "./index.styles";
import { useHeaderTranslations } from "@/hooks/hooksHeader/useHeaderTranslation";

interface AuthDialogProps {
  buttonText?: string;
  initialMode?: "login" | "signup";
}

const AuthDialog = ({
  buttonText = "Login",
  initialMode = "login",
}: AuthDialogProps) => {
  const [mode, setMode] = useState<"login" | "signup">(initialMode);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [open, setOpen] = useState(false);

  const { login, signup } = useAuth();
  const { t } = useHeaderTranslations();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (mode === "login") {
      const result = login(formData.email, formData.password);
      if (result.success) {
        setSuccess(result.message);
        setTimeout(() => {
          setOpen(false);
          setFormData({ email: "", password: "", name: "" });
        }, 1000);
      } else {
        setError(result.message);
      }
    } else {
      if (!formData.name) {
        setError("Name is required");
        return;
      }
      const result = signup(formData.email, formData.password, formData.name);
      if (result.success) {
        setSuccess(result.message);
        setTimeout(() => {
          setMode("login");
          setFormData({ ...formData, password: "" });
          setSuccess("");
        }, 1500);
      } else {
        setError(result.message);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className={triggerButton()}
          aria-label="Open login or signup dialog"
        >
          <LogIn size={18} />
          <span className="md:inline">{buttonText}</span>
        </Button>
      </DialogTrigger>

      <DialogContent className={dialogContent()}>
        <DialogHeader>
          <DialogTitle className={dialogTitle()}>
            {mode === "login" ? t("LogDialog.login") : t("LogDialog.signUp")}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className={form()}>
          {mode === "signup" && (
            <div>
              <label className={label()}>{t("LogDialog.fullName")}</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={input()}
                required
              />
            </div>
          )}

          <div>
            <label className={label()}>{t("LogDialog.email")}</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={input()}
              required
            />
          </div>

          <div>
            <label className={label()}>{t("LogDialog.password")}</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={input()}
              required
              minLength={6}
            />
          </div>

          {error && <div className={errorMessage()}>{error}</div>}

          {success && <div className={successMessage()}>{success}</div>}

          <Button
            type="submit"
            className={submitButton()}
            aria-label={
              mode === "login" ? "Submit login form" : "Submit signup form"
            }
          >
            {mode === "login" ? t("LogDialog.login") : t("LogDialog.signUp")}
          </Button>
        </form>

        <div className={toggleContainer()}>
          {mode === "login" ? (
            <p>
              {t("LogDialog.logInQuestion")}{" "}
              <button
                onClick={() => {
                  setMode("signup");
                  setError("");
                  setSuccess("");
                }}
                className={toggleButton()}
                aria-label="Switch to sign-up form"
              >
                {t("LogDialog.signUp")}
              </button>
            </p>
          ) : (
            <p>
              {t("LogDialog.signUpQuestion")}{" "}
              <button
                onClick={() => {
                  setMode("login");
                  setError("");
                  setSuccess("");
                }}
                className={toggleButton()}
                aria-label="Switch to login form"
              >
                {t("LogDialog.login")}
              </button>
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
