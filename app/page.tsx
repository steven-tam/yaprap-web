import HeaderBar from "@/components/HeaderBar";
import Landing from "@/components/sections/Landing";
import Prompts from "@/components/sections/Prompts";
import Transcription from "@/components/sections/Transcription";
import Modes from "@/components/sections/Modes";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex-1 items-center justify-items-center justify-start">
      <HeaderBar />
      <Landing />
      <Modes />
      <Transcription />
      <Prompts />
      <Footer />

    </div>
  );
}
