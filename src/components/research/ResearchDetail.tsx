import { ResearchImage1, ResearchImage2 } from "@/assets";
import {
  AboutIcon,
  SchoolIcon,
  CuriculumIcon,
  ArchieveIcon,
} from "@/assets/icons/icons";
import {
  container,
  section,
  sectionHeaderRow,
  sectionContent,
  sectionIndex,
  sectionTitle,
  paragraph,
  link,
  mediaLayout,
  mediaImage,
  mediaImageTag,
  bulletList,
  listItem,
  yearWrapper,
  yearTitle,
  conferenceSection,
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
      {/* Research Overview Section */}
      <section id="overview" className={section({ isFirst: true })}>
        <div className={sectionHeaderRow()}>
          <span className={sectionIndex()}>{AboutIcon}</span>
          <h1 className={sectionTitle()}>{t("hero.title")}</h1>
        </div>

        <div className={sectionContent()}>
          <div className={mediaLayout()}>
            <div className={mediaImage()}>
              <img
                src={ResearchImage1}
                alt="Research facility"
                className={mediaImageTag()}
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
        </div>
      </section>

      {/* Hadron Therapy Center Section */}
      <section id="htc" className={section()}>
        <div className={sectionHeaderRow()}>
          <span className={sectionIndex()}>{SchoolIcon}</span>
          <h2 className={sectionTitle()}>{t("detail.htc.title")}</h2>
        </div>

        <div className={sectionContent()}>
          <div className={mediaLayout()}>
            <div className={mediaImage()}>
              <img
                src={ResearchImage2}
                alt="Hadron Therapy Center"
                className={mediaImageTag()}
              />
            </div>

            <div>
              <p className={paragraph()}>{t("detail.htc.description")}</p>

              <ul className={bulletList()}>
                {htcDirections.map((direction, index) => (
                  <li key={index} className={listItem()}>
                    {direction}
                  </li>
                ))}
              </ul>

              <p className={paragraph()}>{t("detail.htc.locationLabel")}</p>
              <p className={paragraph()}>
                <strong>{t("detail.htc.kutaisi")}</strong>
              </p>
              <p className={paragraph()}>
                {t("detail.htc.facilitiesDescription")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proton Therapy Clinic Section */}
      <section id="proton" className={section()}>
        <div className={sectionHeaderRow()}>
          <span className={sectionIndex()}>{CuriculumIcon}</span>
          <h2 className={sectionTitle()}>{t("detail.proton.title")}</h2>
        </div>

        <div className={sectionContent()}>
          {protonParagraphs.map((text, index) => (
            <p key={index} className={paragraph()}>
              {text}
            </p>
          ))}
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className={section()}>
        <div className={sectionHeaderRow()}>
          <span className={sectionIndex()}>{ArchieveIcon}</span>
          <h2 className={sectionTitle()}>{t("detail.publications.title")}</h2>
        </div>

        <div className={sectionContent()}>
          <p className={paragraph()}>{t("detail.publications.description")}</p>

          {conferenceYears.map((year, index) => (
            <div key={index} className={yearWrapper()}>
              <p className={yearTitle()}>{year.title}</p>
              {year.sections.map((conferenceSectionItem, sIdx) => (
                <p key={sIdx} className={conferenceSection()}>
                  {conferenceSectionItem.label} –{" "}
                  <a href={conferenceSectionItem.link} className={link()}>
                    {conferenceSectionItem.linkText}
                  </a>
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResearchDetail;
