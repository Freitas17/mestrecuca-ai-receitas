import React from 'react';
import { ChefHat, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="hero-gradient p-2 rounded-lg">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-xl text-gray-900">MestreCuca</h1>
              <p className="text-xs text-gray-600">AI</p>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-brand-orange transition-smooth font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-brand-orange transition-smooth font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-brand-orange transition-smooth font-medium"
            >
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;