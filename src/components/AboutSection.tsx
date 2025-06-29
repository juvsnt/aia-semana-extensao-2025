import React from 'react';
import { Target, Users, Heart, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Sobre o Evento</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-unemat-blue to-unemat-green mx-auto mb-8"></div>
        </div>

        {/* Campus Image Section */}
        <div className="mb-16 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <img 
              src="/lovable-uploads/1566111f-58c7-4c42-92e8-a44006155ee6.png" 
              alt="Vista aérea do Campus UNEMAT Alto Araguaia"
              className="w-full h-80 object-cover rounded-xl shadow-lg"
            />
            <p className="text-center text-gray-600 mt-4 text-sm">
              Campus UNEMAT Alto Araguaia - Local da I Semana de Extensão Universitária
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Objetivos e Propósito</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              A extensão tem o papel de conectar a universidade à
              comunidade! Pensando nisso, a UNEMAT preparou uma
              programação CHEIA de cursos, palestras atividades pra
              mostrar pra você as coisas incríveis que acontecem no
              ambiente universitário!
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li className="mb-2">
                Promover a integração entre a UNEMAT e a comunidade
                externa.
              </li>
              <li className="mb-2">
                Oferecer atividades de extensão que contribuam para o
                desenvolvimento social e econômico da região.
              </li>
              <li className="mb-2">
                Estimular a participação da comunidade acadêmica em ações
                de extensão.
              </li>
              <li>
                Divulgar os conhecimentos e as tecnologias produzidas na
                universidade.
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-unemat-blue to-unemat-green rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-800">
                    Foco Comunitário
                  </h3>
                  <p className="text-sm text-gray-600">
                    Atividades pensadas para atender as necessidades da
                    comunidade.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-unemat-blue to-unemat-green rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-800">
                    Público Envolvido
                  </h3>
                  <p className="text-sm text-gray-600">
                    Alunos, professores e a comunidade em geral
                    participando ativamente.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-unemat-blue to-unemat-green rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-800">
                    Impacto Social
                  </h3>
                  <p className="text-sm text-gray-600">
                    Transformando realidades e construindo um futuro melhor
                    para todos.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-unemat-blue to-unemat-green rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-800">
                    Certificação
                  </h3>
                  <p className="text-sm text-gray-600">
                    Certificação de horas complementares para todos os
                    participantes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Impact Metrics Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Métricas de Impacto
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A I Semana de Extensão Universitária visa alcançar números
            expressivos, impactando positivamente a comunidade e
            consolidando o papel da UNEMAT como agente de transformação
            social.
          </p>
        </div>

        {/* Call to Action Section */}
        <div className="text-center animate-fade-in">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Junte-se a Nós!
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Participe da I Semana de Extensão Universitária e faça parte
            dessa experiência transformadora.
          </p>
          {/* You can add a button here to register or learn more */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
