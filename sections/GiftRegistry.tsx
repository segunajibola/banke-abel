"use client";

import { Gift, Heart, Home, Plane } from "lucide-react";
import { registryLinks } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerGroup } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const icons = [Gift, Heart, Plane, Home];

export function GiftRegistry() {
  return (
    <Section id="registry">
      <SectionHeading
        eyebrow="Gift Registry"
        title="With Love, Not Obligation"
        description="Your presence at our wedding is the greatest gift of all. For those who wish to give, we've shared a few options below."
        className="mb-16"
      />

      <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {registryLinks.map((link, index) => {
          const Icon = icons[index % icons.length];
          return (
            <Reveal key={link.label}>
              <Card className="flex h-full flex-col items-center gap-4 text-center">
                <Icon size={26} className="text-[color:var(--gold)]" />
                <h3 className="font-serif text-xl text-[color:var(--ink)]">{link.label}</h3>
                <p className="flex-1 font-sans text-sm text-[color:var(--ink-muted)]">{link.description}</p>
                <Button href={link.href} variant="secondary" className="w-full">
                  View
                </Button>
              </Card>
            </Reveal>
          );
        })}
      </StaggerGroup>
    </Section>
  );
}
