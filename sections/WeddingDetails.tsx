"use client";

import { Church, MapPin, PartyPopper, Plane, Shirt } from "lucide-react";
import { ceremony, reception, accommodation } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

function DetailRow({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <Icon size={18} className="mt-0.5 shrink-0 text-[color:var(--gold)]" />
      <div>
        <p className="font-sans text-xs uppercase tracking-wide text-[color:var(--ink-muted)]">{label}</p>
        <p className="font-sans text-sm text-[color:var(--ink)]">{value}</p>
      </div>
    </div>
  );
}

export function WeddingDetails() {
  return (
    <Section id="details" className="bg-[color:var(--surface)]/40">
      <SectionHeading
        eyebrow="Wedding Details"
        title="Where & When"
        description="Everything you need to know to celebrate with us."
        className="mb-16"
      />

      <div className="grid gap-8 lg:grid-cols-3">
        <Reveal>
          <Card className="flex h-full flex-col gap-5">
            <Church size={28} className="text-[color:var(--gold)]" />
            <h3 className="font-serif text-2xl text-[color:var(--ink)]">{ceremony.heading}</h3>
            <div className="flex flex-col gap-4">
              <DetailRow icon={MapPin} label="Venue" value={ceremony.name} />
              <DetailRow icon={PartyPopper} label="Date &amp; Time" value={`${ceremony.date} at ${ceremony.time}`} />
              <DetailRow icon={Shirt} label="Dress Code" value={ceremony.dressCode ?? ""} />
            </div>
            <Button href={ceremony.mapsUrl} target="_blank" rel="noopener noreferrer" variant="secondary" className="mt-auto w-full">
              Open in Google Maps
            </Button>
          </Card>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="flex h-full flex-col gap-5">
            <PartyPopper size={28} className="text-[color:var(--gold)]" />
            <h3 className="font-serif text-2xl text-[color:var(--ink)]">{reception.heading}</h3>
            <div className="flex flex-col gap-4">
              <DetailRow icon={MapPin} label="Venue" value={reception.name} />
              <DetailRow icon={PartyPopper} label="Time" value={reception.time} />
              <DetailRow icon={MapPin} label="Address" value={reception.address} />
              <DetailRow icon={MapPin} label="Parking" value={reception.parking ?? ""} />
            </div>
            <Button href={reception.mapsUrl} target="_blank" rel="noopener noreferrer" variant="secondary" className="mt-auto w-full">
              Get Directions
            </Button>
          </Card>
        </Reveal>

        <Reveal delay={0.2}>
          <Card className="flex h-full flex-col gap-5">
            <Plane size={28} className="text-[color:var(--gold)]" />
            <h3 className="font-serif text-2xl text-[color:var(--ink)]">Accommodation</h3>
            <div className="flex flex-col gap-3">
              {accommodation.hotels.map((hotel) => (
                <div key={hotel.name} className="flex items-center justify-between font-sans text-sm">
                  <span className="text-[color:var(--ink)]">{hotel.name}</span>
                  <span className="text-[color:var(--ink-muted)]">{hotel.distance}</span>
                </div>
              ))}
            </div>
            <p className="font-sans text-sm text-[color:var(--ink-muted)]">{accommodation.airportInfo}</p>
            <ul className="flex flex-col gap-2 font-sans text-sm text-[color:var(--ink-muted)]">
              {accommodation.travelTips.map((tip) => (
                <li key={tip} className="flex gap-2">
                  <span className="text-[color:var(--gold)]">&bull;</span>
                  {tip}
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
