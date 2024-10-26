import HeaderBar from "@/components/HeaderBar";
import Landing from "@/sections/Landing";
import Transcription from "@/sections/Transcription";
import Modes from "@/sections/Modes";
import Footer from "@/sections/Footer";
import HowItWorks from "./sections/HowItWorks";
import Science from "./sections/Science";

export default function Home() {
  return (
    <div className="flex-1 items-center justify-items-center">
      <HeaderBar />
      <Landing />
      <Science />
      <HowItWorks />
      <Modes />
      <Transcription />
      <Footer />

    </div>
  );
}
