import { Translations } from '../translations';

interface FooterProps {
  t: Translations;
}

export function Footer({ t }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-6 md:py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <div className="text-center md:text-left">
            <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text mb-1">
              Tunay Huseynli
            </div>
            <div className="text-gray-400 text-xs md:text-sm">{t.footer.role}</div>
          </div>

          <div className="text-gray-400 text-xs md:text-sm text-center md:text-right">
            © {currentYear} Tunay Huseynli. {t.footer.rights}.
          </div>
        </div>
      </div>
    </footer>
  );
}
