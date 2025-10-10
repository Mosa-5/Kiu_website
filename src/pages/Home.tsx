import About from "@/components/home/about/About";
import CarouselHero from "@/components/home/carousel/CarouselHero";
import Programs from "@/components/home/programs/ProgramsTabs";

const Home = () => {
  return (
    <>
      <CarouselHero />
      <About />
      <Programs />
    </>
  );
};

export default Home;
