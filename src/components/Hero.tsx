import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaLaptopCode } from "react-icons/fa";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Animación de nodos
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const nodes = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
    }));

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle = "rgba(100, 180, 255, 0.2)";
            ctx.lineWidth = 1;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      for (let node of nodes) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(100, 200, 255, 0.7)";
        ctx.fill();

        node.x += node.dx;
        node.y += node.dy;
        if (node.x < 0 || node.x > canvas.width) node.dx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.dy *= -1;
      }

      requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animación 
  const [text, setText] = useState("");
  const fullText = "Software Developer";

  useEffect(() => {
    let index = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const type = () => {
      setText(fullText.slice(0, index));
      index++;

      if (index <= fullText.length) {
        // velocidad de escritura 
        timeout = setTimeout(type, 250);
      } else {
        // espera 2 segundos y reinicia
        setTimeout(() => {
          index = 0;
          type();
        }, 2000);
      }
    };

    type();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="inicio"
      className="relative flex flex-col md:flex-row items-center justify-start min-h-screen px-4 pt-24 md:pt-0 gap-12"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      {/* Foto */}
      <div className="flex-1 flex justify-end pr-6 relative z-10">
        <img
          src="/marcela.jpg"
          alt="Marcela"
          className="w-[300px] h-[300px] md:w-[340px] md:h-[340px] object-cover rounded-full shadow-2xl border-4 border-gray-500/30"
        />
      </div>

      {/* Texto */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6 pl-6 relative z-10">
        <motion.p
          className="text-2xl md:text-3xl font-semibold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Hola, soy{" "}
          <span className="font-bold text-sky-300">Marcela</span>
        </motion.p>

        {/* Animación typing */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight flex items-center gap-3"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.17, 0.89, 0.32, 1.27],
          }}
        >
          <span className="bg-gradient-to-r from-sky-300 via-blue-200 to-sky-300 text-transparent bg-clip-text">
            {text}
          </span>
          <FaLaptopCode className="text-sky-400 animate-pulse" />
        </motion.h1>

        <motion.p
          className="text-gray-200 text-lg max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Desarrolladora frontend enfocada en construir interfaces modernas,
          optimizadas y responsivas, utilizando tecnologías como React, TypeScript y
          TailwindCSS.
        </motion.p>

        <motion.p
          className="italic text-sky-200 md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          “Construyendo soluciones digitales con detalle y creatividad.”
        </motion.p>

        {/* Tecnologías */}
        <div className="flex gap-3 mt-4 flex-wrap justify-center md:justify-start">
          <span className="px-4 py-1 bg-sky-700/30 text-sky-200 rounded-full text-base font-medium">React</span>
          <span className="px-4 py-1 bg-blue-700/30 text-blue-200 rounded-full text-base font-medium">TypeScript</span>
          <span className="px-4 py-1 bg-yellow-300/20 text-yellow-200 rounded-full text-base font-medium">JavaScript</span>
          <span className="px-4 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-base font-medium">TailwindCSS</span>
        </div>

        {/* Botones */}
        <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-start items-center mt-6">
          <a
            href="/CV_Marcela_Hidalgo.pdf"
            download="CV_Marcela_Hidalgo.pdf"
            className="px-6 py-3 rounded-lg bg-sky-600 hover:bg-sky-500 transition shadow-md text-white font-medium"
          >
            Descargar CV
          </a>
          <div className="flex items-center gap-4 text-xl">
            <a
              href="www.linkedin.com/in/marcela-hidalgo-ospina-604795337"
              target="_blank"
              className="p-3 border border-gray-500 rounded-full hover:border-sky-400 hover:text-sky-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Marce3105"
              target="_blank"
              className="p-3 border border-gray-500 rounded-full hover:border-sky-400 hover:text-sky-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=marcelahidalgoospina8@gmail.com"
              className="p-3 border border-gray-500 rounded-full hover:border-sky-400 hover:text-sky-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
