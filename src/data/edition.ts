export const currentEdition = {
  number: "XVIII",
  numberArabic: 18,
  numberLabel: "18ª edizione",
  year: 2026,
  eventDate: "2026-06-06T10:00:00+02:00",
  eventDateDisplay: "sabato 6 Giugno 2026 alle 10:00am",
  registrationDeadline: "2026-06-05T23:59:00+02:00",
  registrationDeadlineDisplay: "venerdì 5 Giugno 2026 ore 11:59pm",
  venue: {
    name: "IIS Alessandrini-Marino di Teramo",
    address: "Teramo",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=IIS%20Alessandrini-Marino%20Teramo",
  },
  venues: [
    {
      name: "IIS Alessandrini-Marino di Teramo",
      address: "Teramo",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=IIS%20Alessandrini-Marino%20Teramo",
    },
    {
      name: "Liceo Scientifico Galileo Galilei di Pescara",
      address: "Pescara",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Liceo%20Scientifico%20Galileo%20Galilei%20Pescara",
    },
  ],
  oralExam: {
    date: "da definire",
    venue: "sede e orario saranno comunicati ai migliori classificati",
    mapsUrl: "",
  },
  remoteNote:
    "Per dubbi sulla sede o sulla partecipazione, scrivi a vincenzo@live.com.",
  contactEmail: "vincenzo@live.com",
  copyrightYear: 2026,
  samplesUrl: "/files/samples.zip",
  orientamentoUrl: "/files/orientamento_universita_internazionale.pdf",
};

export const currentEditionVenueNames = currentEdition.venues
  .map((venue) => venue.name)
  .join(" e ");

export const currentEditionVenueCities = currentEdition.venues
  .map((venue) => venue.address)
  .join(" + ");

export function isRegistrationOpen(): boolean {
  return new Date() < new Date(currentEdition.registrationDeadline);
}

export function isEventPassed(): boolean {
  return new Date() > new Date(currentEdition.eventDate);
}
