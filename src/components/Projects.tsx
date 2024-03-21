import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne, projectThree, projectTwo } from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title=""
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="Portofolio Website"
            des=" Website portofolio ini menampilkan karya terbaik saya dalam
             JavaScript, HTML, dan CSS. Jelajahi proyek-proyek menarik!"
            src={projectOne}
          />
          <ProjectsCard
            title="E-Bookstore Website"
            des=" Website E-bookstore dinamis dengan PHP, MySQL, JavaScript, HTML, 
            dan CSS. Berbelanja buku dengan mudah dan nyaman."
            src={projectTwo}
          />
          <ProjectsCard
            title="Management Employees App"
            des=" Platform pengelolaan karyawan canggih, didukung oleh aplikasi 
            Java yang inovatif dan andal dan sistem database mysql yang baik!"
            src={projectThree}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
