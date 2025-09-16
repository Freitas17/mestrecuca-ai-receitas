import React from 'react';
import { Brain, Clock, Users, Utensils } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "IA Inteligente",
      description: "Nossa inteligência artificial analisa seus ingredientes e cria receitas personalizadas instantaneamente."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Rápido & Fácil",
      description: "Em menos de 5 minutos você tem uma receita completa adaptada ao seu tempo e ingredientes."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Para Todos",
      description: "Desde iniciantes até chefs experientes, o MestreCuca adapta as receitas ao seu nível."
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Zero Desperdício",
      description: "Aproveite todos os ingredientes que você já tem em casa, sem precisar comprar nada novo."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Como funciona o{' '}
            <span className="hero-gradient bg-clip-text text-transparent">
              MestreCuca AI?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nossa inteligência artificial transforma os ingredientes que você tem 
            em casa em receitas deliciosas e personalizadas.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-card rounded-xl shadow-soft hover:shadow-brand transition-smooth group"
            >
              <div className="hero-gradient w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-smooth">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft">
          <h3 className="text-2xl font-bold text-center text-card-foreground mb-8">
            É simples assim:
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-orange text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="text-lg font-semibold text-card-foreground mb-2">
                Liste seus ingredientes
              </h4>
              <p className="text-muted-foreground">
                Conte para o MestreCuca quais ingredientes você tem disponível
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-orange text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="text-lg font-semibold text-card-foreground mb-2">
                Defina suas preferências
              </h4>
              <p className="text-muted-foreground">
                Tempo disponível, restrições alimentares e tipo de refeição
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-orange text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="text-lg font-semibold text-card-foreground mb-2">
                Receba sua receita
              </h4>
              <p className="text-muted-foreground">
                Uma receita completa e personalizada em segundos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;