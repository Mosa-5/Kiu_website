import About from "@/components/home/about/About";
import Campus from "@/components/home/campus/Campus";
import CarouselHero from "@/components/home/hero/CarouselHero";
import Gallery from "@/components/home/gallery/Gallery";
import CarouselNews from "@/components/home/news/News";
import ProgramHome from "@/components/home/program-home/ProgramHome";

const Home = () => {
  return (
    <>
      <div className="page-content-hero">
        <CarouselHero />
      </div>
      <div className="*:px-4 space-y-20 sm:space-y-[120px]">
        <div className="page-content-main">
          <About />
        </div>
        <div className="w-full py-2.5 sm:py-[40px] bg-[#D9D9D940]">
          <CarouselNews />
        </div>
        <ProgramHome />
        <Gallery />
        <Campus />
      </div>
    </>
  );
};

export default Home;
