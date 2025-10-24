import { ResearchImage1, ResearchImage2 } from "@/assets";
import {
  container,
  contentWrapper,
  imageWrapper,
  image,
  paragraph,
  clearFloat,
  sectionTitle,
  listItem,
  bulletList,
  htcImageWrapper,
  newsletterlink,
  link,
  introWrapper,
  htcSectionWrapper,
  protonSection,
  publicationsSection,
  yearWrapper,
  overflowHidden,
} from "./ResearchDetail.styles";
import {
  useResearchTranslations,
  type ConferenceYear,
} from "@/hooks/useResearchTranslations";

const ResearchDetail = () => {
  const { t, getTranslatedArray, getIntroParagraphs } =
    useResearchTranslations();
  const introParagraphs = getIntroParagraphs();
  const htcDirections = getTranslatedArray<string>("detail.htc.directions");
  const protonParagraphs = getTranslatedArray<string>(
    "detail.proton.paragraphs"
  );
  const conferenceYears = getTranslatedArray<ConferenceYear>(
    "detail.publications.years"
  );

  return (
    <div className={container()}>
      <div className={contentWrapper()}>
        <div className={introWrapper()}>
          <div className={imageWrapper()}>
            <img
              src={ResearchImage1}
              alt="Research facility"
              className={image()}
            />
          </div>
          <div>
            {introParagraphs.map((paraChunks, idx) => (
              <p key={idx} className={paragraph()}>
                {paraChunks.map((chunk, i) =>
                  chunk.type === "text" ? (
                    <span key={i}>{chunk.value}</span>
                  ) : (
                    <a
                      key={i}
                      href={chunk.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={link()}
                    >
                      {chunk.value}
                    </a>
                  )
                )}
              </p>
            ))}
          </div>
        </div>

        <div className={clearFloat()}></div>

        {/* Hadron Therapy Center Section */}
        <div className={htcSectionWrapper()}>
          <div className={htcImageWrapper()}>
            <img
              src={ResearchImage2}
              alt="Hadron Therapy Center"
              className={image()}
            />
          </div>
          <div>
            <h2 className={sectionTitle()}>{t("detail.htc.title")}</h2>
            <p className={paragraph()}>{t("detail.htc.description")}</p>

            <div className={overflowHidden()}>
              <ul className={bulletList()}>
                {htcDirections.map((direction, index) => (
                  <li key={index} className={listItem()}>
                    {direction}
                  </li>
                ))}
              </ul>
            </div>

            <p className={paragraph()}>{t("detail.htc.locationLabel")}</p>
            <p className={paragraph()}>
              <strong>{t("detail.htc.kutaisi")}</strong>
            </p>
            <p className={paragraph()}>
              {t("detail.htc.facilitiesDescription")}
            </p>
          </div>
          <div className={clearFloat()}></div>
        </div>

        {/* Proton Therapy Clinic Section */}
        <div className={protonSection()}>
          <h2 className={sectionTitle()}>{t("detail.proton.title")}</h2>
          {protonParagraphs.map((text, index) => (
            <p key={index} className={paragraph()}>
              {text}
            </p>
          ))}
          <div className={clearFloat()}></div>
        </div>

        {/* Publications Section */}
        <div className={publicationsSection()}>
          <h2 className={sectionTitle()}>{t("detail.publications.title")}</h2>
          <p className={paragraph()}>{t("detail.publications.description")}</p>

          {conferenceYears.map((year, index) => (
            <div key={index} className={yearWrapper()}>
              <p className={paragraph()}>
                <strong>{year.title}</strong>
              </p>
              {year.sections.map((section, sectionIndex) => (
                <p key={sectionIndex} className={paragraph()}>
                  {section.label} –{" "}
                  <a href={section.link} className={newsletterlink()}>
                    {section.linkText}
                  </a>
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchDetail;
