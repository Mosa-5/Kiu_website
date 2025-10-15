import { AboutIcon } from "../../assets/icons/icons";
import { useVacancyForm } from "./hooks/useVacancyForm";

const VacancyDetail = () => {
  const {
    formData,
    handleChange,
    handleButtonSelect,
    handleSubmit,
    submitting,
    submitStatus,
    errors,
    toggleSubject,
  } = useVacancyForm();

  return (
    <div className="min-h-screen px-4">
      <div className="max-w-[1280px] mx-auto rounded-lg shadow-xl p-8 border-2">
        {/* Header */}
        <div className="mb-8">
          <div className="bg-[#E3F0FF] inline-flex items-center gap-3 px-4 py-2 rounded mb-6">
            <h1 className="text-3xl font-medium text-mainDark">
              Expression Of Interest
            </h1>
            <span className="text-mainDark">{AboutIcon}</span>
          </div>

          <p className="text-sm  mb-2">
            If you are interested to work with us you can see our vacancies or
            contact us at{" "}
            <a
              href="mailto:admin@kiu.edu.ge"
              className="text-blue-600 hover:underline"
            >
              admin@kiu.edu.ge
            </a>
          </p>

          <p className="text-sm  mb-3">
            We are seeking expressions of interest (EOI) from the future
            academic personnel and teaching assistants to be involved in the
            teaching and research activities at Kutaisi International University
            (KIU).
          </p>

          <div className="flex items-center gap-2 text-sm text-blue-600 cursor-pointer hover:underline">
            <span>←</span>
            <span>See Detailed Information</span>
          </div>
        </div>

        {/* Form Section */}
        <div>
          <h2 className="text-lg font-semibold text-main mb-6 pb-2 border-b border-gray-200">
            Expression Of Interest (EOI) Form
          </h2>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium  mb-2">
                First name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              {errors.firstName && (
                <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium  mb-2">
                Last name
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              {errors.lastName && (
                <p className="text-sm text-red-500 mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Field of Interest + Current Position */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium  mb-2">
                Field of Interest
              </label>
              <input
                type="text"
                name="fieldOfInterest"
                placeholder="Your field of interest"
                value={formData.fieldOfInterest}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              {errors.fieldOfInterest && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.fieldOfInterest}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium  mb-2">
                Current Position
              </label>
              <input
                type="text"
                name="currentPosition"
                placeholder="Current position"
                value={formData.currentPosition}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              {errors.currentPosition && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.currentPosition}
                </p>
              )}
            </div>
          </div>

          {/* Address */}
          <div className="mb-6">
            <label className="block text-sm font-medium  mb-2">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Your address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            {errors.address && (
              <p className="text-sm text-red-500 mt-1">{errors.address}</p>
            )}
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium  mb-2">E-mail</label>
              <input
                type="email"
                name="email"
                placeholder="example@mail.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium  mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="+995 5XX XXX XXX"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              {errors.phoneNumber && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.phoneNumber}
                </p>
              )}
            </div>
          </div>

          {/* Scope of Interest */}
          <div className="mb-8 mt-12">
            <p className="text-sm italic text-main">
              Please, specify the scope of your interest
            </p>
          </div>

          {/* Academic Position */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-main mb-3">
              Academic Position
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Professor",
                "Associate Professor",
                "Assistant Professor",
                "Visiting Professor",
                "Teaching Assistant",
              ].map((position) => (
                <button
                  key={position}
                  type="button"
                  onClick={() =>
                    handleButtonSelect("academicPosition", position)
                  }
                  className={`px-4 py-2 rounded-full border text-sm transition-colors ${
                    formData.academicPosition === position
                      ? "bg-blue-100 border-blue-500 text-blue-700"
                      : "border-gray-300  hover:border-gray-400"
                  }`}
                >
                  {position}
                </button>
              ))}
            </div>
            {errors.academicPosition && (
              <p className="text-sm text-red-500 mt-2">
                {errors.academicPosition}
              </p>
            )}
          </div>

          {/* Assignment Type */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-main mb-3">
              Assignment Type
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Full Time", "Part Time", "Visiting / Adjunct Position"].map(
                (type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => handleButtonSelect("assignmentType", type)}
                    className={`px-4 py-2 rounded-full border text-sm transition-colors ${
                      formData.assignmentType === type
                        ? "bg-blue-100 border-blue-500 text-blue-700"
                        : "border-gray-300  hover:border-gray-400"
                    }`}
                  >
                    {type}
                  </button>
                )
              )}
            </div>
            {errors.assignmentType && (
              <p className="text-sm text-red-500 mt-2">
                {errors.assignmentType}
              </p>
            )}
          </div>

          {/* Teaching */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-main mb-3">Teaching</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "On Campus",
                "Off campus (online teaching)",
                "Combined (online off campus/on campus)",
              ].map((teaching) => (
                <button
                  key={teaching}
                  type="button"
                  onClick={() => handleButtonSelect("teaching", teaching)}
                  className={`px-4 py-2 rounded-full border text-sm transition-colors ${
                    formData.teaching === teaching
                      ? "bg-blue-100 border-blue-500 text-blue-700"
                      : "border-gray-300  hover:border-gray-400"
                  }`}
                >
                  {teaching}
                </button>
              ))}
            </div>
            {errors.teaching && (
              <p className="text-sm text-red-500 mt-2">{errors.teaching}</p>
            )}
          </div>

          {/* Instruction Language */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-main mb-3">
              Instruction Language
            </h3>
            <div className="flex flex-wrap gap-3">
              {["English", "Georgian"].map((language) => (
                <button
                  key={language}
                  type="button"
                  onClick={() =>
                    handleButtonSelect("instructionLanguage", language)
                  }
                  className={`px-4 py-2 rounded-full border text-sm transition-colors ${
                    formData.instructionLanguage === language
                      ? "bg-blue-100 border-blue-500 text-blue-700"
                      : "border-gray-300  hover:border-gray-400"
                  }`}
                >
                  {language}
                </button>
              ))}
            </div>
            {errors.instructionLanguage && (
              <p className="text-sm text-red-500 mt-2">
                {errors.instructionLanguage}
              </p>
            )}
          </div>

          {/* Fields of Interest */}
          <div className="mb-8">
            <p className="text-sm italic text-main mb-4">
              Please, choose fields of interest and subjects you would like to
              be involved at the KIU:
            </p>

            <div className="mb-4">
              <h3 className="font-medium mb-3">Mathematics (choose 3)</h3>

              {/* Button Pills - Top 6 */}
              <div className="flex flex-wrap gap-3 mb-6">
                {[
                  "Calculus",
                  "Vector Calculus",
                  "Linear Algebra",
                  "Probability",
                  "Statistics",
                  "Numerical Linear Algebra",
                ].map((subject) => (
                  <button
                    key={subject}
                    type="button"
                    onClick={() => toggleSubject(subject)}
                    disabled={
                      !formData.fieldsOfInterest.includes(subject) &&
                      formData.fieldsOfInterest.length >= 3
                    }
                    className={`px-4 py-2 rounded-full border transition-all ${
                      formData.fieldsOfInterest.includes(subject)
                        ? "bg-main text-white border-blue-900"
                        : "bg-white  border-gray-300 hover:border-blue-400"
                    } ${
                      !formData.fieldsOfInterest.includes(subject) &&
                      formData.fieldsOfInterest.length >= 3
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    {formData.fieldsOfInterest.includes(subject) && "☑ "}
                    {subject}
                  </button>
                ))}
              </div>

              {/* Full Checkbox List */}
              <div className="space-y-2">
                {[
                  "Calculus",
                  "Vector Calculus",
                  "Linear Algebra",
                  "Probability",
                  "Statistics",
                  "Numerical Linear Algebra",
                  "Numerical Analysis",
                  "Discrete Structures",
                  "Ordinary Differential Equations (ODEs)",
                  "Numerical Methods for ODEs",
                  "Functional Analysis and PDEs",
                  "Numerical Methods for PDEs",
                  "Introduction to Optimization",
                  "Operations Research",
                  "Convex Optimization",
                  "Nonlinear Optimization",
                  "Mathematical Modelling",
                ].map((subject) => (
                  <label
                    key={subject}
                    className={`flex items-center space-x-2 ${
                      !formData.fieldsOfInterest.includes(subject) &&
                      formData.fieldsOfInterest.length >= 3
                        ? "opacity-50 cursor-not-allowed"
                        : "cursor-pointer"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.fieldsOfInterest.includes(subject)}
                      onChange={() => toggleSubject(subject)}
                      disabled={
                        !formData.fieldsOfInterest.includes(subject) &&
                        formData.fieldsOfInterest.length >= 3
                      }
                      className="w-4 h-4"
                    />
                    <span className="text-sm">{subject}</span>
                  </label>
                ))}
              </div>
            </div>

            {errors.fieldsOfInterest && (
              <p className="text-sm text-red-500 mt-1">
                {errors.fieldsOfInterest}
              </p>
            )}
          </div>

          {/* Submit */}
          <div className="flex flex-col items-end gap-3">
            {submitStatus === "success" && (
              <div className="w-full p-3 bg-green-50 border border-green-200 text-green-700 rounded text-sm">
                ✓ Your expression of interest has been submitted successfully!
              </div>
            )}
            {submitStatus === "error" && (
              <div className="w-full p-3 bg-red-50 border border-red-200 text-red-700 rounded text-sm">
                ✗ Failed to submit. Please try again later.
              </div>
            )}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={submitting}
              className={`px-6 py-2 bg-main text-white rounded hover:bg-blue-900 transition-colors font-medium ${
                submitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacancyDetail;
