"use client";

import Link from "next/link";
import {
  currentEdition,
  currentEditionVenueCities,
  isEventPassed,
  isRegistrationOpen,
} from "@/data/edition";

export function HeroCta() {
  if (isRegistrationOpen()) {
    const deadline = currentEdition.registrationDeadlineDisplay.split(" ore")[0];
    return (
      <div className="flex flex-col gap-3">
        <Link
          href="/registrazione"
          className="group inline-flex w-fit items-center gap-4 rounded-2xl bg-blu px-6 py-4 text-paper border-[1.5px] border-ink shadow-[5px_5px_0_var(--ink)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0_var(--ink)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_var(--ink)]"
        >
          <span className="flex flex-col items-start leading-tight">
            <span className="text-[11px] uppercase tracking-caps-tight font-semibold text-saffron">
              Iscrizioni aperte — entro
            </span>
            <span className="font-display text-xl font-bold mt-0.5">
              {deadline}
            </span>
          </span>
          <span aria-hidden className="font-display text-2xl leading-none transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
        <p className="text-[12px] uppercase tracking-caps-tight font-semibold text-ink-mute">
          Gratuito · Posti limitati · {currentEditionVenueCities}
        </p>
      </div>
    );
  }

  if (isEventPassed()) {
    return (
      <div className="inline-flex max-w-md items-start gap-3 rounded-xl border-[1.5px] border-ink bg-paper-warm px-4 py-3.5 text-sm">
        <span aria-hidden className="font-display text-xl leading-none text-corallo">✦</span>
        <span className="text-ink-soft">
          L&apos;edizione {currentEdition.year} si è conclusa.{" "}
          <span className="font-semibold text-ink">Torna l&apos;anno prossimo!</span>
        </span>
      </div>
    );
  }

  return (
    <div className="inline-flex max-w-md items-start gap-3 rounded-xl border-[1.5px] border-ink bg-paper-warm px-4 py-3.5 text-sm">
      <span aria-hidden className="font-display text-xl leading-none text-corallo">✦</span>
      <span className="text-ink-soft">
        Registrazioni chiuse. L&apos;evento si terrà il{" "}
        <span className="font-semibold text-ink">
          {currentEdition.eventDateDisplay}
        </span>.
      </span>
    </div>
  );
}
