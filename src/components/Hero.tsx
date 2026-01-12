import { ArrowRight, Mail, Code2, Server, Database } from 'lucide-react';
import { Translations } from '../translations';
import tunayImage from '../images/tunay.jpeg';

interface HeroProps {
  t: Translations;
}

export function Hero({ t }: HeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen pt-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {t.hero.greeting}
              </h1>
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded"></div>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-cyan-400 font-semibold">
                  {t.hero.role}
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
              {t.hero.description}
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-4 pt-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center gap-2"
              >
                {t.hero.projectsBtn}
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white rounded-lg font-semibold hover:border-cyan-500 transition-all flex items-center gap-2"
              >
                {t.hero.contactBtn}
                <Mail className="w-4 sm:w-5 h-4 sm:h-5" />
              </button>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-cyan-500/30 overflow-hidden">
                <img
                  src={tunayImage}
                  alt="Tunay Huseynli"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 mt-16 md:mt-20 max-w-3xl mx-auto px-4 md:px-0">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 md:p-6 text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 mb-2">7+</div>
            <div className="text-gray-400 text-xs sm:text-sm">{t.hero.stats.projects}</div>
          </div>
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 md:p-6 text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 mb-2">3</div>
            <div className="text-gray-400 text-xs sm:text-sm">
              {t.hero.stats.liveSystems}
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 md:p-6 text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 mb-2">10+</div>
            <div className="text-gray-400 text-xs sm:text-sm">
              {t.hero.stats.technologies}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
