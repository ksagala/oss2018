module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Office Servers Summit 2018",
      description: "Konferencja społecznościowa, poświęcona technologiom związanym z Office 365, Exchange 2019, Skype for Business 2019 i Sharepoint 2019",
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
      'location',
      'speakers',
      'schedule',
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
          title: "Skype for Business 2019",
          description: "",
          time: "9:30-10:45"
        }
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
          title: "Exchange 2019",
          description: "",
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
        bio: "Certyfikowany specjalista i pasjonat technologii, na co dzień konsultant i trener. Regularny uczestnik wielu projektów i wdrożeń związanych z technologiami serwerowymi Microsoft, chmurą prywatną i grupą BPOS - głównie środowisk opartych o Microsoft SharePoint, stanowiących biznesową podstawę przedsiębiorstw. Aktywnie dzieli się swoją wiedzą i promuje nowe rozwiązania wspierając społeczności offline i online WGUiSW, dodatkowo jeden z liderów PInG, laureat konkursu Speaker Idol 2009 i specjalista w 'Ask The Expert' na Microsoft Technology Summit. Microsoft MVP w kategorii Office Apps & Services.​",
        company: "APN Promise S.A.",
        link: {
          href: "https://twitter.com/KamilBaczyk",
          text: "@KamilBaczyk"
        },
        presentation: {
          title: "Sharepoint 2019",
          description: "",
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
        company: "???",
        link: {
          href: "https://twitter.com/kaluzaaa",
          text: "@kaluzaaa"
        },
        presentation: {
          title: "tbd",
          description: "",
          time: "14:30-15:15"
        }
      },
      {
        name: "Przerwa",
        time: "15:15-15:30"
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
          title: "tbd",
          description: "",
          time: "15:30-16:45"
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
      {
        name: "Polycom",
        logo: "themes/ksg1/img/polycom.png",
        url: "http://www.polycom.com"
      }
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