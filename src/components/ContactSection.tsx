
import React from 'react';
import { Mail, MapPin, Phone, Calendar, Clock, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Contato</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-unemat-blue to-unemat-green mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entre em contato conosco para mais informações sobre a I Semana de Extensão 
            Universitária da UNEMAT em Alto Araguaia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <User className="w-6 h-6 text-unemat-blue" />
                  <span>Coordenação do Evento</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-unemat-blue/10 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-unemat-blue" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Lucas Kriesel Sperotto</p>
                    <p className="text-gray-600 text-sm">Coordenador</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-unemat-green/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-unemat-green" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">sperotto@unemat.br</p>
                    <p className="text-gray-600 text-sm">E-mail para contato</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-unemat-green" />
                  <span>Localização</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="font-semibold text-gray-800">
                    Campus de Alto Araguaia - UNEMAT
                  </p>
                  <p className="text-gray-600">
                    Alto Araguaia, Mato Grosso<br />
                    Brasil
                  </p>
                  <div className="pt-4">
                    <div className="bg-gray-100 rounded-lg p-4 text-center">
                      <MapPin className="w-8 h-8 text-unemat-green mx-auto mb-2" />
                      <p className="text-sm text-gray-600">
                        Mapa interativo será disponibilizado em breve
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Event Details */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-unemat-blue" />
                  <span>Informações do Evento</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-unemat-blue/5 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="w-4 h-4 text-unemat-blue" />
                      <span className="font-semibold text-gray-800">Período</span>
                    </div>
                    <p className="text-gray-700">30/06 a 04/07/2025</p>
                  </div>
                  <div className="bg-unemat-green/5 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="w-4 h-4 text-unemat-green" />
                      <span className="font-semibold text-gray-800">Carga Horária</span>
                    </div>
                    <p className="text-gray-700">40 horas</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Código do Evento</h4>
                  <p className="text-unemat-blue font-mono text-lg">EV376-2025</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Instituição Organizadora</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-800">UNEMAT</h4>
                    <p className="text-gray-600 text-sm">Universidade do Estado de Mato Grosso</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Unidade</h4>
                    <p className="text-gray-600 text-sm">
                      Faculdade de Letras, Ciências Sociais e Tecnológicas - AIA
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Campus</h4>
                    <p className="text-gray-600 text-sm">Alto Araguaia</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media / Future Updates */}
            <Card className="bg-gradient-to-r from-unemat-blue to-unemat-green text-white">
              <CardContent className="p-6 text-center">
                <h4 className="font-bold text-lg mb-3">Mantenha-se Atualizado</h4>
                <p className="text-sm opacity-90 mb-4">
                  Acompanhe as novidades e atualizações sobre o evento através do 
                  nosso canal de comunicação oficial.
                </p>
                <div className="bg-white/20 rounded-lg p-3">
                  <Mail className="w-5 h-5 mx-auto mb-1" />
                  <p className="text-sm font-semibold">sperotto@unemat.br</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Dúvidas Frequentes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-unemat-blue mb-2">
                    Como participar do evento?
                  </h4>
                  <p className="text-gray-700 text-sm">
                    O evento é aberto à comunidade. Mais informações sobre inscrições 
                    serão divulgadas em breve através do e-mail oficial.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-unemat-blue mb-2">
                    O evento é gratuito?
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Sim, todas as atividades e serviços oferecidos durante a 
                    I Semana de Extensão são totalmente gratuitos.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-unemat-blue mb-2">
                    Há certificados?
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Sim, serão emitidos certificados de participação com carga 
                    horária de 40 horas para os participantes.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-unemat-blue mb-2">
                    Posso participar de todas as atividades?
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Sim, você pode participar de quantas atividades desejar 
                    durante os cinco dias do evento.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
