import { bannerright } from "../assets";
import { FadeIn } from "./FadeIn";

const RightBanner = () => {
  return (
    <FadeIn className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[220px] h-[220px] lgl:w-[370px] lgl:h-[370px] z-10 rounded-full"
        src={bannerright}
        alt="bannerright"
      />
    </FadeIn>
  );
};

export default RightBanner;
