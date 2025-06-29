
import React from 'react';
import { User, Mail, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TeamSection = () => {
  const coordenador = {
    nome: "Lucas Kriesel Sperotto",
    email: "sperotto@unemat.br",
    categoria: "DOCENTE",
    funcao: "Coordenador"
  };

  const membros = [
    { nome: "Professora Dra. Maria Silva", categoria: "DOCENTE", funcao: "Vice-Coordenadora" },
    { nome: "João Santos", categoria: "SERVIDOR", funcao: "Coordenador Administrativo" },
    { nome: "Ana Paula Costa", categoria: "DOCENTE", funcao: "Coordenadora Pedagógica" },
    { nome: "Carlos Roberto Lima", categoria: "SERVIDOR", funcao: "Apoio Técnico" },
    { nome: "Mariana Oliveira", categoria: "DISCENTE", funcao: "Monitora de Extensão" },
    { nome: "Pedro Henrique", categoria: "DISCENTE", funcao: "Monitor de Tecnologia" },
    { nome: "Laura Fernandes", categoria: "DISCENTE", funcao: "Monitora de Comunicação" },
    { nome: "Rafael Souza", categoria: "DISCENTE", funcao: "Monitor de Eventos" }
  ];

  const colaboradores = [
    { nome: "Dra. Sandra Ribeiro", categoria: "DOCENTE", funcao: "Palestrante Convidada" },
    { nome: "Prof. Eduardo Martins", categoria: "DOCENTE", funcao: "Facilitador de Workshop" },
    { nome: "Juliana Torres", categoria: "SERVIDOR", funcao: "Apoio Logístico" },
    { nome: "André Luiz", categoria: "DISCENTE", funcao: "Voluntário" },
    { nome: "Camila Rodrigues", categoria: "DISCENTE", funcao: "Voluntária" },
    { nome: "Fernando Silva", categoria: "SERVIDOR", funcao: "Suporte Técnico" }
  ];

  const getCategoryColor = (categoria: string) => {
    switch (categoria) {
      case 'DOCENTE':
        return 'bg-unemat-blue text-white';
      case 'SERVIDOR':
        return 'bg-unemat-green text-white';
      case 'DISCENTE':
        return 'bg-unemat-gold text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const TeamMemberCard = ({ member, isCoordinator = false }: any) => (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 bg-gradient-to-br from-unemat-blue to-unemat-green rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-white" />
          </div>
          
          <div className="space-y-2">
            <h3 className="font-bold text-lg text-gray-800">{member.nome}</h3>
            {isCoordinator && member.email && (
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span className="text-sm">{member.email}</span>
              </div>
            )}
          </div>
          
          <div className="space-y-2">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(member.categoria)}`}>
              {member.categoria}
            </span>
            <p className="text-sm text-gray-600 font-medium">{member.funcao}</p>
          </div>
          
          {isCoordinator && (
            <div className="flex items-center space-x-1 text-unemat-gold">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">Coordenador do Evento</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="equipe" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Nossa Equipe</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-unemat-blue to-unemat-green mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça a equipe dedicada que está trabalhando para tornar a I Semana de Extensão 
            uma experiência transformadora para toda a comunidade.
          </p>
        </div>

        {/* Coordenador */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Coordenação</h3>
          <div className="max-w-md mx-auto">
            <TeamMemberCard member={coordenador} isCoordinator={true} />
          </div>
        </div>

        {/* Membros */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Membros da Equipe</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {membros.map((membro, index) => (
              <TeamMemberCard key={index} member={membro} />
            ))}
          </div>
        </div>

        {/* Colaboradores */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Colaboradores</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {colaboradores.map((colaborador, index) => (
              <TeamMemberCard key={index} member={colaborador} />
            ))}
          </div>
        </div>

        {/* Category Legend */}
        <div className="mt-12 text-center">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Legenda de Categorias</h4>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor('DOCENTE')}`}>
                DOCENTE
              </span>
              <span className="text-sm text-gray-600">Professores e Doutores</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor('SERVIDOR')}`}>
                SERVIDOR
              </span>
              <span className="text-sm text-gray-600">Servidores Técnico-Administrativos</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor('DISCENTE')}`}>
                DISCENTE
              </span>
              <span className="text-sm text-gray-600">Estudantes e Monitores</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
