
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
        { 
          time: "07h30", 
          activity: "Carreta do MT Ciências - Planetário Digital, Experimentos Externos, Ambiente interativo (Jogos e Óculos VR)" 
        },
        { time: "08h00", activity: "Jogos que Conectam" },
        { time: "08h00", activity: "IA: Do Zero ao Wow! Pergunte Tudo O Que Você Quer Saber" },
        { time: "08h00", activity: "ARTES CÊNICAS: A dramatização da história do chapeuzinho vermelho e a aplicação das lições práticas" },
        { time: "08h00", activity: "Secretaria de Saúde - Regularização de Cartão vacinação; Tipagem Sanguínea" },
        { time: "08h00", activity: "CRAS - Atualização do Cadastro Único, Palestras" },
        { time: "08h00", activity: "SINE - Cadastro gov.br   Orientação para o Mercado de Trabalho; Vagas de emprego" },
        { time: "08h30", activity: "IA: Do Zero ao Wow! Pergunte Tudo O Que Você Quer Saber" },
        { time: "09h00", activity: "Varal Solidário; Unemat na comunidade" },
        { time: "09h00", activity: "IA: Do Zero ao Wow! Pergunte Tudo O Que Você Quer Saber" },
        { time: "09h30", activity: "Sessão Cinema" },
        { time: "09h30", activity: "IA: Do Zero ao Wow! Pergunte Tudo O Que Você Quer Saber" },
        { time: "10h00 - 17h30", activity: "IA: Do Zero ao Wow! Pergunte Tudo O Que Você Quer Saber (continuação)" },
        { time: "13h00", activity: "Libras: Interação com jogos pedagógicos" },
        { time: "13h00", activity: "Orientação Jurídica - OAB Alto Araguaia" },
        { time: "13h30", activity: "Carreta do MT Ciências - Planetário Digital, Experimentos Externos, Ambiente interativo (Jogos e Óculos VR)" },
        { time: "14h00", activity: "Reativação da Quadra de Vôlei de Areia" },
        { time: "15h30", activity: "Sessão Cinema" },
        { time: "18h00", activity: "Game Room" },
        { time: "18h00", activity: "Semana Musical na UNEMAT" },
        { time: "19h00", activity: "Guia Completo para Iniciantes no Poker" },
        { time: "19h00", activity: "Jogos Pedagógicos" },
        { time: "19h00", activity: "ESTILO DE VIDA: Práticas alimentares saudáveis e eliminação de vícios" },
        { time: "20h00", activity: "Conecte-se ao Futuro: Carreiras, LinkedIn e o Mercado de Trabalho Tecnológico" },
        { time: "21h00", activity: "Sessão Cinema" }
      ]
    },
    {
      date: "Terça-feira, 01/07/2025", 
      activities: [
        { 
          time: "07h30", 
          activity: "Carreta do MT Ciências - Planetário Digital, Experimentos Externos, Ambiente interativo (Jogos e Óculos VR)" 
        },
        { time: "07h30", activity: "Oficina: Foguetes de garrafa PET" },
        { time: "08h00", activity: "Jogos que Conectam" },
        { time: "08h00", activity: "IA: Do Zero ao Wow! Pergunte Tudo O Que Você Quer Saber" },
        { time: "08h00", activity: "ARTES CÊNICAS: A dramatização da história do chapeuzinho vermelho e a aplicação das lições práticas" },
        { time: "08h00", activity: "Oficina: Aprendendo a pensar com a Sociologia" },
        { time: "08h00", activity: "Secretaria de Saúde - Regularização de Cartão vacinação; Tipagem Sanguínea" },
        { time: "08h00", activity: "Contando um conto" },
        { time: "08h00", activity: "CRAS - Atualização do Cadastro Único, Palestras" },
        { time: "08h00", activity: "UAB - Exposição Iconográfica" },
        { time: "08h00", activity: "SINE - Cadastro gov.br   Orientação para o Mercado de Trabalho; Vagas de emprego" },
        { time: "08h30 - 17h30", activity: "IA: Do Zero ao Wow! Pergunte Tudo O Que Você Quer Saber (continuação)" },
        { time: "09h00", activity: "Discentes de Letras da UNEMAT e do Ensino Médio em diálogo: resolução do caderno Linguagens, Códigos e suas Tecnologias do ENEM 2024" },
        { time: "09h30", activity: "Sessão Cinema" },
        { time: "10h00", activity: "Educando para um trânsito educado" },
        { time: "13h00", activity: "Carreta do MT Ciências - Planetário Digital, Experimentos Externos, Ambiente interativo (Jogos e Óculos VR)" },
        { time: "13h00", activity: "Viajando no Mundo Da Leitura" },
        { time: "13h30", activity: "Oficina: Foguetes de garrafa PET" },
        { time: "14h00", activity: "Literatura Infantil e Jogos Educativos com Material Reciclável" },
        { time: "14h00", activity: "Reativação da Quadra de Vôlei de Areia" },
        { time: "14h00", activity: "ARTES CÊNICAS: A dramatização da história do chapeuzinho vermelho e a aplicação das lições práticas" },
        { time: "14h00", activity: "Contos na Educação Infantil" },
        { time: "18h00", activity: "Game Room" },
        { time: "18h00", activity: "Semana Musical na UNEMAT" },
        { time: "19h00", activity: "Guia Completo para Iniciantes no Poker" },
        { time: "19h00", activity: "Jogos Pedagógicos" },
        { time: "19h00", activity: "ESTILO DE VIDA: Práticas alimentares saudáveis e eliminação de vícios" },
        { time: "20h00", activity: "Conecte-se ao Futuro: Carreiras, LinkedIn e o Mercado de Trabalho Tecnológico" },
        { time: "21h00", activity: "Sessão Cinema" }
      ]
    },
    {
      date: "Quarta-feira, 02/07/2025",
      activities: [
        { 
          time: "07h30", 
          activity: "Carreta do MT Ciências - Planetário Digital, Experimentos Externos, Ambiente interativo (Jogos e Óculos VR)" 
        },
        { time: "08h00", activity: "Jogos que Conectam" },
        { time: "08h00", activity: "IA: Do Zero ao Wow! Pergunte Tudo O Que Você Quer Saber" },
        { time: "08h00", activity: "ARTES CÊNICAS: A dramatização da história do chapeuzinho vermelho e a aplicação das lições práticas" },
        { time: "08h00", activity: "Secretaria de Saúde - Regularização de Cartão vacinação; Tipagem Sanguínea" },
        { time: "08h00", activity: "CRAS - Atualização do Cadastro Único, Palestras" },
        { time: "08h00", activity: "UAB - Exposição Iconográfica" },
        { time: "08h00", activity: "SINE - Cadastro gov.br   Orientação para o Mercado de Trabalho; Vagas de emprego" },
        { time: "08h30 - 17h30", activity: "IA: Do Zero ao Wow! Pergunte Tudo O Que Você Quer Saber (continuação)" },
        { time: "09h00", activity: "Discentes de Letras da UNEMAT e do Ensino Médio em diálogo: resolução do caderno Linguagens, Códigos e suas Tecnologias do ENEM 2024" },
        { time: "09h30", activity: "Sessão Cinema" },
        { time: "13h00", activity: "Carreta do MT Ciências - Planetário Digital, Experimentos Externos, Ambiente interativo (Jogos e Óculos VR)" },
        { time: "13h30", activity: "Carreta do MT Ciências - Planetário Digital, Experimentos Externos, Ambiente interativo (Jogos e Óculos VR)" },
        { time: "14h00", activity: "Literatura Infantil e Jogos Educativos com Material Reciclável" },
        { time: "14h00", activity: "ARTES CÊNICAS: A dramatização da história do chapeuzinho vermelho e a aplicação das lições práticas" },
        { time: "14h00", activity: "Contos na Educação Infantil" },
        { time: "15h30", activity: "Sessão Cinema" },
        { time: "18h00", activity: "Game Room" },
        { time: "18h00", activity: "Semana Musical na UNEMAT" },
        { time: "19h00", activity: "Guia Completo para Iniciantes no Poker" },
        { time: "19h00", activity: "Jogos Pedagógicos" },
        { time: "19h00", activity: "ESTILO DE VIDA: Práticas alimentares saudáveis e eliminação de vícios" },
        { time: "20h00", activity: "Conecte-se ao Futuro: Carreiras, LinkedIn e o Mercado de Trabalho Tecnológico" },
        { time: "21h00", activity: "Sessão Cinema" }
      ]
    },
    {
      date: "Quinta-feira, 03/07/2025",
      activities: [
        { 
          time: "07h30", 
          activity: "Carreta do MT Ciências - Planetário Digital, Experimentos Externos, Ambiente interativo (Jogos e Óculos VR)" 
        },
        { time: "08h00", activity: "Jogos que Conectam" },
        { time: "08h00", activity: "IA: Do Zero ao Wow! Pergunte Tudo O Que Você Quer Saber" },
        { time: "08h00", activity: "ARTES CÊNICAS: A dramatização da história do chapeuzinho vermelho e a aplicação das lições práticas" },
        { time: "08h00", activity: "Secretaria de Saúde - Regularização de Cartão vacinação; Tipagem Sanguínea" },
        { time: "08h00", activity: "CRAS - Atualização do Cadastro Único, Palestras" },
        { time: "08h00", activity: "UAB - Exposição Iconográfica" },
        { time: "08h00", activity: "SINE - Cadastro gov.br   Orientação para o Mercado de Trabalho; Vagas de emprego" },
        { time: "08h30 - 17h30", activity: "IA: Do Zero ao Wow! Pergunte Tudo O Que Você Quer Saber (continuação)" },
        { time: "09h00", activity: "Discentes de Letras da UNEMAT e do Ensino Médio em diálogo: resolução do caderno Linguagens, Códigos e suas Tecnologias do ENEM 2024" },
        { time: "09h30", activity: "Sessão Cinema" },
        { time: "13h00", activity: "Secretaria de Saúde - Regularização de Cartão vacinação; Tipagem Sanguínea" },
        { time: "13h00", activity: "CRAS - Atualização do Cadastro Único, Palestras" },
        { time: "13h00", activity: "UAB - Exposição Iconográfica" },
        { time: "13h00", activity: "SINE - Cadastro gov.br   Orientação para o Mercado de Trabalho; Vagas de emprego" },
        { time: "13h30", activity: "Carreta do MT Ciências - Planetário Digital, Experimentos Externos, Ambiente interativo (Jogos e Óculos VR)" },
        { time: "14h00", activity: "Literatura Infantil e Jogos Educativos com Material Reciclável" },
        { time: "14h00", activity: "Reativação da Quadra de Vôlei de Areia" },
        { time: "14h00", activity: "ARTES CÊNICAS: A dramatização da história do chapeuzinho vermelho e a aplicação das lições práticas" },
        { time: "14h00", activity: "Contos na Educação Infantil" },
        { time: "15h30", activity: "Sessão Cinema" },
        { time: "18h00", activity: "Game Room" },
        { time: "18h00", activity: "Semana Musical na UNEMAT" },
        { time: "19h00", activity: "Guia Completo para Iniciantes no Poker" },
        { time: "19h00", activity: "Jogos Pedagógicos" },
        { time: "19h00", activity: "ESTILO DE VIDA: Práticas alimentares saudáveis e eliminação de vícios" },
        { time: "20h00", activity: "Conecte-se ao Futuro: Carreiras, LinkedIn e o Mercado de Trabalho Tecnológico" },
        { time: "21h00", activity: "Sessão Cinema" }
      ]
    },
    {
      date: "Sexta-feira, 04/07/2025",
      activities: [
        { 
          time: "07h30", 
          activity: "Carreta do MT Ciências - Planetário Digital, Experimentos Externos, Ambiente interativo (Jogos e Óculos VR)" 
        },
        { time: "07h30", activity: "Oficina: Robótica Criativa" },
        { time: "08h00", activity: "Jogos que Conectam" },
        { time: "08h00", activity: "IA: Do Zero ao Wow! Pergunte Tudo O Que Você Quer Saber" },
        { time: "08h00", activity: "ARTES CÊNICAS: A dramatização da história do chapeuzinho vermelho e a aplicação das lições práticas" },
        { time: "08h00", activity: "Secretaria de Saúde - Regularização de Cartão vacinação; Tipagem Sanguínea" },
        { time: "08h00", activity: "CRAS - Atualização do Cadastro Único, Palestras" },
        { time: "08h00", activity: "UAB - Exposição Iconográfica" },
        { time: "08h00", activity: "SINE - Cadastro gov.br   Orientação para o Mercado de Trabalho; Vagas de emprego" },
        { time: "08h30 - 17h30", activity: "IA: Do Zero ao Wow! Pergunte Tudo O Que Você Quer Saber (continuação)" },
        { time: "09h00", activity: "Discentes de Letras da UNEMAT e do Ensino Médio em diálogo: resolução do caderno Linguagens, Códigos e suas Tecnologias do ENEM 2024" },
        { time: "09h30", activity: "Sessão Cinema" },
        { time: "13h00", activity: "Secretaria de Saúde - Regularização de Cartão vacinação; Tipagem Sanguínea" },
        { time: "13h00", activity: "CRAS - Atualização do Cadastro Único, Palestras" },
        { time: "13h00", activity: "UAB - Exposição Iconográfica" },
        { time: "13h00", activity: "SINE - Cadastro gov.br   Orientação para o Mercado de Trabalho; Vagas de emprego" },
        { time: "13h30", activity: "Oficina: Robótica Criativa" },
        { time: "14h00", activity: "Literatura Infantil e Jogos Educativos com Material Reciclável" },
        { time: "14h00", activity: "ARTES CÊNICAS: A dramatização da história do chapeuzinho vermelho e a aplicação das lições práticas" },
        { time: "14h00", activity: "Contos na Educação Infantil" },
        { time: "15h30", activity: "Sessão Cinema" },
        { time: "18h00", activity: "Game Room" },
        { time: "18h00", activity: "Semana Musical na UNEMAT" },
        { time: "19h00", activity: "Guia Completo para Iniciantes no Poker" },
        { time: "19h00", activity: "Jogos Pedagógicos" },
        { time: "19h00", activity: "ESTILO DE VIDA: Práticas alimentares saudáveis e eliminação de vícios" },
        { time: "20h00", activity: "Conecte-se ao Futuro: Carreiras, LinkedIn e o Mercado de Trabalho Tecnológico" },
        { time: "21h00", activity: "Sessão Cinema" }
      ]
    }
  ];

  return (
    <section id="programacao" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Programação Oficial</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-unemat-blue to-unemat-green mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cinco dias intensos de atividades extensionistas com cursos, oficinas, palestras, 
            atendimentos à comunidade e ações interativas que promovem conhecimento e transformação social.
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
        <div className="max-w-6xl mx-auto">
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
                    className="p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
                      <div className="flex items-center space-x-2 text-unemat-blue font-semibold min-w-[100px]">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{item.time}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-800 text-sm leading-relaxed">{item.activity}</p>
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
              <div className="text-center mt-2 text-sm text-gray-600">
                <p>Muitas atividades acontecem simultaneamente em diferentes espaços do campus</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
