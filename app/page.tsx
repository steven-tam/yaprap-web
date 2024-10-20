import GooglePlayButton from "./components/GooglePlayButton"
import AppStoreButton from "./components/AppStoreButton";
import HeaderBar from "./components/HeaderBar";

export default function Home() {
  return (
    <div className="flex-1 items-center justify-items-center">
      <HeaderBar />
      <div className="gap-2">
        <AppStoreButton />
        <GooglePlayButton />
      </div>

      
    </div>
  );
}
