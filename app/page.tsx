import HeaderBar from "@/components/HeaderBar";
import Landing from "@/sections/Landing";
import Transcription from "@/sections/Transcription";
import Modes from "@/sections/Modes";
import Footer from "@/sections/Footer";
import HowItWorks from "./sections/HowItWorks";
import Science from "./sections/Science";
import Display from "./sections/Display";
import Feedback from "./sections/Feedback";

export const metadata = {
  title: "YapRap - Learn Freestyle",
  description: "Free, fun, and effective freestyle. We give you everything you need to learn and master freestyle.",
  icons: {
    icon: '/favicon.ico', // Path to your favicon
  },
  openGraph: {
    title: "YapRap - Learn Freestyle",
    description: "Master freestyle rap with YapRap. Improve your communication, creativity, and improvisation skills with real feedback on your yaps and raps. Learn techniques, practice effortlessly, and elevate your storytelling.",
    url: "https://yaprap.net",
    image: "@/assets/yaprap-logo-bone.svg", // Open Graph image for social sharing
  },
};

export default function Home() {
  return (
    <div className='flex-1 items-center justify-items-center'>
      <HeaderBar />
      <Landing />
      <HowItWorks />
      <Feedback />
      <Transcription />
      <Display />
      <Modes />
      <Science />
      <Footer />
    </div>
  );
}
