import React from 'react';
import { Zap, Globe, Bot, Cog } from 'lucide-react';

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCards: React.FC = () => {
  const features: FeatureCard[] = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Умная автоматизация",
      description: "Внедрение современных AI-решений для оптимизации процессов и развития бизнеса в Казахстане."
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      title: "Интеграция цифровых платформ",
      description: "Свяжите WhatsApp, Telegram, Kaspi, CRM и Google Sheets в одну систему. Все данные синхронизированы — ни одна заявка не потеряется, никаких переключений между окнами."
    },
    {
      icon: <Bot className="w-6 h-6 text-purple-400" />,
      title: "ИИ-помощники",
      description: "Чат-боты и голосовые ассистенты на базе ИИ берут на себя задачи менеджеров. Они доступны 24/7, общаются с клиентами, собирают информацию и фиксируют её в CRM."
    },
    {
      icon: <Cog className="w-6 h-6 text-gray-300" />,
      title: "Автоматизация процессов",
      description: "Освободите сотрудников от рутины — заявки, бронирования, уведомления обрабатываются без участия человека. Задачи в CRM, мессенджерах и таблицах выполняются автоматически, экономя время команды."
    }
  ];

  return (
    <div className="p-8 mt-20 rounded-3xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="bg-slate-800/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:bg-slate-700/90 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              {feature.icon}
              <h3 className="text-white font-semibold text-lg leading-tight">
                {feature.title}
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;