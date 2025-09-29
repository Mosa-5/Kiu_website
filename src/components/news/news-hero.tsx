import { Button } from "@/components/ui/button";
import newsHeroImage from "@/assets/image.png";

const NewsHero = () => {
  return (
    <div className="relative w-full h-[707px] overflow-hidden">
      <img 
        src={newsHeroImage}
        alt="News Hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-8 left-[120px] w-[132px] text-white">
        <h1 className="text-4xl font-semibold pl-2.5">News</h1>
        <Button 
          className="bg-transparent text-white hover:bg-transparent hover:text-neutral-200 text-[18px] font-semibold"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 5L9 12L16 19" stroke="#E7E7E6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Home Page
        </Button>
      </div>
    </div>
  );
};

export default NewsHero;