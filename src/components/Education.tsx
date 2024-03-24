import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Educational Level</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[800px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Kampus"
            subTitle="Universitas Mulawarman (2022 - 2024)"
            result="4/8"
            des="Mahasiswa Sistem Informasi mempelajari konsep dan teknik dalam mengembangkan perangkat lunak ."
          />
          <ResumeCard
            title="SMA"
            subTitle="SMAIT Nurul Ilmi (2019 - 2022)"
            result="6/6"
            des="Menempuh lembaga pendidikan yang menawarkan kurikulum yang terintegrasi antara pendidikan umum dan pendidikan agama Islam."
          />
          <ResumeCard
            title="SMP"
            subTitle="Mts Al-Mujahidin 2 (2015 - 2018)"
            result="6/6"
            des="Mulai terjun mempelajari ilmu Islam dengan kombinasi ilmu agama dan ilmu umum secara bersamaan"
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Organization</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[800px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sektetaris Panitia"
            subTitle="Inforsa Event - (2023)"
            result="berakhir"
            des="Menjadi sekretaris kepanitian, membuat saya belajar banyak tentang koordinasi, manajemen waktu, dan komunikasi "
          />
          <ResumeCard
            title="Sekretaris Departemen"
            subTitle="INFORSA dept. Personalia- (2022 - 2023)"
            result="berakhir"
            des="Berpengalaman dalam mengelola berbagai aspek administratif dan mengkoordinasikan pertemuan."
          />
          <ResumeCard
            title="Praktisi Mata Kuliah ASD"
            subTitle="Lab Arsitek - (2024)"
            result="berlanjut"
            des="Berpengalaman mengaplikasikan teori ke dalam praktik secara langsung, serta memfasilitasi pemahaman mendalam siswa terhadap materi."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
