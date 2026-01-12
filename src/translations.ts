export type Language = 'en' | 'az';

export interface Translations {
  nav: {
    about: string;
    technologies: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    role: string;
    description: string;
    projectsBtn: string;
    contactBtn: string;
    stats: {
      projects: string;
      liveSystems: string;
      technologies: string;
    };
  };
  about: {
    title: string;
    content: string[];
    cards: {
      backendTitle: string;
      backendDesc: string;
      codeTitle: string;
      codeDesc: string;
      learningTitle: string;
      learningDesc: string;
    };
  };
  technologies: {
    title: string;
    backend: string;
    databases: string;
    frontend: string;
    devops: string;
  };
  projects: {
    title: string;
    viewLive: string;
    items: {
      name: string;
      description: string;
      tags: string[];
    }[];
  };
  liveProjects: {
    title: string;
    items: {
      name: string;
      description: string;
      tags: string[];
    }[];
  };
  contact: {
    title: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendBtn: string;
  };
  footer: {
    role: string;
    rights: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: 'About',
      technologies: 'Technologies',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Tunay Huseynli',
      role: 'Backend Developer & .NET Specialist',
      description:
        'I architect high-throughput, fault-tolerant backend platforms, translate complex domain requirements into maintainable solutions, and deliver production-grade APIs with modern .NET (ASP.NET Core, EF Core), clean architecture and observability.',
      projectsBtn: 'See My Projects',
      contactBtn: 'Contact Me',
      stats: {
        projects: 'Projects',
        liveSystems: 'Live Systems',
        technologies: 'Technologies',
      },
    },
    about: {
      title: 'About Me',
      content: [
        'I am a backend-oriented developer with extensive experience in the .NET ecosystem. My focus is on API design and architecture, always striving for clean, maintainable code.',
        'I specialize in building RESTful APIs using ASP.NET Core, Entity Framework Core, and implementing clean architecture patterns with tools like Ardalis Clean Architecture, FastEndpoints, and FluentValidation.',
        'Currently, I am continuing to gain experience with React on the frontend, AWS cloud technologies, and Docker containerization while actively working on real projects and strengthening my skills in these areas.',
      ],
      cards: {
        backendTitle: 'Backend Focus',
        backendDesc: 'Specialized in .NET ecosystem and API development',
        codeTitle: 'Clean Code',
        codeDesc: 'Committed to maintainable and scalable architecture',
        learningTitle: 'Always Learning',
        learningDesc: 'Expanding skills in React, AWS, and Docker',
      },
    },
    technologies: {
      title: 'Technologies I Work With',
      backend: 'Backend',
      databases: 'Databases',
      frontend: 'Frontend',
      devops: 'Still Learning',
    },
    projects: {
      title: 'Projects',
      viewLive: 'View Live',
      items: [
        {
          name: 'E-Commerce API Platform',
          description:
            'Scalable REST API for online marketplace with product management, order processing, and payment integration',
          tags: ['ASP.NET Core', 'Entity Framework', 'SQL Server', 'JWT'],
        },
        {
          name: 'Inventory Management System',
          description:
            'Enterprise inventory tracking system with real-time updates and multi-warehouse support',
          tags: ['C#', '.NET', 'PostgreSQL', 'FastEndpoints'],
        },
        {
          name: 'Authentication Service',
          description:
            'Centralized authentication microservice with OAuth2 and JWT token management',
          tags: ['ASP.NET Core', 'Clean Architecture', 'SQL Server'],
        },
        {
          name: 'Task Management API',
          description:
            'Project and task tracking system with team collaboration features and automated workflows',
          tags: ['.NET', 'Entity Framework', 'FluentValidation', 'Swagger'],
        },
      ],
    },
    liveProjects: {
      title: 'Live Projects',
      items: [
        {
          name: 'qutabxana.az',
          description: 'Fast food website is a platform that provides information about the preparation, varieties, and presentation of fast food, a popular part of Azerbaijani cuisine.',
          tags: ['ASP.NET Core', 'MSSQL', 'Next.js'],
        },
        {
          name: 'adal.az',
          description: 'This website represents a professional IT team providing innovative and reliable technology solutions for businesses.',
          tags: ['ASP.NET Core', 'MSSQL', 'Next.js'],
        },
        {
          name: 'houselab.az',
          description: 'This platform is a comprehensive real estate marketplace designed for buying, selling, and renting properties.',
          tags: ['ASP.NET Core', 'Entity Framework Core', 'MSSQL'],
        },
      ],
    },
    contact: {
      title: "Let's Work Together",
      emailLabel: 'Email',
      emailPlaceholder: 'your.email@example.com',
      phoneLabel: 'Phone',
      phonePlaceholder: '+994 XX XXX XX XX',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell me about your project...',
      sendBtn: 'Send Message',
    },
    footer: {
      role: 'Backend Developer',
      rights: 'All rights reserved',
    },
  },
  az: {
    nav: {
      about: 'Haqqımda',
      technologies: 'Texnologiyalar',
      projects: 'Layihələr',
      contact: 'Əlaqə',
    },
    hero: {
      greeting: 'Tunay Huseynli',
      role: 'Backend Developer & .NET Mütəxəssisi',
      description:
        'Mən yüksək yüklənməyə davamlı, miqyaslana bilən backend platformaları arxitektura edir, mürəkkəb domen tələblərini saxlanıla bilən həllərə çevirir və müasir .NET (ASP.NET Core, EF Core) ilə təmiz arxitektura və müşahidə imkanı ilə istehsala hazır API-lər təqdim edir.',
      projectsBtn: 'Proyektlərimə Bax',
      contactBtn: 'Mənimlə Əlaqə Saxla',
      stats: {
        projects: 'Proyektlər',
        liveSystems: 'Canlı Layihələr',
        technologies: 'Texnologiyalar',
      },
    },
    about: {
      title: 'Haqqımda',
      content: [
        'Mən .NET ekosistemində geniş təcrübəyə malik backend yönümlü developerəm. Mənim əsas fokuslarım API dizaynı və arxitekturadır, həmişə təmiz və davamlı kod yazmağa çalışıram.',
        'ASP.NET Core, Entity Framework Core istifadə edərək RESTful API-lər yaratmaqda, Ardalis Clean Architecture, FastEndpoints və FluentValidation kimi alətlərlə təmiz arxitektura nümunələrini tətbiq etməkdə ixtisaslaşmışam.',
        'Hazırda real proyektlər üzərində aktiv şəkildə işləyərək frontend-də React, AWS cloud texnologiyaları və Docker konteynerləşdirməsi sahələrində təcrübə qazanmağa və bacarıqlarımı gücləndirməyə davam edirəm.',
      ],
      cards: {
        backendTitle: 'Backend Fokus',
        backendDesc: '.NET ekosistemində ixtisaslaşmış və API inkişafı',
        codeTitle: 'Təmiz Kod',
        codeDesc: 'Davamlı və miqyaslanabilir arxitekturaya sadiq',
        learningTitle: 'Həmişə Öyrənən',
        learningDesc: 'React, AWS və Docker-də bacarıqları genişləndirmə',
      },
    },
    technologies: {
      title: 'İstifadə Etdiyim Texnologiyalar',
      backend: 'Backend',
      databases: 'Verilənlər Bazası',
      frontend: 'Frontend',
      devops: 'Hələ Öyrənirəm',
    },
    projects: {
      title: 'Layihələr',
      viewLive: 'Canlı Bax',
      items: [
        {
          name: 'E-Ticarət API Platforması',
          description:
            'Məhsul idarəetməsi, sifariş emalı və ödəniş inteqrasiyası ilə onlayn bazarlar üçün miqyaslana bilən REST API',
          tags: ['ASP.NET Core', 'Entity Framework', 'SQL Server', 'JWT'],
        },
        {
          name: 'İnventar İdarəetmə Sistemi',
          description:
            'Real vaxt yeniləmələri və çox anbar dəstəyi ilə müəssisə inventar izləmə sistemi',
          tags: ['C#', '.NET', 'PostgreSQL', 'FastEndpoints'],
        },
        {
          name: 'Autentifikasiya Xidməti',
          description:
            'OAuth2 və JWT token idarəetməsi ilə mərkəzləşdirilmiş autentifikasiya mikroservisi',
          tags: ['ASP.NET Core', 'Clean Architecture', 'SQL Server'],
        },
        {
          name: 'Tapşırıq İdarəetmə API',
          description:
            'Komanda əməkdaşlığı xüsusiyyətləri və avtomatlaşdırılmış iş axınları ilə proyekt və tapşırıq izləmə sistemi',
          tags: ['.NET', 'Entity Framework', 'FluentValidation', 'Swagger'],
        },
      ],
    },
    liveProjects: {
      title: 'Canlı Layihələr',
      items: [
        {
          name: 'qutabxana.az',
          description: 'Azərbaycanlı təbəətin populyar yeməyi olan fast food-un hazırlanması, növləri və təqdimatı haqqında məlumat verən platformadır.',
          tags: ['ASP.NET Core', 'MSSQL', 'Next.js'],
        },
        {
          name: 'adal.az',
          description: 'Bu veb sayt işlər üçün innovativ və etibarlı texnoloji həllər təqdim edən peşəkar İT komandanı təmsil edir.',
          tags: ['ASP.NET Core', 'MSSQL', 'Next.js'],
        },
        {
          name: 'houselab.az',
          description: 'Bu platforma mülk almaq, satmaq və kirayə vermək üçün nəzərdə tutulmuş kompleks daşınmaz əmlak bazarıdır.',
          tags: ['ASP.NET Core', 'Entity Framework Core', 'MSSQL'],
        },
      ],
    },
    contact: {
      title: 'Gəlin Birlikdə Çalışaq',
      emailLabel: 'Email',
      emailPlaceholder: 'sizin.email@example.com',
      phoneLabel: 'Telefon',
      phonePlaceholder: '+994 XX XXX XX XX',
      messageLabel: 'Mesaj',
      messagePlaceholder: 'Layihəniz haqqında danışın...',
      sendBtn: 'Mesaj Göndər',
    },
    footer: {
      role: 'Backend Developer Mütəxəssisi',
      rights: 'Bütün hüquqlar qorunur',
    },
  },
};
