import newsHeroImage from "@/assets/image.png";
import newsItems from "@/data/newsItems";
import { Link, useParams } from "react-router-dom";
import { Button } from "../ui/button";


const NewsDetailsHero = () => {
  const { id } = useParams<{ id: string }>();
  const item = newsItems[Number(id)];

  if (!item) {
    return <p className="text-center text-xl mt-10">News not found</p>;
  }

  return (
    <div className="relative w-full h-[907px] overflow-hidden flex flex-col items-center">
        <img 
        src={newsHeroImage}
        alt="News Hero"
        className="w-full h-full object-cover mb-[200px]"
        />
        <div className="absolute bg-white top-[635px] w-[1680px] border-3 border-[#3C70AF] rounded-2xl flex justify-center">
            <div className="w-[1527px] py-5.5 flex flex-col justify-between">
                <h1 className="text-4xl font-semibold text-[#3C70AF]">{item.title}</h1>
                <p className="text-[#3C70AF] font-medium text-xl">{item.date}</p>
            </div>
        </div>
        <Link to="/news">
            <Button 
            className="absolute bg-transparent bottom-6 left-[120px] text-[#3C70AF] hover:bg-transparent text-2xl font-medium"
            > 
                <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.125 23.4584L9.66667 15L18.125 6.54169" stroke="#3C70AF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                News
            </Button>
        </Link>
    </div>
  );
};

export default NewsDetailsHero;