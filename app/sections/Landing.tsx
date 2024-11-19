import ButtonContainer from "../components/buttons/ButtonContainer";

function Landing() {
  // justify-center and items-center requires the tag have the flex property
  return (
    <div className="flex items-center flex-col justify-center py-36 w-full">
        <div className="flex flex-col items-center justify-center w-1/3 md:w-1/2 pb-9">
          <div className="text-center">
            <h1 className="text-5xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-yellow-400">
                Free, fun, and effective freestyle
              </span>
            </h1>
            <p className="text-gray-500 p-1 text-2xl">We give you <span className="font-bold">everything</span> you need to learn and master freestyle</p>
          </div>
        </div>
        <ButtonContainer />
  </div>

  )
}

export default Landing