import GooglePlayButton from "@/components/buttons/GooglePlayButton"
import AppStoreButton from "@/components/buttons/AppStoreButton";

function Landing() {

  // To use justify-center and items-center, you need the flex property
  return (
    <div className="flex items-center flex-col justify-center h-screen w-full">
      <div className="flex flex-col items-center justify-center w-1/3 md:w-1/2 gap-4">
        <div className="text-center">
          <h1 className="text-5xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-yellow-400">
              Free, Fun, and Effective Freestyle
            </span>
          </h1>
          <p className="text-gray-500 dark:text-gray-100">We give you everything you need to learn and master freestyle!</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center md:space-y-0 md:space-x-4">
          <AppStoreButton />
          <GooglePlayButton />
      </div>
  </div>

  )
}

export default Landing