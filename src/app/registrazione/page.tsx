import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";
import { currentEdition } from "@/data/edition";

export const metadata: Metadata = {
  title: "Registrazione",
  description: "Registrazione al Premio Di Nicola",
};

export default function RegistrazionePage() {
  const deadline = currentEdition.registrationDeadlineDisplay.split(" ore")[0];

  return (
    <>
      {/* ——— HEADER ——— */}
      <section className="relative bg-paper">
        <span aria-hidden className="absolute -top-2 right-[8%] hidden md:block font-display text-[8rem] font-bold text-saffron-deep/25 select-none animate-float" style={{ "--r": "8deg" } as React.CSSProperties}>+</span>
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 pt-12 pb-10 md:pt-20 md:pb-14">
          <FadeIn>
            <span className="chip border-saffron-deep text-saffron-deep">03 / Iscriviti</span>
            <h1 className="mt-6 font-display text-[clamp(2.6rem,9vw,6rem)] font-bold leading-[0.95] tracking-tight text-ink">
              <span className="block">Cinque campi,</span>
              <span className="block">
                <span className="marker">due minuti</span>.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-[17px] leading-relaxed text-ink-soft md:text-[19px]">
              Compila il modulo qui sotto entro{" "}
              <strong className="font-semibold text-ink">{deadline}</strong>.
              Riceverai una conferma all&apos;indirizzo che indichi.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ——— FORM ——— */}
      <section className="relative bg-paper-warm border-t-[1.5px] border-ink/15">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-12 md:gap-14">
            {/* Sidebar */}
            <aside className="md:col-span-4">
              <FadeIn>
                <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight tracking-tight text-ink">
                  Come funziona
                </h2>
                <ol className="mt-6 space-y-4">
                  <Step n={1} label="Compili il modulo" text="Cinque campi base: nome, email, scuola, classe, livello d'inglese." />
                  <Step n={2} label="Ricevi conferma" text={`Entro ${deadline} alla mail che indichi.`} />
                  <Step n={3} label="Ti presenti" text={`${currentEdition.eventDateDisplay.replace(" alle 4:00pm", " alle 16:00")}, presso ${currentEdition.venue.name}.`} />
                </ol>

                <div className="mt-8 rounded-2xl border-[1.5px] border-corallo bg-paper p-5">
                  <span className="inline-flex items-center gap-1.5 text-[12px] uppercase tracking-caps-tight font-semibold text-corallo">
                    <span className="font-display text-base leading-none">✦</span>
                    Non puoi venire a Teramo?
                  </span>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">
                    Scrivi a{" "}
                    <a href={`mailto:${currentEdition.contactEmail}`} className="font-semibold text-blu underline-hand draw-on-hover underline-hand-blu">
                      {currentEdition.contactEmail}
                    </a>
                    : ricevi un link Google Meet per partecipare da remoto.
                  </p>
                </div>

                <p className="mt-6 font-hand text-2xl text-blu-deep leading-tight">
                  ↳ ci vediamo presto?
                </p>
              </FadeIn>
            </aside>

            {/* Form card */}
            <div className="md:col-span-8">
              <FadeIn delay="100ms">
                <div className="relative rounded-3xl border-[1.5px] border-ink bg-paper shadow-[8px_8px_0_var(--ink)] p-6 md:p-10">
                  {/* tape */}
                  <span aria-hidden className="absolute -top-4 right-12 inline-block h-7 w-24 bg-saffron/85 rotate-[3deg] border border-saffron-deep/40" />

                  <div className="flex flex-wrap items-center justify-between gap-3 border-b-[1.5px] border-dashed border-ink/30 pb-5">
                    <p className="text-[12px] uppercase tracking-caps-tight font-semibold text-blu">
                      Modulo di registrazione · 2025
                    </p>
                    <p className="font-hand text-xl text-corallo leading-none">5 campi · 2 minuti</p>
                  </div>

                  <form
                    id="form1"
                    name="form1"
                    className="mt-8 space-y-7"
                    acceptCharset="UTF-8"
                    autoComplete="off"
                    encType="multipart/form-data"
                    method="post"
                    noValidate
                    action="https://premiodinicola.wufoo.com/forms/z19kt6bu1o7o8a7/#public"
                  >
                    <div className="grid gap-7 sm:grid-cols-2">
                      <Field id="Field17" label="Nome" num={1} required />
                      <Field id="Field18" label="Cognome" num={2} required />
                    </div>
                    <Field id="Field12" label="Contatto email" num={3} type="email" required maxLength={255} />
                    <Field id="Field13" label="Scuola superiore frequentata" num={4} required maxLength={255} />
                    <div className="grid gap-7 sm:grid-cols-2">
                      <Field id="Field14" label="Classe" num={5} placeholder="es. 4B" required maxLength={255} />
                      <Field id="Field15" label="Livello di inglese" num={6} placeholder="es. B2, C1…" required maxLength={255} />
                    </div>

                    {/* Honeypot — must remain unchanged */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="comment">Do Not Fill This Out</label>
                      <textarea name="comment" id="comment" rows={1} cols={1} />
                      <input
                        type="hidden"
                        id="idstamp"
                        name="idstamp"
                        value="AIPUJmu0uoC0lxK2UJK/HfQBSDudwGaERpTGfa3FewI="
                      />
                    </div>

                    <div className="border-t-[1.5px] border-dashed border-ink/30 pt-7">
                      <button
                        id="saveForm"
                        name="saveForm"
                        type="submit"
                        className="group inline-flex items-center gap-4 rounded-2xl bg-blu px-7 py-4 text-paper border-[1.5px] border-ink shadow-[5px_5px_0_var(--ink)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0_var(--ink)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_var(--ink)]"
                      >
                        <span className="flex flex-col items-start leading-tight">
                          <span className="text-[11px] uppercase tracking-caps-tight font-semibold text-saffron">
                            Invia la candidatura
                          </span>
                          <span className="font-display text-xl font-bold mt-0.5">
                            Mi candido →
                          </span>
                        </span>
                      </button>
                      <p className="mt-4 text-[12px] uppercase tracking-caps-tight font-semibold text-ink-mute">
                        Premendo invii, accetti l&apos;Honor Code.
                      </p>
                    </div>
                  </form>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Step({ n, label, text }: { n: number; label: string; text: string }) {
  return (
    <li className="flex items-start gap-4">
      <span className="num-badge bg-saffron text-ink border-ink shrink-0">{n}</span>
      <div className="min-w-0">
        <p className="font-display text-lg font-semibold leading-tight text-ink">{label}</p>
        <p className="mt-1 text-[14.5px] leading-relaxed text-ink-soft">{text}</p>
      </div>
    </li>
  );
}

function Field({
  id,
  label,
  num,
  type = "text",
  required,
  maxLength,
  placeholder,
}: {
  id: string;
  label: string;
  num: number;
  type?: string;
  required?: boolean;
  maxLength?: number;
  placeholder?: string;
}) {
  return (
    <div className="group">
      <label
        htmlFor={id}
        className="flex items-center gap-2 text-[12px] uppercase tracking-caps-tight font-semibold text-ink-mute"
      >
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blu text-paper text-[10px] font-bold">
          {num}
        </span>
        <span>{label}</span>
        {required && <span className="text-corallo">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        maxLength={maxLength}
        placeholder={placeholder}
        className="mt-2.5 block w-full rounded-xl border-[1.5px] border-ink/25 bg-paper px-4 py-3 font-display text-lg text-ink placeholder:text-ink/30 transition-all focus:border-blu focus:bg-blu-soft focus:outline-none focus:shadow-[3px_3px_0_var(--blu)]"
      />
    </div>
  );
}
