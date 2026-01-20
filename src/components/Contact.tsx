import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative z-10 min-h-screen px-6 py-16 scroll-mt-28 mt-20"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Formulario */}
        <div className="bg-white/5 backdrop-blur-md p-10 rounded-2xl shadow-md border border-white/10">
          <h2 className="text-3xl font-extrabold text-sky-300 drop-shadow mb-4">
            ¡Contáctame!
          </h2>
          <p className="text-gray-100 text-base md:text-lg leading-relaxed mb-8">
            Construyamos más que un diseño: una experiencia.  
            Déjame tu mensaje y trabajemos juntos para crear interfaces modernas,
            funcionales y llenas de personalidad.
          </p>

          <form
            action="https://formspree.io/f/xwprpyvl"
            method="POST"
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                required
                className="w-full p-3 rounded-lg bg-white/10 text-white 
                          placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <input
                type="text"
                name="apellidos"
                placeholder="Apellidos"
                required
                className="w-full p-3 rounded-lg bg-white/10 text-white 
                          placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                required
                className="w-full p-3 rounded-lg bg-white/10 text-white 
                          placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <input
                type="tel"
                name="telefono"
                placeholder="Número de teléfono"
                className="w-full p-3 rounded-lg bg-white/10 text-white 
                          placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <textarea
              name="mensaje"
              rows={4}
              placeholder="Mensaje"
              required
              className="w-full p-3 rounded-lg bg-white/10 text-white 
                        placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
            ></textarea>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-sky-600 hover:bg-sky-500 
                          transition shadow-md text-white font-semibold"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>

        {/* Información de contacto */}
        <div className="flex flex-col space-y-8">
          <div className="flex items-center gap-4">
            <span className="p-4 bg-sky-600 rounded-full text-white text-xl">
              <FaPhoneAlt />
            </span>
            <div>
              <p className="text-gray-400">Teléfono</p>
              <p className="text-lg font-semibold text-white">
                +57 314 605 6392
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="p-4 bg-sky-600 rounded-full text-white text-xl">
              <FaEnvelope />
            </span>
            <div>
              <p className="text-gray-400">Correo</p>
              <p className="text-lg font-semibold text-white">
                marcelahidalgoospina8@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="p-4 bg-sky-600 rounded-full text-white text-xl">
              <FaMapMarkerAlt />
            </span>
            <div>
              <p className="text-gray-400">Dirección</p>
              <p className="text-lg font-semibold text-white">
                Colombia, Tuluá Valle
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
