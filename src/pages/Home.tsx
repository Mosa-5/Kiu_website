import About from "@/components/home/about/About";
import Campus from "@/components/home/campus/Campus";
import CarouselHero from "@/components/home/carousel/CarouselHero";
import ExperinemtalGallery from "@/components/home/gallery/Gallery";
import CarouselNews from "@/components/home/news/News";
import ProgramHome from "@/components/home/program-home/ProgramHome";

const Home = () => {
  return (
    <div className="space-y-[120px]">
      <CarouselHero />
      <About />
      <div className="flex flex-col gap-20 my-20">
        <CarouselNews />
        {/* <Experimental /> */}
      </div>
      <ProgramHome />
      <ExperinemtalGallery />
      <Campus />
    </div>
  );
};

export default Home;
