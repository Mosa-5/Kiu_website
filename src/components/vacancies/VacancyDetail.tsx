import { AboutIcon } from "../../assets/icons/icons";
import { Button } from "../ui/button";
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
          <div className="bg-headingBg inline-flex items-center gap-3 px-4 py-2 rounded mb-6">
            <h1 className="text-3xl font-medium text-mainDark">
              Expression Of Interest
            </h1>
            <span className="text-mainDark">{AboutIcon}</span>
          </div>

          <p className="text-lg  mb-2">
            If you are interested to work with us you can see our vacancies or
            contact us at{" "}
            <a
              href="mailto:admin@kiu.edu.ge"
              className="text-link hover:text-linkDark cursor-pointer underline-offset-2 underline"
            >
              admin@kiu.edu.ge
            </a>
          </p>

          <p className="text-lg  mb-3">
            We are seeking expressions of interest (EOI) from the future
            academic personnel and teaching assistants to be involved in the
            teaching and research activities at Kutaisi International University
            (KIU).
          </p>

          <div className="flex items-center gap-2 text-lg text-link hover:text-linkDark cursor-pointer underline-offset-2 underline">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6269 24.5H11.0564C6.00329 24.5 1.80875 20.4695 1.75297 15.4219C1.73639 14.1968 1.96589 12.9808 2.42788 11.8461C2.88987 10.7113 3.57494 9.68079 4.4425 8.81564C6.96579 6.43017 13.1269 3.73517 13.1269 3.73517C13.332 3.61663 13.5592 3.54098 13.7944 3.51283C14.0297 3.48467 14.2682 3.50459 14.4956 3.57137C14.7229 3.63815 14.9344 3.75041 15.117 3.90134C15.2997 4.05227 15.4498 4.23872 15.5583 4.44939C15.9958 5.2872 15.6502 6.3197 14.8342 6.79002L10.8486 9.08689C10.7338 9.15077 10.6405 9.24715 10.5804 9.36392C10.5203 9.48068 10.496 9.61262 10.5106 9.74314V9.75627C10.5468 9.96645 10.6568 10.1568 10.8208 10.2932C10.9848 10.4295 11.1921 10.5028 11.4053 10.5H24.5019C24.739 10.4997 24.9736 10.5476 25.1916 10.6408C25.4096 10.734 25.6064 10.8705 25.7701 11.042C25.9337 11.2135 26.0608 11.4165 26.1436 11.6386C26.2265 11.8608 26.2633 12.0974 26.2519 12.3342C26.2081 13.276 25.3966 14 24.4548 14H16.6269C16.5069 13.9998 16.3882 14.0242 16.2781 14.0717C16.168 14.1193 16.0688 14.1889 15.9867 14.2764C15.9047 14.3639 15.8415 14.4674 15.8011 14.5803C15.7607 14.6933 15.7439 14.8133 15.7519 14.933C15.7712 15.158 15.875 15.3673 16.0424 15.5189C16.2098 15.6705 16.4284 15.7531 16.6542 15.75H18.3769C18.614 15.7497 18.8486 15.7976 19.0666 15.8908C19.2846 15.984 19.4814 16.1205 19.6451 16.292C19.8087 16.4635 19.9358 16.6665 20.0186 16.8886C20.1015 17.1108 20.1383 17.3474 20.1269 17.5842C20.0831 18.526 19.2716 19.25 18.3298 19.25H15.7519C15.6319 19.2498 15.5132 19.2742 15.4031 19.3217C15.293 19.3693 15.1938 19.4389 15.1117 19.5264C15.0297 19.6139 14.9665 19.7174 14.9261 19.8303C14.8857 19.9433 14.8689 20.0633 14.8769 20.183C14.8962 20.408 15 20.6173 15.1674 20.7689C15.3348 20.9205 15.5534 21.0031 15.7792 21H16.5755C17.5172 21 18.3255 21.7241 18.3725 22.6658C18.3839 22.9022 18.3472 23.1385 18.2646 23.3604C18.1821 23.5822 18.0554 23.785 17.8922 23.9565C17.729 24.1279 17.5327 24.2645 17.3153 24.3579C17.0978 24.4514 16.8636 24.4997 16.6269 24.5Z"
                fill="#3C70AF"
              />
            </svg>
            <span>See Detailed Information</span>
          </div>
        </div>

        {/* Form Section */}
        <div>
          <h2 className="text-xl font-semibold text-main mb-6 pb-2 border-b border-gray-200">
            Expression Of Interest (EOI) Form
          </h2>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* First Name */}
            <div>
              <label className="block text-md font-medium  mb-2">
                First name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-main"
              />
              {errors.firstName && (
                <p className="text-md text-red-500 mt-1">{errors.firstName}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-md font-medium  mb-2">
                Last name
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-main"
              />
              {errors.lastName && (
                <p className="text-md text-red-500 mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Field of Interest + Current Position */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-md font-medium  mb-2">
                Field of Interest
              </label>
              <input
                type="text"
                name="fieldOfInterest"
                placeholder="Your field of interest"
                value={formData.fieldOfInterest}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-main"
              />
              {errors.fieldOfInterest && (
                <p className="text-md text-red-500 mt-1">
                  {errors.fieldOfInterest}
                </p>
              )}
            </div>

            <div>
              <label className="block text-md font-medium  mb-2">
                Current Position
              </label>
              <input
                type="text"
                name="currentPosition"
                placeholder="Current position"
                value={formData.currentPosition}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-main"
              />
              {errors.currentPosition && (
                <p className="text-md text-red-500 mt-1">
                  {errors.currentPosition}
                </p>
              )}
            </div>
          </div>

          {/* Address */}
          <div className="mb-6">
            <label className="block text-md font-medium  mb-2">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Your address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-main"
            />
            {errors.address && (
              <p className="text-md text-red-500 mt-1">{errors.address}</p>
            )}
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-md font-medium  mb-2">E-mail</label>
              <input
                type="email"
                name="email"
                placeholder="example@mail.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-main"
              />
              {errors.email && (
                <p className="text-md text-red-500 mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-md font-medium  mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="+995 5XX XXX XXX"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-main"
              />
              {errors.phoneNumber && (
                <p className="text-md text-red-500 mt-1">
                  {errors.phoneNumber}
                </p>
              )}
            </div>
          </div>

          {/* Scope of Interest */}
          <div className="mb-8 mt-12">
            <p className="text-xl font-semibold text-main">
              Please, specify the scope of your interest
            </p>
          </div>

          {/* Academic Position */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-main mb-3">
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
                  className={`px-4 py-2 rounded-full border text-md font-medium transition-colors ${
                    formData.academicPosition === position
                      ? "bg-blue-100 border-main text-mainDark font-medium"
                      : "border-gray-300  hover:border-gray-400"
                  }`}
                >
                  {position}
                </button>
              ))}
            </div>
            {errors.academicPosition && (
              <p className="text-md text-red-500 mt-2">
                {errors.academicPosition}
              </p>
            )}
          </div>

          {/* Assignment Type */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-main mb-3">
              Assignment Type
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Full Time", "Part Time", "Visiting / Adjunct Position"].map(
                (type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => handleButtonSelect("assignmentType", type)}
                    className={`px-4 py-2 rounded-full border text-md font-medium transition-colors ${
                      formData.assignmentType === type
                        ? "bg-blue-100 border-main text-mainDark"
                        : "border-gray-300  hover:border-gray-400"
                    }`}
                  >
                    {type}
                  </button>
                )
              )}
            </div>
            {errors.assignmentType && (
              <p className="text-md text-red-500 mt-2">
                {errors.assignmentType}
              </p>
            )}
          </div>

          {/* Teaching */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-main mb-3">Teaching</h3>
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
                  className={`px-4 py-2 rounded-full border text-md font-medium transition-colors ${
                    formData.teaching === teaching
                      ? "bg-blue-100 border-main text-mainDark"
                      : "border-gray-300  hover:border-gray-400"
                  }`}
                >
                  {teaching}
                </button>
              ))}
            </div>
            {errors.teaching && (
              <p className="text-md text-red-500 mt-2">{errors.teaching}</p>
            )}
          </div>

          {/* Instruction Language */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-main mb-3">
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
                  className={`px-4 py-2 rounded-full border text-md font-medium transition-colors ${
                    formData.instructionLanguage === language
                      ? "bg-blue-100 border-main text-mainDark"
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
            <p className="text-xl font-semibold text-main mb-4">
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
                  <button
                    key={subject}
                    type="button"
                    onClick={() => toggleSubject(subject)}
                    disabled={
                      !formData.fieldsOfInterest.includes(subject) &&
                      formData.fieldsOfInterest.length >= 3
                    }
                    className={`px-4 py-2 rounded-full border transition-all font-medium ${
                      formData.fieldsOfInterest.includes(subject)
                        ? "bg-blue-100 border-main text-mainDark"
                        : "border-gray-300  hover:border-gray-400"
                    } ${
                      !formData.fieldsOfInterest.includes(subject) &&
                      formData.fieldsOfInterest.length >= 3
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    {/* {formData.fieldsOfInterest.includes(subject) && "☑"} */}
                    {subject}
                  </button>
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
          <div className="flex flex-col items-center gap-3">
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
            <Button
              type="button"
              onClick={handleSubmit}
              disabled={submitting}
              className={`w-full max-w-60 py-6 font-medium ${
                submitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {submitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacancyDetail;
