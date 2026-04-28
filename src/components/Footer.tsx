import {} from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 pt-32 pb-12 relative overflow-hidden">
      {/* Top subtle border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-4xl text-white mb-6 tracking-wide">Dr. KAIQUE</h2>
            <p className="text-charcoal-300 font-light text-lg max-w-md leading-relaxed pr-8">
              A advocacia elevada ao seu mais alto padrão. Defesa implacável dos seus interesses com rigidez técnica e discrição absoluta.
            </p>
          </div>
          
          <div>
            <h4 className="text-gold uppercase tracking-[0.15em] text-xs font-semibold mb-8 flex items-center gap-3">
              <span className="w-4 h-[1px] bg-gold block"></span>
              Escritório
            </h4>
            <ul className="space-y-4 text-charcoal-300 font-light text-lg">
              <li>Av. Faria Lima, 3477</li>
              <li>14º Andar - Itaim Bibi</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gold uppercase tracking-[0.15em] text-xs font-semibold mb-8 flex items-center gap-3">
              <span className="w-4 h-[1px] bg-gold block"></span>
              Contato Direto
            </h4>
            <ul className="space-y-4 text-charcoal-300 font-light text-lg">
              <li className="hover:text-gold transition-colors cursor-pointer duration-300">+55 11 9999-0000</li>
              <li className="hover:text-gold transition-colors cursor-pointer duration-300">contato@aferraz.com.br</li>
              <li className="pt-4">
                <button className="text-white hover:text-gold transition-colors duration-300 border-b border-white/20 hover:border-gold pb-1 italic">
                  Agendar Reunião Sigilosa
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-charcoal-600 font-light">
          <p>&copy; {new Date().getFullYear()} KAIQUE Advocacia Premium. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <span className="hover:text-charcoal-300 transition-colors cursor-pointer duration-300">Termos de Uso</span>
            <span className="hover:text-charcoal-300 transition-colors cursor-pointer duration-300">Política de Privacidade</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
