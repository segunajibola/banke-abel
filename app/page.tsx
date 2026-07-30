"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { FloatingButtons } from "@/components/layout/FloatingButtons";
import { useBackgroundMusic } from "@/hooks/useBackgroundMusic";
import { Hero } from "@/sections/Hero";
import { LoveStory } from "@/sections/LoveStory";
import { Gallery } from "@/sections/Gallery";
import { WeddingDetails } from "@/sections/WeddingDetails";
import { ColorPalette } from "@/sections/ColorPalette";
import { WeddingParty } from "@/sections/WeddingParty";
import { Schedule } from "@/sections/Schedule";
import { VenueMap } from "@/sections/VenueMap";
import { RSVP } from "@/sections/RSVP";
import { GiftRegistry } from "@/sections/GiftRegistry";
import { FAQ } from "@/sections/FAQ";
import { Contact } from "@/sections/Contact";

export default function Home() {
  const { isPlaying, toggle } = useBackgroundMusic("/audio/wedding-song.mp3");

  return (
    <>
      <ScrollProgress />
      <Navbar isMusicPlaying={isPlaying} onToggleMusic={toggle} />

      <main className="flex-1">
        <Hero />
        <LoveStory />
        <Gallery />
        <WeddingDetails />
        <ColorPalette />
        <WeddingParty />
        <Schedule />
        <VenueMap />
        <RSVP />
        <GiftRegistry />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}
