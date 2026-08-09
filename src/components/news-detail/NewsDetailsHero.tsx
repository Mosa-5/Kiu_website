import { useEffect, useRef, useState } from "react";
import newsHeroImage from "@/assets/image.webp";
import newsHeroImageSm from "@/assets/image_sm.webp";
import { getNewsItems } from "@/data/newsItems";
import { useParams } from "react-router-dom";
import {
  container,
  heroImage,
  contentBox,
  contentInner,
  title,
  date,
  notFound,
} from "./NewsDetailsHero.styles";

const NewsDetailsHero = () => {
  const { id, lang } = useParams<{ id: string; lang: string }>();
  const currentLang = lang || "en";

  const newsItems = getNewsItems(currentLang);
  const item = newsItems.find((news) => news.id === id);

  // See HeroSection's identical guard: don't let the fade-in animation fire
  // before the image has actually loaded, or it finishes against an empty
  // slot and the image pops in late on a fresh client-side navigation.
  const imgRef = useRef<HTMLImageElement>(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    // The hero image is static across all news items, so this only needs
    // to check once on mount (covers the already-cached case; the load
    // event below covers a cold fetch).
    if (imgRef.current?.complete) setImgLoaded(true);
  }, []);

  if (!item) {
    return <p className={notFound()}>News not found</p>;
  }

  return (
    <div className={container()}>
      <picture>
        <source media="(max-width: 639px)" srcSet={newsHeroImageSm} />
        <img
          ref={imgRef}
          src={newsHeroImage}
          alt="News Hero"
          className={`${heroImage()} ${imgLoaded ? "hero-image-animate" : "opacity-0"}`}
          onLoad={() => setImgLoaded(true)}
        />
      </picture>
      <div className={`${contentBox()} hero-content-animate`}>
        <div className={contentInner()}>
          <h1 className={title()}>{item.title}</h1>
          <p className={date()}>{item.date}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsHero;
