import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface NewsCardProps {
  id: string;
  date: string;
  title: string;
  description: string;
  imageUrl: string;
}

const NewsCardMobile = ({ id, date, title, imageUrl }: NewsCardProps) => {
  return (
    <Link to={`/news/${id}`}>
      <Card
        className="overflow-hidden relative group 
  gap-0 hover:shadow-lg transition-all cursor-pointer 
  w-full h-30 shadow-none border-x-0 rounded-none border-t-0 hover:bg-mainLight duration-200 flex flex-row py-4 border-b border-b-[#D6D6D6]"
      >
        <div className="" />

        <img
          src={imageUrl}
          alt={title}
          className="w-40 h-full object-cover rounded-md"
        />

        <CardContent className="flex flex-col justify-center w-full">
          <p className="text-xs">{date}</p>
          <h3 className="text-sm font-medium line-clamp-3">{title}</h3>
          <div className="" />
        </CardContent>
      </Card>
    </Link>
  );
};

export default NewsCardMobile;
