import React from 'react';
import { ChefHat, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo e Descrição */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="hero-gradient p-2 rounded-lg">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-card-foreground">MestreCuca</h3>
                <p className="text-xs text-muted-foreground">AI</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A receita perfeita com os ingredientes que você já tem em casa.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="text-center">
            <h4 className="font-semibold mb-4 text-card-foreground">Links Rápidos</h4>
            <div className="space-y-2 text-sm">
              <div>
                <button 
                  onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-card-foreground transition-smooth"
                >
                  Início
                </button>
              </div>
              <div>
                <button 
                  onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-card-foreground transition-smooth"
                >
                  Como Funciona
                </button>
              </div>
              <div>
                <button 
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-card-foreground transition-smooth"
                >
                  Contato
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end gap-1 text-sm text-muted-foreground">
              Feito com <Heart className="w-4 h-4 text-red-400" fill="currentColor" /> para cozinheiros
            </div>
            <div className="text-xs text-muted-foreground/70 mt-2">
              © 2024 MestreCuca AI. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;