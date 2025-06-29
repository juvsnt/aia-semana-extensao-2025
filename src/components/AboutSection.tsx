
import React from 'react';
import { Target, Users, Award, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutSection = () => {
  const ods = [
    "Erradicação da Pobreza",
    "Saúde e Bem-Estar", 
    "Educação de Qualidade",
    "Trabalho Decente e Crescimento Econômico",
    "Indústria, Inovação e Infraestrutura",
    "Redução das Desigualdades",
    "Cidades e Comunidades Sustentáveis",
    "Paz, Justiça e Instituições Eficazes",
    "Parcerias e Meios de Implementação"
  ];

  const unidades = [
    {
      tipo: "Proponente",
      nome: "Faculdade de Letras, Ciências Sociais e Tecnológicas - AIA / UNEMAT"
    },
    {
      tipo: "Envolvidas",
      nomes: [
        "Coordenação do Curso de Ciência da Computação - AIA / UNEMAT",
        "Coordenação do Curso de Letras - AIA / UNEMAT", 
        "Coordenação do Curso de Direito - Parceladas AIA - Rondonópolis / UNEMAT",
        "Diretoria de Unidade Regionalizada Administrativa - AIA / UNEMAT"
      ]
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Sobre o Evento</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-unemat-blue to-unemat-green mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-slide-in">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Target className="w-6 h-6 text-unemat-blue" />
                  <span>Objetivos e Propósito</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Esta é a institucionalização da Primeira Semana de Extensão do Câmpus Universitário 
                  de Alto Araguaia – UNEMAT, uma ação integrada entre cursos e projetos voltada ao 
                  fortalecimento do vínculo entre a universidade e a comunidade externa.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Durante o evento, serão realizadas atividades extensionistas nas quais os acadêmicos 
                  serão protagonistas na promoção do conhecimento em benefício da sociedade, por meio 
                  de cursos, oficinas e eventos com temáticas voltadas às áreas de atuação dos cursos 
                  ofertados no câmpus.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  A iniciativa está em consonância com a política de creditação da extensão universitária 
                  e tem como objetivo oportunizar ações que impactem socialmente, contribuindo para a 
                  formação cidadã e o desenvolvimento regional.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-unemat-green" />
                  <span>Informações Técnicas</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-gray-800">Código:</p>
                    <p className="text-gray-600">EV376-2025</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Tipo:</p>
                    <p className="text-gray-600">Evento (Feira)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Área Principal:</p>
                    <p className="text-gray-600">Educação</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Situação:</p>
                    <p className="text-green-600 font-semibold">Em Execução</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Financiamento:</p>
                  <p className="text-gray-600">Ação Auto-Financiada</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-unemat-blue" />
                  <span>Público-Alvo</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-unemat-blue/10 rounded-lg">
                    <p className="text-2xl font-bold text-unemat-blue">5.000</p>
                    <p className="text-gray-700">Comunidade</p>
                  </div>
                  <div className="text-center p-4 bg-unemat-green/10 rounded-lg">
                    <p className="text-2xl font-bold text-unemat-green">500</p>
                    <p className="text-gray-700">Discentes</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Globe className="w-6 h-6 text-unemat-green" />
                <span>Objetivos de Desenvolvimento Sustentável (ODS)</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-2">
                {ods.map((objetivo, index) => (
                  <div key={index} className="flex items-center space-x-2 p-2 bg-gray-50 rounded">
                    <div className="w-2 h-2 bg-unemat-green rounded-full"></div>
                    <span className="text-sm text-gray-700">{objetivo}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Unidades Envolvidas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-unemat-blue mb-3">Unidade Proponente</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {unidades[0].nome}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-unemat-blue mb-3">Unidades Envolvidas</h4>
                <ul className="space-y-2">
                  {unidades[1].nomes.map((nome, index) => (
                    <li key={index} className="text-gray-700 text-sm leading-relaxed flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-unemat-green rounded-full mt-2 flex-shrink-0"></div>
                      <span>{nome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
