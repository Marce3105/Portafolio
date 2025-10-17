import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Habilidades", href: "#habilidades" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <>
      {/* Barra de navegación */}
      <header className="fixed top-0 left-0 w-full bg-[#0f0f1d]/80 backdrop-blur-md border-b border-sky-500/10 shadow-md z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

          {/* Logo + Nombre */}
          <div className="flex items-center space-x-3">
            <img
              src="/Logom.png"
              alt="Logo Marcela"
              className="w-12 h-auto object-contain"
            />
            <span className="text-2xl font-extrabold text-sky-300 tracking-wide">
              Marcela
            </span>
          </div>

          {/* Menú PC */}
          <nav className="hidden md:flex space-x-10 text-lg font-semibold">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-200 hover:text-sky-400 transition"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Botón móvil */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-gray-100 focus:outline-none"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Menú desplegable móvil - FUERA del header */}
      {menuOpen && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black/70 backdrop-blur-xl transition-all duration-300">

          {/* Botón cerrar */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-sky-400 transition"
          >
            <X size={32} />
          </button>

          {/* Logo y nombre arriba */}
          <div className="absolute top-6 left-6 flex items-center space-x-2">
            <img src="/Logom.png" alt="Logo" className="w-8 h-auto" />
            <span className="text-xl font-bold text-sky-300">Marcela</span>
          </div>

          {/* Enlaces centrados */}
          <nav className="flex flex-col items-center space-y-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-semibold text-white hover:text-sky-400 transition"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
