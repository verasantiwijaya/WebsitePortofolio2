import { FaWhatsapp, FaGithub, FaInstagram } from "react-icons/fa";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#0B1120] to-[#0B1120] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <div className="flex flex-col gap-4 items-center">
        <h3 className="text-2xl font-bold text-white">Vera Wijaya.</h3>
        <p className="text-base text-gray-400 tracking-wide">
        Seorang mahasiswa Sistem Informasi semester 4, bersemangat dan berdedikasi tinggi dalam dunia 
        teknologi, memiliki pengalaman di bidang analisis sistem, pemrograman, dan manajemen proyek. 
        Memiliki jiwa ingin tahu yang tinggi dan selalu ingin belajar. Memiliki kemampuan problem solving
         yang baik dan mampu bekerja baik secara mandiri maupun dalam tim. 
        </p><br></br>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
  );
};

export default ContactLeft;
