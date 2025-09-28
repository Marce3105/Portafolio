import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f1d] text-gray-300 py-8 border-t border-sky-500/20">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6">
        {/* Línea decorativa */}
        <div className="w-20 h-1 bg-sky-400 rounded-full"></div>

        {/* Iconos sociales */}
        <div className="flex space-x-8 text-2xl">
          <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BCnrpJmlSTCGH1fo0fiPVhA%3D%3D" target="_blank"
            className="hover:text-sky-400 hover:scale-125 transition transform">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Marce3105" target="_blank"
            className="hover:text-sky-400 hover:scale-125 transition transform">
            <FaGithub />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=marcelahidalgoospina8@gmail.com"
            className="hover:text-sky-400 hover:scale-125 transition transform">
            <FaEnvelope />
          </a>
        </div>

        {/* Texto */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} <span className="text-sky-300 font-semibold">Marcela Hidalgo</span> · Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
