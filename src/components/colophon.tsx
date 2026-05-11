import Link from "next/link";
import { sponsors } from "@/data/sponsors";
import { currentEdition } from "@/data/edition";

export function Colophon() {
  return (
    <footer className="relative mt-24 border-t-[1.5px] border-ink bg-paper-tint">
      {/* big friendly band */}
      <div className="relative overflow-hidden border-b border-ink/15">
        {/* decorative math symbols */}
        <span aria-hidden className="absolute -top-6 right-8 font-display text-[7rem] leading-none text-blu/15 select-none animate-slow-spin">×</span>
        <span aria-hidden className="absolute bottom-2 left-6 font-display text-[5rem] leading-none text-corallo/15 select-none">÷</span>

        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-7">
              <p className="chip border-blu text-blu bg-paper">
                <span className="h-1.5 w-1.5 rounded-full bg-blu" />
                Premio Di Nicola — 17ª edizione
              </p>
              <h2 className="mt-5 font-display text-[clamp(2.4rem,7vw,5rem)] font-bold leading-[0.95] tracking-tight">
                Si può{" "}
                <span className="marker">volare alto</span>.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
                Concorso annuale di Matematica e cultura generale per studenti
                abruzzesi di scuola superiore. Fondato nel 2008 da Vincenzo Di
                Nicola.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/registrazione"
                  className="group inline-flex items-center gap-2 rounded-full bg-blu px-5 py-2.5 text-sm font-semibold text-paper border-[1.5px] border-ink shadow-[3px_3px_0_var(--ink)] transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0_var(--ink)]"
                >
                  Iscriviti
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
                <a
                  href={`mailto:${currentEdition.contactEmail}`}
                  className="inline-flex items-center gap-2 rounded-full bg-paper px-5 py-2.5 text-sm font-semibold text-ink border-[1.5px] border-ink hover:bg-saffron transition-colors"
                >
                  Scrivimi un&apos;email
                </a>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-[11px] uppercase tracking-caps-tight font-semibold text-ink-mute">
                    Mappa
                  </p>
                  <ul className="mt-3 space-y-2 text-[15px]">
                    <li><Link href="/" className="hover:text-blu transition-colors">Home</Link></li>
                    <li><Link href="/partecipazione" className="hover:text-blu transition-colors">Partecipazione</Link></li>
                    <li><Link href="/premio" className="hover:text-blu transition-colors">Premio</Link></li>
                    <li><Link href="/registrazione" className="hover:text-blu transition-colors">Registrazione</Link></li>
                    <li><Link href="/edizioni-passate" className="hover:text-blu transition-colors">Vincitori</Link></li>
                  </ul>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-caps-tight font-semibold text-ink-mute">
                    Contatto
                  </p>
                  <ul className="mt-3 space-y-2 text-[15px]">
                    <li>
                      <a
                        href={`mailto:${currentEdition.contactEmail}`}
                        className="break-all hover:text-blu transition-colors"
                      >
                        {currentEdition.contactEmail}
                      </a>
                    </li>
                    <li className="text-ink-soft">Vincenzo Di Nicola</li>
                    <li className="text-ink-soft">Teramo · Abruzzo</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sponsor strip */}
      <div className="bg-paper">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 py-12">
          <div className="flex items-baseline justify-between border-b border-ink/15 pb-3">
            <p className="text-[11px] uppercase tracking-caps-tight font-semibold text-ink-mute">
              Chi rende possibile
            </p>
            <p className="font-hand text-xl text-corallo">grazie ✦</p>
          </div>
          <ul className="mt-6 grid gap-5 md:grid-cols-3">
            {sponsors.map((s, i) => {
              const accents = ["bg-blu-soft border-blu/40", "bg-paper-warm border-saffron-deep/40", "bg-[oklch(0.95_0.05_160)] border-menta-deep/40"] as const;
              return (
                <li key={s.name}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group block h-full rounded-2xl border-[1.5px] ${accents[i % accents.length]} p-5 transition-transform hover:-translate-y-1 hover:rotate-[-0.6deg]`}
                  >
                    <span className="text-[11px] uppercase tracking-caps-tight font-semibold text-ink-mute">
                      dal {s.since}
                    </span>
                    <span className="mt-2 block font-display text-xl font-semibold leading-tight text-ink group-hover:text-blu-deep transition-colors">
                      {s.name}
                    </span>
                    <span className="mt-2 block text-[13px] leading-relaxed text-ink-soft">
                      {s.description}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Bottom meta */}
      <div className="border-t border-ink/15 bg-ink text-paper">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center gap-2 px-5 py-5 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p className="text-[12px] text-paper/70">
            © {currentEdition.copyrightYear} Vincenzo Di Nicola. Tutti i diritti riservati.
          </p>
          <p className="font-hand text-xl leading-none text-saffron">
            Italia · Abruzzo · 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
