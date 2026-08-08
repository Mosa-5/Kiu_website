import {
  paragraph,
  richTextLink,
  programGroup,
  programGroupTitle,
  programGroupList,
  programGroupItem,
} from "../AdmissionDetail.styles";

export const RenderParagraphs = ({
  paragraphs,
}: {
  paragraphs: Array<{
    parts: Array<{ text: string; type: string; url?: string }>;
  }>;
}) => (
  <>
    {paragraphs.map((para, i) => (
      <p key={i} className={paragraph()}>
        {para.parts.map((part, j) =>
          part.type === "link" ? (
            <a key={j} href={part.url} className={richTextLink()}>
              {part.text}
            </a>
          ) : (
            <span key={j}>{part.text}</span>
          )
        )}
      </p>
    ))}
  </>
);

export const ProgramGrid = ({
  programs,
  title,
}: {
  programs: string[];
  title?: string;
}) => {
  if (!programs || programs.length === 0) return null;

  return (
    <div className={programGroup()}>
      {title && <p className={programGroupTitle()}>{title}</p>}
      <ul className={programGroupList()}>
        {programs.map((program, i) => (
          <li key={i} className={programGroupItem()}>
            {program}
          </li>
        ))}
      </ul>
    </div>
  );
};
