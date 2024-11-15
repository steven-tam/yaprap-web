import HeaderBar from "@/components/HeaderBar";
import Landing from "@/sections/Landing";
import Transcription from "@/sections/Transcription";
import Modes from "@/sections/Modes";
import Footer from "@/sections/Footer";
import HowItWorks from "./sections/HowItWorks";
import Science from "./sections/Science";
import Display from "./sections/Display";

export const metadata = {
  title: "YapRap - Learn Freestyle",
  description: "Free, fun, and effective freestyle. We give you everything you need to learn and master freestyle.",
  icons: {
    icon: '/favicon.ico', // Path to your favicon
  },
  openGraph: {
    title: "YapRap - Learn Freestyle",
    description: "Learn and master freestyle rap with YapRap. Learn techniques, practice, and improve your communication skills",
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
      <Display />
      <Modes />
      <Transcription />
      <Science />
      <Footer />
    </div>
  );
}
