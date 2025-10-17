export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-10 py-5 fixed w-full top-0 z-50 
                   bg-[#0f0f1d]/80 backdrop-blur-md shadow-md border-b border-sky-500/5">
      {/* Logo + Nombre */}
      <div className="flex items-center space-x-3">
        <img src="/Logom.png" alt="Logo Marcela" className="w-12 h-auto object-contain" />
        <span className="text-2xl font-extrabold text-sky-300 tracking-wide">Marcela</span>
      </div>

      {/* Menú */}
      <nav className="flex flex-wrap space-x-5 text-base font-bold tracking-wide">
        {["Inicio", "Habilidades", "Proyectos", "Contacto"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative group text-gray-100"
          >
            <span className="transition group-hover:text-sky-400">{item}</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-sky-400 transition-all 
                            duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </nav>
    </header>
  );
}
