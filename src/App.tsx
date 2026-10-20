import { AboutSection } from "./components/AboutSection";
import { AISection } from "./components/AISection";
import { ContactSection } from "./components/ContactSection";
import { CVSection } from "./components/CVSection";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

function App() {
  return (
    <div className="mx-auto w-full max-w-[1440px] overflow-hidden">
      <SiteHeader />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <AISection />
        <CVSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
