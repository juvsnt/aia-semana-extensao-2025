
import React from 'react';
import { Shield, Truck, Heart, Briefcase, Users, Scale } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PartnersSection = () => {
  const partners = [
    {
      name: "POLITEC-MT",
      description: "Emissão de identidade digital (RG)",
      icon: Shield,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      name: "Secretaria de Estado de Ciência, Tecnologia e Inovação (SECITECI)",
      description: "Caminhão do MT Ciências, Circuito Itinerante da Ciência de Mato Grosso",
      icon: Truck,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      name: "Secretaria Municipal de Saúde",
      description: "Atualização da carteira de vacinação e tipagem sanguínea",
      icon: Heart,
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      name: "SINE",
      description: "Orientações sobre acesso ao portal gov.br, cadastro em vagas de emprego e preparação para o mercado de trabalho",
      icon: Briefcase,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      name: "CRAS (Centro de Referência em Assistência Social)",
      description: "Atendimentos e orientações sociais",
      icon: Users,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      name: "Ordem dos Advogados do Brasil (OAB)",
      description: "Atendimento jurídico gratuito",
      icon: Scale,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    }
  ];

  return (
    <section id="parceiros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Nossos Parceiros</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-unemat-blue to-unemat-green mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A I Semana de Extensão conta com o apoio de parceiros institucionais que contribuem 
            com serviços essenciais para o fortalecimento do vínculo entre universidade e comunidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${partner.bgColor} flex-shrink-0`}>
                    <partner.icon className={`w-6 h-6 ${partner.color}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 leading-tight">
                      {partner.name}
                    </h3>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {partner.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partnership Impact */}
        <div className="mt-16 bg-gradient-to-r from-unemat-blue to-unemat-green rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Impacto das Parcerias</h3>
            <p className="text-lg opacity-90 max-w-4xl mx-auto leading-relaxed">
              Através dessas parcerias estratégicas, conseguimos oferecer à comunidade serviços 
              gratuitos e de qualidade que vão desde documentação civil até orientação profissional, 
              demonstrando como a extensão universitária pode ser um agente real de transformação social.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">6</div>
              <div className="text-sm opacity-90">Parceiros Institucionais</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">5.500</div>
              <div className="text-sm opacity-90">Pessoas Beneficiadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">40h</div>
              <div className="text-sm opacity-90">de Serviços Gratuitos</div>
            </div>
          </div>
        </div>

        {/* Call to Action for Future Partnerships */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-gray-50">
            <CardContent className="p-8">
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                Interessado em ser nosso parceiro?
              </h4>
              <p className="text-gray-600 mb-6">
                Se sua instituição tem interesse em contribuir com a extensão universitária 
                e o desenvolvimento social da região, entre em contato conosco.
              </p>
              <div className="text-unemat-blue font-semibold">
                sperotto@unemat.br
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
