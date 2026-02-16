import { AboutIcon } from "../../assets/icons/icons";
import { Button } from "../ui/button";
import { useVacancyForm } from "../../hooks/hooksVacancies/useVacancyForm";
import { useVacancyTranslations } from "../../hooks/hooksVacancies/useVacancyTranslations";
import { CalendarDays, Building2, Briefcase } from "lucide-react";
import {
  container,
  innerContainer,
  sectionWrapper,
  sectionCard,
  sectionHeading,
  emptyState,
  vacancyItem,
  vacancyInfo,
  vacancyTitle,
  vacancyMeta,
  vacancyBadge,
  vacancyList,
  headerSection,
  headerBadge,
  heading,
  iconWrapper,
  introParagraph,
  emailLink,
  descriptionParagraph,
  detailsLink,
  sectionTitle,
  grid,
  fieldWrapper,
  label,
  input,
  errorText,
  scopeSection,
  scopeHeading,
  subsectionTitle,
  buttonGroup,
  optionButton,
  fieldsHeading,
  mathTitle,
  subjectButtonGroup,
  submitContainer,
  statusMessage,
  submitButton,
} from "./VacancyDetail.styles";

interface VacancyItemData {
  title: string;
  department: string;
  type: string;
  deadline: string;
}

const VacancyDetail = () => {
  const { t, getTranslatedArray } = useVacancyTranslations();
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

  const academicPositions = getTranslatedArray(
    "detail.academicPosition.options"
  );
  const assignmentTypes = getTranslatedArray("detail.assignmentType.options");
  const teachingOptions = getTranslatedArray("detail.teaching.options");
  const languageOptions = getTranslatedArray(
    "detail.instructionLanguage.options"
  );
  const mathSubjects = getTranslatedArray("detail.fieldsOfInterest.subjects");

  const openItems = t("openPositions.items", { returnObjects: true }) as VacancyItemData[];
  const closedItems = t("closedPositions.items", { returnObjects: true }) as VacancyItemData[];
  const ongoingItems = t("ongoingCompetitions.items", { returnObjects: true }) as VacancyItemData[];
  const completedItems = t("completedCompetitions.items", { returnObjects: true }) as VacancyItemData[];

  const renderVacancyList = (items: VacancyItemData[], isOpen: boolean) => (
    <div className={vacancyList()}>
      {items.map((item, index) => (
        <div key={index} className={vacancyItem()}>
          <div className={vacancyInfo()}>
            <h3 className={vacancyTitle()}>{item.title}</h3>
            <div className={vacancyMeta()}>
              <span className="inline-flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5" />
                {item.department}
              </span>
              <span className="inline-flex items-center gap-1">
                <Briefcase className="w-3.5 h-3.5" />
                {item.type}
              </span>
              <span className="inline-flex items-center gap-1">
                <CalendarDays className="w-3.5 h-3.5" />
                {t("vacancyLabels.deadline")}: {item.deadline}
              </span>
            </div>
          </div>
          <span className={vacancyBadge({ status: isOpen ? "open" : "closed" })}>
            {isOpen ? t("vacancyLabels.open") : t("vacancyLabels.closed")}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className={container()}>
      {/* Positions Section */}
      <section id="positions" className={sectionWrapper()}>
        <div className="flex flex-col gap-8 sm:max-3xl:gap-6">
          <div className={sectionCard()}>
            <h2 className={sectionHeading()}>{t("openPositions.title")}</h2>
            {openItems.length > 0
              ? renderVacancyList(openItems, true)
              : <p className={emptyState()}>{t("openPositions.empty")}</p>}
          </div>
          <div className={sectionCard()}>
            <h2 className={sectionHeading()}>{t("closedPositions.title")}</h2>
            {closedItems.length > 0
              ? renderVacancyList(closedItems, false)
              : <p className={emptyState()}>{t("closedPositions.empty")}</p>}
          </div>
        </div>
      </section>

      {/* Competitions Section */}
      <section id="competitions" className={sectionWrapper()}>
        <div className="flex flex-col gap-8 sm:max-3xl:gap-6">
          <div className={sectionCard()}>
            <h2 className={sectionHeading()}>{t("ongoingCompetitions.title")}</h2>
            {ongoingItems.length > 0
              ? renderVacancyList(ongoingItems, true)
              : <p className={emptyState()}>{t("ongoingCompetitions.empty")}</p>}
          </div>
          <div className={sectionCard()}>
            <h2 className={sectionHeading()}>{t("completedCompetitions.title")}</h2>
            {completedItems.length > 0
              ? renderVacancyList(completedItems, false)
              : <p className={emptyState()}>{t("completedCompetitions.empty")}</p>}
          </div>
        </div>
      </section>

      {/* Expression of Interest Section */}
      <section id="expression-of-interest" className={sectionWrapper()}>
      <div className={innerContainer()}>
        {/* Header */}
        <div className={headerSection()}>
          <div className={headerBadge()}>
            <h1 className={heading()}>{t("detail.heading")}</h1>
            <span className={iconWrapper()}>{AboutIcon}</span>
          </div>

          <p className={introParagraph()}>
            {t("detail.intro")}{" "}
            <a href={`mailto:${t("detail.email")}`} className={emailLink()}>
              {t("detail.email")}
            </a>
          </p>

          <p className={descriptionParagraph()}>{t("detail.description")}</p>

          <div className={detailsLink()}>
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
            <span>{t("detail.seeDetails")}</span>
          </div>
        </div>

        {/* Form Section */}
        <div>
          <h2 className={sectionTitle()}>{t("detail.formTitle")}</h2>

          {/* Contact Information */}
          <div className={grid()}>
            {/* First Name */}
            <div>
              <label className={label()}>
                {t("detail.fields.firstName.label")}
              </label>
              <input
                type="text"
                name="firstName"
                placeholder={t("detail.fields.firstName.placeholder")}
                value={formData.firstName}
                onChange={handleChange}
                className={input()}
              />
              {errors.firstName && (
                <p className={errorText()}>{errors.firstName}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className={label()}>
                {t("detail.fields.lastName.label")}
              </label>
              <input
                type="text"
                name="lastName"
                placeholder={t("detail.fields.lastName.placeholder")}
                value={formData.lastName}
                onChange={handleChange}
                className={input()}
              />
              {errors.lastName && (
                <p className={errorText()}>{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Field of Interest + Current Position */}
          <div className={grid()}>
            <div>
              <label className={label()}>
                {t("detail.fields.fieldOfInterest.label")}
              </label>
              <input
                type="text"
                name="fieldOfInterest"
                placeholder={t("detail.fields.fieldOfInterest.placeholder")}
                value={formData.fieldOfInterest}
                onChange={handleChange}
                className={input()}
              />
              {errors.fieldOfInterest && (
                <p className={errorText()}>{errors.fieldOfInterest}</p>
              )}
            </div>

            <div>
              <label className={label()}>
                {t("detail.fields.currentPosition.label")}
              </label>
              <input
                type="text"
                name="currentPosition"
                placeholder={t("detail.fields.currentPosition.placeholder")}
                value={formData.currentPosition}
                onChange={handleChange}
                className={input()}
              />
              {errors.currentPosition && (
                <p className={errorText()}>{errors.currentPosition}</p>
              )}
            </div>
          </div>

          {/* Address */}
          <div className={fieldWrapper()}>
            <label className={label()}>
              {t("detail.fields.address.label")}
            </label>
            <input
              type="text"
              name="address"
              placeholder={t("detail.fields.address.placeholder")}
              value={formData.address}
              onChange={handleChange}
              className={input()}
            />
            {errors.address && <p className={errorText()}>{errors.address}</p>}
          </div>

          {/* Email + Phone */}
          <div className={grid()}>
            <div>
              <label className={label()}>
                {t("detail.fields.email.label")}
              </label>
              <input
                type="email"
                name="email"
                placeholder={t("detail.fields.email.placeholder")}
                value={formData.email}
                onChange={handleChange}
                className={input()}
              />
              {errors.email && <p className={errorText()}>{errors.email}</p>}
            </div>

            <div>
              <label className={label()}>
                {t("detail.fields.phoneNumber.label")}
              </label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder={t("detail.fields.phoneNumber.placeholder")}
                value={formData.phoneNumber}
                onChange={handleChange}
                className={input()}
              />
              {errors.phoneNumber && (
                <p className={errorText()}>{errors.phoneNumber}</p>
              )}
            </div>
          </div>

          {/* Scope of Interest */}
          <div className={scopeSection()}>
            <p className={scopeHeading()}>{t("detail.scopeHeading")}</p>
          </div>

          {/* Academic Position */}
          <div className={fieldWrapper()}>
            <h3 className={subsectionTitle()}>
              {t("detail.academicPosition.title")}
            </h3>
            <div className={buttonGroup()}>
              {academicPositions.map((position) => (
                <button
                  key={position}
                  type="button"
                  onClick={() =>
                    handleButtonSelect("academicPosition", position)
                  }
                  className={optionButton({
                    selected: formData.academicPosition === position,
                  })}
                >
                  {position}
                </button>
              ))}
            </div>
            {errors.academicPosition && (
              <p className={errorText()}>{errors.academicPosition}</p>
            )}
          </div>

          {/* Assignment Type */}
          <div className={fieldWrapper()}>
            <h3 className={subsectionTitle()}>
              {t("detail.assignmentType.title")}
            </h3>
            <div className={buttonGroup()}>
              {assignmentTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => handleButtonSelect("assignmentType", type)}
                  className={optionButton({
                    selected: formData.assignmentType === type,
                  })}
                >
                  {type}
                </button>
              ))}
            </div>
            {errors.assignmentType && (
              <p className={errorText()}>{errors.assignmentType}</p>
            )}
          </div>

          {/* Teaching */}
          <div className={fieldWrapper()}>
            <h3 className={subsectionTitle()}>{t("detail.teaching.title")}</h3>
            <div className={buttonGroup()}>
              {teachingOptions.map((teaching) => (
                <button
                  key={teaching}
                  type="button"
                  onClick={() => handleButtonSelect("teaching", teaching)}
                  className={optionButton({
                    selected: formData.teaching === teaching,
                  })}
                >
                  {teaching}
                </button>
              ))}
            </div>
            {errors.teaching && (
              <p className={errorText()}>{errors.teaching}</p>
            )}
          </div>

          {/* Instruction Language */}
          <div className={fieldWrapper()}>
            <h3 className={subsectionTitle()}>
              {t("detail.instructionLanguage.title")}
            </h3>
            <div className={buttonGroup()}>
              {languageOptions.map((language) => (
                <button
                  key={language}
                  type="button"
                  onClick={() =>
                    handleButtonSelect("instructionLanguage", language)
                  }
                  className={optionButton({
                    selected: formData.instructionLanguage === language,
                  })}
                >
                  {language}
                </button>
              ))}
            </div>
            {errors.instructionLanguage && (
              <p className={errorText()}>{errors.instructionLanguage}</p>
            )}
          </div>

          {/* Fields of Interest */}
          <div className={fieldWrapper()}>
            <p className={fieldsHeading()}>
              {t("detail.fieldsOfInterest.heading")}
            </p>

            <div>
              <h3 className={mathTitle()}>
                {t("detail.fieldsOfInterest.mathTitle")}
              </h3>
              <div className={subjectButtonGroup()}>
                {mathSubjects.map((subject) => (
                  <button
                    key={subject}
                    type="button"
                    onClick={() => toggleSubject(subject)}
                    disabled={
                      !formData.fieldsOfInterest.includes(subject) &&
                      formData.fieldsOfInterest.length >= 3
                    }
                    className={optionButton({
                      selected: formData.fieldsOfInterest.includes(subject),
                      disabled:
                        !formData.fieldsOfInterest.includes(subject) &&
                        formData.fieldsOfInterest.length >= 3,
                    })}
                  >
                    {subject}
                  </button>
                ))}
              </div>
            </div>

            {errors.fieldsOfInterest && (
              <p className={errorText()}>{errors.fieldsOfInterest}</p>
            )}
          </div>

          {/* Submit */}
          <div className={submitContainer()}>
            {submitStatus === "success" && (
              <div className={statusMessage({ status: "success" })}>
                {t("detail.submit.success")}
              </div>
            )}
            {submitStatus === "error" && (
              <div className={statusMessage({ status: "error" })}>
                {t("detail.submit.error")}
              </div>
            )}
            <Button
              type="button"
              onClick={handleSubmit}
              disabled={submitting}
              className={submitButton({ submitting })}
            >
              {submitting
                ? t("detail.submit.submitting")
                : t("detail.submit.button")}
            </Button>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
};

export default VacancyDetail;
