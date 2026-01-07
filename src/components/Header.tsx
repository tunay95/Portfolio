import { Globe } from 'lucide-react';
import { Language, Translations } from '../translations';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

export function Header({ language, setLanguage, t }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gray-900/80 border-b border-gray-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Portfolio
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('technologies')}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              {t.nav.technologies}
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              {t.nav.projects}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              {t.nav.contact}
            </button>
          </div>

          <div className="flex items-center gap-2 bg-gray-800/50 rounded-full p-1">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                language === 'en'
                  ? 'bg-cyan-500 text-white'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('az')}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                language === 'az'
                  ? 'bg-cyan-500 text-white'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              AZ
            </button>
            <Globe className="w-4 h-4 text-gray-400 ml-1" />
          </div>
        </div>
      </nav>
    </header>
  );
}
