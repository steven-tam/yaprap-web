import ButtonContainer from "@/components/buttons/ButtonContainer";
import HomeScreenshots from "@/components/HomeScreenshots";

function Landing() {
  // justify-center and items-center requires the tag have the flex property
  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center py-24 w-full gap-10">
      <div className="flex items-center flex-col justify-center w-6/12">
        <div className="flex flex-col items-center justify-center pb-9">
          <div className="text-center">
            <h1 className="text-5xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-yellow-400">
                Free, fun, and effective freestyle
              </span>
            </h1>
            <p className="text-gray-500 p-1 text-2xl">
              Learn freestyle and <span className="font-bold">improve your communication skills</span> with YapRap.<span className="font-bold"> With quick, bite-sized exercises</span>, you can practice anywhere at anytime while elevating your storytelling, creativity, and clarity. 
            </p>
          </div>
        </div>
        <ButtonContainer />
      </div>
      <HomeScreenshots />
    </div>
  );
}

export default Landing;
