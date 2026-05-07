/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Droplets,
  Sparkles,
  ShieldCheck,
  Armchair,
  Zap,
  Wind,
  MapPin,
  Phone,
  Facebook,
  Share2,
  Instagram,
  Clock,
  ChevronRight,
  Star,
  Menu,
  X,
  ArrowRight,
  Shield,
  Dna
} from 'lucide-react';

import MapSection from './components/MapSection';

const NAVBAR_LINKS = [
  { name: 'Serviços', href: '#servicos' },
  { name: 'Galeria', href: '#galeria' },
  { name: 'Localização', href: '#localizacao' },
  { name: 'Sobre', href: '#sobre' },
];

const SERVICES = [
  {
    icon: <Droplets className="w-6 h-6" />,
    title: 'Eco-Lavagem',
    desc: 'Limpeza técnica sustentável com acabamento hidrofóbico.'
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Polimento Técnico',
    desc: 'Remoção de imperfeições e restauração total do brilho especular.'
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Vitrificação 9H',
    desc: 'Proteção nanométrica extrema contra agentes químicos e UV.'
  },
  {
    icon: <Armchair className="w-6 h-6" />,
    title: 'Interior Detail',
    desc: 'Higienização profunda com hidratação de couros e plásticos.'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Rest. de Faróis',
    desc: 'Clareamento e proteção termo-plástica para máxima segurança.'
  },
  {
    icon: <Dna className="w-6 h-6" />,
    title: 'Proteção Graphene',
    desc: 'A mais alta tecnologia em proteção de superfícies atual.'
  },
  {
    icon: <Wind className="w-6 h-6" />,
    title: 'Oxy-Sanitização',
    desc: 'Eliminação de odores e bactérias através de ozônio.'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Chassis Detail',
    desc: 'Limpeza e proteção técnica do compartimento do motor e suspensão.'
  },
];

const ADVANTAGES = [
  { title: 'Conveniência', desc: 'No coração do Pátio Brasil Shopping.', icon: <MapPin className="w-5 h-5" /> },
  { title: 'Certificação', desc: 'Produtos mundiais de padrão elite.', icon: <Shield className="w-5 h-5" /> },
  { title: 'Consciência', desc: 'Sustentabilidade em cada gota d\'água.', icon: <Droplets className="w-5 h-5" /> },
  { title: 'Mestrado', desc: 'Equipe técnica com olhar cirúrgico.', icon: <Star className="w-5 h-5" /> },
];

const PROTOCOLS = [
  { id: '01', title: 'DESCONTAMINAÇÃO', sub: 'QUÍMICA & FÍSICA', desc: 'Remoção completa de partículas ferrosas e impurezas da pintura.' },
  { id: '02', title: 'CORREÇÃO TÉCNICA', sub: 'RESTAURAÇÃO TOTAL', desc: 'Polimento multi-etapa para remoção de hologramas e micro-riscos.' },
  { id: '03', title: 'BLINDAGEM NANO', sub: 'PROTEÇÃO EXTREMA', desc: 'Aplicação de cerâmica ou grafeno para proteção permanente.' },
];

const GALLERY_IMAGES = [
  {
    url: 'img/gtr.png',
    title: 'Precision Finish',
    tag: 'Vitrificação'
  },
  {
    url: 'img/ferrari.png',
    title: 'Deep Polish',
    tag: 'Polimento'
  },
  {
    url: 'img/mercedes.png',
    title: 'Eco Shine',
    tag: 'Limpeza'
  },
  {
    url: 'img/suv.png',
    title: 'Elite Protection',
    tag: 'Proteção'
  },
  {
    url: 'img/ferrari.png',
    title: 'Royal Interior',
    tag: 'Higienização'
  },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className={`relative font-barlow selection:bg-brand selection:text-white bg-[#080808] ${mobileMenuOpen ? 'overflow-hidden h-screen' : ''}`}>
      <div className="noise-overlay" />

      {/* Ambient Glows */}
      <div className="ambient-glow top-[10%] right-[-10%] w-[500px] h-[500px] bg-brand/10 md:bg-brand/20 opacity-30" />
      <div className="ambient-glow bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-brand/5 md:bg-brand/10 opacity-20" />

      {/* Navbar Container */}
      <nav
        className={`fixed top-0 w-full z-[120] transition-all duration-500 flex items-center justify-between px-6 md:px-12 py-5 lg:py-8 ${scrolled && !mobileMenuOpen ? 'glass bg-[#080808]/80 py-4 border-b border-white/5' : 'bg-transparent'
          }`}
      >
        <div className="flex items-center gap-3 md:gap-4 relative z-[130]">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-brand flex items-center justify-center bg-black shadow-[0_0_15px_rgba(224,28,36,0.4)] transition-transform hover:scale-110 overflow-hidden">
            <img src="img/logo.png" alt="CarBoss Logo" className="w-full h-full object-contain p-1" />
          </div>
          <h1 className="text-xl md:text-2xl font-display tracking-[0.2em] uppercase text-white">Car<span className="text-brand">Boss</span></h1>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-10">
          {NAVBAR_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 hover:text-brand transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/556199741358"
              target="_blank"
              className="bg-brand hover:bg-brand-dark text-white px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-all transform hover:-translate-y-1 shadow-[0_10px_30px_-5px_rgba(224,28,36,0.5)]"
            >
              Agendar
            </a>
          </li>
        </ul>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center text-white bg-white/5 rounded-full border border-white/10 relative z-[130] hover:bg-brand/10 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-[#080808]/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,_var(--tw-colors-brand)_0%,transparent_70%)]" />
            {NAVBAR_LINKS.map((link, i) => (
              <motion.a
                key={link.name}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * i }}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-5xl font-display tracking-widest text-[#444] hover:text-brand transition-colors text-center"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              href="https://wa.me/556199741358"
              className="mt-8 bg-brand text-white px-12 py-5 font-bold uppercase tracking-widest text-sm shadow-[0_20px_40px_-5px_rgba(224,28,36,0.4)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Agendar Agora
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 overflow-hidden">
        {/* Background Grid Decoration */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <div className="w-full h-full animate-grid bg-[linear-gradient(rgba(224,28,36,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(224,28,36,0.3)_1px,transparent_1px)] bg-[length:60px_60px]" />
        </div>

        <div className="container mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-12 xl:col-span-7 flex flex-col gap-6 md:gap-10 text-center lg:text-left"
          >
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6">
              <div className="flex items-center gap-2 px-3 py-1 bg-red-950/20 border border-brand/30 rounded-sm text-[10px] font-bold tracking-[0.3em] uppercase text-brand">
                <Star size={10} className="fill-brand" />
                <span className="mt-0.5">Premium Detail Studio</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                <MapPin size={12} className="text-brand" /> Pátio Brasil Shopping, Brasília
              </div>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-display font-black leading-[0.85] tracking-tighter text-white uppercase sm:normal-case">
              CADA <span className="text-brand italic drop-shadow-[0_0_40px_rgba(224,28,36,0.25)] text-stroke">DETALHE</span><br />
              CONTA UMA<br />HISTÓRIA.
            </h2>

            <p className="font-barlow text-gray-400 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium md:font-light">
              Tratamentos exclusivos de purificação e proteção para veículos que exigem o padrão máximo de estética. Experiência técnica de elite.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mt-4 items-center justify-center lg:justify-start">
              <a
                href="https://wa.me/556199741358"
                target="_blank"
                className="w-full sm:w-auto bg-brand text-white px-10 py-5 font-bold text-[10px] uppercase tracking-[0.3em] transition-all hover:bg-brand-dark shadow-[0_15px_40px_-5px_rgba(224,28,36,0.4)] flex items-center justify-center gap-3 group"
              >
                Agendar Agora <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
              <div className="flex gap-8 items-center px-4">
                <div className="flex flex-col items-center lg:items-start leading-none">
                  <span className="text-3xl font-display text-brand">4.5</span>
                  <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-gray-500">Google Rating</span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="flex flex-col items-center lg:items-start leading-none">
                  <span className="text-3xl font-display text-brand">22+</span>
                  <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-gray-500">Serviços</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Featured Visual */}
          <motion.div
            className="lg:col-span-12 xl:col-span-5 relative hidden xl:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <div className="relative z-10 w-full aspect-[4/5] rounded-[2px] overflow-hidden border border-white/5 shadow-2xl group">
              <img
                src="img/mercedes.png"
                className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-1000 group-hover:scale-110"
                alt="High-end Car"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-10 left-10 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="font-display text-4xl tracking-widest text-brand mb-2 italic">CarBoss Pátio</p>
                <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-300">Dominando a Proteção</p>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-brand/10 -rotate-3 rounded-sm pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="bg-[#0a0a0a] py-20 md:py-32 lg:py-48 border-t border-white/5 relative">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeIn} className="max-w-3xl mb-16 md:mb-24 lg:mb-32">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.5em] text-brand mb-6 md:mb-8 flex items-center gap-5">
              <div className="w-12 h-px bg-brand" /> SERVIÇOS ESPECIALIZADOS
            </h2>
            <h3 className="text-4xl sm:text-5xl md:text-8xl font-display font-black tracking-tighter leading-none text-white uppercase">
              REVERÊNCIA AO<br /><span className="text-brand italic pr-4">DETALHE.</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {SERVICES.map((s, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="glass p-10 md:p-14 hover:border-brand/50 transition-all duration-700 group flex flex-col gap-10 hover:-translate-y-3 cursor-default relative overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-brand/5 rounded-full blur-2xl group-hover:bg-brand/10 transition-colors" />
                <div className="text-brand w-14 h-14 flex items-center justify-center bg-black/60 border border-white/10 group-hover:bg-brand group-hover:text-white transition-all duration-500 rounded-[2px] relative z-10">
                  {s.icon}
                </div>
                <div className="relative z-10">
                  <h4 className="text-lg font-bold uppercase tracking-[0.25em] mb-4 group-hover:text-brand transition-colors text-white">{s.title}</h4>
                  <p className="text-gray-500 text-xs uppercase tracking-widest leading-relaxed font-semibold group-hover:text-gray-300 transition-colors">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Protocols Section */}
      <section className="bg-[#080808] py-20 md:py-32 lg:py-48 overflow-hidden relative border-y border-white/5">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />
        <div className="container mx-auto px-6 md:px-12 text-center mb-16 md:mb-32">
          <motion.div {...fadeIn}>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.6em] text-brand mb-6">MÉTODO CARBOSS</h2>
            <h3 className="text-4xl sm:text-5xl md:text-8xl font-display font-black tracking-tighter text-white uppercase italic text-stroke">SISTEMÁTICO.</h3>
          </motion.div>
        </div>

        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {PROTOCOLS.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-[#0a0a0a] p-10 md:p-16 lg:p-20 flex flex-col gap-10 group hover:bg-[#0c0c0c] transition-colors relative h-full"
              >
                <span className="text-5xl md:text-7xl lg:text-5xl xl:text-8xl font-display text-white/10 group-hover:text-brand/20 transition-all duration-500 leading-none absolute top-6 right-6 select-none">{p.id}</span>
                <div className="relative z-10">
                  <h4 className="text-brand font-bold text-[10px] tracking-[0.4em] mb-4 uppercase">{p.sub}</h4>
                  <h5 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-display text-white tracking-[0.05em] mb-8 uppercase leading-tight group-hover:text-brand transition-colors break-words hyphens-auto">{p.title}</h5>
                  <p className="text-gray-500 text-[10px] md:text-[11px] uppercase tracking-widest leading-loose font-medium max-w-[280px]">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Advantage Section */}
      <section className="py-20 md:py-32 lg:py-48 bg-[#080808] border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-12 xl:col-span-5">
              <motion.div {...fadeIn}>
                <h2 className="text-[11px] font-bold uppercase tracking-[0.5em] text-brand mb-8 flex items-center gap-5">
                  <div className="w-12 h-px bg-brand" /> NOSSO DIFERENCIAL
                </h2>
                <h3 className="text-4xl sm:text-5xl md:text-7xl font-display font-black tracking-tighter leading-none text-white mb-10 uppercase xl:normal-case">QUALIDADE<br />SEM <span className="text-brand italic">CONCESSÕES.</span></h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-12 font-medium">Cada veículo que entra na CarBoss Pátio Brasil recebe um diagnóstico individualizado e tratamento técnico que visa o máximo de durabilidade e estética.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {ADVANTAGES.map((adv, i) => (
                    <div key={i} className="flex flex-col gap-3 group">
                      <div className="text-brand mb-2 group-hover:scale-110 transition-transform w-10 h-10 flex items-center justify-center glass rounded-none">{adv.icon}</div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-white">{adv.title}</h4>
                      <p className="text-[11px] text-gray-500 uppercase font-bold leading-tight">{adv.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            <div className="lg:col-span-12 xl:col-span-7 flex justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative w-full aspect-video lg:aspect-square max-w-2xl glass p-1 border-none shadow-[0_0_100px_rgba(224,28,36,0.1)]"
              >
                <img
                  src="img/suv.png"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  alt="Processo CarBoss"
                />
                <div className="absolute -bottom-10 -right-10 bg-brand p-12 hidden md:block shadow-2xl">
                  <div className="font-display text-7xl text-white leading-none">01</div>
                  <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-black">Brasília Elite Choice</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Highlight */}
      <section id="galeria" className="py-20 md:py-32 lg:py-48 bg-[#0c0c0c] border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16 md:mb-24">
            <motion.div {...fadeIn} className="max-w-2xl">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.5em] text-brand mb-6 flex items-center gap-4">
                <div className="w-10 h-px bg-brand" /> PORTFÓLIO
              </h2>
              <h3 className="text-4xl sm:text-5xl md:text-8xl font-display font-black tracking-tighter leading-none text-white uppercase italic">ESTÉTICA<br />EM <span className="text-brand">FOCO.</span></h3>
            </motion.div>
            <motion.p {...fadeIn} className="text-gray-500 text-[10px] md:text-xs uppercase tracking-widest font-bold max-w-sm text-left md:text-right border-l md:border-l-0 md:border-r border-brand/50 pl-6 md:pl-0 md:pr-6">
              MÁQUINAS SELECIONADAS QUE PASSARAM POR NOSSO PROTOCOLO DE PURIFICAÇÃO E PROTEÇÃO.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 h-auto md:h-[900px]">
            <motion.div
              {...fadeIn}
              className="md:col-span-8 relative group overflow-hidden border border-white/5 h-[400px] md:h-full"
            >
              <img src="img/gtr.png" className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-[1.5s] group-hover:scale-105" alt="Portfolio Highlight" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 p-8 md:p-16 flex flex-col justify-end">
                <div className="absolute top-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (navigator.share) {
                        navigator.share({
                          title: `CarBoss - ${GALLERY_IMAGES[0].title}`,
                          text: `Confira este projeto da CarBoss: ${GALLERY_IMAGES[0].title}`,
                          url: window.location.href,
                        });
                      }
                    }}
                    className="w-12 h-12 glass rounded-none flex items-center justify-center text-white hover:bg-brand transition-colors"
                  >
                    <Share2 size={20} />
                  </button>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-[0.5em] text-brand mb-4">{GALLERY_IMAGES[0].tag}</span>
                <h4 className="text-4xl md:text-7xl font-display text-white tracking-widest italic leading-none">{GALLERY_IMAGES[0].title}</h4>
              </div>
            </motion.div>

            <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-6 h-full">
              {GALLERY_IMAGES.slice(1, 3).map((img, i) => (
                <motion.div
                  key={i}
                  {...fadeIn}
                  transition={{ delay: i * 0.2 }}
                  className="relative group overflow-hidden border border-white/5 h-[200px] md:h-full"
                >
                  <img src={img.url} className="w-full h-full object-cover grayscale-[0.6] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" alt={`Portfolio ${i + 2}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 p-6 md:p-10 flex flex-col justify-end">
                    <div className="absolute top-6 right-6 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (navigator.share) {
                            navigator.share({
                              title: `CarBoss - ${img.title}`,
                              text: `Confira este projeto da CarBoss: ${img.title}`,
                              url: window.location.href,
                            });
                          }
                        }}
                        className="w-10 h-10 glass rounded-none flex items-center justify-center text-white hover:bg-brand transition-colors"
                      >
                        <Share2 size={16} />
                      </button>
                    </div>
                    <span className="text-[9px] uppercase font-bold tracking-[0.4em] text-brand mb-2">{img.tag}</span>
                    <h4 className="text-xl md:text-3xl font-display text-white tracking-widest uppercase italic mt-1 leading-none">{img.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <MapSection />

      {/* About Section replaced with Info Strip integration */}
      <section id="sobre" className="relative z-10 grid grid-cols-1 md:grid-cols-3 bg-[#0a0a0a] border-y border-white/5 px-6 md:px-12 py-12 md:py-24 gap-10 md:gap-0">
        <motion.div {...fadeIn} className="flex items-center gap-6">
          <div className="w-14 h-14 rounded-sm border border-brand/30 flex items-center justify-center bg-black/40 shrink-0">
            <MapPin className="text-brand shrink-0" size={24} />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">Localização</span>
            <span className="text-sm font-medium text-white max-w-[200px]">Pátio Brasil Shopping, Subsolo G2, Brasília - DF</span>
          </div>
        </motion.div>

        <motion.div {...fadeIn} id="horarios" className="flex items-center gap-6 md:border-x border-white/10 md:px-12">
          <div className="w-14 h-14 rounded-sm border border-brand/30 flex items-center justify-center bg-black/40 shrink-0">
            <Clock className="text-brand shrink-0" size={24} />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">Atendimento</span>
            <span className="text-sm font-medium text-white">SEG-SEX: 8h às 19h<br />SÁB: 9h às 18h</span>
          </div>
        </motion.div>

        <motion.div {...fadeIn} className="flex items-center justify-start md:justify-end gap-8">
          <div className="flex flex-col items-start md:items-end gap-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">Orçamentos</span>
            <span className="text-xl font-display tracking-widest text-brand leading-none">(61) 9974-1358</span>
          </div>
          <a
            href="https://wa.me/556199741358"
            target="_blank"
            className="w-14 h-14 bg-[#25d366] rounded-full flex items-center justify-center text-white shadow-[0_15px_30px_rgba(37,211,102,0.3)] hover:scale-110 active:scale-95 transition-all cursor-pointer group"
          >
            <Phone size={24} className="fill-current group-hover:rotate-12 transition-transform" />
          </a>
        </motion.div>
      </section>

      {/* Footer Branding */}
      <footer className="bg-[#080808] pt-24 pb-12 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-full border border-brand/40 flex items-center justify-center bg-black shadow-[0_0_30px_rgba(224,28,36,0.1)] transition-transform hover:scale-110 overflow-hidden">
                <img src="img/logo.png" alt="CarBoss Logo" className="w-full h-full object-contain p-2" />
              </div>
              <div>
                <h4 className="text-2xl md:text-4xl font-display tracking-widest uppercase text-white leading-none mb-1">CarBoss</h4>
                <p className="text-[9px] uppercase tracking-[0.4em] text-gray-600 font-bold">Estética Automotiva de Elite</p>
              </div>
            </div>

            <div className="flex gap-6">
              {[
                { icon: <Instagram size={20} />, href: 'https://www.instagram.com/carboss_patio_brasil' },
                { icon: <MapPin size={20} />, href: 'https://maps.google.com' },
                { icon: <Phone size={20} />, href: 'https://wa.me/556199741358' }
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" className="w-12 h-12 border border-white/5 flex items-center justify-center text-gray-600 hover:text-brand hover:border-brand/40 transition-all group rounded-sm focus:outline-none focus:ring-2 focus:ring-brand">
                  <div className="group-hover:scale-110 transition-transform">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-700">© 2025 CARBOSS PÁTIO BRASIL. PROTEÇÃO E EXCELÊNCIA.</p>
            <div className="flex gap-8 text-[9px] font-bold uppercase tracking-[0.2em] text-gray-800 italic">
              <span>Pátio Brasil Shopping | Subsolo G2</span>
              <span>Brasília - DF</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Actions */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4">
        <motion.a
          href="https://www.instagram.com/carboss_patio_brasil"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          whileHover={{ scale: 1.1, x: -5 }}
          className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-[0_10px_30px_rgba(220,39,67,0.3)] group relative"
        >
          <Instagram size={24} />
          <span className="absolute right-full mr-4 px-3 py-1 bg-black/80 text-white text-[10px] font-bold uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">Instagram</span>
        </motion.a>

        <motion.a
          href="https://wa.me/556199741358"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.1, x: -5 }}
          className="w-14 h-14 rounded-full bg-[#25d366] flex items-center justify-center text-white shadow-[0_10px_30px_rgba(37,211,102,0.3)] group relative"
        >
          <div className="absolute inset-0 rounded-full animate-ping bg-[#25d366] opacity-20 group-hover:opacity-0 transition-opacity" />
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
            className="relative z-10"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .01 5.403.01 12.039c0 2.12.556 4.189 1.613 6.046L0 24l6.09-1.597a11.946 11.946 0 005.955 1.595h.005c6.634 0 12.037-5.405 12.041-12.042a11.815 11.815 0 00-3.593-8.307" />
          </svg>
          <span className="absolute right-full mr-4 px-3 py-1 bg-black/80 text-white text-[10px] font-bold uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">WhatsApp</span>
        </motion.a>
      </div>
    </div>
  );
}
