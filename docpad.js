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
    // callToAction: {
    //    text: "Zarejestruj się!",
    //    link: "https://officeserverssummit2018.evenea.pl/"
    //},

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
        bio: "Konrad od 1993 zajmuje się projektowaniem i wdrażaniem systemów informatycznych opartych o różne platformy sieciowe, od 1996 związany z platformą Microsoft Windows Server. Do jego specjalności należą: projektowanie i zarządzanie systemami usług pocztowych MS Exchange i pracy grupowej Skype for Business, projektowanie i zarządzanie systemami usług katalogowych MS Active Directory, projektowanie i zarządzanie infrastrukturą sieciową, usługami bezpieczeństwa i zarządzania tożsamością. Twórca Polskiej Grupy Profesjonalistów i Użytkowników Exchange PEPUG. Od 12 lat otrzymuje tytuł MVP, przez 9 lat w kategorii Exchange Server, ostatnio w kategorii Office Apps & Services.",
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
        name: "PAweł Czarnecki",
        photo: "",
        bio: "Paweł jest inżynierem systemowym w zespole usług komunikacyjnych, zajmuje się wdrażaniem i adaptacją usług Offfice 365",
        company: "APN Promise S.A.",
        link: {
          href: "https://twitter.com/KamilBaczyk",
          text: "@KamilBaczyk"
        },
        presentation: {
          title: "Zakładanie zespołów w Teams",
          description: "Dobre praktyki przy wdrażaniu Microosft Teams - automatyzacja zadań",
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
          title: "Teams i Skype for Business – koegzystencja czy odseparowane wyspy?",
          description: "Podczas sesji dowiedziesz się jak Microsoft Teams oraz Skype for Business wspierają koegzystencję pomiędzy sobą i jak wygląda migracja. Zostaną również zaprezentowane możliwości integracji platformy Microsoft Teams ze sprzętem konferencyjnym, a także scenariusze użycia.",
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