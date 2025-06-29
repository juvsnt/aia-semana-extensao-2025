import React, { useState } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ScheduleSection = () => {
  const [selectedDay, setSelectedDay] = useState(0);

  const schedule = [
    {
      date: "Segunda-feira, 30/06/2025",
      activities: [
        { time: "07h30", activity: "Carreta do MT Ciências - Planetário Digital, Experimentos Externos, Ambiente interativo (Jogos e Óculos VR)", type: "fixo" },
        { time: "08h00", activity: "Jogos que Conectam", type: "oficina" },
        { time: "08h00", activity: "IA: Do Zero ao Wow! Pergunte Tudo O Que Você Quer Saber", type: "palestra" },
        { time: "08h00", activity: "ARTES CÊNICAS: A dramatização da história do chapeuzinho vermelho e a aplicação das lições práticas", type: "cultural" },
        { time: "08h00", activity: "Secretaria de Saúde - Regularização de Cartão vacinação; Tipagem Sanguínea", type: "atendimento" },
        { time: "08h00", activity: "CRAS - Atualização do Cadastro Único, Palestras", type: "atendimento" },
        { time: "08h00", activity: "SINE - Cadastro gov.br   Orientação para o Mercado de Trabalho; Vagas de emprego", type: "atendimento" },
        { time: "08h30", activity: "IA: Do Zero ao Wow! Pergunte Tudo O Que Você Quer Saber", type: "palestra" },
        { time: "09h00", activity: "Varal Solidário; Unemat na comunidade", type: "cultural" },
        { time: "09h30", activity: "Sessão Cinema", type: "cultural" },
        { time: "13h00", activity: "Libras: Interação com jogos pedagógicos", type: "oficina" },
        { time: "13h00", activity: "Orientação Jurídica - OAB Alto Araguaia", type: "atendimento" },
        { time: "13h30", activity: "Carreta do MT Ciências - Planetário Digital, Experimentos Externos, Ambiente interativo (Jogos e Óculos VR)", type: "fixo" },
        { time: "14h00", activity: "Reativação da Quadra de Vôlei de Areia", type: "cultural" },
        { time: "15h30", activity: "Sessão Cinema", type: "cultural" },
        { time: "18h00", activity: "Game Room", type: "cultural" },
        { time: "18h00", activity: "Semana Musical na UNEMAT", type: "cultural" },
        { time: "19h00", activity: "Guia Completo para Iniciantes no Poker", type: "palestra" },
        { time: "19h00", activity: "Jogos Pedagógicos", type: "oficina" },
        { time: "19h00", activity: "ESTILO DE VIDA: Práticas alimentares saudáveis e eliminação de vícios", type: "palestra" },
        { time: "20h00", activity: "Conecte-se ao Futuro: Carreiras, LinkedIn e o Mercado de Trabalho Tecnológico", type: "palestra" },
        { time: "21h00", activity: "Sessão Cinema", type: "cultural" }
      ]
    },
    {
      date: "Terça-feira, 01/07/2025",
      activities: [
        { time: "07h30", activity: "Carreta do MT Ciências - Planetário Digital, Experimentos Externos, Ambiente interativo (Jogos e Óculos VR)", type: "fixo" },
        { time: "07h30", activity: "Oficina: Foguetes de garrafa PET", type: "oficina" },
        { time: "08h00", activity: "Jogos que Conectam", type: "oficina" },
        { time: "08h00", activity: "IA: Do Zero ao Wow! Pergunte Tudo O Que Você Quer Saber", type: "palestra" },
        { time: "08h00", activity: "ARTES CÊNICAS: A dramatização da história do chapeuzinho vermelho e a aplicação das lições práticas", type: "cultural" },
        { time: "08h00", activity: "Oficina: Aprendendo a pensar com a Sociologia", type: "oficina" },
        { time: "08h00", activity: "Secretaria de Saúde - Regularização de Cartão vacinação; Tipagem Sanguínea", type: "atendimento" },
        { time: "08h00", activity: "Contando um conto", type: "cultural" },
        { time: "08h00", activity: "CRAS - Atualização do Cadastro Único, Palestras", type: "atendimento" },
        { time: "08h00", activity: "UAB - Exposição Iconográfica", type: "cultural" },
        { time: "08h00", activity: "SINE - Cadastro gov.br   Orientação para o Mercado de Trabalho; Vagas de emprego", type: "atendimento" },
        { time: "09h00", activity: "Discentes de Letras da UNEMAT e do Ensino Médio em diálogo: resolução do caderno Linguagens, Códigos e suas Tecnologias do ENEM 2024", type: "palestra" },
        { time: "09h30", activity: "Sessão Cinema", type: "cultural" },
        { time: "10h00", activity: "Educando para um trânsito educado", type: "palestra" },
        { time: "13h00", activity: "Carreta do MT Ciências - Planetário Digital, Experimentos Externos, Ambiente interativo (Jogos e Óculos VR)", type: "fixo" },
        { time: "13h00", activity: "Viajando no Mundo Da Leitura", type: "cultural" },
        { time: "13h30", activity: "Oficina: Foguetes de garrafa PET", type: "oficina" },
        { time: "14h00", activity: "Literatura Infantil e Jogos Educativos com Material Reciclável", type: "oficina" },
        { time: "14h00", activity: "Reativação da Quadra de Vôlei de Areia", type: "cultural" },
        { time: "14h00", activity: "ARTES CÊNICAS: A dramatização da história do chapeuzinho vermelho e a aplicação das lições práticas", type: "cultural" },
        { time: "14h00", activity: "Contos na Educação Infantil", type: "cultural" },
        { time: "15h30", activity: "Sessão Cinema", type: "cultural" },
        { time: "18h00", activity: "Game Room", type: "cultural" },
        { time: "18h00", activity: "Semana Musical na UNEMAT", type: "cultural" },
        { time: "19h00", activity: "Guia Completo para Iniciantes no Poker", type: "palestra" },
        { time: "19h00", activity: "Jogos Pedagógicos", type: "oficina" },
        { time: "19h00", activity: "ESTILO DE VIDA: Práticas alimentares saudáveis e eliminação de vícios", type: "palestra" },
        { time: "20h00", activity: "Conecte-se ao Futuro: Carreiras, LinkedIn e o Mercado de Trabalho Tecnológico", type: "palestra" },
        { time: "21h00", activity: "Sessão Cinema", type: "cultural" }
      ]
    }
    { time: "07h30", activity: "Carreta do MT Ciências - Planetário Digital, Experimentos Externos, Ambiente interativo (Jogos e Óculos VR)", type: "fixo" },
      { time: "08h00", activity: "Jogos que Conectam", type: "oficina" },
      { time: "08h00", activity: "IA: Do Zero ao Wow! Pergunte Tudo O Que Você Quer Saber", type: "palestra" },
      { time: "08h00", activity: "ARTES CÊNICAS: A dramatização da história do chapeuzinho vermelho e a aplicação das lições práticas", type: "cultural" },
      { time: "08h00", activity: "Secretaria de Saúde - Regularização de Cartão vacinação; Tipagem Sanguínea", type: "atendimento" },
      { time: "08h00", activity: "CRAS - Atualização do Cadastro Único, Palestras", type: "atendimento" },
      { time: "08h00", activity: "UAB - Exposição Iconográfica", type: "cultural" },
      { time: "08h00", activity: "SINE - Cadastro gov.br   Orientação para o Mercado de Trabalho; Vagas de emprego", type: "atendimento" },
      { time: "09h00", activity: "Discentes de Letras da UNEMAT e do Ensino Médio em diálogo: resolução do caderno Linguagens, Códigos e suas Tecnologias do ENEM 2024", type: "palestra" },
      { time: "09h30", activity: "Sessão Cinema", type: "cultural" },
      { time: "13h00", activity: "Carreta do MT Ciências - Planetário Digital, Experimentos Externos, Ambiente interativo (Jogos e Óculos VR)", type: "fixo" },
      { time: "13h30", activity: "Carreta do MT Ciências - Planetário Digital, Experimentos Externos, Ambiente interativo (Jogos e Óculos VR)", type: "fixo" },
      { time: "14h00", activity: "Literatura Infantil e Jogos Educativos com Material Reciclável", type: "oficina" },
      { time: "14h00", activity: "ARTES CÊNICAS: A dramatização da história do chapeuzinho vermelho e a aplicação das lições práticas", type: "cultural" },
      { time: "14h00", activity: "Contos na Educação Infantil", type: "cultural" },
      { time: "15h30", activity: "Sessão Cinema", type: "cultural" },
      { time: "18h00", activity: "Game Room", type: "cultural" },
      { time: "18h00", activity: "Semana Musical na UNEMAT", type: "cultural" },
      { time: "19h00", activity: "Guia Completo para Iniciantes no Poker", type: "palestra" },
      { time: "19h00", activity: "Jogos Pedagógicos", type: "oficina" },
      { time: "19h00", activity: "ESTILO DE VIDA: Práticas alimentares saudáveis e eliminação de vícios", type: "palestra" },
      { time: "20h00", activity: "Conecte-se ao Futuro: Carreiras, LinkedIn e o Mercado de Trabalho Tecnológico", type: "palestra" },
      { time: "21h00", activity: "Sessão Cinema", type: "cultural" }
    },
    {
      date: "Quinta-feira, 03/07/2025",
      activities: [
        { time: "07h30", activity: "Carreta do MT Ciências - Planetário Digital, Experimentos Externos, Ambiente interativo (Jogos e Óculos VR)", type: "fixo" },
        { time: "08h00", activity: "Jogos que Conectam", type: "oficina" },
        { time: "08h00", activity: "IA: Do Zero ao Wow! Pergunte Tudo O Que Você Quer Saber", type: "palestra" },
        { time: "08h00", activity: "ARTES CÊNICAS: A dramatização da história do chapeuzinho vermelho e a aplicação das lições práticas", type: "cultural" },
        { time: "08h00", activity: "Secretaria de Saúde - Regularização de Cartão vacinação; Tipagem Sanguínea", type: "atendimento" },
        { time: "08h00", activity: "CRAS - Atualização do Cadastro Único, Palestras", type: "atendimento" },
        { time: "08h00", activity: "UAB - Exposição Iconográfica", type: "cultural" },
        { time: "08h00", activity: "SINE - Cadastro gov.br   Orientação para o Mercado de Trabalho; Vagas de emprego", type: "atendimento" },
        { time: "09h00", activity: "Discentes de Letras da UNEMAT e do Ensino Médio em diálogo: resolução do caderno Linguagens, Códigos e suas Tecnologias do ENEM 2024", type: "palestra" },
        { time: "09h30", activity: "Sessão Cinema", type: "cultural" },
        { time: "13h00", activity: "Secretaria de Saúde - Regularização de Cartão vacinação; Tipagem Sanguínea", type: "atendimento" },
        { time: "13h00", activity: "CRAS - Atualização do Cadastro Único, Palestras", type: "atendimento" },
        { time: "13h00", activity: "UAB - Exposição Iconográfica", type: "cultural" },
        { time: "13h00", activity: "SINE - Cadastro gov.br   Orientação para o Mercado de Trabalho; Vagas de emprego", type: "atendimento" },
        { time: "13h30", activity: "Carreta do MT Ciências - Planetário Digital, Experimentos Externos, Ambiente interativo (Jogos e Óculos VR)", type: "fixo" },
        { time: "14h00", activity: "Literatura Infantil e Jogos Educativos com Material Reciclável", type: "oficina" },
        { time: "14h00", activity: "Reativação da Quadra de Vôlei de Areia", type: "cultural" },
        { time: "14h00", activity: "ARTES CÊNICAS: A dramatização da história do chapeuzinho vermelho e a aplicação das lições práticas", type: "cultural" },
        { time: "14h00", activity: "Contos na Educação Infantil", type: "cultural" },
        { time: "15h30", activity: "Sessão Cinema", type: "cultural" },
        { time: "18h00", activity: "Game Room", type: "cultural" },
        { time: "18h00", activity: "Semana Musical na UNEMAT", type: "cultural" },
        { time: "19h00", activity: "Guia Completo para Iniciantes no Poker", type: "palestra" },
        { time: "19h00", activity: "Jogos Pedagógicos", type: "oficina" },
        { time: "19h00", activity: "ESTILO DE VIDA: Práticas alimentares saudáveis e eliminação de vícios", type: "palestra" },
        { time: "20h00", activity: "Conecte-se ao Futuro: Carreiras, LinkedIn e o Mercado de Trabalho Tecnológico", type: "palestra" },
        { time: "21h00", activity: "Sessão Cinema", type: "cultural" }
      ]
    },
    {
      date: "Sexta-feira, 04/07/2025",
      activities: [
        { time: "07h30", activity: "Carreta do MT Ciências - Planetário Digital, Experimentos Externos, Ambiente interativo (Jogos e Óculos VR)", type: "fixo" },
        { time: "07h30", activity: "Oficina: Robótica Criativa", type: "oficina" },
        { time: "08h00", activity: "Jogos que Conectam", type: "oficina" },
        { time: "08h00", activity: "IA: Do Zero ao Wow! Pergunte Tudo O Que Você Quer Saber", type: "palestra" },
        { time: "08h00", activity: "ARTES CÊNICAS: A dramatização da história do chapeuzinho vermelho e a aplicação das lições práticas", type: "cultural" },
        { time: "08h00", activity: "Secretaria de Saúde - Regularização de Cartão vacinação; Tipagem Sanguínea", type: "atendimento" },
        { time: "08h00", activity: "CRAS - Atualização do Cadastro Único, Palestras", type: "atendimento" },
        { time: "08h00", activity: "UAB - Exposição Iconográfica", type: "cultural" },
        { time: "08h00", activity: "SINE - Cadastro gov.br   Orientação para o Mercado de Trabalho; Vagas de emprego", type: "atendimento" },
        { time: "09h00", activity: "Discentes de Letras da UNEMAT e do Ensino Médio em diálogo: resolução do caderno Linguagens, Códigos e suas Tecnologias do ENEM 2024", type: "palestra" },
        { time: "09h30", activity: "Sessão Cinema", type: "cultural" },
        { time: "13h00", activity: "Secretaria de Saúde - Regularização de Cartão vacinação; Tipagem Sanguínea", type: "atendimento" },
        { time: "13h00", activity: "CRAS - Atualização do Cadastro Único, Palestras", type: "atendimento" },
        { time: "13h00", activity: "UAB - Exposição Iconográfica", type: "cultural" },
        { time: "13h00", activity: "SINE - Cadastro gov.br   Orientação para o Mercado de Trabalho; Vagas de emprego", type: "atendimento" },
        { time: "13h30", activity: "Oficina: Robótica Criativa", type: "oficina" },
        { time: "14h00", activity: "Literatura Infantil e Jogos Educativos com Material Reciclável", type: "oficina" },
        { time: "14h00", activity: "ARTES CÊNICAS: A dramatização da história do chapeuzinho vermelho e a aplicação das lições práticas", type: "cultural" },
        { time: "14h00", activity: "Contos na Educação Infantil", type: "cultural" },
        { time: "15h30", activity: "Sessão Cinema", type: "cultural" },
        { time: "18h00", activity: "Game Room", type: "cultural" },
        { time: "18h00", activity: "Semana Musical na UNEMAT", type: "cultural" },
        { time: "19h00", activity: "Guia Completo para Iniciantes no Poker", type: "palestra" },
        { time: "19h00", activity: "Jogos Pedagógicos", type: "oficina" },
        { time: "19h00", activity: "ESTILO DE VIDA: Práticas alimentares saudáveis e eliminação de vícios", type: "palestra" },
        { time: "20h00", activity: "Conecte-se ao Futuro: Carreiras, LinkedIn e o Mercado de Trabalho Tecnológico", type: "palestra" },
        { time: "21h00", activity: "Sessão Cinema", type: "cultural" }
      ]
    }
  ];

  const tagColors = {
    palestra: 'bg-blue-100 text-blue-800',
    oficina: 'bg-green-100 text-green-800',
    cultural: 'bg-yellow-100 text-yellow-800',
    atendimento: 'bg-red-100 text-red-800',
    fixo: 'bg-gray-100 text-gray-800'
  };

  const groupByTime = (activities) => {
    const grouped = {};
    activities.forEach(({ time, activity, type }) => {
      if (!grouped[time]) grouped[time] = [];
      grouped[time].push({ activity, type });
    });
    return grouped;
  };

  return (
    <section id="programacao" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Programação Oficial</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-unemat-blue to-unemat-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Atividades extensionistas com cursos, oficinas, atendimentos e ações interativas.
          </p>
        </div>

        <div className="flex overflow-x-auto justify-center gap-2 pb-4 mb-8">
          {schedule.map((day, index) => (
            <Button
              key={index}
              variant={selectedDay === index ? "default" : "outline"}
              className={`whitespace-nowrap ${selectedDay === index ? 'bg-unemat-blue text-white' : 'text-unemat-blue border-unemat-blue hover:bg-unemat-blue hover:text-white'}`}
              onClick={() => setSelectedDay(index)}
            >
              {day.date}
            </Button>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="mb-6">
            <CardHeader className="bg-gradient-to-r from-unemat-blue to-unemat-green text-white">
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-6 h-6" />
                <span>{schedule[selectedDay].date}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="divide-y divide-gray-200">
              {Object.entries(groupByTime(schedule[selectedDay].activities)).map(([time, events], idx) => (
                <div key={idx} className="p-4">
                  <div className="flex items-center mb-2 text-unemat-blue font-semibold">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{time}</span>
                  </div>
                  <ul className="space-y-1 pl-6 list-disc">
                    {events.map((evt, i) => (
                      <li key={i} className="text-sm text-gray-800 flex items-start gap-2">
                        <Badge className={`${tagColors[evt.type]} rounded-full px-2 py-0.5 text-xs capitalize`}>{evt.type}</Badge>
                        <span>{evt.activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-gray-50">
            <CardContent className="p-4 text-center text-gray-700">
              <div className="flex justify-center items-center gap-2">
                <MapPin className="w-5 h-5 text-unemat-green" />
                <span>Campus UNEMAT - Alto Araguaia</span>
              </div>
              <p className="mt-1 text-sm">Atividades simultâneas em diferentes espaços</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;