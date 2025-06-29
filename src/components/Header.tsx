
import React, { useState } from 'react';
import { Menu, X, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-unemat-blue to-unemat-green rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">U</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-gray-800">I Semana de Extensão UNEMAT</h1>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>30/06 a 04/07/2025</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>Alto Araguaia, MT</span>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-unemat-blue transition-colors font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-unemat-blue transition-colors font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('programacao')}
              className="text-gray-700 hover:text-unemat-blue transition-colors font-medium"
            >
              Programação
            </button>
            <button 
              onClick={() => scrollToSection('equipe')}
              className="text-gray-700 hover:text-unemat-blue transition-colors font-medium"
            >
              Equipe
            </button>
            <button 
              onClick={() => scrollToSection('parceiros')}
              className="text-gray-700 hover:text-unemat-blue transition-colors font-medium"
            >
              Parceiros
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-unemat-blue transition-colors font-medium"
            >
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-unemat-blue transition-colors font-medium py-2"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left text-gray-700 hover:text-unemat-blue transition-colors font-medium py-2"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('programacao')}
                className="text-left text-gray-700 hover:text-unemat-blue transition-colors font-medium py-2"
              >
                Programação
              </button>
              <button 
                onClick={() => scrollToSection('equipe')}
                className="text-left text-gray-700 hover:text-unemat-blue transition-colors font-medium py-2"
              >
                Equipe
              </button>
              <button 
                onClick={() => scrollToSection('parceiros')}
                className="text-left text-gray-700 hover:text-unemat-blue transition-colors font-medium py-2"
              >
                Parceiros
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left text-gray-700 hover:text-unemat-blue transition-colors font-medium py-2"
              >
                Contato
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
