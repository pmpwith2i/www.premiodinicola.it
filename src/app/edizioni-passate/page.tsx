import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";
import {
  EditionCarousel,
  type CarouselSlide,
} from "@/components/edition-carousel";
import { pastEditions, type PastEdition, type Winner } from "@/data/pastEditions";
import { olimpiadi } from "@/data/olimpiadi";

export const metadata: Metadata = {
  title: "Vincitori",
  description: "Archivio storico dei vincitori del Premio Di Nicola",
};

const tones = [
  { ring: "border-blu", chip: "bg-blu text-paper", soft: "bg-blu-soft" },
  { ring: "border-corallo", chip: "bg-corallo text-paper", soft: "bg-paper-warm" },
  { ring: "border-saffron-deep", chip: "bg-saffron text-ink", soft: "bg-[oklch(0.97_0.05_92)]" },
  { ring: "border-menta-deep", chip: "bg-menta-deep text-paper", soft: "bg-[oklch(0.95_0.05_160)]" },
] as const;

function buildSlides(edition: PastEdition): CarouselSlide[] {
  const slides: CarouselSlide[] = [];

  const winnerSlide = (w: Winner, label: string, color?: string): CarouselSlide => ({
    src: w.photo,
    alt: w.name,
    caption: w.name,
    subcaption: `${w.school} — ${w.class}`,
    label,
    labelColor: color,
  });

  slides.push(winnerSlide(edition.first, "1° classificato", "text-corallo"));
  edition.seconds.forEach((s, i) =>
    slides.push(
      winnerSlide(
        s,
        edition.seconds.length > 1 ? `2° ex-aequo (${i + 1})` : "2° classificato",
        "text-blu"
      )
    )
  );
  edition.rosa?.forEach((r) =>
    slides.push(winnerSlide(r, "Premio Rosa", "text-rosa-deep"))
  );
  if (edition.imprenditorialita) {
    slides.push(
      winnerSlide(
        edition.imprenditorialita,
        "Imprenditorialità",
        "text-corallo"
      )
    );
  }
  if (edition.groupPhoto) {
    slides.push({
      src: edition.groupPhoto,
      alt: edition.groupPhotoLabel,
      caption: "Foto di gruppo",
      subcaption: edition.academicYear,
    });
  }

  return slides;
}

export default function EdizioniPassatePage() {
  const total = pastEditions.length;

  return (
    <>
      {/* ——— HEADER ——— */}
      <section className="relative bg-paper">
        <span aria-hidden className="absolute -top-4 right-[8%] hidden md:block font-display text-[8rem] font-bold text-menta-deep/20 select-none animate-float" style={{ "--r": "-10deg" } as React.CSSProperties}>★</span>
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 pt-12 pb-12 md:pt-20 md:pb-16">
          <FadeIn>
            <span className="chip border-menta-deep text-menta-deep">04 / Vincitori</span>
            <h1 className="mt-6 font-display text-[clamp(2.6rem,9vw,6rem)] font-bold leading-[0.95] tracking-tight text-ink">
              <span className="block">17 anni di</span>
              <span className="block">
                <span className="marker-menta">studenti</span>{" "}
                che ce l&apos;hanno fatta.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-[17px] leading-relaxed text-ink-soft md:text-[19px]">
              Tutti i vincitori delle edizioni passate, con foto, scuola e
              classe. Un piccolo album, dal 2008 a oggi.
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
              <Stat label="Edizioni" value={`${total + 1}`} hand="dal 2008" tone="blu" />
              <Stat label="Prima edizione" value="2009" hand="il via" tone="saffron" />
              <Stat label="Vincitori archiviati" value={`${total * 4}+`} hand="circa" tone="menta" />
              <Stat label="Sede storica" value="Teramo" hand="Abruzzo" tone="corallo" />
            </dl>
          </FadeIn>
        </div>
      </section>

      {/* ——— EDITIONS ——— */}
      <section className="relative bg-quadretti-soft border-y-[1.5px] border-ink/15">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 py-16 md:py-20">
          <div className="space-y-10 md:space-y-14">
            {pastEditions.map((edition, idx) => {
              const editionNumber = total - idx + 1; // current = 17, then 16, 15, …
              const slides = buildSlides(edition);
              const tone = tones[idx % tones.length];

              return (
                <FadeIn key={edition.academicYear}>
                  <article
                    className={`group relative grid gap-8 rounded-3xl border-[1.5px] border-ink ${tone.soft} p-6 md:grid-cols-12 md:gap-10 md:p-10 shadow-[6px_6px_0_var(--ink)]`}
                  >
                    {/* Numeral / header column */}
                    <header className="md:col-span-3">
                      <div className={`relative inline-flex flex-col items-start rounded-2xl border-[1.5px] border-ink bg-paper px-5 py-4 ${idx % 2 === 0 ? "tilt-l" : "tilt-r2"}`}>
                        <span className="text-[11px] uppercase tracking-caps-tight font-semibold text-ink-mute">
                          edizione
                        </span>
                        <span className="mt-1 font-display text-[4.2rem] md:text-[5rem] font-bold leading-none tracking-tight text-ink">
                          {editionNumber}<span className="text-corallo text-[2rem] align-top">ª</span>
                        </span>
                      </div>
                      <p className="mt-4 font-hand text-2xl leading-none text-blu-deep">
                        {edition.academicYear}
                      </p>
                      <p className="mt-2 text-[12px] uppercase tracking-caps-tight font-semibold text-ink-mute">
                        {edition.eventDate}
                      </p>
                    </header>

                    {/* Winners + carousel */}
                    <div className="md:col-span-9">
                      {/* Winner roster */}
                      <dl className="grid gap-4 sm:grid-cols-2 md:gap-5">
                        <WinnerCard label="1° classificato" winner={edition.first} accent="text-corallo" border="border-corallo" />
                        {edition.seconds.map((w, i) => (
                          <WinnerCard
                            key={w.name}
                            label={
                              edition.seconds.length > 1
                                ? `2° ex-aequo (${i + 1})`
                                : "2° classificato"
                            }
                            winner={w}
                            accent="text-blu"
                            border="border-blu"
                          />
                        ))}
                        {edition.rosa?.map((w, i) => (
                          <WinnerCard
                            key={`rosa-${i}-${w.name}`}
                            label="Premio Rosa"
                            winner={w}
                            accent="text-rosa-deep"
                            border="border-rosa"
                          />
                        ))}
                        {edition.imprenditorialita && (
                          <WinnerCard
                            label="Imprenditorialità"
                            winner={edition.imprenditorialita}
                            accent="text-corallo"
                            border="border-corallo"
                          />
                        )}
                      </dl>

                      {/* Photo carousel */}
                      <div className="mt-7 border-t border-dashed border-ink/25 pt-6">
                        <EditionCarousel slides={slides} />
                      </div>
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ——— OLIMPIADI ——— */}
      <section className="relative bg-paper">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 py-16 md:py-24">
          <FadeIn>
            <span className="chip border-blu text-blu">Appendice · Olimpiadi</span>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,7vw,4.5rem)] font-bold leading-[0.95] tracking-tight text-ink">
              <span className="block">Le</span>
              <span className="block">
                <span className="marker-corallo">Olimpiadi</span>{" "}
                della Matematica.
              </span>
            </h2>
            <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-ink-soft md:text-[17px]">
              Il Premio Di Nicola ha finanziato con orgoglio la trasferta del
              Liceo Scientifico Einstein di Teramo alle finali nazionali di
              Cesenatico.
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
            {olimpiadi.map((entry, i) => (
              <FadeIn key={entry.year} delay={`${i * 80}ms`}>
                <article className="rounded-3xl border-[1.5px] border-ink bg-paper-warm p-7 md:p-9 shadow-[5px_5px_0_var(--ink)]">
                  <div className="flex items-baseline justify-between">
                    <span className="font-display text-[5rem] font-bold leading-none tracking-tight text-blu-deep">
                      {entry.year}
                    </span>
                    <span className="font-hand text-2xl text-corallo">Cesenatico ✦</span>
                  </div>
                  <p className="mt-5 text-[15px] leading-[1.8] text-ink md:text-[16px]">
                    {entry.description}
                  </p>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={entry.rankingImage}
                    alt={`Classifica Finale Squadre ${entry.year}`}
                    className="mt-6 hidden w-full rounded-xl border-[1.5px] border-ink/30 md:block"
                  />
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({
  label,
  value,
  hand,
  tone,
}: {
  label: string;
  value: string;
  hand: string;
  tone: "blu" | "corallo" | "saffron" | "menta";
}) {
  const handColor = {
    blu: "text-blu",
    corallo: "text-corallo",
    saffron: "text-saffron-deep",
    menta: "text-menta-deep",
  }[tone];
  return (
    <div className="rounded-2xl border-[1.5px] border-ink bg-paper p-4 md:p-5 transition-transform hover:-translate-y-1 hover:rotate-[-0.5deg]">
      <p className={`font-hand text-lg leading-none ${handColor}`}>{hand}</p>
      <p className="mt-2 font-display text-3xl md:text-4xl font-bold leading-none tracking-tight text-ink">
        {value}
      </p>
      <p className="mt-2.5 text-[11px] uppercase tracking-caps-tight font-semibold text-ink-mute">
        {label}
      </p>
    </div>
  );
}

function WinnerCard({
  label,
  winner,
  accent,
  border,
}: {
  label: string;
  winner: { name: string; school: string; class: string };
  accent: string;
  border: string;
}) {
  return (
    <div className={`rounded-xl border-[1.5px] ${border} bg-paper p-4`}>
      <span className={`text-[10.5px] uppercase tracking-caps-tight font-semibold ${accent}`}>
        {label}
      </span>
      <p className="mt-1.5 font-display text-lg md:text-xl font-semibold leading-tight text-ink">
        {winner.name}
      </p>
      <p className="mt-0.5 text-[12px] leading-tight text-ink-mute">
        {winner.school} — {winner.class}
      </p>
    </div>
  );
}
