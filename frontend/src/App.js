import { useState } from "react";
import "@/App.css";
import { Toaster } from "sonner";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Stats from "@/components/Stats";
import Overview from "@/components/Overview";
import Audience from "@/components/Audience";
import Outcome from "@/components/Outcome";
import Programme from "@/components/Programme";
import Experience from "@/components/Experience";
import Curriculum from "@/components/Curriculum";
import Capstone from "@/components/Capstone";
import Tools from "@/components/Tools";
import Faculty from "@/components/Faculty";
import Certificate from "@/components/Certificate";
import FinalCTA from "@/components/FinalCTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ApplyDialog from "@/components/ApplyDialog";
import ScheduleCallDialog from "@/components/ScheduleCallDialog";

function App() {
  const [applyOpen, setApplyOpen] = useState(false);
  const [callOpen, setCallOpen] = useState(false);

  const openApply = () => setApplyOpen(true);
  const openCall = () => setCallOpen(true);

  return (
    <div className="App bg-cream min-h-screen" data-testid="app-root">
      <Nav onApply={openApply} onCall={openCall} />
      <Hero onApply={openApply} onCall={openCall} />
      <LogoStrip />
      <Stats />
      <Overview />
      <Audience />
      <Outcome onApply={openApply} />
      <Programme />
      <Experience />
      <Curriculum />
      <Capstone />
      <Tools />
      <Faculty />
      <Certificate />
      <FinalCTA onApply={openApply} onCall={openCall} />
      <FAQ onCall={openCall} />
      <Footer />

      <ApplyDialog open={applyOpen} onOpenChange={setApplyOpen} />
      <ScheduleCallDialog open={callOpen} onOpenChange={setCallOpen} />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#0E1525",
            color: "#FAF6EE",
            border: "1px solid rgba(184,148,90,0.4)",
            fontFamily: "Inter, sans-serif",
          },
        }}
      />
    </div>
  );
}

export default App;
