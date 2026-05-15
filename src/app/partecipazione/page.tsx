import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";
import { currentEdition, currentEditionVenueNames } from "@/data/edition";

export const metadata: Metadata = {
  title: "Partecipazione",
  description: "Requisiti, regolamento e svolgimento della prova",
};

export default function PartecipaPage() {
  return (
    <>
      {/* ——— HEADER ——— */}
      <section className="relative bg-paper">
        <span aria-hidden className="absolute -top-2 right-[8%] hidden md:block font-display text-[8rem] font-bold text-blu/15 select-none animate-float" style={{ "--r": "10deg" } as React.CSSProperties}>÷</span>
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 pt-12 pb-12 md:pt-20 md:pb-16">
          <FadeIn>
            <span className="chip border-blu text-blu">
              <span className="num-badge !h-5 !w-5 !text-[10px] !font-bold border-blu text-blu">01</span>
              Partecipazione
            </span>
            <h1 className="mt-6 font-display text-[clamp(2.6rem,9vw,6rem)] font-bold leading-[0.95] tracking-tight">
              <span className="block text-ink">Come funziona</span>
              <span className="block">
                <span className="marker text-ink">la prova</span>.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-ink-soft md:text-[19px]">
              Tre cose: chi può iscriversi, le regole d&apos;onore della prova,
              come si svolge. Niente di complicato — leggi sotto.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ——— REQUISITI ——— */}
      <section className="relative bg-blu-soft border-t-[1.5px] border-ink/15">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 py-16 md:py-24">
          <Section
            num="01"
            kicker="Requisiti"
            title="Chi può partecipare"
            color="blu"
          >
            <p className="text-[17px] leading-[1.7] text-ink-soft md:text-[18px]">
              La prova è aperta a chi rispetta tre condizioni semplici:
            </p>
            <ul className="mt-8 grid gap-4">
              <Requirement num={1} label="Iscrizione" text="Iscritti a un qualsiasi anno di una scuola superiore in Abruzzo." />
              <Requirement num={2} label="Nazionalità" text="Di nazionalità italiana." />
              <Requirement num={3} label="Estrazione" text="Di estrazione familiare abruzzese." />
            </ul>

            <p className="mt-8 inline-flex items-start gap-3 rounded-2xl border-[1.5px] border-ink bg-paper-warm px-4 py-3 text-[15px] text-ink">
              <span aria-hidden className="font-display text-xl leading-none text-corallo">✦</span>
              <span>
                Va anche accettato l&apos;
                <strong className="font-semibold">Honor Code</strong> — ne
                parliamo qui sotto.
              </span>
            </p>
          </Section>
        </div>
      </section>

      {/* ——— HONOR CODE ——— */}
      <section className="relative bg-paper">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 py-16 md:py-24">
          <Section
            num="02"
            kicker="Honor code"
            title="Si gioca onesto"
            color="corallo"
          >
            <p className="text-[17px] leading-[1.7] text-ink-soft md:text-[18px]">
              La prova si fa{" "}
              <span className="marker-corallo">senza sorveglianza</span>: ci si
              fida di te. È il principio dell&apos;Honor Code, ripreso dalla{" "}
              <a
                href="https://communitystandards.stanford.edu/policies-guidance/honor-code"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blu underline-hand draw-on-hover underline-hand-blu"
              >
                Stanford University
              </a>
              .
            </p>

            {/* Honor Code stamp card */}
            <FadeIn delay="80ms">
              <article className="relative mt-10 rounded-3xl border-[1.5px] border-ink bg-paper shadow-[8px_8px_0_var(--ink)] p-7 md:p-12">
                <span
                  aria-hidden
                  className="stamp absolute -top-5 right-8 inline-block bg-paper text-corallo font-display text-[11px]"
                >
                  Stanford ✦ Art. 1
                </span>

                <h3 className="mt-2 font-display text-2xl md:text-3xl font-semibold leading-tight text-ink">
                  <span className="font-bold text-corallo">A.</span>{" "}
                  L&apos;Honor Code è un impegno degli studenti, individuale e
                  collettivo:
                </h3>
                <ol className="mt-5 space-y-4 pl-2 text-[15.5px] leading-[1.7] text-ink-soft md:text-[17px]">
                  <li className="flex gap-4">
                    <span aria-hidden className="num-badge !h-7 !w-7 !text-xs border-corallo text-corallo">i</span>
                    <span>che non si dia né si riceva aiuto durante l&apos;esame;</span>
                  </li>
                  <li className="flex gap-4">
                    <span aria-hidden className="num-badge !h-7 !w-7 !text-xs border-corallo text-corallo">ii</span>
                    <span>che ognuno faccia la propria parte e contribuisca a far rispettare lo spirito e la lettera dell&apos;Honor Code.</span>
                  </li>
                </ol>

                <div aria-hidden className="my-8 h-px bg-ink/15" />

                <h3 className="font-display text-2xl md:text-3xl font-semibold leading-tight text-ink">
                  <span className="font-bold text-corallo">B.</span>{" "}
                  L&apos;esaminatore, dal canto suo, dimostra fiducia
                </h3>
                <p className="mt-3 text-[15.5px] leading-[1.7] text-ink-soft md:text-[17px]">
                  rinunciando alla sorveglianza durante la prova e a precauzioni
                  inutili contro la disonestà.
                </p>

                <p className="mt-8 font-hand text-2xl text-blu-deep">
                  ↳ patto fra adulti.
                </p>
              </article>
            </FadeIn>
          </Section>
        </div>
      </section>

      {/* ——— SVOLGIMENTO ——— */}
      <section className="relative bg-paper-warm border-t-[1.5px] border-ink/15">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 py-16 md:py-24">
          <Section
            num="03"
            kicker="Come si svolge"
            title="La prova, in pratica"
            color="saffron"
          >
            <p className="text-[17px] leading-[1.7] text-ink-soft md:text-[18px]">
              Due parti: un test scritto di matematica e, per i meglio
              classificati, un colloquio in inglese. La prova scritta del 2026
              si tiene in contemporanea nelle sedi di {currentEditionVenueNames}.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
              <FadeIn>
                <ExamCard
                  step="Parte 01"
                  title="Test di matematica"
                  subtitle="Scritto · in inglese"
                  bullets={[
                    { label: "Quando", value: currentEdition.eventDateDisplay },
                    { label: "Dove", value: currentEditionVenueNames },
                    { label: "Durata", value: "1 ora" },
                    { label: "Strumenti", value: "matita e gomma — niente calcolatrice" },
                    { label: "Stile", value: "tipo SAT (test USA per l'università)" },
                  ]}
                  link={{ label: "Scarica esempi (.zip)", href: currentEdition.samplesUrl }}
                  accent="bg-saffron"
                  shadow="sticker-saffron"
                />
              </FadeIn>
              <FadeIn delay="100ms">
                <ExamCard
                  step="Parte 02"
                  title="Colloquio in inglese"
                  subtitle="Orale · solo i meglio classificati"
                  bullets={[
                    { label: "Durata", value: "20–30 minuti" },
                    { label: "Quando", value: currentEdition.oralExam.date },
                    { label: "Dove", value: currentEdition.oralExam.venue },
                  ]}
                  link={
                    currentEdition.oralExam.mapsUrl
                      ? {
                          label: "Indicazioni stradali",
                          href: currentEdition.oralExam.mapsUrl,
                          external: true,
                        }
                      : undefined
                  }
                  accent="bg-corallo text-paper"
                  shadow="sticker-corallo"
                />
              </FadeIn>
            </div>
          </Section>
        </div>
      </section>
    </>
  );
}

function Section({
  num,
  kicker,
  title,
  color,
  children,
}: {
  num: string;
  kicker: string;
  title: string;
  color: "blu" | "corallo" | "saffron";
  children: React.ReactNode;
}) {
  const accent = {
    blu: "text-blu border-blu",
    corallo: "text-corallo border-corallo",
    saffron: "text-saffron-deep border-saffron-deep",
  }[color];
  const numBg = {
    blu: "bg-blu text-paper",
    corallo: "bg-corallo text-paper",
    saffron: "bg-saffron text-ink",
  }[color];

  return (
    <div className="grid gap-10 md:grid-cols-12 md:gap-14">
      <aside className="md:col-span-4">
        <FadeIn>
          <span className={`chip ${accent} bg-paper`}>{kicker}</span>
          <div className="mt-5 flex items-baseline gap-4">
            <span
              className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${numBg} font-display text-2xl font-bold border-[1.5px] border-ink shadow-[3px_3px_0_var(--ink)]`}
            >
              {num}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight tracking-tight text-ink">
              {title}
            </h2>
          </div>
        </FadeIn>
      </aside>
      <div className="md:col-span-8">
        <FadeIn delay="80ms">{children}</FadeIn>
      </div>
    </div>
  );
}

function Requirement({
  num,
  label,
  text,
}: {
  num: number;
  label: string;
  text: string;
}) {
  return (
    <li className="flex items-start gap-5 rounded-2xl border-[1.5px] border-ink bg-paper p-5 transition-transform hover:-translate-y-0.5 hover:rotate-[-0.4deg]">
      <span className="num-badge bg-blu text-paper border-blu">{num}</span>
      <div className="min-w-0 flex-1">
        <span className="text-[12px] uppercase tracking-caps-tight font-semibold text-blu">
          {label}
        </span>
        <p className="mt-1 text-[16px] leading-relaxed text-ink md:text-[17px]">
          {text}
        </p>
      </div>
    </li>
  );
}

function ExamCard({
  step,
  title,
  subtitle,
  bullets,
  link,
  accent,
  shadow,
}: {
  step: string;
  title: string;
  subtitle: string;
  bullets: { label: string; value: React.ReactNode }[];
  link?: { label: string; href: string; external?: boolean };
  accent: string;
  shadow: string;
}) {
  return (
    <article className={`group relative flex h-full flex-col rounded-3xl border-[1.5px] border-ink bg-paper p-7 md:p-9 ${shadow} transition-transform hover:-translate-y-1`}>
      <span className={`inline-flex w-fit items-center rounded-full border-[1.5px] border-ink ${accent} px-3.5 py-1 text-[12px] uppercase tracking-caps-tight font-semibold`}>
        {step}
      </span>
      <h3 className="mt-5 font-display text-3xl md:text-4xl font-bold leading-tight tracking-tight text-ink">
        {title}
      </h3>
      <p className="mt-1 text-[14px] text-ink-mute uppercase tracking-caps-tight font-semibold">
        {subtitle}
      </p>

      <dl className="mt-6 space-y-3 border-t border-ink/15 pt-5">
        {bullets.map((b) => (
          <div key={b.label} className="grid grid-cols-[6.5rem,1fr] gap-3 items-baseline">
            <dt className="text-[11px] uppercase tracking-caps-tight font-semibold text-ink-mute">
              {b.label}
            </dt>
            <dd className="text-[15px] text-ink">{b.value}</dd>
          </div>
        ))}
      </dl>

      {link && (
        <a
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13px] font-semibold text-paper border-[1.5px] border-ink transition-colors hover:bg-blu"
        >
          {link.label}
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      )}
    </article>
  );
}
