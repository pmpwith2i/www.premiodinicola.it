export const currentEdition = {
  number: "XVII",
  year: 2025,
  eventDate: "2025-05-29T16:00:00",
  eventDateDisplay: "giovedì 29 Maggio 2025 alle 4:00pm",
  registrationDeadline: "2025-05-28T23:59:00",
  registrationDeadlineDisplay: "mercoledì 28 Maggio 2025 ore 11:59pm",
  venue: {
    name: "IIS Alessandrini Marino di Teramo",
    address: "Teramo",
    mapsUrl:
      "https://www.google.it/maps/place/Istituto+Istruzione+Superiore+Alessandrini+Marino/@42.6642773,13.7101495,17z/data=!4m12!1m6!3m5!1s0x1331e7f1776dca07:0xc9cc25554238f217!2sScuole!8m2!3d42.6642734!4d13.7123382!3m4!1s0x0000000000000000:0x59f4b97aa341f6c9!8m2!3d42.6632532!4d13.7108999?hl=en",
  },
  oralExam: {
    date: "venerdì 30 Maggio alle 10:00am",
    venue: "Confindustria Abruzzo Medio Adriatico - Teramo (Sant'Atto)",
    mapsUrl:
      "https://www.google.com/maps/place/Confindustria+Abruzzo+Medio+Adriatico+-+sede+di+Teramo/@42.7009281,13.8086688,16z/data=!4m6!3m5!1s0x1331e95d1cd990c7:0xcc5b6e4b91b6c3af!8m2!3d42.703668!4d13.8136899!16s%2Fg%2F11bz086xf1?entry=ttu&g_ep=EgoyMDI1MDUxMS4wIKXMDSoASAFQAw%3D%3D",
  },
  remoteNote:
    "Se volete partecipare ma non riuscite in presenza, comunicatemelo via email a vincenzo@live.com e vi manderò un link Google Meet con cui partecipare da remoto.",
  contactEmail: "vincenzo@live.com",
  copyrightYear: 2025,
  samplesUrl: "/files/samples.zip",
  orientamentoUrl: "/files/orientamento_universita_internazionale.pdf",
};

export function isRegistrationOpen(): boolean {
  return new Date() < new Date(currentEdition.registrationDeadline);
}

export function isEventPassed(): boolean {
  return new Date() > new Date(currentEdition.eventDate);
}
