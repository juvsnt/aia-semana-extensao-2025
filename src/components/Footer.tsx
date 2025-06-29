
import React from 'react';
import { Mail, MapPin, Calendar, Award } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Event Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-unemat-blue to-unemat-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">U</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">I Semana de Extensão UNEMAT</h3>
                <p className="text-gray-400 text-sm">Alto Araguaia</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Formação, Inclusão e Transformação Social através da extensão universitária. 
              Fortalecendo os vínculos entre universidade e comunidade.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Award className="w-4 h-4" />
              <span>Código: EV376-2025</span>
            </div>
          </div>

          {/* Event Details */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Detalhes do Evento</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Calendar className="w-4 h-4 text-unemat-blue" />
                <span>30/06 a 04/07/2025</span>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="w-4 h-4 text-unemat-green mt-0.5" />
                <span>Campus UNEMAT<br />Alto Araguaia, MT</span>
              </div>
              <div className="text-sm">
                <span className="text-unemat-gold font-semibold">40 horas</span> de atividades
              </div>
              <div className="text-sm">
                <span className="text-unemat-gold font-semibold">5.500</span> pessoas esperadas
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-sm">Coordenação</p>
                <p className="text-gray-300 text-sm">Lucas Kriesel Sperotto</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-unemat-blue" />
                <a 
                  href="mailto:sperotto@unemat.br" 
                  className="text-sm hover:text-unemat-blue transition-colors"
                >
                  sperotto@unemat.br
                </a>
              </div>
              <div className="text-sm text-gray-400">
                Universidade do Estado<br />de Mato Grosso
              </div>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <h4 className="text-lg font-semibold mb-4 text-center">Parceiros Institucionais</h4>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
            <div className="text-xs text-gray-400">POLITEC-MT</div>
            <div className="text-xs text-gray-400">SECITECI</div>
            <div className="text-xs text-gray-400">Secretaria Municipal de Saúde</div>
            <div className="text-xs text-gray-400">SINE</div>
            <div className="text-xs text-gray-400">CRAS</div>
            <div className="text-xs text-gray-400">OAB</div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 UNEMAT - Universidade do Estado de Mato Grosso. Todos os direitos reservados.
            </div>
            <div className="text-sm text-gray-400">
              Campus de Alto Araguaia - Faculdade de Letras, Ciências Sociais e Tecnológicas
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500">
            I Semana de Extensão Universitária: Uma iniciativa em consonância com a política 
            de creditação da extensão universitária para impacto social e desenvolvimento regional.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
