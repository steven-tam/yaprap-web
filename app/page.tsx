import HeaderBar from "@/components/HeaderBar";
import Landing from "@/sections/Landing";
import Prompts from "@/sections/Prompts";
import Transcription from "@/sections/Transcription";
import Modes from "@/sections/Modes";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <div className="flex-1 items-center justify-items-center">
      <HeaderBar />
      <Landing />
      <Modes />
      <Transcription />
      <Prompts />
      <Footer />

    </div>
  );
}
