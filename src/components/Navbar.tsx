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

      {/* Fondo oscuro al abrir el menú */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        ></div>
      )}

      {/* Barra lateral (sidebar) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#141427] shadow-xl border-l border-sky-500/10 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 flex flex-col`}
      >
        <div className="flex justify-between items-center p-4 border-b border-sky-500/10">
          <span className="text-xl font-bold text-sky-300">Menú</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gray-200 hover:text-sky-400"
          >
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col mt-6 space-y-4 px-6">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-200 text-lg font-medium hover:text-sky-400 transition"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

