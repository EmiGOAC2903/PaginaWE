import React, { useEffect, useState, useRef } from "react";
import "./we-endurance.css";

const WA_NUMBER = "5215548800849"; // ← Reemplaza con el número real de WhatsApp
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Hola%2C%20me%20interesa%20unirme%20a%20WE%20Endurance`;
const BASE = import.meta.env.BASE_URL;

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ForEveryone />
      <About />
      <CoachBio />
      <Events />
      <Gallery />
      <Results />
      <Partners />
      <Contact />
      <Footer />
    </>
  );
}

/* ─── NAVBAR ─────────────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? "navbar-scrolled" : "navbar-transparent"}`}>
      <div className="container">
        <a className="navbar-brand" href="#top">
          <img src={BASE + "Images/logo-transparent.png"} alt="WE Endurance" className="we-navbar-logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item"><a className="nav-link" href="#about">Sobre nosotros</a></li>
            <li className="nav-item"><a className="nav-link" href="#coaches">Coach</a></li>
            <li className="nav-item"><a className="nav-link" href="#events">Eventos</a></li>
            <li className="nav-item"><a className="nav-link" href="#gallery">Galería</a></li>
            <li className="nav-item"><a className="nav-link" href="#results">Resultados</a></li>
            <li className="nav-item"><a className="nav-link" href="#partners">Convenios</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contacto</a></li>
            <li className="nav-item ms-lg-2">
              <a className="btn we-cta-whatsapp px-4" href={WA_LINK} target="_blank" rel="noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="me-2" style={{verticalAlign:"middle"}}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.535 5.875L.057 23.5l5.762-1.507A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.371l-.36-.214-3.713.972.991-3.624-.234-.372A9.818 9.818 0 1112 21.818z"/>
                </svg>
                Únete
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

/* ─── HERO ────────────────────────────────────────────────────── */
function Hero() {
  return (
    <header id="top" className="we-hero d-flex align-items-center">
      <div className="we-hero-overlay" />
      <div className="container position-relative text-center text-white" style={{paddingTop: "24vh", paddingBottom: "4rem"}}>
        <div className="we-hero-eyebrow">Triatlón · Running · Ciclismo · Natación</div>
        <h1 className="display-1 we-hero-title">WE ENDURANCE</h1>
        <div className="we-hero-tagline">WE <em>are</em> ENDURANCE</div>
        <div className="we-hero-divider" />
        <p className="we-hero-subtitle">Comunidad · Técnica · Rendimiento</p>
        <div className="we-hero-btns d-flex justify-content-center gap-3 mt-4 flex-wrap">
          <a className="btn btn-primary btn-lg" href="#about">Ver entrenos</a>
          <a className="btn we-btn-whatsapp btn-lg" href={WA_LINK} target="_blank" rel="noreferrer">
            💬 Únete al equipo
          </a>
        </div>
      </div>
      <div className="we-scroll-hint" aria-hidden="true">
        <span className="we-chevron" />
        <span className="we-chevron" />
      </div>
    </header>
  );
}

/* ─── PARA TODOS ──────────────────────────────────────────────── */
function ForEveryone() {
  const profiles = [
    "Médicos",
    "Abogados",
    "Empresarios",
    "Ingenieros",
    "Estudiantes",
    "Papás y mamás",
  ];

  return (
    <section id="foreveryone" className="py-5 we-section-dark">
      <div className="container py-4 text-center">
        <div className="we-eyebrow-label mb-2">COMUNIDAD</div>
        <h2 className="fw-bold text-white mb-3">
          Esto es para <span className="we-text-blue">todos</span>
        </h2>
        <p className="text-white-50 mx-auto mb-5" style={{maxWidth: 600}}>
          La mayoría de nuestros atletas son profesionistas con agenda llena. No importa si eres médico,
          abogado, mamá o papá — aquí entrenamos con estructura que se adapta a tu vida real.
        </p>
        <div className="row g-3 justify-content-center mb-5">
          {profiles.map((p) => (
            <div className="col-6 col-sm-4 col-md-2" key={p}>
              <div className="we-profile-chip">
                <div className="text-white fw-semibold">{p}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="row g-4 justify-content-center">
          <StatCard number="200+" label="Atletas activos" />
          <StatCard number="5" label="Años de comunidad" />
          <StatCard number="3" label="Disciplinas" />
          <StatCard number="100%" label="Para ti" />
        </div>
      </div>
    </section>
  );
}

function StatCard({ number, label }) {
  return (
    <div className="col-6 col-md-3">
      <div className="we-stat-card">
        <div className="we-stat-number">{number}</div>
        <div className="we-stat-label">{label}</div>
      </div>
    </div>
  );
}

/* ─── SOBRE NOSOTROS ─────────────────────────────────────────── */
function About() {
  return (
    <section id="about" className="py-5 we-section">
      <div className="container py-4">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <div className="we-eyebrow-label-dark mb-2">NOSOTROS</div>
            <h2 className="fw-bold text-white">Sobre WE Endurance</h2>
            <p className="text-white-50 mt-3">
              Somos un equipo de atletas que entiende el deporte como <strong>estilo de vida</strong>.
              Como atletas creemos en todos los beneficios que brinda el deporte tanto físicos como mentales.
            </p>
            <p className="text-white-50">
              En WE Endurance no solo entrenas, perteneces a una comunidad que entiende que el verdadero
              rendimiento nace del compromiso diario y del respaldo colectivo. Aquí cada atleta importa,
              cada proceso es individualizado y cada logro se celebra en equipo.
            </p>
            <div className="row mt-4 g-3">
              <Feature title="Estilo de vida" desc="El deporte como parte de quién eres, no solo lo que haces." />
              <Feature title="Comunidad real" desc="Cada atleta importa. Cada proceso es individualizado." />
              <Feature title="Progreso medible" desc="Método basado en evidencia científica y datos reales." />
              <Feature title="Logros en equipo" desc="Los resultados dejan de ser una meta lejana y se convierten en consecuencia natural." />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="we-card p-4 p-lg-5">
              <h5 className="fw-bold mb-3 text-white">Nuestra metodología</h5>
              <p className="text-white-50 small mb-3">
                Trabajamos con un método basado en evidencia científica, adaptado a la realidad
                de cada atleta y enfocado en generar progresos medibles y sostenibles. Analizamos:
              </p>
              <ul className="mb-0 text-white-50">
                <li>Volumen e intensidad</li>
                <li>Distribución por zonas de entrenamiento</li>
                <li>Tendencias de rendimiento</li>
                <li>Respuesta del cuerpo al estímulo (fatiga, adaptación, recuperación)</li>
              </ul>
              <div className="mt-4">
                <a className="btn we-btn-whatsapp w-100 py-2" href={WA_LINK} target="_blank" rel="noreferrer">
                  💬 Quiero unirme por WhatsApp
                </a>
                <small className="d-block text-center text-white-50 mt-2">
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
      <div className="p-3 we-feature-card h-100">
        <div className="fw-semibold text-white">{title}</div>
        <div className="text-white-50 small mt-1">{desc}</div>
      </div>
    </div>
  );
}

/* ─── COACH BIO ──────────────────────────────────────────────── */
function CoachBio() {
  const credentials = [
    "Más de 45 años de experiencia personal practicando deportes de resistencia",
    "Running, Mountain Bike y Triatlón en distancias cortas y largas",
    "Certificado por International Endurance Group University (España) como Coach especialista en deportes de resistencia",
    "Entrenador de Triatlón Nivel 1, Federación Mexicana de Triatlón",
  ];

  const hasPhoto = true;

  return (
    <section id="coaches" className="py-5 we-section-dark">
      <div className="container py-4">
        <div className="row align-items-center g-5">
          {hasPhoto && (
            <div className="col-lg-5 text-center">
              <img src={BASE + "Images/coach.png"} className="we-coach-photo" alt="Guillermo González Riestra" />
            </div>
          )}
          <div className={hasPhoto ? "col-lg-7" : "col-12"}>
            <div className="we-eyebrow-label mb-3">HEAD COACH & FOUNDER</div>
            <h2 className="fw-bold text-white mb-1">
              Guillermo <span className="we-text-green">González Riestra</span>
            </h2>
            <p className="text-white-50 mt-3 mb-4" style={{maxWidth: hasPhoto ? "100%" : 640}}>
              Más de 45 años de experiencia personal practicando deportes de resistencia.
              Su pasión por el deporte y su formación especializada lo convierten en el
              guía ideal para llevarte más allá de tus límites — sin importar tu nivel.
            </p>
            <div className="d-flex flex-column gap-3 mb-4">
              {credentials.map((c) => (
                <div className="we-credential-row" key={c}>
                  <span className="we-credential-dot" />
                  <span className="text-white-50">{c}</span>
                </div>
              ))}
            </div>
            <a className="btn we-btn-whatsapp px-4 py-2" href={WA_LINK} target="_blank" rel="noreferrer">
              💬 Hablar con Guillermo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ─── EVENTOS SOCIALES ───────────────────────────────────────── */
function Events() {
  const events = [
    { img: "Eventos/event-desayunos.jpeg",    title: "Desayunos post-entreno",  desc: "Después de cada sesión larga, el equipo se reúne a recargar. La recuperación también es social." },
    { img: "Eventos/event-fiestas.jpeg",      title: "Fiestas del equipo",      desc: "Celebramos logros, cumpleaños y temporadas. Somos más que un club de entrenamiento." },
    { img: "Eventos/event-posada.jpeg",       title: "Posada WE",               desc: "La posada anual es uno de los eventos más esperados. Música, comida y comunidad." },
    { img: "Eventos/event-competencias.jpeg", title: "Competencias en equipo",  desc: "Vamos juntos a competencias. Siempre hay equipo WE en la salida." },
  ];

  return (
    <section id="events" className="py-5 we-section">
      <div className="container py-4">
        <div className="text-center mb-5">
          <div className="we-eyebrow-label-dark mb-2">COMUNIDAD</div>
          <h2 className="fw-bold text-white">
            Más que <span className="we-text-green">entrenar</span>
          </h2>
          <p className="text-white-50 mt-2 mx-auto" style={{maxWidth: 520}}>
            En WE Endurance entrenamos duro, pero también vivimos bien. El equipo se convierte en familia.
          </p>
        </div>
        <div className="row g-4">
          {events.map((e) => (
            <div className="col-md-6 col-lg-3" key={e.title}>
              <div className="we-event-card-light h-100 rounded-4 overflow-hidden text-center">
                <div className="we-event-photo">
                  <img src={BASE + "Images/" + e.img} alt={e.title} />
                </div>
                <div className="p-4">
                  <h6 className="fw-bold mb-2 text-white">{e.title}</h6>
                  <p className="text-white-50 small mb-0">{e.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── RESULTADOS 2025 ────────────────────────────────────────── */
function Results() {
  const events = [
    { name: "IM 70.3",           total: 10, first: 4 },
    { name: "Maratón",           total: 12, first: 9 },
    { name: "Medio maratón",     total: 25, first: null },
    { name: "Carreras ciclistas",total: 25, first: 2 },
    { name: "Astri",             total: 4,  first: null },
  ];

  return (
    <section id="results" className="py-5 we-section-dark">
      <div className="container py-4">
        <div className="text-center mb-5">
          <div className="we-eyebrow-label mb-2">RESULTADOS</div>
          <h2 className="fw-bold text-white">
            Solo en <span className="we-text-green">2025</span>
          </h2>
          <p className="text-white-50 mt-2 mx-auto" style={{maxWidth: 500}}>
            Solamente en el año 2025 competimos en los siguientes eventos:
          </p>
        </div>

        <div className="row justify-content-center mb-5">
          <div className="col-lg-8">
            <div className="we-results-table rounded-4 overflow-hidden">
              <div className="we-results-header px-4 py-3 d-flex">
                <span className="col-5 fw-bold text-white small text-uppercase" style={{letterSpacing:"1px"}}>Evento</span>
                <span className="col-4 fw-bold text-white small text-uppercase text-center" style={{letterSpacing:"1px"}}>Participantes</span>
                <span className="col-3 fw-bold text-white small text-uppercase text-center" style={{letterSpacing:"1px"}}>1era vez</span>
              </div>
              {events.map((e, i) => (
                <div key={e.name} className={`we-results-row px-4 py-3 d-flex align-items-center ${i % 2 === 0 ? "we-results-row-even" : ""}`}>
                  <span className="col-5 text-white fw-semibold">{e.name}</span>
                  <span className="col-4 text-center we-text-green fw-bold">{e.total} atletas</span>
                  <span className="col-3 text-center">
                    {e.first ? <span className="we-text-green fw-bold">{e.first} atletas</span> : <span className="text-white-50">—</span>}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          <StatCard number="76" label="Atletas en competencia" />
          <StatCard number="17" label="Primeras veces" />
          <StatCard number="5" label="Eventos distintos" />
          <StatCard number="100%" label="Finishers" />
        </div>
      </div>
    </section>
  );
}

/* ─── CONVENIOS ──────────────────────────────────────────────── */
function Partners() {
  const partners = [
    { name: "Explo",   img: "Partners/partner-explo.jpeg",   desc: "Equipamiento y accesorios deportivos" },
    { name: "Fuel2Go", img: "Partners/partner-fuel2go.jpeg",  desc: "Nutrición deportiva oficial" },
    { name: "Kumi",    img: "Partners/partner-kumi.jpeg",     desc: "Uniformes oficiales WE Endurance" },
    { name: "Orlando", img: "Partners/partner-orlando.jpeg",  desc: "Aliado de rendimiento" },
  ];

  return (
    <section id="partners" className="py-5 we-section">
      <div className="container py-4">
        <div className="text-center mb-5">
          <div className="we-eyebrow-label-dark mb-2">PARTNERS</div>
          <h2 className="fw-bold text-white">Nuestros Convenios</h2>
          <p className="text-white-50 mt-2 mx-auto" style={{maxWidth: 520}}>
            Beneficios exclusivos con marcas que usamos y en las que confiamos.
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          {partners.map((p) => (
            <div className="col-6 col-md-3" key={p.name}>
              <div className="we-partner-tile-v2 d-flex flex-column align-items-center justify-content-center text-center p-4">
                <div className="we-partner-img-wrap mb-3">
                  <img src={BASE + "Images/" + p.img} alt={p.name} />
                  <div className="we-partner-img-overlay">
                    <span>{p.name}</span>
                  </div>
                </div>
                <div className="text-white-50 small">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <a className="btn btn-primary px-5" href={WA_LINK} target="_blank" rel="noreferrer">
            Quiero los beneficios
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACTO ───────────────────────────────────────────────── */
function Contact() {
  return (
    <section id="contact" className="py-5 we-section-dark">
      <div className="container py-4 text-center">
        <div className="we-eyebrow-label mb-2">CONTACTO</div>
        <h2 className="fw-bold text-white mb-2">
          ¿Listo para <span className="we-text-blue">empezar</span>?
        </h2>
        <p className="text-white-50 mx-auto mb-5" style={{maxWidth: 500}}>
          Únete a WE Endurance y comienza tu camino. Cupos limitados por grupo.
        </p>
        <div className="row g-4 justify-content-center mb-5">
          <ContactCard icon="💬" title="WhatsApp" value="Escríbenos directo" link={WA_LINK} linkLabel="Abrir WhatsApp" variant="green" />
          <ContactCard icon="📸" title="Instagram" value="@weendurance" link="https://instagram.com/weendurance" linkLabel="Ver perfil" variant="pink" />
          <ContactCard icon="🎵" title="TikTok" value="@weendurance" link="https://tiktok.com/@weendurance" linkLabel="Ver videos" variant="blue" />
        </div>
        <a className="btn we-btn-whatsapp btn-lg px-5" href={WA_LINK} target="_blank" rel="noreferrer">
          💬 Escríbenos por WhatsApp
        </a>
      </div>
    </section>
  );
}

function ContactCard({ icon, title, value, link, linkLabel, variant }) {
  const cardClass = variant === 'green' ? 'we-contact-card-green'
    : variant === 'pink' ? 'we-contact-card-pink'
    : variant === 'blue' ? 'we-contact-card-blue'
    : 'we-contact-card';
  return (
    <div className="col-12 col-sm-6 col-md-4">
      <div className={`${cardClass} p-4 rounded-4 h-100`}>
        <div className="we-contact-icon mb-3">{icon}</div>
        <div className="fw-bold mb-1 text-white">{title}</div>
        <div className="small mb-3 text-white-50">{value}</div>
        <a className="btn btn-sm btn-outline-light w-100" href={link} target="_blank" rel="noreferrer">
          {linkLabel}
        </a>
      </div>
    </div>
  );
}

/* ─── GALERÍA ────────────────────────────────────────────────── */
function Gallery() {
  const slides = [
    [BASE+"Images/Galeria/Foto18.jpeg", BASE+"Images/Galeria/Foto2.jpeg",  BASE+"Images/Galeria/Foto3.jpeg",
     BASE+"Images/Galeria/Foto4.jpeg",  BASE+"Images/Galeria/Foto5.jpeg",  BASE+"Images/Galeria/Foto6.jpeg"],
    [BASE+"Images/Galeria/Foto7.jpeg",  BASE+"Images/Galeria/Foto8.jpeg",  BASE+"Images/Galeria/Foto9.jpeg",
     BASE+"Images/Galeria/Foto10.jpeg", BASE+"Images/Galeria/Foto11.jpeg", BASE+"Images/Galeria/Foto12.jpeg"],
    [BASE+"Images/Galeria/Foto13.jpeg", BASE+"Images/Galeria/Foto14.jpeg", BASE+"Images/Galeria/Foto15.jpeg",
     BASE+"Images/Galeria/Foto16.jpeg", BASE+"Images/Galeria/Foto17.jpeg", BASE+"Images/Galeria/Foto1.jpeg"],
  ];

  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(null);

  function goTo(index) {
    if (animating || index === current) return;
    setDirection(index > current ? "left" : "right");
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
      setDirection(null);
    }, 420);
  }

  const prev = () => goTo(current === 0 ? slides.length - 1 : current - 1);
  const next = () => goTo(current === slides.length - 1 ? 0 : current + 1);

  return (
    <section id="gallery" className="py-5 we-section">
      <div className="container py-4">
        <div className="text-center mb-5">
          <div className="we-eyebrow-label-dark mb-2">COMUNIDAD</div>
          <h2 className="fw-bold text-white">
            Nuestra <span className="we-text-green">galería</span>
          </h2>
          <p className="text-white-50 mt-2 mx-auto" style={{maxWidth: 520}}>
            Momentos del equipo dentro y fuera de la pista.
          </p>
        </div>

        <div className="we-gallery-wrapper position-relative">
          <div className={`we-gallery-slide ${animating ? `we-gallery-exit-${direction}` : ""}`}>
            <div className="row g-3">
              {slides[current].map((src, i) => (
                <div className="col-6 col-md-4" key={i}>
                  <div className="we-gallery-item">
                    <img src={src} alt={`WE Endurance foto ${i + 1}`} loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="we-gallery-arrow we-gallery-arrow-prev" onClick={prev} aria-label="Anterior">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button className="we-gallery-arrow we-gallery-arrow-next" onClick={next} aria-label="Siguiente">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <div className="we-gallery-dots mt-4 d-flex justify-content-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`we-gallery-dot ${i === current ? "active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="py-4 we-footer">
      <div className="container">
        <div className="row align-items-center g-3">
          <div className="col-md-4">
            <img src={BASE + "Images/logo-transparent.png"} alt="WE Endurance" className="we-footer-logo" />
            <div className="text-white-50 small mt-1">Ciudad de México</div>
          </div>
          <div className="col-md-4 text-md-center">
            <div className="d-flex justify-content-md-center gap-3 flex-wrap">
              <a className="we-footer-link" href="#about">Nosotros</a>
              <a className="we-footer-link" href="#coaches">Coaches</a>
              <a className="we-footer-link" href="#events">Eventos</a>
              <a className="we-footer-link" href="#partners">Convenios</a>
            </div>
          </div>
          <div className="col-md-4 text-md-end">
            <div className="d-flex justify-content-md-end gap-3">
              <a className="we-footer-link" href="https://instagram.com/weendurance" target="_blank" rel="noreferrer">Instagram</a>
              <a className="we-footer-link" href="https://tiktok.com/@weendurance" target="_blank" rel="noreferrer">TikTok</a>
              <a className="we-footer-link" href={WA_LINK} target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="we-divider my-3" />
        <div className="text-center text-white-50 small">© {new Date().getFullYear()} WE Endurance · Todos los derechos reservados</div>
      </div>
    </footer>
  );
}