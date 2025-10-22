import { useTranslation } from "react-i18next";
import { newsItemsEn, newsItemsKa } from "@/data/newsItems";

interface NewsItem {
  id: string;
  date: string;
  title: string;
  description: string;
  category?: string;
  image?: string;
}

export const useNewsItems = (): NewsItem[] => {
  const { i18n } = useTranslation();

  return i18n.language === "ka" ? newsItemsKa : newsItemsEn;
};
