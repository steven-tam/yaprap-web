import GooglePlayButton from "@/components/buttons/GooglePlayButton"
import AppStoreButton from "@/components/buttons/AppStoreButton";
import YapRapMockup from "@/assets/yaprap-mockup.svg";
import Image from 'next/image';

function Landing() {
  return (
    <div className="flex-1 items-center justify-items-center justify-start">
      <div>
      <Image 
        src={YapRapMockup}
        width={200}
        alt="YapRapLogo"
      />
      <h1>Free, fun, and effective freestyle</h1>

      </div>
      <div className="gap-2">
        <AppStoreButton />
        <GooglePlayButton />
      </div>

      
    </div>
  )
}

export default Landing