export const prizes = {
  firstPlace: {
    amount: 800,
    currency: "€",
    bitcoinOption: true,
  },
  secondPlace: {
    amount: 500,
    currency: "€",
    bitcoinOption: true,
  },
  incentivoRosa: {
    amount: 700,
    currency: "€",
    bitcoinOption: true,
    description:
      "La studentessa meglio classificata riceverà un premio extra di 700 Euro (o, a scelta, equivalente Bitcoin ₿). Questi 700 Euro sono in aggiunta al premio standard.",
    color: "prize-rosa" as const,
  },
  premioImprenditorialita: {
    amount: 300,
    currency: "€",
    bitcoinOption: true,
    description:
      "Anche quest'anno la studentessa o lo studente che dimostra spirito di iniziativa e grinta nel costruire e perseguire progetti per il bene della comunità riceverà un premio opzionale di 300 Euro (o, a scelta, equivalente Bitcoin ₿).",
    redistributionRule:
      "Nel caso in cui il Premio Imprenditorialità non venisse assegnato, i 300 Euro saranno ripartiti equamente sui tre premi sopra (quindi 100 Euro in aggiunta al Primo classificato, 100 Euro in aggiunta al Secondo classificato, 100 Euro in aggiunta alla migliore studentessa).",
    color: "prize-imprenditorialita" as const,
  },
  mentoraggio: {
    description:
      "Anche quest'anno l'associazione non profit ./cogita ETS sostiene questa iniziativa. I vincitori del Premio Di Nicola (e, a richiesta, tutti i partecipanti) potranno avvalersi di mentori esperti di ./cogita ETS per la propria crescita professionale nel settore informatico.",
    color: "prize-mentoraggio" as const,
  },
  ringraziamenti: {
    text: [
      "Il Premio Di Nicola originariamente consisteva in un totale di 1.000 Euro, offerti da me.",
      "Dal 2021, per incentivare le ragazze allo studio della Matematica, mia sorella Danila Di Nicola ha contribuito con ulteriori 300 Euro destinati all'Incentivo Rosa.",
      "Dal 2022 Confindustria Chieti Pescara contribuisce con ulteriori 1.000 Euro all'ammontare totale, ripartiti tra i vari premi, e istituendo il Premio Imprenditorialità.",
      "Dal 2024 l'associazione non profit ./cogita ETS contribuisce con l'esperienza dei propri soci allo sviluppo delle competenze informatiche moderne degli studenti partecipanti al Premio Di Nicola.",
      "A tutti loro vanno i miei ringraziamenti di cuore. A questi aggiungo ovviamente la scuola IIS Alessandrini di Teramo che da anni ci aiuta nell'organizzazione. Sono onorato del supporto che tutti forniscono a questa iniziativa: più che per l'aspetto monetario, sono orgoglioso di toccare con mano volontà sane che vogliono far crescere culturalmente e professionalmente gli studenti abruzzesi.",
    ],
    color: "prize-ringraziamenti" as const,
  },
};
