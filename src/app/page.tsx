import Link from "next/link";
import { HeroCta } from "@/components/hero-cta";
import { FadeIn } from "@/components/fade-in";
import { currentEdition } from "@/data/edition";
import { philosophyText, pastEditions } from "@/data/pastEditions";
import { prizes } from "@/data/prizes";

const sections = [
  {
    num: "01",
    label: "Partecipazione",
    description:
      "Chi può partecipare, regolamento, svolgimento della prova. Tre minuti di lettura.",
    href: "/partecipazione",
    color: "blu",
    bg: "bg-blu-soft",
    accent: "bg-blu text-paper",
    symbol: "÷",
  },
  {
    num: "02",
    label: "Premio",
    description: `€${
      prizes.firstPlace.amount +
      prizes.secondPlace.amount +
      prizes.incentivoRosa.amount +
      prizes.premioImprenditorialita.amount
    } in palio. Più mentoring, contatti e una giornata diversa.`,
    href: "/premio",
    color: "corallo",
    bg: "bg-[oklch(0.95_0.05_45)]",
    accent: "bg-corallo text-paper",
    symbol: "×",
  },
  {
    num: "03",
    label: "Iscriviti",
    description: `Cinque campi, due minuti. Entro ${currentEdition.registrationDeadlineDisplay.split(" ore")[0]}.`,
    href: "/registrazione",
    color: "saffron",
    bg: "bg-paper-warm",
    accent: "bg-saffron text-ink",
    symbol: "+",
  },
  {
    num: "04",
    label: "Vincitori",
    description: `${pastEditions.length + 1} edizioni di studenti che ce l'hanno fatta. Volti, scuole, foto.`,
    href: "/edizioni-passate",
    color: "menta",
    bg: "bg-[oklch(0.95_0.05_160)]",
    accent: "bg-menta-deep text-paper",
    symbol: "√",
  },
] as const;

export default function Home() {
  const totalPrize =
    prizes.firstPlace.amount +
    prizes.secondPlace.amount +
    prizes.incentivoRosa.amount +
    prizes.premioImprenditorialita.amount;

  return (
    <>
      {/* ——— HERO ——— */}
      <section className="relative overflow-hidden">
        {/* decorative math symbols floating in margins */}
        <span aria-hidden className="absolute -top-2 left-[6%] hidden md:block font-display text-[5rem] font-bold leading-none text-blu/20 select-none animate-float" style={{ "--r": "-8deg" } as React.CSSProperties}>π</span>
        <span aria-hidden className="absolute top-[28%] right-[4%] hidden md:block font-display text-[6rem] font-bold leading-none text-corallo/25 select-none animate-float" style={{ "--r": "12deg", animationDelay: "1.4s" } as React.CSSProperties}>√</span>
        <span aria-hidden className="absolute bottom-[6%] left-[10%] hidden md:block font-display text-[4rem] font-bold leading-none text-menta-deep/25 select-none animate-float" style={{ "--r": "-12deg", animationDelay: "2.6s" } as React.CSSProperties}>∑</span>

        <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 pt-10 pb-14 md:pt-16 md:pb-20">
          {/* Top chips */}
          <div className="ed-rise ed-rise-1 flex flex-wrap items-center gap-3">
            <span className="chip border-blu text-blu">
              <span className="h-1.5 w-1.5 rounded-full bg-blu animate-live" />
              17ª edizione
            </span>
            <span className="chip border-ink/30 text-ink-soft">
              {currentEdition.eventDateDisplay.replace("alle 4:00pm", "· 16:00")}
            </span>
            <span className="chip border-ink/30 text-ink-soft hidden sm:inline-flex">
              {currentEdition.venue.name}
            </span>
          </div>

          {/* Title row */}
          <div className="relative mt-10 grid items-end gap-8 md:mt-14 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-8">
              <h1 className="ed-rise ed-rise-2 font-display font-bold leading-[0.92] tracking-tight">
                <span className="block text-[clamp(2.6rem,9vw,7rem)] text-ink">
                  Il concorso
                </span>
                <span className="block text-[clamp(2.6rem,9vw,7rem)] text-ink">
                  di matematica
                </span>
                <span className="relative inline-block text-[clamp(2.6rem,9vw,7rem)]">
                  <span className="marker text-ink">degli studenti</span>
                </span>
                <span className="block text-[clamp(2.6rem,9vw,7rem)] text-blu-deep">
                  abruzzesi.
                </span>
              </h1>

              <p className="ed-rise ed-rise-3 mt-7 max-w-xl text-[17px] leading-[1.6] text-ink-soft md:text-[19px]">
                Una prova di Matematica e cultura generale in inglese,
                ispirata ai test universitari USA. Niente nozioni speciali —
                solo logica, attenzione, e la voglia di mettersi in gioco.
              </p>

              <div className="ed-rise ed-rise-4 mt-8">
                <HeroCta />
              </div>
            </div>

            {/* Sticker badge — replaces the funereal Roman numeral */}
            <div className="ed-rise ed-rise-3 md:col-span-4">
              <div className="relative mx-auto md:ml-auto w-fit">
                <div className="sticker tilt-r relative inline-flex flex-col items-center justify-center rounded-3xl bg-saffron px-8 py-7 text-center">
                  <span className="font-hand text-2xl leading-none text-ink">edizione</span>
                  <span className="font-display text-[7rem] leading-none font-bold tracking-tight text-ink">
                    17<span className="text-corallo">ª</span>
                  </span>
                  <span className="mt-2 text-[12px] uppercase tracking-caps-tight font-semibold text-ink-soft">
                    dal 2008
                  </span>
                </div>
                <span
                  aria-hidden
                  className="absolute -top-3 -left-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-corallo text-paper text-xl font-bold border-[1.5px] border-ink shadow-[2px_2px_0_var(--ink)] rotate-[-12deg]"
                >
                  ✦
                </span>
                <span className="absolute -bottom-4 -right-3 font-hand text-2xl text-blu rotate-[6deg]">
                  Teramo!
                </span>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="ed-rise ed-rise-5 mt-14 grid grid-cols-2 gap-3 md:mt-20 md:grid-cols-4 md:gap-4">
            <Stat number={`€${totalPrize.toLocaleString("it-IT")}`} label="Montepremi totale" hand="in palio" tone="blu" />
            <Stat number={`${pastEditions.length + 1}`} label="Edizioni" hand={`dal 2008`} tone="corallo" />
            <Stat number="60′" label="Durata della prova" hand="un'ora secca" tone="saffron" />
            <Stat number="2" label="Lingue" hand="ita + eng" tone="menta" />
          </div>
        </div>

        {/* Marquee ribbon */}
        <div className="relative border-y-[1.5px] border-ink bg-blu text-paper overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap py-3.5">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex shrink-0 items-center gap-8 pr-8 font-display text-[15px] font-medium uppercase tracking-caps-tight">
                <span>Matematica</span>
                <span aria-hidden className="text-saffron text-xl leading-none">×</span>
                <span>Cultura generale</span>
                <span aria-hidden className="text-saffron text-xl leading-none">+</span>
                <span>Inglese</span>
                <span aria-hidden className="text-saffron text-xl leading-none">÷</span>
                <span>Abruzzo</span>
                <span aria-hidden className="text-saffron text-xl leading-none">√</span>
                <span>17ª edizione</span>
                <span aria-hidden className="text-saffron text-xl leading-none">π</span>
                <span>Si può volare alto</span>
                <span aria-hidden className="text-saffron text-xl leading-none">∑</span>
                <span>Teramo · 2025</span>
                <span aria-hidden className="text-saffron text-xl leading-none">±</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— PHILOSOPHY (friendly note from Vincenzo) ——— */}
      <section className="relative overflow-hidden bg-paper-warm">
        <span aria-hidden className="absolute top-10 right-[6%] font-display text-[10rem] font-bold text-saffron-deep/15 select-none leading-none rotate-[12deg]">?</span>
        <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <aside className="md:col-span-4">
              <FadeIn>
                <span className="chip border-corallo text-corallo">01 / Perché</span>
                <h2 className="mt-5 font-display text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight text-ink">
                  Una pagina<br />di quaderno,<br />
                  <span className="underline-hand text-corallo">scritta nel 2008</span>.
                </h2>
                <p className="mt-6 font-hand text-2xl text-ink-soft leading-tight">
                  — un appunto da Vincenzo
                </p>
              </FadeIn>
            </aside>

            <div className="md:col-span-8">
              <FadeIn delay="60ms">
                {/* Note card on ruled paper */}
                <article className="relative rounded-3xl bg-paper border-[1.5px] border-ink shadow-[8px_8px_0_var(--ink)] p-8 md:p-12 bg-righe">
                  {/* tape */}
                  <span
                    aria-hidden
                    className="absolute -top-4 left-12 inline-block h-7 w-24 bg-saffron/80 rotate-[-4deg] border border-saffron-deep/40"
                  />
                  <p className="font-display text-2xl md:text-3xl font-semibold leading-[1.45] text-ink first-letter:font-display first-letter:text-[4.5rem] first-letter:font-bold first-letter:text-corallo first-letter:float-left first-letter:leading-[0.85] first-letter:pr-3 first-letter:pt-1">
                    {philosophyText[0]}
                  </p>
                  <div className="mt-6 space-y-5 text-[17px] leading-[1.8] text-ink-soft md:text-[18px]">
                    {philosophyText.slice(1).map((paragraph, i) => (
                      <FadeIn key={i} delay={`${(i + 1) * 90}ms`}>
                        <p>{paragraph}</p>
                      </FadeIn>
                    ))}
                  </div>

                  {/* Signature */}
                  <FadeIn delay="380ms">
                    <div className="mt-10 flex items-end justify-between gap-6 border-t-[1.5px] border-dashed border-ink/30 pt-6">
                      <div>
                        <p className="font-hand text-4xl text-blu-deep leading-none">Vincenzo Di&nbsp;Nicola</p>
                        <p className="mt-1 text-[12px] uppercase tracking-caps-tight font-semibold text-ink-mute">
                          Fondatore · Maturità 1998
                        </p>
                      </div>
                      <span aria-hidden className="hidden sm:inline-flex h-16 w-16 items-center justify-center rounded-full border-[2.5px] border-corallo text-corallo font-display font-bold text-base rotate-[-8deg] tracking-caps">
                        2008
                      </span>
                    </div>
                  </FadeIn>
                </article>
              </FadeIn>

              <FadeIn delay="500ms">
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-mute">
                  <a
                    href={currentEdition.orientamentoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-hand draw-on-hover hover:text-blu transition-colors"
                  >
                    ↳ Studi universitari all&apos;estero (giugno 2013)
                  </a>
                  <Link
                    href="/edizioni-passate"
                    className="underline-hand draw-on-hover hover:text-blu transition-colors"
                  >
                    ↳ Olimpiadi di Matematica 2013 &amp; 2014
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ——— SUBJECT CARDS — replacing the funereal Roman index ——— */}
      <section className="relative bg-quadretti-soft border-y-[1.5px] border-ink/15">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 py-20 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="chip border-blu text-blu">02 / Materie</span>
              <h2 className="mt-5 font-display text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight text-ink">
                Quattro pagine<br />da sfogliare.
              </h2>
            </div>
            <p className="font-hand text-3xl text-corallo leading-tight max-w-xs text-right">
              quale apri prima? →
            </p>
          </div>

          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
            {sections.map((s, i) => (
              <li key={s.href}>
                <FadeIn delay={`${i * 70}ms`}>
                  <Link
                    href={s.href}
                    className={`group relative block h-full overflow-hidden rounded-3xl border-[1.5px] border-ink ${s.bg} p-7 md:p-9 transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px] shadow-[5px_5px_0_var(--ink)] hover:shadow-[9px_9px_0_var(--ink)]`}
                  >
                    {/* big symbol */}
                    <span
                      aria-hidden
                      className="absolute -right-4 -bottom-6 font-display text-[12rem] leading-none font-bold text-ink/[0.07] select-none"
                    >
                      {s.symbol}
                    </span>

                    <div className="relative flex items-baseline justify-between">
                      <span className={`inline-flex items-center justify-center rounded-full ${s.accent} px-3.5 py-1 text-[12px] uppercase tracking-caps-tight font-semibold border-[1.5px] border-ink`}>
                        {s.num}
                      </span>
                      <span aria-hidden className="font-display text-2xl text-ink/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-ink">
                        →
                      </span>
                    </div>

                    <h3 className="relative mt-6 font-display text-4xl md:text-5xl font-bold leading-[0.95] tracking-tight text-ink">
                      {s.label}
                    </h3>
                    <p className="relative mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft md:text-[16px]">
                      {s.description}
                    </p>

                    <span className="relative mt-6 inline-flex items-center gap-1.5 text-[13px] uppercase tracking-caps-tight font-semibold text-ink-mute">
                      Scopri
                      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                  </Link>
                </FadeIn>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ——— CLOSING — encouragement, not eulogy ——— */}
      <section className="relative bg-paper">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 py-24 md:py-32">
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <span aria-hidden className="inline-block font-display text-3xl font-bold text-corallo rotate-[-8deg]">✦</span>
              <h2 className="mt-6 font-display text-[clamp(2.6rem,8vw,6rem)] font-bold leading-[0.96] tracking-tight text-ink">
                Si può{" "}
                <span className="marker">volare</span>{" "}
                <span className="text-blu-deep underline-hand">alto</span>.
              </h2>
              <p className="mt-8 max-w-xl mx-auto text-[16px] leading-relaxed text-ink-soft md:text-[17px]">
                È la filosofia del Premio. Vale la pena provarci.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/registrazione"
                  className="group inline-flex items-center gap-3 rounded-full bg-blu px-7 py-3.5 text-paper font-semibold border-[1.5px] border-ink shadow-[4px_4px_0_var(--ink)] transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[6px_6px_0_var(--ink)]"
                >
                  Iscriviti adesso
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
                <Link
                  href="/edizioni-passate"
                  className="inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3.5 font-semibold border-[1.5px] border-ink hover:bg-saffron transition-colors"
                >
                  Guarda chi ha vinto
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

function Stat({
  number,
  label,
  hand,
  tone,
}: {
  number: string;
  label: string;
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
    <div className="rounded-2xl border-[1.5px] border-ink bg-paper p-5 md:p-6 transition-transform hover:-translate-y-1 hover:rotate-[-0.6deg]">
      <p className={`font-hand text-xl leading-none ${handColor}`}>{hand}</p>
      <p className="mt-2 font-display text-4xl md:text-5xl font-bold leading-none tracking-tight text-ink">
        {number}
      </p>
      <p className="mt-3 text-[12px] uppercase tracking-caps-tight font-semibold text-ink-mute">
        {label}
      </p>
    </div>
  );
}
