import { motion } from 'framer-motion';

const areas = [
  {
    title: "Direito Empresarial",
    desc: "Blindagem patrimonial, fusões, aquisições e estruturação societária robusta para holdings, protegendo o legacy corporativo.",
  },
  {
    title: "Direito Tributário",
    desc: "Otimização fiscal rigorosa e defesas estratégicas impecáveis contra atuações governamentais de alta magnitude.",
  },
  {
    title: "Contratos Complexos",
    desc: "Elaboração e revisão cirúrgica de instrumentos contratuais nacionais e internacionais que garantem blindagem legal.",
  },
  {
    title: "Sucessões e Família",
    desc: "Planejamento sucessório desenhado com extrema discrição e altíssima segurança jurídica para famílias de alto patrimônio.",
  }
];

export default function PracticeAreas() {
  return (
    <section className="py-32 bg-charcoal-900 border-y border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 max-w-3xl mx-auto"
        >
          <h2 className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-6 flex items-center justify-center gap-4">
            <span className="w-8 h-[1px] bg-gold block"></span>
            Áreas de Atuação
            <span className="w-8 h-[1px] bg-gold block"></span>
          </h2>
          <h3 className="text-4xl md:text-6xl font-serif text-white">Domínio Técnico e Estratégico</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-12 border border-white/5 hover:border-gold/30 transition-all duration-700 bg-charcoal-950 relative overflow-hidden backdrop-blur-sm"
            >
              {/* Hover effect gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="absolute top-0 left-0 w-[2px] h-0 bg-gold group-hover:h-full transition-all duration-700 ease-out" />
              
              <h4 className="text-3xl font-serif text-white mb-6 group-hover:text-gold transition-colors duration-500 relative z-10">
                {area.title}
              </h4>
              <p className="text-charcoal-300 leading-relaxed font-light text-lg relative z-10">
                {area.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
