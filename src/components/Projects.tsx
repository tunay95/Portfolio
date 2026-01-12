import { ExternalLink, Code2 } from 'lucide-react';
import { Translations } from '../translations';
import qutabxanaImage from '../images/qutabxana.png';
import adalImage from '../images/adal.png';
import houselabImage from '../images/houselab.png';

interface ProjectsProps {
  t: Translations;
}

export function Projects({ t }: ProjectsProps) {
  return (
    <section id="projects" className="py-12 md:py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.projects.title}
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto">
          {t.projects.items.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 sm:p-6 md:p-8 hover:border-cyan-500/50 transition-all duration-300"
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

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.name}
                </h3>

                <p className="text-gray-400 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
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
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">{t.liveProjects.title}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {t.liveProjects.items.map((p, i) => {
              const urls = ['https://qutabxana.az', 'https://adal.az', 'https://houselab.az'];
              const images = [qutabxanaImage, adalImage, houselabImage];
              return (
                <a
                  key={i}
                  href={urls[i]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all"
                >
                  <div className="h-32 sm:h-40 md:h-40 w-full bg-gray-800 overflow-hidden">
                    <img
                      src={images[i]}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23374151"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="20" fill="%2306b6d4" text-anchor="middle" dominant-baseline="middle"%3E' + p.name + '%3C/text%3E%3C/svg%3E';
                      }}
                    />
                  </div>
                  <div className="p-4 md:p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg md:text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {p.name}
                      </h4>
                      <ExternalLink className="w-4 md:w-5 h-4 md:h-5 text-gray-400 group-hover:text-cyan-400 flex-shrink-0 ml-2" />
                    </div>
                    <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4 line-clamp-3">{p.description}</p>
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {p.tags.map((tag, ti) => (
                        <span
                          key={ti}
                          className="px-2 md:px-3 py-1 bg-gray-800/80 border border-gray-700 rounded-md text-cyan-400 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
