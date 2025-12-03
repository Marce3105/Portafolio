import {
  RiHtml5Fill,
  RiCss3Fill,
  RiJavascriptFill,
  RiReactjsFill,
  RiTailwindCssFill,
  RiGithubFill,
} from "react-icons/ri";
import {
  SiFigma,
  SiTypescript,
  SiGit,
  SiNpm,
  SiMysql,
  SiPostgresql,
  SiDjango,
} from "react-icons/si";
import { FaTerminal } from "react-icons/fa";

export default function Skills() {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: <RiHtml5Fill className="w-14 h-14 text-orange-500" /> },
        { name: "CSS3", icon: <RiCss3Fill className="w-14 h-14 text-blue-500" /> },
        { name: "JavaScript", icon: <RiJavascriptFill className="w-14 h-14 text-yellow-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-14 h-14 text-blue-400" /> },
        { name: "React", icon: <RiReactjsFill className="w-14 h-14 text-sky-400" /> },
        { name: "TailwindCSS", icon: <RiTailwindCssFill className="w-14 h-14 text-cyan-400" /> },
        { name: "Figma", icon: <SiFigma className="w-14 h-14 text-pink-500" /> },
      ],
    },

    {
      title: "Backend",
      skills: [
        { name: "Django", icon: <SiDjango className="w-14 h-14 text-green-500" /> },
        { name: "REST APIs", icon: <FaTerminal className="w-14 h-14 text-yellow-300" /> },
        { name: "Autenticación JWT", icon: <FaTerminal className="w-14 h-14 text-purple-300" /> },
        { name: "Manejo de peticiones HTTP", icon: <FaTerminal className="w-14 h-14 text-blue-300" /> },
        { name: "MySQL", icon: <SiMysql className="w-14 h-14 text-blue-400" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-14 h-14 text-sky-300" /> },
      ],
    },

    {
      title: "Herramientas",
      skills: [
        { name: "Git", icon: <SiGit className="w-14 h-14 text-orange-500" /> },
        { name: "GitHub", icon: <RiGithubFill className="w-14 h-14 text-gray-300" /> },
        { name: "Terminal", icon: <FaTerminal className="w-14 h-14 text-green-400" /> },
        { name: "VSCode", icon: <img src="/code-stable.png" alt="VSCode" className="w-14 h-14" /> },
        { name: "npm", icon: <SiNpm className="w-14 h-14 text-red-500" /> },
      ],
    },
  ];

  return (
    <section
      id="habilidades"
      className="relative z-10 min-h-screen px-6 py-8 scroll-mt-28 mt-20"
    >
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-3xl font-extrabold text-sky-300 drop-shadow-lg">
          Mis Habilidades
        </h2>
        <p className="text-gray-100 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed">
          Estas son las tecnologías y herramientas que utilizo para dar vida a proyectos modernos,
          escalables y visualmente atractivos.
          Siempre busco aprender nuevas formas de crear experiencias digitales que marquen la diferencia.
        </p>

        {/* Grupos */}
        <div className="flex flex-wrap justify-center gap-10">
          {categories.map((category, i) => (
            <div
              key={i}
              className="bg-white/5 rounded-2xl p-6 shadow-md border border-white/10 w-full max-w-lg"
            >
              <h3 className="text-2xl font-bold text-sky-300 mb-6">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-6 justify-items-center">
                {category.skills.map((skill, j) => (
                  <div key={j} className="flex flex-col items-center space-y-2">
                    {skill.icon}
                    <span className="text-base font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
