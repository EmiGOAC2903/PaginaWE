import React, { useEffect, useState } from "react";
import "./we-endurance.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Coaches />
      <Partners />
      <Footer />
    </>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // para setear el estado al cargar
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? "navbar-scrolled" : "navbar-transparent"
      }`}
    >
      <div className="container">
        <a className="navbar-brand we-logo" href="#top">
          WE <span className="we-logo-accent">ENDURANCE</span>
        </a>

        {/* BOTÓN HAMBURGUESA (si no lo pones, en móvil se rompe) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <a className="nav-link" href="#about">Sobre nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#training">Entrenamientos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#coaches">Coaches</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#competitions">Competencias</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#gallery">Galería</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contacto</a>
            </li>
            <li className="nav-item ms-lg-2">
              <a className="btn btn-primary px-4 we-cta" href="#join">Únete</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header id="top" className="we-hero d-flex align-items-center">
      <div className="we-hero-overlay" />

      <div className="container position-relative text-center text-white py-5">
        <h1 className="display-2 we-hero-title">WE ENDURANCE</h1>
        <p className="we-hero-subtitle mt-3">Triatlón, comunidad y rendimiento</p>

        <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
          <a className="btn btn-primary btn-lg px-4" href="#about">
            Ver entrenos
          </a>
          <a className="btn btn-outline-light btn-lg px-4" href="#join">
            Únete al equipo
          </a>
        </div>
      </div>

      <div className="we-scroll-hint" aria-hidden="true">
        <span className="we-chevron" />
      </div>
    </header>
  );
}

function About() {
  return (
    <section id="about" className="py-5 we-section">
      <div className="container py-4">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <h2 className="fw-bold">Sobre nosotros</h2>
            <p className="text-muted mt-3">
              WE Endurance es una comunidad de atletas apasionados por el triatlón y
              los deportes de resistencia. Entrenamos con estructura, ciencia y un
              ambiente de equipo real.
            </p>
            <p className="text-muted">
              Acompañamos desde quien empieza hasta quien busca rendimiento competitivo.
              Aquí no solo entrenas para competir: entrenas para superarte.
            </p>

            <div className="row mt-4 g-3">
              <Feature title="Entrenamiento inteligente" desc="Planificación semanal + progresiones." />
              <Feature title="Comunidad" desc="Equipo que te impulsa (y te jala cuando falta motivación)." />
              <Feature title="Rendimiento" desc="Técnica, fuerza y estrategia de carrera." />
              <Feature title="Acompañamiento" desc="Coaching real y seguimiento." />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="we-card p-4 p-lg-5">
              <h5 className="fw-bold mb-3">Nuestra filosofía</h5>
              <ul className="mb-0 text-muted">
                <li>Consistencia &gt; motivación</li>
                <li>Progresión segura (sin burnout)</li>
                <li>Técnica primero, watts después</li>
                <li>Competir con cabeza y corazón</li>
              </ul>

              <div id="join" className="mt-4">
                <a className="btn btn-primary w-100 py-2" href="#partners">
                  Quiero unirme
                </a>
                <small className="d-block text-center text-muted mt-2">
                  Respuesta rápida · Cupos limitados por grupo
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="col-sm-6">
      <div className="p-3 border rounded-4 h-100">
        <div className="fw-semibold">{title}</div>
        <div className="text-muted small mt-1">{desc}</div>
      </div>
    </div>
  );
}

function Coaches() {
  const coaches = [
    {
      name: "Coach Alejandro García",
      role: "Triatlón · 70.3 · Running",
      bio: "Planificación, periodización y estrategia de carrera. Enfoque en progreso sostenible.",
    },
    {
      name: "Coach Mariana López",
      role: "Natación · Técnica",
      bio: "Corrección técnica, drills y eficiencia. Ideal si quieres bajar tiempo sin “morirte”.",
    },
    {
      name: "Coach Diego Hernández",
      role: "Ciclismo · Potencia",
      bio: "Estructura por zonas, mejoras de FTP y pacing para largas distancias.",
    },
  ];

  return (
    <section id="coaches" className="py-5 we-section-dark">
      <div className="container py-4">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3">
          <div>
            <h2 className="fw-bold text-white mb-2">Coaches</h2>
            <p className="text-white-50 mb-0">
              Entrenadores con enfoque técnico + acompañamiento real.
            </p>
          </div>
          <a className="btn btn-outline-light" href="#join">
            Únete al equipo
          </a>
        </div>

        <div className="row g-4 mt-3">
          {coaches.map((c) => (
            <div className="col-md-4" key={c.name}>
              <div className="card we-dark-card h-100">
                <div className="card-body">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="we-avatar" aria-hidden="true" />
                    <div>
                      <div className="fw-bold text-white">{c.name}</div>
                      <div className="small text-white-50">{c.role}</div>
                    </div>
                  </div>
                  <p className="text-white-50 mb-0">{c.bio}</p>
                </div>
                <div className="card-footer bg-transparent border-0 pt-0">
                  <a className="btn btn-sm btn-primary w-100" href="#join">
                    Pedir info
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="we-divider my-5" />

        <div className="row g-4">
          <div className="col-lg-7">
            <h5 className="text-white fw-bold mb-2">¿Cómo trabajamos?</h5>
            <p className="text-white-50 mb-0">
              Plan semanal + objetivos claros, ajustes según tu vida real y métricas
              simples (RPE, zonas, y si usas Garmin/TP mejor). Lo importante: consistencia.
            </p>
          </div>
          <div className="col-lg-5">
            <div className="we-mini p-4 rounded-4">
              <div className="text-white fw-semibold">Incluye</div>
              <ul className="text-white-50 mt-2 mb-0">
                <li>Plan de entreno</li>
                <li>Seguimiento</li>
                <li>Feedback técnico</li>
                <li>Comunidad y sesiones</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Partners() {
  const partners = [
    "Fisio & Recovery",
    "Tienda de ciclismo",
    "Nutrición deportiva",
    "Laboratorio / métricas",
    "Gimnasio aliado",
    "Marca deportiva",
  ];

  return (
    <section id="partners" className="py-5 we-section">
      <div className="container py-4">
        <div className="row align-items-end g-3">
          <div className="col-lg-8">
            <h2 className="fw-bold mb-2">Convenios</h2>
            <p className="text-muted mb-0">
              Beneficios exclusivos con aliados que suman al rendimiento (y al presupuesto).
            </p>
          </div>
          <div className="col-lg-4 text-lg-end">
            <a className="btn btn-primary" href="#join">
              Quiero beneficios
            </a>
          </div>
        </div>

        <div className="row g-3 mt-4">
          {partners.map((p) => (
            <div className="col-6 col-md-4 col-lg-3" key={p}>
              <div className="we-partner-tile d-flex align-items-center justify-content-center text-center">
                <span className="fw-semibold">{p}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 text-muted small">
          *Aquí puedes reemplazar cada tile por un logo real (PNG/SVG) + link.
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-4 we-footer">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <div className="text-white-50 small">© {new Date().getFullYear()} WE Endurance</div>
        <div className="d-flex gap-3">
          <a className="we-footer-link" href="#about">
            Sobre nosotros
          </a>
          <a className="we-footer-link" href="#coaches">
            Coaches
          </a>
          <a className="we-footer-link" href="#partners">
            Convenios
          </a>
        </div>
      </div>
    </footer>
  );
}