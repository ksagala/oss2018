module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Office Servers Summit 2018",
      description: "Office Servers Summit to konferencja społecznościowa, poświęcona technologiom związanym z produktami serwerowymi Office oraz z platformą Office 365. Tegoroczna edycja poświęcona będzie w szczególności nowym produktom - Exchange 2019, Skype for Business 2019 i Sharepoint 2019",
      date: "5 września 2018",
      // price: "$100",
      venue: "Biuro Microsoft Polska",
      address: "Al. Jerozolimskie 195A",
      city: "Warszawa",
      state: "mazowieckie"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Zarejestruj się!",
        link: "https://officeserverssummit2018.evenea.pl/"
    },

    // Site info
    site: {
      theme: "ksg1",
      url: "http://officeserverssummit2018.pepug.org"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'schedule',
      'speakers',
      'location',
      //'sponsors',
      'partners'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Ogólnie",
      location: "Lokalizacja",
      speakers: "Prelegenci",
      schedule: "Agenda",
      sponsors: "Sponsorzy",
      partners: "Partnerzy",
      contact: "Kontakt"
    },

    // The entire schedule
    schedule: [
      {
        name: "Rejestracja",
        time: "8:30-9:15"
      },
      {
        name: "Rozpoczęcie Konferencji",
        time: "9:15-9:25"
      },
      {
        name: "Konrad Sagała",
        photo: "themes/ksg1/img/konsag.jpg",
        bio: "Konrad od 1993 zajmuje się projektowaniem i wdrażaniem systemów informatycznych opartych o różne platformy sieciowe, od 1996 związany z platformą Microsoft Windows Server. Do jego specjalności należą: projektowanie i zarządzanie systemami usług pocztowych MS Exchange i pracy grupowej Skype for Business, projektowanie i zarządzanie systemami usług katalogowych MS Active Directory, projektowanie i zarządzanie infrastrukturą sieciową, usługami bezpieczeństwa i zarządzania tożsamością. Twórca Polskiej Grupy Profesjonalistów i Użytkowników Exchange PEPUG. Od 10 lat otrzymuje tytuł MVP, przez 9 lat w kategorii Exchange Server, ostatnio w kategorii Office Apps & Services.",
        company: "APN Promise S.A.",
        link: {
          href: "http://twitter.com/sagus",
          text: "@sagus"
        },
        presentation: {
          title: "Skype for Business 2019 - rozwiązanie dla środowisk hybrydowych",
          description: "Choć wielu w to wątpiło, to na rynek wkracza kolejna wersja Skype for Business Server, przeznaczona dla klientów pracujących lokalnie i środowiskach hybrydowych. Sesja pokaże zmiany i usprawniania w nowej wersji aplikacji",
          time: "9:30-10:45"
        }
      },
      {
        name: "Przerwa",
        time: "10:45-11:00"
      },
      {
        name: "Jacek Światowiak",
        photo: "themes/ksg1/img/jacek.jpg",
        bio: "Jacek jest absolwentem Politechniki Gdańskiej, gdzie od 2002 jest wykładowcą na Podyplomowym Studium. Autor szeregu publikacji, prelegent, trener i architekt rozwiązań serwerowych Microsoft, w szczególności z zakresu bezpieczeństwa, usług katologowych i usług komunikacyjnych. Przez kilka lat wyróżnianiany przez Microsoft nagrodą MVP, w kategoriach Directory Services, Exchange i Office Servers & Services.​",
        company: "APN Promise S.A.",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "Nowości w Exchange 2019",
          description: "NA sesji dowiemy się dlaczego warto aktualizować system pocztowy Exchange do nowej wersji, jakie funkcjonalności zostały usprawnione i dodane, a jakie będą wycofywane",
          time: "11:00-12:15"
        }
      },
      {
        name: "Lunch",
        time: "12:15-13:00"
      },
      {
        name: "Kamil Bączyk",
        photo: "themes/ksg1/img/baczyk.jpg",
        bio: "Kamil Bączyk jest światowej klasy ekspertem do spraw infrastruktury i cyberbezpieczeństwa. Jego zainteresowania zawodowe ogniskują się wokół infrastruktury Microsoft, w szczególności platformy biznesowej SharePoint, oraz technologii chmurowych takich jak Microsoft 365, Office 365 i Azure. Co ważne, na wszystkie te obszary patrzy z perspektywy cyberbezpieczeństwa i podatności na ataki hackerskie. Owocuje to licznymi projektami, przede wszystkim dla klientów korporacyjnych, największych światowych instytucji państwowych i organizacji rządowych. Kamila można również spotkać na prestiżowych konferencjach, gdzie bywa nie tylko prelegentem, ale i mentorem. Do najważniejszych z nich należą SecureTech Congress, TechRisk Management Forum, Microsoft Certified Trainers Summits, ShareCon365, konferencje SPS czy międzynarodowe sesje uniwersyteckie. Dzięki swoim wystąpieniom jest doskonale znany w środowisku IT z łączenia problematyki nowych technologii z potrzebami biznesowymi klientów. Potwierdzeniem tych umiejętności są uzyskane przez niego certyfikaty – związane nie tylko ze środowiskiem Microsoft. Kamil jest przede wszystkim pasjonatem, chętnie dzieli się swoją wiedzą z innymi i nieustannie bada nowe technologie. Pozwala mu to nie tylko na doskonalenie szkoleń, które prowadzi, lecz także rozszerzanie swojej oferty o najnowsze zagadnienia z dziedziny IT. Każdego roku bierze udział w konferencjach i projektach, zyskując coraz większe doświadczenie. Prowadzi treningi i konsultacje dla Klientów, którzy oczekują pełnego profesjonalizmu i szerokiej wiedzy. Sam przyznaje, że jest pracoholikiem, więc gdy zajdzie potrzeba, z uporem dąży do znajdowania coraz to nowych rozwiązań i nigdy się nie poddaje!",
        company: "APN Promise S.A.",
        link: {
          href: "https://twitter.com/KamilBaczyk",
          text: "@KamilBaczyk"
        },
        presentation: {
          title: "What's new in Sharepoint 2019",
          description: "Nowe i już znane funkcjonalności najnowszej wersji systemu Sharepoint",
          time: "13:00-14:15"
        }
      },
      {
        name: "Przerwa",
        time: "14:15-14:30"
      },
      {
        name: "Łukasz Kałużny",
        photo: "themes/ksg1/img/lukaszkaluzny.jpg",
        bio: "Cloud Architect, trener, konsultant. Microsoft Most Valuable Professional w kategorii Microsoft Azure",
        company: "",
        link: {
          href: "https://twitter.com/kaluzaaa",
          text: "@kaluzaaa"
        },
        presentation: {
          title: "Użycie platformy Azure jako rozszerzenia aplikacji Office 365",
          description: "Platforma Office jak i Azure przenikają się nie tylko w obszarze zarządzania tożsamością i bezpieczeństwa ale również logiki aplikacyjnej. Tworząc aplikacje na platformie Office 365 jak i integrując komponenty Office sięgamy po takie usługi jak Azure Functions czy LogicApps. Na sesji zobaczymy jak można to zrobić?",
          time: "14:30-15:30"
        }
      },
      {
        name: "Przerwa",
        time: "15:30-15:45"
      },
      {
        name: "Piotr Pawlik",
        photo: "themes/ksg1/img/piotr.jpg",
        bio: "Trener, konsultant. były Microsoft Most Valuable Professional w kategorii Microsoft Exchange, obecnie pracuje jako TSP w Microsoft",
        company: "Microsoft",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "Microsoft Teams - praca grupowa na platformie Office",
          description: "Microsoft Teams to narzędzie, które spina wykorzystuje inne narzędzia pakietu Office, jak Exchange, Sharepoint, etc do sprawdzej współpracy w zespołach zadaniowych. Jakie funkcjonalności już są, a jakie pojawią się w najbliższych miesiącach",
          time: "15:45-16:45"
        }
      },
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Eventick",
        logo: "themes/ksg1/img/sponsor.png",
        url: "http://eventick.com.br"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "APN Promise S.A.",
        logo: "themes/ksg1/img/logoPromise.png",
        url: "http://www.promise.pl"
      },
      {
        name: "Audiocodes",
        logo: "themes/ksg1/img/audiocodes.png",
        url: "http://www.audiocodes.com"
      },
      {
        name: "Microsoft",
        logo: "themes/ksg1/img/ms.png",
        url: "http://www.microsoft.com"
      },
    //  {
    //    name: "Polycom",
    //    logo: "themes/ksg1/img/polycom.png",
    //    url: "http://www.polycom.com"
    //  }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};