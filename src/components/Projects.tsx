import { ExternalLink, Code2 } from 'lucide-react';
import { Translations } from '../translations';
import qutabxanaImage from '../images/qutabxana.png';
import adalImage from '../images/adal.png';
import houselabImage from '../images/houselab.png';

interface ProjectsProps {
  t: Translations;
}

export function Projects({ t }: ProjectsProps) {
  const liveProjects = [
    {
      name: 'qutabxana.az',
      url: 'https://qutabxana.az',
      description: 'Library catalog and lending platform (live)',
      image: qutabxanaImage,
      tags: ['ASP.NET Core', 'MSSQL', 'Next.js'],
    },
    {
      name: 'adal.az',
      url: 'https://adal.az',
      description: 'Business directory and listings platform (live)',
      image: adalImage,
      tags: ['ASP.NET Core', 'MSSQL', 'Next.js'],
    },
    {
      name: 'houselab.az',
      url: 'https://houselab.az',
      description: 'Property management and booking platform (live)',
      image: houselabImage,
      tags: ['ASP.NET Core', 'Entity Framework Core', 'MSSQL'],
    },
  ];
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.projects.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {t.projects.items.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-bl-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <button className="text-gray-400 hover:text-cyan-400 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.name}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-800/80 border border-gray-700 rounded-md text-cyan-400 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-white mb-8">Live Projects</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {liveProjects.map((p, i) => (
              <a
                key={i}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all"
              >
                <div className="h-40 w-full bg-gray-800 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23374151"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="20" fill="%2306b6d4" text-anchor="middle" dominant-baseline="middle"%3E' + p.name + '%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {p.name}
                    </h4>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400" />
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag, ti) => (
                      <span
                        key={ti}
                        className="px-3 py-1 bg-gray-800/80 border border-gray-700 rounded-md text-cyan-400 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
