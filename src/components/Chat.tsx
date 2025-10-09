import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, ChefHat } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Olá! Eu sou o MestreCuca 👨‍🍳 Para começar, me diga: quais ingredientes você tem aí na sua cozinha?',
      isUser: false,
      timestamp: new Date(),
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };

    const currentMessage = inputMessage;
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      const response = await fetch('http://localhost:5678/webhook-test/PerguntaReceita', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pergunta: currentMessage,
          timestamp: new Date().toISOString(),
        }),
      });

      const data = await response.json();
      console.log('Resposta completa do N8n:', data);
      
      // Usar apenas a resposta real do webhook, sem fallbacks
      const botResponse = data.resposta || data.response || data.output || data.message;

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Erro ao enviar para N8n:', error);
      // Não mostrar mensagem de erro, apenas falhar silenciosamente
    } finally {
      setIsTyping(false);
    }
  };

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('ovo') || input.includes('ovos')) {
      return '🥚 Ótimo! Ovos são super versáteis. Você tem outros ingredientes como leite, farinha, açúcar ou sal? E que tipo de refeição você gostaria: café da manhã, almoço ou jantar?';
    }
    
    if (input.includes('tomate') || input.includes('cebola') || input.includes('alho')) {
      return '🍅 Perfeito! Esses são ingredientes básicos excelentes. Você tem proteína como frango, carne ou feijão? E prefere algo rápido (até 30 min) ou pode dedicar mais tempo?';
    }
    
    if (input.includes('arroz') || input.includes('feijão')) {
      return '🍚 Clássico brasileiro! Que tal incrementar? Você tem temperos, carnes ou legumes? E para quantas pessoas é a refeição?';
    }

    if (input.includes('rápido') || input.includes('30') || input.includes('minutos')) {
      return `⚡ Entendi que você quer algo rápido! Com base nos ingredientes que você mencionou, aqui está uma receita perfeita:

**🍳 Omelete Turbinada (15 min)**

**Ingredientes:**
• 3 ovos
• 2 colheres de leite
• 1 tomate picado
• Sal e pimenta a gosto
• 1 colher de óleo

**Modo de Preparo:**
1. Bata os ovos com leite, sal e pimenta
2. Aqueça o óleo na frigideira
3. Despeje a mistura e adicione o tomate
4. Dobre ao meio quando dourar

**💡 Dica do Mestre:** Adicione queijo ralado nos últimos minutos para ficar ainda mais saboroso!

Quer outra receita ou alguma variação?`;
    }
    
    return '🤔 Interessante! Me conte mais detalhes: você tem alguma restrição alimentar? Prefere algo doce ou salgado? E quanto tempo tem disponível para cozinhar?';
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-card rounded-lg shadow-brand border border-border">
      {/* Header do Chat */}
      <div className="hero-gradient text-white p-4 rounded-t-lg">
        <div className="flex items-center gap-3">
          <ChefHat className="w-6 h-6" />
          <div>
            <h3 className="font-semibold text-lg">MestreCuca AI</h3>
            <p className="text-white/90 text-sm">Seu assistente culinário inteligente</p>
          </div>
        </div>
      </div>

      {/* Área de Mensagens */}
      <div className="h-96 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg chat-message ${
                message.isUser 
                  ? 'chat-user rounded-br-sm' 
                  : 'chat-bot rounded-bl-sm'
              }`}
            >
              <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="chat-bot p-3 rounded-lg rounded-bl-sm">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input de Mensagem */}
      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Digite seus ingredientes ou faça uma pergunta..."
            className="flex-1"
            disabled={isTyping}
          />
          <Button 
            onClick={handleSendMessage}
            variant="chat"
            size="icon"
            disabled={!inputMessage.trim() || isTyping}
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;