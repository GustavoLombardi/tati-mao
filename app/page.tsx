"use client";

import { useEffect, useState } from "react";

const WHATSAPP = "https://wa.me/5514997223811?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20na%20Cl%C3%ADnica%20Tati%20Marques.";
const COURSES_WHATSAPP = "https://wa.me/5514997223811?text=Ol%C3%A1%21%20Tenho%20interesse%20nos%20cursos%20e%20consultorias%20da%20Cl%C3%ADnica%20Tati%20Marques.";

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.7a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.4-4.4a8.4 8.4 0 1 1 15.6-4.4Z" /><path d="M8.2 7.8c.2-.5.4-.5.8-.5h.5l.8 1.9c.1.3 0 .5-.2.7l-.6.7c-.2.2-.1.4 0 .6.6 1.1 1.5 2 2.6 2.6.2.1.4.2.6 0l.8-1c.2-.2.4-.3.7-.2l1.8.9c.3.1.4.3.4.6 0 .7-.4 1.5-1 1.9-.5.4-1.2.6-1.8.5-1.1-.2-2.5-.7-4.2-2.2-2.1-1.9-3.4-4.2-3.5-5.1 0-.6.1-1 .3-1.4Z" /></svg>
  );
}

function Brand() {
  return (
    <a href="#inicio" className="brand" aria-label="Tati Marques Terapia da Mão — início">
      <span className="brand-logo-wrap"><img className="brand-logo" src="/logo-tati-marques.png" alt="" /></span>
      <span><strong>Tati Marques</strong><small>Terapia da Mão</small></span>
    </a>
  );
}

const services = [
  { number: "01", title: "Reabilitação do membro superior", text: "Avaliação e plano terapêutico individualizado para mãos, punhos, cotovelos e ombros, respeitando cada fase da recuperação.", tag: "Movimento & função" },
  { number: "02", title: "Terapia da mão", text: "Cuidado especializado para condições traumáticas, ortopédicas e pós-operatórias, com foco em autonomia e retorno às atividades.", tag: "Cuidado especializado" },
  { number: "03", title: "Órteses personalizadas", text: "Confecção e ajustes sob medida para proteger estruturas, favorecer o posicionamento e apoiar sua evolução com mais conforto.", tag: "Precisão sob medida" },
  { number: "04", title: "Cursos e consultorias", text: "Conteúdo técnico para profissionais da saúde que desejam aprofundar raciocínio clínico, prática e segurança na reabilitação.", tag: "Educação profissional" },
];

const gallery = [
  { image: "https://images.pexels.com/photos/8219161/pexels-photo-8219161.jpeg?auto=compress&cs=tinysrgb&w=1400", eyebrow: "Técnica e cuidado", title: "Recursos terapêuticos guiados por objetivos reais" },
  { image: "https://images.pexels.com/photos/30483024/pexels-photo-30483024.jpeg?auto=compress&cs=tinysrgb&w=1400", eyebrow: "Evolução funcional", title: "Movimento treinado para voltar à sua rotina" },
  { image: "https://images.pexels.com/photos/5793697/pexels-photo-5793697.jpeg?auto=compress&cs=tinysrgb&w=1400", eyebrow: "Cuidado próximo", title: "Acompanhamento individual em cada fase" },
];

const experienceSlides = [
  { quote: "Compreender a sua rotina é tão importante quanto compreender a lesão.", text: "A avaliação conecta diagnóstico, sintomas e as atividades que você deseja retomar.", label: "Escuta que direciona" },
  { quote: "Evolução se constrói com metas claras, acompanhamento e constância.", text: "O plano é ajustado ao longo da recuperação, respeitando respostas e prioridades.", label: "Plano individualizado" },
  { quote: "Uma órtese precisa apoiar o tratamento sem deixar o conforto de lado.", text: "Cada peça é confeccionada e ajustada de acordo com a indicação e anatomia.", label: "Precisão sob medida" },
];

const faqs = [
  { q: "Preciso de encaminhamento médico para agendar uma avaliação?", a: "Você pode entrar em contato diretamente com a clínica. Nossa equipe orientará sobre os documentos, exames e encaminhamentos importantes para o seu caso antes da avaliação." },
  { q: "Quais regiões do corpo são atendidas?", a: "A clínica é especializada na reabilitação do membro superior: ombro, cotovelo, antebraço, punho, mão e dedos." },
  { q: "A clínica atende casos de pós-operatório?", a: "Sim. O acompanhamento pós-operatório faz parte da atuação da terapia da mão. O plano respeita o procedimento realizado, as orientações médicas e cada fase de cicatrização e recuperação." },
  { q: "Como funciona a confecção de uma órtese?", a: "Após avaliação e indicação, a órtese é moldada de forma personalizada. Também são realizados ajustes e orientações de uso para favorecer proteção, posicionamento e conforto." },
  { q: "Os cursos e consultorias são para quais profissionais?", a: "As ações de capacitação são direcionadas principalmente a terapeutas ocupacionais, fisioterapeutas, estudantes e profissionais envolvidos na reabilitação do membro superior. Consulte a agenda para saber o público de cada atividade." },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Tati Marques Terapia da Mão",
  legalName: "Clínica T Marques & Frascareli Ltda",
  telephone: "+55 14 99722-3811",
  sameAs: ["https://www.instagram.com/tatimarques.terapiadamao"],
  address: { "@type": "PostalAddress", streetAddress: "Avenida Getúlio Vargas, 18-46, Sala 508", addressLocality: "Bauru", addressRegion: "SP", postalCode: "17017-383", addressCountry: "BR" },
  medicalSpecialty: "OccupationalTherapy",
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [experienceIndex, setExperienceIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [counters, setCounters] = useState({ years: 0, specialties: 0, personalized: 0 });
  const [form, setForm] = useState({ name: "", phone: "", interest: "Avaliação para paciente" });
  const [touched, setTouched] = useState({ name: false, phone: false });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const galleryTimer = setInterval(() => setGalleryIndex((current) => (current + 1) % gallery.length), 5200);
    const experienceTimer = setInterval(() => setExperienceIndex((current) => (current + 1) % experienceSlides.length), 6200);
    return () => { clearInterval(galleryTimer); clearInterval(experienceTimer); };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: .12 });
    elements.forEach((element) => revealObserver.observe(element));
    const stats = document.querySelector("#numeros");
    let counterTimer: ReturnType<typeof setInterval> | undefined;
    const statObserver = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting || counterTimer) return;
      let step = 0;
      counterTimer = setInterval(() => {
        step += 1;
        setCounters({ years: Math.min(8, step), specialties: Math.min(4, step), personalized: Math.min(100, step * 5) });
        if (step >= 20 && counterTimer) clearInterval(counterTimer);
      }, 55);
      statObserver.disconnect();
    }, { threshold: .35 });
    if (stats) statObserver.observe(stats);
    return () => { revealObserver.disconnect(); statObserver.disconnect(); if (counterTimer) clearInterval(counterTimer); };
  }, []);

  const formValid = form.name.trim().length >= 2 && form.phone.replace(/\D/g, "").length >= 10;
  const submitContact = (event: React.FormEvent) => {
    event.preventDefault();
    setTouched({ name: true, phone: true });
    if (!formValid) return;
    const message = `Olá! Meu nome é ${form.name}. Tenho interesse em: ${form.interest}. Meu telefone é ${form.phone}.`;
    window.open(`https://wa.me/5514997223811?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="nav-shell">
          <Brand />
          <nav className={menuOpen ? "is-open" : ""} aria-label="Navegação principal">
            <a href="#sobre" onClick={() => setMenuOpen(false)}>A clínica</a>
            <a href="#especialidades" onClick={() => setMenuOpen(false)}>Especialidades</a>
            <a href="#cursos" onClick={() => setMenuOpen(false)}>Cursos</a>
            <a href="#duvidas" onClick={() => setMenuOpen(false)}>Dúvidas</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
          </nav>
          <a className="nav-cta" href={WHATSAPP} target="_blank" rel="noreferrer"><WhatsAppIcon /> <span>Agendar avaliação</span></a>
          <button className={`menu-toggle ${menuOpen ? "is-active" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu" aria-expanded={menuOpen}><span /><span /></button>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-orb hero-orb-one" /><div className="hero-orb hero-orb-two" />
        <div className="hero-grid container-wide">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Terapia ocupacional especializada · Bauru/SP</div>
            <h1>Recupere o movimento.<br /><em>Reconquiste sua autonomia.</em></h1>
            <p>Reabilitação especializada de mãos e membros superiores, com cuidado próximo, técnica e um plano construído para a sua rotina.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={WHATSAPP} target="_blank" rel="noreferrer">Agendar uma avaliação <ArrowIcon /></a>
              <a className="text-link" href="#especialidades">Conhecer tratamentos <span>↓</span></a>
            </div>
            <div className="hero-proof">
              <div className="proof-avatars"><span>TM</span><span>LM</span><span>+</span></div>
              <div><strong>Atendimento individualizado</strong><small>Especialistas em terapia da mão e membro superior</small></div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="photo-frame">
              <img src="https://images.pexels.com/photos/5473223/pexels-photo-5473223.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Atendimento terapêutico especializado para mão e punho" />
              <div className="photo-shade" />
              <div className="floating-card floating-card-top"><span className="mini-icon">✦</span><div><small>Cuidado que olha para</small><strong>a pessoa por inteiro</strong></div></div>
              <div className="floating-card floating-card-bottom"><strong>Desde 2018</strong><small>cuidando de movimentos que transformam rotinas</small></div>
            </div>
            <div className="authority-seal"><span>✦</span><b>ESPECIALIZAÇÃO<br />E CUIDADO</b></div>
          </div>
        </div>
        <div className="scroll-cue"><span /><small>role para descobrir</small></div>
      </section>

      <section className="trust-ribbon" aria-label="Áreas atendidas">
        <div><span>mãos</span><i>✦</i><span>punhos</span><i>✦</i><span>cotovelos</span><i>✦</i><span>ombros</span><i>✦</i><span>órteses personalizadas</span></div>
      </section>

      <section className="about section-space" id="sobre">
        <div className="container-wide about-grid">
          <div className="section-kicker">01 · sobre a clínica</div>
          <div className="about-main">
            <h2>Ciência, escuta e movimento em uma experiência de cuidado <em>verdadeiramente humana.</em></h2>
            <div className="about-columns">
              <p>A Clínica Tati Marques nasceu para oferecer reabilitação física especializada do membro superior com um olhar funcional: não tratamos apenas uma lesão, cuidamos do impacto que ela causa na sua vida.</p>
              <p>Da avaliação inicial à evolução de cada movimento, o atendimento é planejado de forma individualizada, alinhando objetivos clínicos ao que você precisa voltar a fazer com segurança.</p>
            </div>
          </div>
        </div>
        <div className="container-wide team-row">
          <article className="team-card team-featured"><div className="portrait-monogram"><span>TM</span></div><div><span className="role">Terapeuta ocupacional</span><h3>Tatiani Marques Rossini</h3><p>Especialista em terapia da mão e do membro superior, com atuação dedicada à reabilitação ortopédica e funcional.</p></div></article>
          <article className="team-card"><div className="portrait-monogram alt"><span>LM</span></div><div><span className="role">Terapeuta ocupacional</span><h3>Letícia Maciel Frascareli</h3><p>Atuação em ortopedia, geriatria clínica e home care, acompanhando diferentes fases e necessidades da reabilitação.</p></div></article>
          <div className="values-card"><span>Nosso compromisso</span><p>Devolver função, confiança e independência para cada pessoa.</p><i>↗</i></div>
        </div>
        <div className="container-wide team-video reveal">
          <div className="team-video-copy">
            <span className="section-kicker">Conheça nossa equipe</span>
            <h3>Duas profissionais.<br /><em>Um mesmo propósito.</em></h3>
            <p>Neste vídeo, Tatiani Marques Rossini e Letícia Maciel Frascareli apresentam suas trajetórias e a forma como transformam conhecimento técnico em um cuidado próximo e individualizado.</p>
            <a href="https://www.instagram.com/p/DT3iz_tkm5C/" target="_blank" rel="noreferrer">Assistir também no Instagram <ArrowIcon /></a>
          </div>
          <div className="instagram-video">
            <iframe
              src="https://www.instagram.com/p/DT3iz_tkm5C/embed/"
              title="Apresentação das profissionais da Clínica Tati Marques"
              loading="lazy"
              scrolling="no"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="services section-space" id="especialidades">
        <div className="container-wide">
          <div className="section-heading split">
            <div><span className="section-kicker light">02 · especialidades</span><h2>Precisão clínica para aquilo que <em>move a sua vida.</em></h2></div>
            <p>Cada atendimento começa pela compreensão do seu diagnóstico, da sua fase de recuperação e das atividades que são importantes para você.</p>
          </div>
          <div className="services-grid">
            {services.map((service) => <article className="service-card" key={service.number}><div className="service-top"><span>{service.number}</span><i>↗</i></div><div><small>{service.tag}</small><h3>{service.title}</h3><p>{service.text}</p></div></article>)}
          </div>
          <div className="services-footer"><p>Não sabe qual atendimento é indicado para você?</p><a href={WHATSAPP} target="_blank" rel="noreferrer">Converse com nossa equipe <ArrowIcon /></a></div>
        </div>
      </section>

      <section className="journey section-space">
        <div className="container-wide journey-grid">
          <div className="journey-intro reveal">
            <span className="section-kicker">03 · sua jornada</span>
            <h2>Um caminho claro, do primeiro contato à <em>retomada da sua rotina.</em></h2>
            <p>Em cada etapa, você entende o que está sendo feito, por que está sendo feito e qual é o próximo objetivo.</p>
            <a className="button button-primary" href={WHATSAPP} target="_blank" rel="noreferrer">Começar minha avaliação <ArrowIcon /></a>
          </div>
          <div className="journey-steps reveal">
            <article><span>01</span><div><h3>Avaliar</h3><p>História, sintomas, movimento, força, sensibilidade e necessidades da sua rotina.</p></div></article>
            <article><span>02</span><div><h3>Planejar</h3><p>Metas terapêuticas e recursos escolhidos de acordo com o diagnóstico e fase clínica.</p></div></article>
            <article><span>03</span><div><h3>Reabilitar</h3><p>Intervenções especializadas, orientações e progressão acompanhada de perto.</p></div></article>
            <article><span>04</span><div><h3>Retomar</h3><p>Mais segurança e autonomia para atividades pessoais, profissionais e de lazer.</p></div></article>
          </div>
        </div>
      </section>

      <section className="numbers" id="numeros">
        <div className="container-wide numbers-grid">
          <div><strong>{counters.years}</strong><span>anos de trajetória<br />desde 2018</span></div>
          <div><strong>{counters.specialties}</strong><span>frentes de<br />cuidado especializado</span></div>
          <div><strong>{counters.personalized}%</strong><span>planejamento<br />individualizado</span></div>
          <p>Experiência clínica e educação profissional conectadas pelo mesmo propósito: ampliar possibilidades.</p>
        </div>
      </section>

      <section className="gallery-section section-space" id="estrutura">
        <div className="container-wide gallery-head reveal">
          <div><span className="section-kicker">04 · cuidado em detalhes</span><h2>Uma experiência terapêutica feita de <em>precisão e presença.</em></h2></div>
          <div className="slider-controls">
            <button onClick={() => setGalleryIndex((galleryIndex - 1 + gallery.length) % gallery.length)} aria-label="Imagem anterior">←</button>
            <span>0{galleryIndex + 1} / 0{gallery.length}</span>
            <button onClick={() => setGalleryIndex((galleryIndex + 1) % gallery.length)} aria-label="Próxima imagem">→</button>
          </div>
        </div>
        <div className="container-wide gallery-window reveal">
          {gallery.map((item, index) => (
            <article className={`gallery-slide ${index === galleryIndex ? "is-active" : ""}`} key={item.title} aria-hidden={index !== galleryIndex}>
              <img src={item.image} alt="Imagem ilustrativa de atendimento e reabilitação" />
              <div className="gallery-overlay"><span>{item.eyebrow}</span><h3>{item.title}</h3><small>Imagem ilustrativa — substitua pelos registros da clínica</small></div>
            </article>
          ))}
          <div className="gallery-dots">{gallery.map((_, index) => <button className={index === galleryIndex ? "is-active" : ""} onClick={() => setGalleryIndex(index)} key={index} aria-label={`Ver imagem ${index + 1}`} />)}</div>
        </div>
      </section>

      <section className="experience section-space">
        <div className="container-wide experience-grid reveal">
          <div className="experience-aside"><span className="section-kicker light">05 · nossa forma de cuidar</span><p>Os pilares que orientam uma experiência terapêutica mais clara, próxima e funcional.</p><div className="experience-arrows"><button onClick={() => setExperienceIndex((experienceIndex - 1 + experienceSlides.length) % experienceSlides.length)} aria-label="Anterior">←</button><button onClick={() => setExperienceIndex((experienceIndex + 1) % experienceSlides.length)} aria-label="Próximo">→</button></div></div>
          <div className="experience-slider">
            {experienceSlides.map((slide, index) => <article className={index === experienceIndex ? "is-active" : ""} key={slide.label}><span>“</span><blockquote>{slide.quote}</blockquote><p>{slide.text}</p><small>{slide.label}</small></article>)}
          </div>
        </div>
      </section>

      <section className="courses section-space" id="cursos">
        <div className="course-orbit" />
        <div className="container-wide courses-grid">
          <div className="courses-copy reveal"><span className="section-kicker light">06 · cursos & consultorias</span><h2>Conhecimento clínico que ganha vida <em>na prática.</em></h2><p>Capacitações e consultorias on-line para profissionais que desejam aprofundar o raciocínio na terapia da mão e na reabilitação do membro superior.</p><div className="course-badges"><span>Conteúdo aplicado</span><span>Troca profissional</span><span>On-line</span></div><a className="button course-button" href={COURSES_WHATSAPP} target="_blank" rel="noreferrer">Entrar na lista de interesse <ArrowIcon /></a></div>
          <div className="course-card reveal"><div className="course-card-top"><span>PRÓXIMAS TURMAS</span><i>agenda 2026</i></div><div className="course-card-art"><div className="hand-lines">✦</div><strong>Novidades<br />em breve</strong></div><p>Receba informações sobre temas, datas e condições assim que a próxima agenda for divulgada.</p><div className="course-status"><i /><span>Lista de interesse aberta</span></div></div>
        </div>
      </section>

      <section className="faq section-space" id="duvidas">
        <div className="container-wide faq-grid">
          <div className="faq-title reveal"><span className="section-kicker">07 · dúvidas frequentes</span><h2>Informação também faz parte do <em>cuidado.</em></h2><p>Não encontrou sua dúvida? Nossa equipe pode orientar você diretamente pelo WhatsApp.</p><a href={WHATSAPP} target="_blank" rel="noreferrer">Fazer outra pergunta <ArrowIcon /></a></div>
          <div className="accordion reveal">
            {faqs.map((faq, index) => <article className={openFaq === index ? "is-open" : ""} key={faq.q}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span>{faq.q}</span><i>{openFaq === index ? "−" : "+"}</i></button><div className="accordion-answer"><p>{faq.a}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="contact section-space" id="contato">
        <div className="container-wide contact-grid">
          <div className="contact-map reveal">
            <iframe title="Localização da Clínica Tati Marques" loading="lazy" src="https://www.google.com/maps?q=Avenida%20Get%C3%BAlio%20Vargas%2018-46%20Bauru%20SP&output=embed" />
            <div className="map-card"><span>Estamos em Bauru/SP</span><strong>Centro Empresarial<br />Getúlio Vargas · Sala 508</strong><a href="https://www.google.com/maps/search/?api=1&query=Avenida+Getulio+Vargas+18-46+Bauru+SP" target="_blank" rel="noreferrer">Abrir rota ↗</a></div>
          </div>
          <div className="contact-content reveal"><span className="section-kicker light">08 · agende sua avaliação</span><h2>O próximo movimento pode começar <em>agora.</em></h2><p>Conte brevemente o que você precisa. Ao enviar, a conversa será aberta no WhatsApp para nossa equipe continuar o atendimento.</p>
            <form onSubmit={submitContact} noValidate>
              <label className={touched.name && form.name.trim().length < 2 ? "has-error" : ""}><span>Seu nome</span><input value={form.name} onBlur={() => setTouched({ ...touched, name: true })} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Como podemos chamar você?" /><small>Informe pelo menos 2 caracteres.</small></label>
              <label className={touched.phone && form.phone.replace(/\D/g, "").length < 10 ? "has-error" : ""}><span>WhatsApp</span><input value={form.phone} onBlur={() => setTouched({ ...touched, phone: true })} onChange={(event) => setForm({ ...form, phone: event.target.value })} placeholder="(14) 99999-9999" inputMode="tel" /><small>Digite um telefone com DDD.</small></label>
              <label><span>Tenho interesse em</span><select value={form.interest} onChange={(event) => setForm({ ...form, interest: event.target.value })}><option>Avaliação para paciente</option><option>Órtese personalizada</option><option>Cursos e consultorias</option><option>Outra orientação</option></select></label>
              <button className="button contact-submit" type="submit">Continuar pelo WhatsApp <WhatsAppIcon /></button>
            </form>
            <div className="contact-details"><div><span>Endereço</span><p>Av. Getúlio Vargas, 18-46<br />Sala 508 · Bauru/SP</p></div><div><span>Atendimento</span><p>Com hora marcada<br />Consulte a disponibilidade</p></div></div>
          </div>
        </div>
      </section>

      <section className="early-contact"><div className="container-wide"><span>Seu movimento merece atenção especializada.</span><a href={WHATSAPP} target="_blank" rel="noreferrer">Falar pelo WhatsApp <ArrowIcon /></a></div></section>
      <footer><div className="container-wide footer-top"><Brand /><p>Reabilitação física especializada do membro superior, terapia da mão e órteses personalizadas em Bauru.</p><div className="social-links"><a href="https://www.instagram.com/tatimarques.terapiadamao" target="_blank" rel="noreferrer">Instagram ↗</a><a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp ↗</a></div></div><div className="container-wide footer-bottom"><span>© {new Date().getFullYear()} Clínica T. Marques & Frascareli</span><span>Saúde, função e autonomia.</span></div></footer>
      <a className="whatsapp-float" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Falar com a clínica pelo WhatsApp"><WhatsAppIcon /><span>Agende sua avaliação</span></a>
    </main>
  );
}
