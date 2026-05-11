import { Mail, ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { currentEdition } from "@/data/edition";
import { sponsors } from "@/data/sponsors";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-5xl px-6 py-12">
        {/* Sponsors */}
        <div className="mb-8">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-background/60">
            Partner e sostenitori
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {sponsors.map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-background/80 transition-colors hover:text-background"
              >
                {sponsor.name}
                <ExternalLink className="h-3 w-3" />
              </a>
            ))}
          </div>
        </div>

        <Separator className="bg-background/15" />

        {/* Contact + copyright */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <a
            href={`mailto:${currentEdition.contactEmail}?subject=Premio%20Di%20Nicola%20Contact`}
            className="flex items-center gap-2 text-sm text-background/80 transition-colors hover:text-background"
          >
            <Mail className="h-4 w-4" />
            {currentEdition.contactEmail}
          </a>
          <p className="text-xs text-background/50">
            &copy; {currentEdition.copyrightYear} Vincenzo Di Nicola
          </p>
        </div>
      </div>
    </footer>
  );
}
