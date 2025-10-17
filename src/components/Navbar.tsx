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

        {/* Menú principal (solo PC) */}
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

        {/* Botón menú móvil */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-gray-100 focus:outline-none"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Fondo transparente y difuminado al abrir el menú */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-[#0f0f1d]/70 backdrop-blur-md z-40 flex flex-col justify-center items-center space-y-8 transition-opacity duration-300"
        >
          {/* Botón cerrar */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-gray-200 hover:text-sky-400"
          >
            <X size={32} />
          </button>

          {/* Enlaces del menú */}
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-bold text-gray-100 hover:text-sky-400 transition-all"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
