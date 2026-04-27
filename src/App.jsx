import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  ExternalLink,
  Newspaper,
  GraduationCap,
  Send,
  Facebook,
  Instagram,
  Music2,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

const logoUrl = "/escudo.png";

const socialLinks = [
  { name: "TikTok", href: "https://www.tiktok.com/", icon: Music2 },
  { name: "Instagram", href: "https://www.instagram.com/", icon: Instagram },
  { name: "Facebook", href: "https://www.facebook.com/", icon: Facebook },
  { name: "Telegram", href: "https://t.me/", icon: Send },
];

const news = [
  {
    title: "Inscripciones abiertas",
    text: "Conoce los requisitos, fechas y pasos para hacer parte de nuestra comunidad educativa.",
  },
  {
    title: "Celebramos 50 años de historia",
    text: "Gimnasio de Quibdó sigue formando generaciones con ciencia, disciplina y valores.",
  },
  {
    title: "Actividades académicas y culturales",
    text: "Consulta aquí comunicados, eventos institucionales y novedades importantes para estudiantes y familias.",
  },
];

export default function App() {
  return (
    <div>
      <header className="header">
        <nav className="nav">
          <div className="brand">
            <img src={logoUrl} alt="Escudo IE Gimnasio de Quibdó" />
            <div>
              <small>Institución Educativa</small>
              <h1>IE Gimnasio de Quibdó</h1>
            </div>
          </div>

          <a className="btn btn-green" href="https://si3.com.co" target="_blank" rel="noreferrer">
            Página institucional
          </a>
        </nav>

        <section className="hero">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="badge">Ciencia y Disciplina</span>
            <h2>Educación con identidad, futuro y excelencia.</h2>
            <p>
              Bienvenidos al portal educativo de la Institución Educativa Gimnasio de Quibdó.
              Aquí encontrarás noticias, servicios estudiantiles, redes sociales y acceso directo
              a la plataforma institucional.
            </p>
            <div className="buttons">
              <a href="#certificado" className="btn btn-yellow">
                <Download size={20} /> Descargar certificado
              </a>
              <a href="https://si3.com.co" target="_blank" rel="noreferrer" className="btn btn-outline">
                <ExternalLink size={20} /> Ir a SI3
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
            <div className="logo-card">
              <img src={logoUrl} alt="Logo IE Gimnasio de Quibdó" />
            </div>
          </motion.div>
        </section>
      </header>

      <main className="main">
        <section className="social-grid">
          {socialLinks.map(({ name, href, icon: Icon }) => (
            <a key={name} href={href} target="_blank" rel="noreferrer" className="social-card">
              <div className="icon-box">
                <Icon size={29} />
              </div>
              <h3>{name}</h3>
              <p>Síguenos y mantente informado.</p>
            </a>
          ))}
        </section>

        <section className="content-grid">
          <div id="certificado" className="card certificate">
            <GraduationCap size={50} color="#facc15" />
            <h2>Certificado de estudio</h2>
            <p>
              Accede al sistema institucional para descargar o solicitar tu certificado de estudio
              de manera rápida y segura.
            </p>
            <a href="https://si3.com.co" target="_blank" rel="noreferrer" className="btn btn-yellow">
              <Download size={20} /> Entrar para descargar
            </a>
          </div>

          <div className="card">
            <div className="section-title">
              <Newspaper color="#15803d" size={34} />
              <h2>Noticias importantes</h2>
            </div>
            <div className="news-list">
              {news.map((item) => (
                <article key={item.title} className="news-item">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="card contact">
          <h2>Contacto institucional</h2>
          <div className="contact-grid">
            <div className="contact-item"><MapPin color="#15803d" /> Quibdó, Chocó</div>
            <div className="contact-item"><Mail color="#15803d" /> contacto@iegimnasioquibdo.edu.co</div>
            <div className="contact-item"><Phone color="#15803d" /> Línea institucional</div>
          </div>
        </section>
      </main>

      <footer className="footer">
        © 2024 IE Gimnasio de Quibdó · Ciencia y Disciplina
      </footer>
    </div>
  );
}