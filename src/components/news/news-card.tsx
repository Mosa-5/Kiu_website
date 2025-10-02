import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface NewsCardProps {
  id:number;
  date: string;
  title: string;
  description: string;
  imageUrl: string;
}

const NewsCard = ({ id, date, title, description, imageUrl }: NewsCardProps) => {
  return (
    <Link to={`/news/${id}`}>
       <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer max-w-[544px] max-h-[726px]">
          <div className="relative aspect-[544/425] overflow-hidden">
            <img 
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <CardContent className="p-6 bg-white h-[300px]">
            <p className="text-base font-medium text-black mb-3">{date}</p>
            <h3 className="text-2xl font-medium mb-4 text-[#1b3d6e]">{title}</h3>
            <div className="w-[94px] h-[2px] bg-[#3C70AF] mb-4"></div>
            <p className="text-base text-gray-700 leading-relaxed">{description}</p>
          </CardContent>
          <svg width="12" height="21" viewBox="0 0 16 16" className="ml-auto mr-3 mb-2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2412 15.8573L0.458809 15.8573L0.458809 12.4123L12.5187 12.4123L12.5187 0.352378H15.9637L15.9637 14.1348C15.9636 14.5916 15.7821 15.0297 15.4591 15.3527C15.1361 15.6757 14.698 15.8572 14.2412 15.8573Z" fill="#3C70AF"/>
            </svg>
        </Card>
    </Link>
  );
};

export default NewsCard;