export interface Sponsor {
  name: string;
  url: string;
  description: string;
  since: number;
}

export const sponsors: Sponsor[] = [
  {
    name: "Confindustria Chieti Pescara",
    url: "https://confindustriachpe.it/",
    description: "Contribuisce con 1.000 Euro e il Premio Imprenditorialità",
    since: 2022,
  },
  {
    name: "./cogita ETS",
    url: "https://www.cogita.it/",
    description:
      "Mentoring per lo sviluppo delle competenze informatiche moderne",
    since: 2024,
  },
  {
    name: "IIS Alessandrini di Teramo",
    url: "https://www.iisteramo.edu.it/",
    description: "Sede dell'evento e supporto organizzativo",
    since: 2008,
  },
];
