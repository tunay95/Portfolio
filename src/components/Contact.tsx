import { Mail, Phone, MessageSquare, Github, Linkedin } from 'lucide-react';
import { Translations } from '../translations';
import { useState } from 'react';

interface ContactProps {
  t: Translations;
}

export function Contact({ t }: ContactProps) {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:tunay.huseynli.hidayat@bsu.edu.az?subject=Contact from Portfolio&body=Email: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
            {t.contact.title}
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded"></div>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6">
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
                <div>
                  <label className="block text-gray-300 mb-1 sm:mb-2 font-medium flex items-center gap-2 text-xs sm:text-sm md:text-base">
                    <Mail className="w-3 sm:w-4 h-3 sm:h-4 text-cyan-400 flex-shrink-0" />
                    {t.contact.emailLabel}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full px-2 sm:px-3 md:px-4 py-2 md:py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors text-xs sm:text-sm md:text-base"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-1 sm:mb-2 font-medium flex items-center gap-2 text-xs sm:text-sm md:text-base">
                    <Phone className="w-3 sm:w-4 h-3 sm:h-4 text-cyan-400 flex-shrink-0" />
                    {t.contact.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder={t.contact.phonePlaceholder}
                    className="w-full px-2 sm:px-3 md:px-4 py-2 md:py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors text-xs sm:text-sm md:text-base"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-1 sm:mb-2 font-medium flex items-center gap-2 text-xs sm:text-sm md:text-base">
                    <MessageSquare className="w-3 sm:w-4 h-3 sm:h-4 text-cyan-400 flex-shrink-0" />
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder={t.contact.messagePlaceholder}
                    rows={4}
                    className="w-full px-2 sm:px-3 md:px-4 py-2 md:py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none text-xs sm:text-sm md:text-base"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-3 sm:px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all text-xs sm:text-sm md:text-base"
                >
                  {t.contact.sendBtn}
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-3 sm:p-4 md:p-5 lg:p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                Connect With Me
              </h3>

              <div className="space-y-2 sm:space-y-3 md:space-y-3 lg:space-y-4">
                <a
                  href="https://github.com/tunay95"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 md:p-3 lg:p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-cyan-500 transition-colors group"
                >
                  <div className="w-9 sm:w-10 md:w-11 lg:w-12 h-9 sm:h-10 md:h-11 lg:h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <Github className="w-4 sm:w-5 md:w-5 lg:w-6 h-4 sm:h-5 md:h-5 lg:h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-white font-semibold text-xs sm:text-sm md:text-sm lg:text-base">GitHub</div>
                    <div className="text-gray-400 text-xs truncate">@tunay95</div>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/tunay-huseynli-3152612b4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 md:p-3 lg:p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-cyan-500 transition-colors group"
                >
                  <div className="w-9 sm:w-10 md:w-11 lg:w-12 h-9 sm:h-10 md:h-11 lg:h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <Linkedin className="w-4 sm:w-5 md:w-5 lg:w-6 h-4 sm:h-5 md:h-5 lg:h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-white font-semibold text-xs sm:text-sm md:text-sm lg:text-base">LinkedIn</div>
                    <div className="text-gray-400 text-xs truncate">Tunay Huseynli</div>
                  </div>
                </a>

                <a
                  href="mailto:tunay.huseynli.hidayat@bsu.edu.az"
                  className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 md:p-3 lg:p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-cyan-500 transition-colors group"
                >
                  <div className="w-9 sm:w-10 md:w-11 lg:w-12 h-9 sm:h-10 md:h-11 lg:h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <Mail className="w-4 sm:w-5 md:w-5 lg:w-6 h-4 sm:h-5 md:h-5 lg:h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-white font-semibold text-xs sm:text-sm md:text-sm lg:text-base">Email</div>
                    <div className="text-gray-400 text-xs truncate">tunay.huseynli.hidayat@bsu.edu.az</div>
                  </div>
                </a>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
