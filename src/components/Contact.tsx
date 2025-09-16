import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulação de envio
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Responderemos em breve!",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Entre em{' '}
              <span className="hero-gradient bg-clip-text text-transparent">
                Contato
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tem alguma sugestão, dúvida ou feedback sobre o MestreCuca? 
              Adoraríamos ouvir você!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Informações de Contato */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Fale conosco
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="hero-gradient p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">contato@mestrecuca.ai</p>
                    <p className="text-sm text-muted-foreground/70">Respondemos em até 24h</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="hero-gradient p-3 rounded-lg">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Feedback</h4>
                    <p className="text-muted-foreground">Compartilhe suas experiências</p>
                    <p className="text-sm text-muted-foreground/70">Sua opinião nos ajuda a melhorar</p>
                  </div>
                </div>
              </div>

              {/* FAQ Quick Links */}
              <div className="mt-8 p-6 bg-secondary rounded-xl">
                <h4 className="font-semibold text-secondary-foreground mb-4">Perguntas Frequentes</h4>
                <div className="space-y-2 text-sm">
                  <div className="text-muted-foreground">• Como o MestreCuca cria as receitas?</div>
                  <div className="text-muted-foreground">• Posso sugerir melhorias nas receitas?</div>
                  <div className="text-muted-foreground">• O serviço é gratuito?</div>
                  <div className="text-muted-foreground">• Como reportar um problema?</div>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <div className="bg-card p-8 rounded-xl shadow-brand border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                    Nome
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Conte-nos como podemos ajudar..."
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" variant="cta" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;