"use client";

import { Mail, Phone, User } from "lucide-react";
import { contactInfo } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerGroup } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Questions? Reach Out"
        description="We're happy to help with anything you need before the big day."
        className="mb-16"
      />

      <StaggerGroup className="grid gap-6 sm:grid-cols-3">
        <Reveal>
          <Card className="flex h-full flex-col items-center gap-3 text-center">
            <User size={24} className="text-[color:var(--gold)]" />
            <h3 className="font-serif text-lg text-[color:var(--ink)]">
              Wedding Planner
            </h3>
            <p className="font-sans text-sm text-[color:var(--ink-muted)]">
              {contactInfo.plannerName}
            </p>
            <a
              href={`mailto:${contactInfo.plannerContact}`}
              className="font-sans text-sm text-[color:var(--gold)] hover:underline"
            >
              {contactInfo.plannerContact}
            </a>
            <a
              href={`mailto:${contactInfo.plannerContact}`}
              className="font-sans text-sm text-[color:var(--gold)] hover:underline"
            >
              {contactInfo.phone}
            </a>
          </Card>
        </Reveal>
      </StaggerGroup>
    </Section>
  );
}
