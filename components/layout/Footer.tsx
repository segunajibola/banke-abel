"use client";

import { ArrowUp } from "lucide-react";
import { couple, contactInfo } from "@/lib/data";
import { scrollToId } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--border-soft)] bg-[color:var(--surface)] py-14">
      <Container className="flex flex-col items-center gap-6 text-center">
        <span className="font-serif text-3xl text-[color:var(--ink)]">
          {couple.brideName} &amp; {couple.groomName}
        </span>
        <p className="font-sans text-sm uppercase tracking-[0.25em] text-[color:var(--gold)]">
          {couple.weddingDateDisplay}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {contactInfo.social.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[color:var(--border-soft)] px-4 py-1.5 font-sans text-xs uppercase tracking-wide text-[color:var(--ink-muted)] transition-colors hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
            >
              {social.label}
            </a>
          ))}
        </div>

        <p className="max-w-md font-sans text-sm text-[color:var(--ink-muted)]">
          Thank you for being part of our story and for celebrating this next chapter with us.
        </p>

        <button
          type="button"
          onClick={() => scrollToId("#home")}
          aria-label="Back to top"
          className="mt-2 flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border-soft)] text-[color:var(--ink)] transition-colors hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
        >
          <ArrowUp size={18} />
        </button>
      </Container>
    </footer>
  );
}
