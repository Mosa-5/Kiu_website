interface PageContentProps {
  hero?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const PageWrapper = ({ hero, children, className = "" }: PageContentProps) => {
  return (
    <div className={`min-h-screen ${className}`}>
      {hero && (
        <div className="page-content-hero" style={{ backgroundColor: "#000" }}>
          {hero}
        </div>
      )}
      <div className="page-content-main">{children}</div>
    </div>
  );
};

export default PageWrapper;
