import GooglePlayButton from "./components/GooglePlayButton"
import AppStoreButton from "./components/AppStoreButton";
import HeaderBar from "./components/HeaderBar";
import YapRapLogo from "@/assets/yaprapkeet-simple3.png";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex-1 items-center justify-items-center">
      <HeaderBar />
      <Image 
        src={YapRapLogo}
        width={200}
        alt="YapRapLogo"
      />
      <div className="gap-2">
        <AppStoreButton />
        <GooglePlayButton />
      </div>

      
    </div>
  );
}
