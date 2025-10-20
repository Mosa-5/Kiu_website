export const RenderParagraphs = ({
  paragraphs,
}: {
  paragraphs: Array<{
    parts: Array<{ text: string; type: string; url?: string }>;
  }>;
}) => (
  <>
    {paragraphs.map((paragraph, i) => (
      <p key={i} className="mb-6 text-sm sm:text-lg">
        {paragraph.parts.map((part, j) =>
          part.type === "link" ? (
            <a
              key={j}
              href={part.url}
              className="text-link underline underline-offset-2 hover:text-linkDark font-medium"
            >
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
    <div className="mb-8">
      {title && (
        <p className="mb-4 max-sm:text-center text-lg font-medium">{title}</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {programs.map((program, i) => (
          <div
            key={i}
            className="px-4 py-3 bg-main rounded-md text-center font-medium text-white shadow-md min-h-[60px] flex items-center justify-center"
          >
            {program}
          </div>
        ))}
      </div>
    </div>
  );
};
