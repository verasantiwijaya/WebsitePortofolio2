import { sertif1, sertif2, sertif3 } from "../assets";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Feature = () => {
  return (
    <section
      id="certificate"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
      <div className="flex justify-center items-center text-center">
          <Title
            title=""
            des="Certificates"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-10">
          <Card
            title=""
            des="Sertifikat Sekretaris Departemen"
            src={sertif1}
          />
          <Card
            title=""
            des="Sertifikat Sekretaris Panitia"
            src={sertif2}
          />
          <Card
            title=""
            des="Sertifikat Menulis Puisi"
            src={sertif3}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
