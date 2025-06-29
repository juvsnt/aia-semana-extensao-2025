
import React from 'react';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-hero">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            I Semana de Extensão Universitária
            <span className="block text-3xl md:text-5xl text-unemat-gold mt-2">
              UNEMAT Alto Araguaia
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Formação, Inclusão e Transformação Social
          </p>
          
          <p className="text-lg mb-12 max-w-3xl mx-auto opacity-90">
            Uma ação integrada entre cursos e projetos voltada ao fortalecimento do vínculo 
            entre a universidade e a comunidade externa, promovendo conhecimento em benefício da sociedade.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Calendar className="w-8 h-8 mx-auto mb-3 text-unemat-gold" />
                <p className="font-semibold text-lg">Período</p>
                <p className="text-sm opacity-90">30/06 a 04/07/2025</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 mx-auto mb-3 text-unemat-gold" />
                <p className="font-semibold text-lg">Local</p>
                <p className="text-sm opacity-90">Campus Alto Araguaia</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 mx-auto mb-3 text-unemat-gold" />
                <p className="font-semibold text-lg">Público</p>
                <p className="text-sm opacity-90">5.500 pessoas</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 mx-auto mb-3 text-unemat-gold" />
                <p className="font-semibold text-lg">Carga Horária</p>
                <p className="text-sm opacity-90">40 horas</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-unemat-blue hover:bg-gray-100 font-semibold px-8 py-3"
              onClick={() => scrollToSection('programacao')}
            >
              Ver Programação Completa
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-unemat-blue font-semibold px-8 py-3"
              onClick={() => scrollToSection('parceiros')}
            >
              Conheça Nossos Parceiros
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
