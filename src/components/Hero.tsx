import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-charcoal-950 flex items-center">
      {/* Background Image Container with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent z-10" />
        <img 
          src="/hero-lawyer-final.jpg" 
          alt="Dr. Kaique Advocacia " 
          className="w-full h-full object-cover object-[right_center] lg:object-[right_30%]"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-16">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-gold uppercase tracking-[0.3em] text-sm font-semibold mb-6 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-gold block"></span>
              Excelência & Exclusividade
            </h2>
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1] mb-8">
              Atuação jurídica para clientes <span className="text-gradient font-light italic">exigentes.</span>
            </h1>
            <p className="text-charcoal-300 text-lg md:text-xl font-light mb-12 max-w-lg leading-relaxed mix-blend-screen">
              Defendendo seu patrimônio com estratégia e precisão. Nossa estrutura é preparada para proporcionar segurança e discrição absolutas.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button className="px-10 py-4 bg-gold border border-gold text-charcoal-950 font-medium hover:bg-gold-light hover:border-gold-light transition-all duration-300 rounded-[2px] uppercase tracking-widest text-xs">
                Agendar Reunião
              </button>
              <button className="px-10 py-4 border border-white/20 text-white font-medium hover:bg-white/5 transition-all duration-300 rounded-[2px] uppercase tracking-widest text-xs">
                Nossa Estrutura
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
