import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      name: "Software Gestión Agrícola",
      desc: "Aplicación web diseñada para optimizar la gestión integral de fincas agrícolas. Permite llevar un control eficiente de labores, personal, maquinaria, bodega, producción y variables climáticas en tiempo real.",
      img: "/ProyectoGestiAgro.png",
      code: "https://github.com/Marce3105/GestiAgro",
      tech: ["React", "TypeScript", "TailwindCSS", "JavaScript", "Python"],
    },
    {
      name: "Calculadora",
      desc: "Aplicación de escritorio desarrollada en Python con Tkinter, que permite realizar operaciones matemáticas básicas con una interfaz gráfica moderna.",
      img: "/calculadora.jpg",
      code: "https://github.com/Marce3105/Calculadora",
      tech: ["Python", "Tkinter"],
    },
    {
      name: "CRUD",
      desc: "Aplicación web desarrollada en Django para gestionar empleados, con operaciones de Crear, Leer, Actualizar y Eliminar (CRUD) conectada a base de datos MySQL.",
      img: "/CRUD.PNG",
      code: "https://github.com/Marce3105/CRUD",
      tech: ["Python", "Django", "MySQL"],
    },
  ];

  const colors: Record<string, string> = {
    React: "bg-sky-500/20 text-sky-300",
    TypeScript: "bg-blue-500/20 text-blue-300",
    JavaScript: "bg-yellow-500/20 text-yellow-200",
    CSS3: "bg-blue-400/20 text-blue-200",
    TailwindCSS: "bg-cyan-400/20 text-cyan-300",
    "Chart.js": "bg-pink-400/20 text-pink-300",
    Python: "bg-green-500/20 text-green-300",
    Tkinter: "bg-blue-500/20 text-blue-200",
    Django: "bg-emerald-500/20 text-emerald-300",
    MySQL: "bg-orange-500/20 text-orange-300",
  };

  return (
    <section
      id="proyectos"
      className="relative z-10 min-h-screen px-6 py-8 scroll-mt-28 mt-15"
    >
      <div className="max-w-7xl mx-auto text-center space-y-12">
        <h2 className="text-3xl font-extrabold text-sky-300 drop-shadow">
          Mis Proyectos
        </h2>
        <p className="text-gray-100 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
          Algunos proyectos que reflejan mi experiencia en el desarrollo de
          interfaces modernas, optimizadas y centradas en la experiencia del usuario.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden 
                         bg-white/10 backdrop-blur-md 
                         transition duration-500 ease-out 
                         hover:scale-105 hover:rotate-1 
                         shadow-[0_0_20px_rgba(0,150,255,0.15)] 
                         flex flex-col"
            >
              {/* Imagen */}
              <div className="relative h-60 w-full overflow-hidden">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-full object-cover rounded-t-2xl group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
              </div>

              {/* Info */}
              <div className="flex-1 p-6 flex flex-col space-y-4">
                <h3 className="text-xl font-bold text-sky-200 group-hover:text-sky-400 transition">
                  {project.name}
                </h3>
                <p className="text-gray-300 text-base flex-1">{project.desc}</p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-sm rounded-full font-medium ${
                        colors[t] || "bg-white/10 text-gray-200"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Botón GitHub */}
                <div className="mt-4">
                  <a
                    href={project.code}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-lg 
                               bg-sky-600 hover:bg-sky-500 
                               transition text-white font-medium shadow-md"
                  >
                    <FaGithub /> Ver Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


