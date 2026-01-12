"use client"

import Nav from "@/components/Home/Nav"
import Hero from "@/components/Home/Hero"
import ExperienceSection from "@/components/Home/ExperienceSection"
import SkillsSection from "@/components/Home/SkillsSection"
import EducationSection from "@/components/Home/EducationSection"
import LanguagesSection from "@/components/Home/LanguagesSection"
import ContactSection from "@/components/Home/ContactSection"
import Footer from "@/components/Home/Footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <LanguagesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
