import { Server, Database, Layout, Settings } from 'lucide-react';
import { Translations } from '../translations';

interface TechnologiesProps {
  t: Translations;
}

export function Technologies({ t }: TechnologiesProps) {
  const techCategories = [
    {
      title: t.technologies.backend,
      icon: Server,
      color: 'from-cyan-500 to-blue-600',
      borderColor: 'border-cyan-500/30',
      bgColor: 'from-cyan-500/10 to-blue-600/10',
      items: [
        'C#',
        '.NET / ASP.NET Core',
        'Entity Framework Core',
        'RESTful APIs',
        'JWT Authentication',
        'Ardalis Clean Architecture',
        'FastEndpoints',
        'FluentValidation',
      ],
    },
    {
      title: t.technologies.databases,
      icon: Database,
      color: 'from-blue-500 to-cyan-600',
      borderColor: 'border-blue-500/30',
      bgColor: 'from-blue-500/10 to-cyan-600/10',
      items: ['SQL Server', 'PostgreSQL', 'MySQL'],
    },
    {
      title: t.technologies.frontend,
      icon: Layout,
      color: 'from-cyan-500 to-blue-600',
      borderColor: 'border-cyan-500/30',
      bgColor: 'from-cyan-500/10 to-blue-600/10',
      items: ['React + Vite', 'HTML / CSS'],
    },
    {
      title: t.technologies.devops,
      icon: Settings,
      color: 'from-blue-500 to-cyan-600',
      borderColor: 'border-blue-500/30',
      bgColor: 'from-blue-500/10 to-cyan-600/10',
      items: [
        'Docker',
        'AWS',
        'RabbitMQ',
        'Redis',
      ],
    },
  ];

  return (
    <section id="technologies" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.technologies.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${category.bgColor} backdrop-blur-sm border ${category.borderColor} rounded-2xl p-8 hover:scale-105 transition-transform duration-300`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg text-gray-300 text-sm hover:border-cyan-500 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
