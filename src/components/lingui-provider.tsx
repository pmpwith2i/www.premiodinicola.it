"use client";

import { I18nProvider } from "@lingui/react";
import { type ReactNode, useEffect, useState } from "react";
import { i18n, loadCatalog } from "@/lib/i18n";

export function LinguiProvider({ children }: { children: ReactNode }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    loadCatalog("it").then(() => setLoaded(true));
  }, []);

  if (!loaded) return null;

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
}
