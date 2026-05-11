export interface OlimpiadeEntry {
  year: number;
  description: string;
  rankingImage: string;
}

export const olimpiadi: OlimpiadeEntry[] = [
  {
    year: 2014,
    description:
      "Come ogni anno, l'11 Maggio 2014 si sono concluse a Cesenatico le finali nazionali delle Olimpiadi di Matematica. Il Liceo Scientifico Einstein di Teramo si è classificato decimo (10) a livello complessivo in Italia, e senza rivali assoluti considerando tutta l'Italia a sud del Rubicone. A livello individuale, è stata anche vinta una medaglia d'oro. È un risultato impressionante che migliora l'ancor ottimo piazzamento dell'anno precedente. Fierissimo di questi ragazzi, e grazie alla scuola ed ai professori per il continuo miglioramento della qualità di insegnamento matematico.",
    rankingImage: "/images/olimpiadi/classifica-2014.png",
  },
  {
    year: 2013,
    description:
      "L'11 Maggio 2013 si sono svolte a Cesenatico le finali nazionali delle Olimpiadi di Matematica a squadre. Il Liceo Scientifico Einstein di Teramo si è classificato sedicesimo (16) a livello complessivo in Italia, e secondo (2) contando solo l'area Mezzogiorno. Complimenti alla squadra che ha reso onore alla nostra città, ed auguri per salire tra le prime 10 scuole d'Italia il prossimo anno.",
    rankingImage: "/images/olimpiadi/classifica-2013.png",
  },
];
