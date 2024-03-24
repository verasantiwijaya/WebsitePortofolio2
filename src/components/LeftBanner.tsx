import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaWhatsapp, FaGithub, FaInstagram  } from "react-icons/fa";
import { FadeIn } from "./FadeIn";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Student.", "Designer.", "Developer."],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 100,
    delaySpeed: 3000,
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">Vera Wijaya</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">{text}</span>
          <Cursor cursorStyle="|" cursorColor="#0ccfb1" />
        </h1>
        <p className="text-base font-bodyFont leading-7 tracking-wider">
        Seorang mahasiswa Sistem Informasi semester 4, bersemangat dan berdedikasi tinggi 
        dalam dunia teknologi, memiliki pengalaman di bidang analisis sistem, pemrograman, 
        dan manajemen proyek. Memiliki jiwa ingin tahu yang tinggi dan selalu ingin belajar. 
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <div className="flex gap-4">
            <a href="https://github.com/verasantiwijaya" target="_blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a
              href="https://www.instagram.com/wijayaveraa/" target="_blank">
              <span className="bannerIcon">
                <FaInstagram />
              </span>
            </a>
            <a href="https://api.whatsapp.com/send?phone=62895604385070" target="_blank">
              <span className="bannerIcon">
                <FaWhatsapp />
              </span>
            </a>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default LeftBanner;
