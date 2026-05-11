export interface Winner {
  name: string;
  school: string;
  class: string;
  photo: string;
}

export interface PastEdition {
  academicYear: string;
  eventDate: string;
  first: Winner;
  seconds: Winner[];
  rosa?: Winner[];
  imprenditorialita?: Winner;
  groupPhoto?: string;
  groupPhotoLabel: string;
}

export const pastEditions: PastEdition[] = [
  {
    academicYear: "2023-2024",
    eventDate: "8 Giugno 2024",
    first: {
      name: "Giovanni Tocco",
      school: "Liceo Scientifico F. Masci (Chieti)",
      class: "4B",
      photo: "/images/edizioni-passate/2023-2024/primo_giovanni_tocco.jpg",
    },
    seconds: [
      {
        name: "Giancamillo Alessandroni",
        school: "Liceo Scientifico G. Galilei (Pescara)",
        class: "5A",
        photo: "/images/edizioni-passate/2023-2024/secondo1_giancamillo_alessandroni.jpg",
      },
      {
        name: "Giovanni Camicia",
        school: "Istituto omni-comprensivo Nicola da Guardiagrele (Guardiagrele)",
        class: "4A",
        photo: "/images/edizioni-passate/2023-2024/secondo2_giovanni_camicia.jpg",
      },
    ],
    rosa: [
      {
        name: "Alice De Marcellis",
        school: "Liceo Scientifico A. Einstein (Teramo)",
        class: "3F",
        photo: "/images/edizioni-passate/2023-2024/rosa1_alice_de_marcellis.jpg",
      },
      {
        name: "Cecilia Di Nisio",
        school: "Liceo Scientifico F. Masci (Chieti)",
        class: "3F",
        photo: "/images/edizioni-passate/2023-2024/rosa2_cecilia_di_nisio.jpg",
      },
    ],
    imprenditorialita: {
      name: "Paolo Lamoratta",
      school: "Liceo Scientifico A. Einstein (Teramo)",
      class: "4E",
      photo: "/images/edizioni-passate/2023-2024/imprenditorialita_paolo_lamoratta.jpg",
    },
    groupPhoto: "/images/edizioni-passate/2023-2024/gruppo-2024.jpg",
    groupPhotoLabel: "foto di gruppo (2023-2024)",
  },
  {
    academicYear: "2022-2023",
    eventDate: "7 Giugno 2023",
    first: {
      name: "Andrea Ferretti",
      school: "Liceo Scientifico Einstein (Teramo)",
      class: "3C",
      photo: "/images/edizioni-passate/2022-2023/primo_andrea_ferretti.jpg",
    },
    seconds: [
      {
        name: "Francesca Di Emidio",
        school: "Liceo Scientifico Curie (Giulianova)",
        class: "5B",
        photo: "/images/edizioni-passate/2022-2023/secondo1_francesca_di_emidio.jpg",
      },
      {
        name: "Giovanni Camicia",
        school: "Istituto omni-comprensivo Nicola da Guardiagrele (Guardiagrele)",
        class: "3A",
        photo: "/images/edizioni-passate/2022-2023/secondo2_giovanni_camicia.jpg",
      },
    ],
    rosa: [
      {
        name: "Martina Malatesta",
        school: "Liceo Scientifico Saffo (Roseto)",
        class: "5A",
        photo: "/images/edizioni-passate/2022-2023/rosa_martina_malatesta.jpg",
      },
    ],
    imprenditorialita: {
      name: "Giancamillo Alessandroni",
      school: "Liceo Scientifico G. Galilei (Pescara)",
      class: "4A",
      photo: "/images/edizioni-passate/2022-2023/imprenditorialita_giancamillo_alessandroni.jpg",
    },
    groupPhoto: "/images/edizioni-passate/2022-2023/gruppo-2023.jpg",
    groupPhotoLabel: "foto di gruppo (2022-2023)",
  },
  {
    academicYear: "2021-2022",
    eventDate: "29 Maggio 2022",
    first: {
      name: "Raffaele Antoccia",
      school: "Liceo Scientifico Saffo (Roseto)",
      class: "4B",
      photo: "/images/edizioni-passate/2021-2022/primo_raffaele_antoccia.jpg",
    },
    seconds: [
      {
        name: "Luca Piersante",
        school: "Liceo Scientifico G. Galilei (Pescara)",
        class: "4C",
        photo: "/images/edizioni-passate/2021-2022/secondo1_luca_piersante.jpg",
      },
      {
        name: "Giuseppe Di Lella",
        school: "Liceo Scientifico Mattioli (Vasto)",
        class: "5E",
        photo: "/images/edizioni-passate/2021-2022/secondo2_giuseppe_di_lella.jpg",
      },
    ],
    rosa: [
      {
        name: "Giulia Di Ubaldo",
        school: "Liceo Scientifico Einstein (Teramo)",
        class: "5L",
        photo: "/images/edizioni-passate/2021-2022/rosa_giulia_di_ubaldo.jpg",
      },
    ],
    imprenditorialita: {
      name: "Giuseppe Poeta",
      school: "Liceo Scientifico Einstein (Teramo)",
      class: "5C",
      photo: "/images/edizioni-passate/2021-2022/imprenditorialita_giuseppe_poeta.jpg",
    },
    groupPhoto: "/images/edizioni-passate/2021-2022/gruppo-2022.jpg",
    groupPhotoLabel: "foto di gruppo (2021-2022)",
  },
  {
    academicYear: "2020-2021",
    eventDate: "13 Giugno 2021",
    first: {
      name: "Filippo Passante",
      school: "Polo Liceale Illuminati (Atri)",
      class: "5F",
      photo: "/images/edizioni-passate/2020-2021/primo.jpg",
    },
    seconds: [
      {
        name: "Andrea Massaro",
        school: "Liceo Scientifico (Guardiagrele)",
        class: "5B",
        photo: "/images/edizioni-passate/2020-2021/secondo1.jpg",
      },
      {
        name: "Luca Piersante",
        school: "Liceo Scientifico G. Galilei (Pescara)",
        class: "3C",
        photo: "/images/edizioni-passate/2020-2021/secondo2.jpg",
      },
    ],
    rosa: [
      {
        name: "Chiara Catalano",
        school: "Liceo Scientifico Masci (Chieti)",
        class: "4A",
        photo: "/images/edizioni-passate/2020-2021/rosa.jpg",
      },
    ],
    groupPhotoLabel: "foto di gruppo online (2020-2021)",
  },
  {
    academicYear: "2019-2020",
    eventDate: "13 Giugno 2020",
    first: {
      name: "Samuele Vicario",
      school: "Liceo Scientifico G. Galilei (Pescara)",
      class: "5A",
      photo: "/images/edizioni-passate/2019-2020/primo.jpg",
    },
    seconds: [
      {
        name: "Maria Chiara Picchini",
        school: "Liceo Scientifico Saffo (Roseto)",
        class: "5C",
        photo: "/images/edizioni-passate/2019-2020/secondo.jpg",
      },
      {
        name: "Andrea Perez Cipi",
        school: "Liceo Scientifico D'Ascanio (Montesilvano)",
        class: "4C",
        photo: "/images/edizioni-passate/2019-2020/secondo2.jpg",
      },
    ],
    groupPhoto: "/images/edizioni-passate/2019-2020/gruppo.jpg",
    groupPhotoLabel: "foto di gruppo online (2019-2020)",
  },
  {
    academicYear: "2018-2019",
    eventDate: "1 Giugno 2019",
    first: {
      name: "Marco Liconti",
      school: "Liceo Scientifico G. Galilei (Pescara)",
      class: "3A",
      photo: "/images/edizioni-passate/2018-2019/primo.jpg",
    },
    seconds: [
      {
        name: "Federico De Pasquale",
        school: "Liceo Scientifico G. Galilei (Pescara)",
        class: "5A",
        photo: "/images/edizioni-passate/2018-2019/secondo.jpg",
      },
      {
        name: "Alessandro Angrilli Muglia",
        school: "Liceo Scientifico G. Galilei (Pescara)",
        class: "5B",
        photo: "/images/edizioni-passate/2018-2019/secondo2.jpg",
      },
    ],
    groupPhoto: "/images/edizioni-passate/2018-2019/gruppo.jpg",
    groupPhotoLabel: "foto di gruppo (2018-2019)",
  },
  {
    academicYear: "2017-2018",
    eventDate: "16 Giugno 2018",
    first: {
      name: "Andrea Ciprietti",
      school: "Liceo Scientifico Curie (Giulianova)",
      class: "5B",
      photo: "/images/edizioni-passate/2017-2018/primo.jpg",
    },
    seconds: [
      {
        name: "Alessandro Borgia",
        school: "Liceo Scientifico Saffo (Roseto)",
        class: "5A",
        photo: "/images/edizioni-passate/2017-2018/secondo.jpg",
      },
    ],
    groupPhoto: "/images/edizioni-passate/2017-2018/gruppo.jpg",
    groupPhotoLabel: "foto di gruppo (2017-2018)",
  },
  {
    academicYear: "2016-2017",
    eventDate: "10 Giugno 2017",
    first: {
      name: "Alena Meyer",
      school: "Liceo Scientifico (Teramo)",
      class: "4A",
      photo: "/images/edizioni-passate/2016-2017/primo.jpg",
    },
    seconds: [
      {
        name: "Francesco Di Loreto",
        school: "Liceo Scientifico (Teramo)",
        class: "4E",
        photo: "/images/edizioni-passate/2016-2017/secondo1.jpg",
      },
      {
        name: "Alessandro Borgia",
        school: "Liceo Scientifico Saffo (Roseto)",
        class: "4A",
        photo: "/images/edizioni-passate/2016-2017/secondo2.jpg",
      },
    ],
    groupPhoto: "/images/edizioni-passate/2016-2017/gruppo.jpg",
    groupPhotoLabel: "foto di gruppo (2016-2017)",
  },
  {
    academicYear: "2015-2016",
    eventDate: "18 Giugno 2016",
    first: {
      name: "Emanuele Ronda",
      school: "Liceo Scientifico (Teramo)",
      class: "3E",
      photo: "/images/edizioni-passate/2015-2016/primo.jpg",
    },
    seconds: [
      {
        name: "Alena Meyer",
        school: "Liceo Scientifico (Teramo)",
        class: "3A",
        photo: "/images/edizioni-passate/2015-2016/secondo.jpg",
      },
    ],
    groupPhoto: "/images/edizioni-passate/2015-2016/gruppo.jpg",
    groupPhotoLabel: "foto di gruppo (2015-2016)",
  },
  {
    academicYear: "2014-2015",
    eventDate: "5 Giugno 2015",
    first: {
      name: "Marco Di Giacomantonio",
      school: "Liceo Scientifico (Teramo)",
      class: "5B",
      photo: "/images/edizioni-passate/2014-2015/primo.jpg",
    },
    seconds: [
      {
        name: "Emanuele Ronda",
        school: "Liceo Scientifico (Teramo)",
        class: "2E",
        photo: "/images/edizioni-passate/2014-2015/secondo.jpg",
      },
    ],
    groupPhoto: "/images/edizioni-passate/2014-2015/gruppo.jpg",
    groupPhotoLabel: "foto di gruppo (2014-2015)",
  },
  {
    academicYear: "2013-2014",
    eventDate: "9 Giugno 2014",
    first: {
      name: "Simone Coccia",
      school: "Liceo Scientifico (Teramo)",
      class: "5B",
      photo: "/images/edizioni-passate/2013-2014/primo.jpg",
    },
    seconds: [
      {
        name: "Karol Durante",
        school: "Liceo Scientifico (Teramo)",
        class: "5B",
        photo: "/images/edizioni-passate/2013-2014/secondo1.jpg",
      },
      {
        name: "Marco Mazzoni",
        school: "Liceo Scientifico (Teramo)",
        class: "5B",
        photo: "/images/edizioni-passate/2013-2014/secondo2.jpg",
      },
    ],
    groupPhoto: "/images/edizioni-passate/2013-2014/gruppo.jpg",
    groupPhotoLabel: "foto di gruppo (2013-2014)",
  },
  {
    academicYear: "2012-2013",
    eventDate: "5 Giugno 2013",
    first: {
      name: "Lorenzo Ricci",
      school: "Liceo Scientifico (Teramo)",
      class: "5B",
      photo: "/images/edizioni-passate/2012-2013/primo.jpg",
    },
    seconds: [
      {
        name: "Carlotta Marrangone",
        school: "Liceo Scientifico (Teramo)",
        class: "4G",
        photo: "/images/edizioni-passate/2012-2013/secondo1.jpg",
      },
      {
        name: "Alessio Durante",
        school: "Liceo Scientifico (Teramo)",
        class: "5B",
        photo: "/images/edizioni-passate/2012-2013/secondo2.jpg",
      },
    ],
    groupPhoto: "/images/edizioni-passate/2012-2013/gruppo.jpg",
    groupPhotoLabel: "foto di gruppo (2012-2013)",
  },
  {
    academicYear: "2011-2012",
    eventDate: "24 Maggio 2012",
    first: {
      name: "Pietro Oreglia",
      school: "Liceo Scientifico (Teramo)",
      class: "3G",
      photo: "/images/edizioni-passate/2011-2012/primo.jpg",
    },
    seconds: [
      {
        name: "Simone Coccia",
        school: "Liceo Scientifico (Teramo)",
        class: "3B",
        photo: "/images/edizioni-passate/2011-2012/secondo1.jpg",
      },
      {
        name: "Lorenzo Ricci",
        school: "Liceo Scientifico (Teramo)",
        class: "4D",
        photo: "/images/edizioni-passate/2011-2012/secondo2.jpg",
      },
    ],
    groupPhoto: "/images/edizioni-passate/2011-2012/gruppo.jpg",
    groupPhotoLabel: "foto di gruppo (2011-2012)",
  },
  {
    academicYear: "2010-2011",
    eventDate: "15 Aprile 2011",
    first: {
      name: "Karol Durante",
      school: "Liceo Scientifico (Teramo)",
      class: "2B",
      photo: "/images/edizioni-passate/2010-2011/primo.jpg",
    },
    seconds: [
      {
        name: "Luca Procaccini",
        school: "Liceo Scientifico (Teramo)",
        class: "5B",
        photo: "/images/edizioni-passate/2010-2011/secondo.jpg",
      },
    ],
    groupPhoto: "/images/edizioni-passate/2010-2011/gruppo.jpg",
    groupPhotoLabel: "foto di gruppo (2010-2011)",
  },
  {
    academicYear: "2009-2010",
    eventDate: "27 Maggio 2010",
    first: {
      name: "Paolo Valente",
      school: "Liceo Scientifico (Teramo)",
      class: "5C",
      photo: "/images/edizioni-passate/2009-2010/primo.jpg",
    },
    seconds: [
      {
        name: "Marta Lancione",
        school: "Liceo Scientifico (Teramo)",
        class: "5B",
        photo: "/images/edizioni-passate/2009-2010/secondo1.jpg",
      },
      {
        name: "Edoardo Pompeo",
        school: "Liceo Scientifico (Teramo)",
        class: "4C",
        photo: "/images/edizioni-passate/2009-2010/secondo2.jpg",
      },
    ],
    groupPhoto: "/images/edizioni-passate/2009-2010/gruppo.jpg",
    groupPhotoLabel: "foto di gruppo (2009-2010)",
  },
  {
    academicYear: "2008-2009",
    eventDate: "22 Dicembre 2008",
    first: {
      name: "Marta Lancione",
      school: "Liceo Scientifico (Teramo)",
      class: "4B",
      photo: "/images/edizioni-passate/2008-2009/primo.jpg",
    },
    seconds: [
      {
        name: "Virginia Ciammaricone",
        school: "Liceo Scientifico (Teramo)",
        class: "5C",
        photo: "/images/edizioni-passate/2008-2009/secondo.jpg",
      },
    ],
    groupPhoto: "/images/edizioni-passate/2008-2009/gruppo.jpg",
    groupPhotoLabel: "foto di gruppo (2008-2009)",
  },
];

export const philosophyText = [
  "Mi chiamo Vincenzo Di Nicola, e sono un ex studente del Liceo Scientifico Einstein di Teramo, Maturità 1998.",
  "Da 17 anni porto avanti questo piccolo premio rivolto a studenti abruzzesi di scuola superiore, dal primo al quinto anno. È una prova di Matematica e cultura generale in Inglese, basata sui test che gli studenti americani fanno ogni anno per accedere alle università. Non richiede competenze specifiche: solo logica, attenzione, e soprattuto desiderio di cimentarsi in una nuova sfida.",
  "Perché lo faccio? Da ragazzo ho avuto la fortuna di avere un'ottima istruzione di scuola superiore in Italia, e lavorando negli anni in USA e Cina mi sono reso conto di quanto sia formativa a livello globale. Quello che però ho notato che spesso manca ai ragazzi italiani è determinazione e consapevolezza nelle proprie capacità.",
  "Il premio è ora giunto alla sua diciassettesima edizione. In questi anni ho avuto modo di conoscere tanti ragazzi e apprezzare i loro progressi. E soprattutto sono stato felice di aiutarli a far emergere il proprio potenziale, a non farsi spaventare di fronte alle opportunità di oggi e a che capire che sì, si può volare alto. Questa è la filosofia del premio.",
];
