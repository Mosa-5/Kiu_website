import { bechalor, masters, doctoral, singleCycle } from "@/assets";

const ProgramHome = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-[1680px] w-full relative">
        <div className="w-full mb-10">
          <h2 className="text-[40px] text-main font-semibold w-fit rounded-xl py-1 px-5">
            Programs
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-6 *:rounded-[8px] *:hover:cursor-pointer *:hover:-translate-y-1 transition-all *:duration-200">
          <img src={bechalor} alt="bechalor" />
          <img src={masters} alt="master's" />
          <img src={singleCycle} alt="single-cycle" />
          <img src={doctoral} alt="doctoral" />
        </div>
      </div>
    </div>
  );
};

export default ProgramHome;
