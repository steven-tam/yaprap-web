import React from "react";

function FeedbackTextBox() {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-yellow-400">
          AI feedback and scoring
        </span>
      </h1>
      <p className="text-gray-500 p-1 text-2xl">
        Learn quickly and efficently with <span className="font-bold">personalized feedback</span> for every recording. Track your score and measure your progress
      </p>
    </div>
  );
}

export default FeedbackTextBox;
