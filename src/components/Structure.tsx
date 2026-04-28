import { motion } from 'framer-motion';

export default function Structure() {
  return (
    <section className="py-32 bg-charcoal-950 relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djI2aDJWMzRoLTI2VjBoLTJ2MzRoMjZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-gold block"></span>
              O Escritório
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-[1.2]">
              Uma arquitetura jurídica pensada para casos de <span className="italic text-charcoal-300 font-light">alta complexidade.</span>
            </h3>
            <p className="text-charcoal-300 text-lg font-light mb-6 leading-relaxed">
              Dr. kaique carneiro fundou o escritório sob uma filosofia inflexível: menos volume, mais precisão. Como uma boutique jurídica, não aceitamos todos os casos. Isso garante nossa total atenção irrestrita e dedicação analítica às demandas que patrocinamos.
            </p>
            <p className="text-charcoal-300 text-lg font-light leading-relaxed">
              Operamos no cruzamento perfeito entre a tradição do Direito impecável e as estratégias mais avançadas e contemporâneas de negociação e litígio.
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className="glass p-10 flex flex-col justify-center items-center text-center mt-12 transition-transform duration-500 hover:-translate-y-2">
              <span className="text-5xl font-serif text-gold mb-4">20+</span>
              <span className="text-charcoal-300 text-xs uppercase tracking-[0.2em]">Anos de Experiência</span>
            </div>
            <div className="glass p-10 flex flex-col justify-center items-center text-center transition-transform duration-500 hover:-translate-y-2">
              <span className="text-5xl font-serif text-gold mb-4">Rigor</span>
              <span className="text-charcoal-300 text-xs uppercase tracking-[0.2em]">Técnico Absoluto</span>
            </div>
            <div className="glass p-10 flex flex-col justify-center items-center text-center transition-transform duration-500 hover:-translate-y-2">
              <span className="text-5xl font-serif text-gold mb-4">98%</span>
              <span className="text-charcoal-300 text-xs uppercase tracking-[0.2em]">Histórico de Sucesso</span>
            </div>
            <div className="glass p-10 flex flex-col justify-center items-center text-center -mt-12 transition-transform duration-500 hover:-translate-y-2">
              <span className="text-5xl font-serif text-gold mb-4">Sigilo</span>
              <span className="text-charcoal-300 text-xs uppercase tracking-[0.2em]">Padrão Ouro</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
