
import React, { useState } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ScheduleSection = () => {
  const [selectedDay, setSelectedDay] = useState(0);

  const schedule = [
    {
      date: "Segunda-feira, 30/06/2025",
      activities: [
        { time: "08h00", activity: "Credenciamento e Café de Abertura" },
        { time: "08h30", activity: "Solenidade de Abertura" },
        { time: "09h30", activity: "Palestra Magna: 'Extensão Universitária: Ponte entre Academia e Sociedade'" },
        { time: "10h30", activity: "Coffee Break" },
        { time: "11h00", activity: "Mesa Redonda: 'Transformação Social através da Extensão'" },
        { time: "12h00", activity: "Intervalo para Almoço" },
        { time: "14h00", activity: "Oficina: 'Tecnologia e Inclusão Digital'" },
        { time: "15h30", activity: "Workshop: 'Comunicação Comunitária e Letras'" },
        { time: "17h00", activity: "Atendimento Jurídico Gratuito (OAB)" }
      ]
    },
    {
      date: "Terça-feira, 01/07/2025", 
      activities: [
        { time: "08h00", activity: "Recepção dos Participantes" },
        { time: "08h30", activity: "Caminhão do MT Ciências - Atividades Interativas" },
        { time: "10h00", activity: "Emissão de RG Digital (POLITEC-MT)" },
        { time: "10h30", activity: "Atualização de Carteira de Vacinação" },
        { time: "11h00", activity: "Tipagem Sanguínea (Secretaria Municipal de Saúde)" },
        { time: "12h00", activity: "Intervalo para Almoço" },
        { time: "14h00", activity: "Orientações SINE - Portal gov.br e Mercado de Trabalho" },
        { time: "15h00", activity: "Curso: 'Desenvolvimento de Software para Iniciantes'" },
        { time: "16h30", activity: "Atendimentos CRAS - Orientações Sociais" },
        { time: "17h30", activity: "Encerramento das Atividades do Dia" }
      ]
    },
    {
      date: "Quarta-feira, 02/07/2025",
      activities: [
        { time: "08h00", activity: "Abertura do Dia" },
        { time: "08h30", activity: "Workshop: 'Literatura e Identidade Regional'" },
        { time: "10h00", activity: "Circuito Itinerante da Ciência de Mato Grosso" },
        { time: "10h30", activity: "Coffee Break" },
        { time: "11h00", activity: "Oficina: 'Programação para Jovens'" },
        { time: "12h00", activity: "Intervalo para Almoço" },
        { time: "14h00", activity: "Mesa Redonda: 'Direitos Humanos e Cidadania'" },
        { time: "15h30", activity: "Curso: 'Produção Textual e Comunicação'" },
        { time: "17h00", activity: "Atendimento Jurídico Gratuito (OAB)" },
        { time: "18h00", activity: "Atividades Culturais" }
      ]
    },
    {
      date: "Quinta-feira, 03/07/2025",
      activities: [
        { time: "08h00", activity: "Recepção Matinal" },
        { time: "08h30", activity: "Palestra: 'Inovação Tecnológica e Desenvolvimento Regional'" },
        { time: "10h00", activity: "Continuação - Emissão de RG Digital" },
        { time: "10h30", activity: "Coffee Break" },
        { time: "11h00", activity: "Workshop: 'Análise de Dados e Sociedade'" },
        { time: "12h00", activity: "Intervalo para Almoço" },
        { time: "14h00", activity: "Curso: 'Redação Jurídica e Peticionamento'" },
        { time: "15h30", activity: "Oficina: 'Criação de Conteúdo Digital'" },
        { time: "16h30", activity: "Atendimentos CRAS - Orientações Sociais" },
        { time: "17h30", activity: "Sessão de Networking" }
      ]
    },
    {
      date: "Sexta-feira, 04/07/2025",
      activities: [
        { time: "08h00", activity: "Último Dia - Recepção" },
        { time: "08h30", activity: "Mesa Redonda: 'Futuro da Extensão Universitária'" },
        { time: "10h00", activity: "Apresentação de Resultados dos Cursos e Oficinas" },
        { time: "10h30", activity: "Coffee Break" },
        { time: "11h00", activity: "Finalização dos Atendimentos dos Parceiros" },
        { time: "12h00", activity: "Intervalo para Almoço" },
        { time: "14h00", activity: "Avaliação do Evento - Feedback dos Participantes" },
        { time: "15h00", activity: "Entrega de Certificados" },
        { time: "16h00", activity: "Solenidade de Encerramento" },
        { time: "17h00", activity: "Confraternização Final" }
      ]
    }
  ];

  return (
    <section id="programacao" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Programação Completa</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-unemat-blue to-unemat-green mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cinco dias de atividades extensionistas com cursos, oficinas, palestras e atendimentos 
            à comunidade, promovendo conhecimento e transformação social.
          </p>
        </div>

        {/* Day Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {schedule.map((day, index) => (
            <Button
              key={index}
              variant={selectedDay === index ? "default" : "outline"}
              className={`px-4 py-2 text-sm font-medium ${
                selectedDay === index 
                  ? "bg-unemat-blue text-white" 
                  : "text-unemat-blue border-unemat-blue hover:bg-unemat-blue hover:text-white"
              }`}
              onClick={() => setSelectedDay(index)}
            >
              {day.date.split(',')[0]}
              <span className="hidden sm:inline ml-1">{day.date.split(',')[1]}</span>
            </Button>
          ))}
        </div>

        {/* Selected Day Schedule */}
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader className="bg-gradient-to-r from-unemat-blue to-unemat-green text-white">
              <CardTitle className="flex items-center space-x-3">
                <Calendar className="w-6 h-6" />
                <span>{schedule[selectedDay].date}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-gray-200">
                {schedule[selectedDay].activities.map((item, index) => (
                  <div 
                    key={index} 
                    className="p-6 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                      <div className="flex items-center space-x-2 text-unemat-blue font-semibold min-w-[80px]">
                        <Clock className="w-4 h-4" />
                        <span>{item.time}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-800 font-medium">{item.activity}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Event Location Info */}
          <Card className="bg-gradient-to-r from-gray-50 to-gray-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-center space-x-2 text-gray-700">
                <MapPin className="w-5 h-5 text-unemat-green" />
                <span className="font-medium">
                  Todas as atividades acontecem no Campus de Alto Araguaia - UNEMAT
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
