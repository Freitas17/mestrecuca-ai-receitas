import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChefHat, Sparkles } from 'lucide-react';
import Chat from './Chat';
import heroImage from '@/assets/hero-ingredients.jpg';

const Hero = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <section id="inicio" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo Principal */}
          <div className="text-center lg:text-left">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Sua receita perfeita,{' '}
              <span className="hero-gradient bg-clip-text text-transparent">
                a um chat de distância
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A receita perfeita com os ingredientes que você já tem em casa. 
              Conte para o MestreCuca o que você tem na cozinha e receba receitas 
              personalizadas em segundos!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                variant="cta" 
                size="lg" 
                onClick={() => setShowChat(true)}
                className="text-lg px-8 py-4 h-auto"
              >
                <ChefHat className="w-5 h-5 mr-2" />
                Conversar com o MestreCuca
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-lg px-8 py-4 h-auto"
              >
                Como funciona?
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start text-center">
              <div>
                <div className="text-2xl font-bold text-brand-orange">10k+</div>
                <div className="text-sm text-gray-600">Receitas criadas</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-orange">5min</div>
                <div className="text-sm text-gray-600">Tempo médio</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-orange">98%</div>
                <div className="text-sm text-gray-600">Satisfação</div>
              </div>
            </div>
          </div>

          {/* Chat ou Imagem */}
          <div className="flex justify-center">
            {showChat ? (
              <div className="w-full">
                <Chat />
              </div>
            ) : (
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="Ingredientes frescos e coloridos" 
                  className="rounded-2xl shadow-brand w-full max-w-md lg:max-w-lg"
                />
                <div className="absolute inset-0 hero-gradient opacity-10 rounded-2xl"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;