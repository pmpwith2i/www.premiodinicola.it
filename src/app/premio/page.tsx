import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";
import { prizes } from "@/data/prizes";
import { sponsors } from "@/data/sponsors";

export const metadata: Metadata = {
  title: "Premio",
  description: "Premi e riconoscimenti del Premio Di Nicola",
};

const totalPrize =
  prizes.firstPlace.amount +
  prizes.secondPlace.amount +
  prizes.incentivoRosa.amount +
  prizes.premioImprenditorialita.amount;

export default function PremioPage() {
  return (
    <>
      {/* ——— HEADER ——— */}
      <section className="relative bg-paper">
        <span aria-hidden className="absolute -top-6 right-[10%] hidden md:block font-display text-[8rem] font-bold text-corallo/20 select-none animate-float" style={{ "--r": "-12deg" } as React.CSSProperties}>€</span>
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 pt-12 pb-10 md:pt-20 md:pb-14">
          <FadeIn>
            <span className="chip border-corallo text-corallo">02 / Premio</span>
            <h1 className="mt-6 font-display text-[clamp(2.6rem,9vw,6rem)] font-bold leading-[0.95] tracking-tight text-ink">
              <span className="block">In palio</span>
              <span className="block">
                <span className="marker-corallo text-ink">€{totalPrize.toLocaleString("it-IT")}</span>,
              </span>
              <span className="block">e qualcosa in più.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-[17px] leading-relaxed text-ink-soft md:text-[19px]">
              Quattro categorie di premio in denaro (o in Bitcoin, a scelta),
              più mentoring e contatti utili. Ecco come è ripartito il
              montepremi.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ——— PRIMI / SECONDI — sticker prize cards ——— */}
      <section className="relative bg-blu-soft border-y-[1.5px] border-ink/15">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 py-16 md:py-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-ink">
              Classifica principale
            </h2>
            <span className="font-hand text-2xl text-blu-deep">
              in € o in ₿ — a scelta
            </span>
          </div>

          <div className="grid gap-8 md:grid-cols-2 md:gap-10">
            <FadeIn>
              <PrizeStickerCard
                ordinal="1°"
                title="Primo classificato"
                amount={prizes.firstPlace.amount}
                note="Per il punteggio più alto. Tutto questo, tutto in una giornata."
                tone="primary"
              />
            </FadeIn>
            <FadeIn delay="100ms">
              <PrizeStickerCard
                ordinal="2°"
                title="Secondo classificato"
                amount={prizes.secondPlace.amount}
                note="Per il secondo miglior punteggio."
                tone="secondary"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ——— INCENTIVO ROSA ——— */}
      <section className="relative bg-paper">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-12 md:gap-14">
            <aside className="md:col-span-5">
              <FadeIn>
                <span className="chip border-rosa text-rosa-deep bg-paper">
                  <span className="h-1.5 w-1.5 rounded-full bg-rosa" />
                  Extra · per la studentessa
                </span>

                <h2 className="mt-6 font-display text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight">
                  <span className="text-ink">Incentivo</span><br />
                  <span className="text-rosa-deep">Rosa</span>.
                </h2>

                <div className="relative mt-8 inline-block">
                  <div className="sticker sticker-rosa tilt-l rounded-3xl bg-rosa text-paper px-8 py-6">
                    <p className="text-[12px] uppercase tracking-caps-tight font-semibold text-paper/80">
                      In aggiunta al premio standard
                    </p>
                    <p className="mt-1 font-display text-[clamp(4rem,11vw,7rem)] font-bold leading-none">
                      €{prizes.incentivoRosa.amount}
                    </p>
                  </div>
                  <span aria-hidden className="absolute -top-4 -right-4 font-hand text-3xl text-corallo rotate-[12deg]">
                    +700!
                  </span>
                </div>
              </FadeIn>
            </aside>
            <div className="md:col-span-7">
              <FadeIn delay="100ms">
                <p className="text-[17px] leading-[1.8] text-ink-soft md:text-[18px]">
                  {prizes.incentivoRosa.description}
                </p>
                <p className="mt-6 rounded-2xl border-l-[4px] border-rosa bg-paper-tint px-5 py-4 text-[15px] leading-relaxed text-ink-soft">
                  <span className="font-semibold text-ink">Dal 2021</span>{" "}
                  Danila Di Nicola, sorella del fondatore, contribuisce per
                  incentivare le ragazze allo studio della Matematica.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ——— IMPRENDITORIALITÀ ——— */}
      <section className="relative bg-paper-warm border-t-[1.5px] border-ink/15">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-7 md:order-2">
              <FadeIn>
                <span className="chip border-corallo text-corallo bg-paper">
                  <span className="h-1.5 w-1.5 rounded-full bg-corallo" />
                  Opzionale · spirito di iniziativa
                </span>

                <h2 className="mt-6 font-display text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight">
                  <span className="text-ink">Premio</span><br />
                  <span className="text-corallo">Imprenditorialità</span>.
                </h2>

                <div className="relative mt-8 inline-block">
                  <div className="sticker sticker-corallo tilt-r rounded-3xl bg-corallo text-paper px-8 py-6">
                    <p className="text-[12px] uppercase tracking-caps-tight font-semibold text-paper/80">
                      Decisione della giuria
                    </p>
                    <p className="mt-1 font-display text-[clamp(4rem,11vw,7rem)] font-bold leading-none">
                      €{prizes.premioImprenditorialita.amount}
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
            <aside className="md:col-span-5 md:order-1">
              <FadeIn delay="100ms">
                <p className="text-[16px] leading-[1.8] text-ink-soft md:text-[17px]">
                  {prizes.premioImprenditorialita.description}
                </p>
                <p className="mt-6 rounded-2xl border-l-[4px] border-corallo bg-paper px-5 py-4 text-[14px] leading-relaxed text-ink-soft">
                  {prizes.premioImprenditorialita.redistributionRule}
                </p>
              </FadeIn>
            </aside>
          </div>
        </div>
      </section>

      {/* ——— MENTORAGGIO ——— */}
      <section className="relative bg-paper">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-12 md:gap-14">
            <aside className="md:col-span-5">
              <FadeIn>
                <span className="chip border-blu text-blu">
                  <span className="h-1.5 w-1.5 rounded-full bg-blu" />
                  Oltre il denaro
                </span>
                <h2 className="mt-6 font-display text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight">
                  <span className="text-blu-deep">Mentoring</span><br />
                  <span className="text-ink">vero, non slogan.</span>
                </h2>
                <p className="mt-6 font-hand text-3xl text-corallo leading-tight">
                  esperienza<br />che si tramanda ↳
                </p>
              </FadeIn>
            </aside>

            <div className="md:col-span-7">
              <FadeIn delay="100ms">
                <article className="rounded-3xl border-[1.5px] border-ink bg-blu-soft p-7 md:p-10 shadow-[6px_6px_0_var(--ink)]">
                  <p className="text-[17px] leading-[1.85] text-ink md:text-[18px]">
                    {prizes.mentoraggio.description}
                  </p>
                  <div className="mt-6 inline-flex flex-wrap items-center gap-2">
                    <span className="chip bg-paper border-ink">./cogita ETS</span>
                    <span className="chip bg-paper border-ink">crescita professionale</span>
                    <span className="chip bg-paper border-ink">informatica</span>
                  </div>
                </article>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ——— RINGRAZIAMENTI ——— */}
      <section className="relative bg-ink text-paper">
        {/* decorative grid (subtle white quadretti) */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 py-20 md:py-28">
          <FadeIn>
            <span className="chip border-saffron text-saffron bg-transparent">
              <span className="h-1.5 w-1.5 rounded-full bg-saffron" />
              Chi rende possibile
            </span>
            <h2 className="mt-6 font-display text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight">
              <span className="block">Grazie,</span>
              <span className="block text-saffron font-hand text-7xl md:text-9xl rotate-[-2deg] inline-block mt-2">davvero</span>.
            </h2>
          </FadeIn>

          <div className="mt-12 grid gap-5 md:grid-cols-12 md:gap-6">
            {prizes.ringraziamenti.text.map((paragraph, i) => {
              let content: React.ReactNode = paragraph;
              for (const sponsor of sponsors) {
                if (paragraph.includes(sponsor.name)) {
                  const parts = paragraph.split(sponsor.name);
                  content = (
                    <>
                      {parts[0]}
                      <a
                        href={sponsor.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-saffron underline-hand draw-on-hover"
                      >
                        {sponsor.name}
                      </a>
                      {parts[1]}
                    </>
                  );
                  break;
                }
              }
              return (
                <FadeIn
                  key={i}
                  delay={`${i * 80}ms`}
                  className="md:col-span-6 lg:col-span-4"
                >
                  <article className="h-full rounded-2xl border border-paper/20 bg-white/[0.02] p-5 backdrop-blur-sm">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-saffron text-saffron font-display text-[12px] font-bold">
                      {i + 1}
                    </span>
                    <p className="mt-4 text-[15px] leading-[1.7] text-paper/85">
                      {content}
                    </p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function PrizeStickerCard({
  ordinal,
  title,
  amount,
  note,
  tone,
}: {
  ordinal: string;
  title: string;
  amount: number;
  note: string;
  tone: "primary" | "secondary";
}) {
  const isPrimary = tone === "primary";
  const card = isPrimary
    ? "bg-blu text-paper sticker-blu"
    : "bg-paper text-ink sticker-blu";
  const ord = isPrimary ? "bg-saffron text-ink" : "bg-ink text-paper";
  const noteColor = isPrimary ? "text-paper/80" : "text-ink-soft";

  return (
    <article
      className={`group sticker ${card} relative rounded-3xl p-7 md:p-9 transition-all`}
    >
      <div className="flex items-baseline justify-between">
        <span className={`inline-flex items-center justify-center rounded-full border-[1.5px] border-ink ${ord} px-3.5 py-1 font-display text-[14px] font-bold uppercase`}>
          {ordinal} classificato
        </span>
        <span className={`text-[11px] uppercase tracking-caps-tight font-semibold ${isPrimary ? "text-saffron" : "text-ink-mute"}`}>
          o equivalente ₿
        </span>
      </div>
      <h3 className="mt-6 font-display text-2xl md:text-3xl font-semibold leading-tight tracking-tight">
        {title}
      </h3>
      <p
        className="mt-2 font-display font-bold leading-none tracking-tight"
        style={{
          fontSize: isPrimary ? "clamp(5rem, 16vw, 11rem)" : "clamp(4rem, 13vw, 8.5rem)",
          letterSpacing: "-0.04em",
        }}
      >
        €{amount}
      </p>
      <p className={`mt-5 max-w-md text-[15px] leading-relaxed ${noteColor}`}>
        {note}
      </p>
    </article>
  );
}
