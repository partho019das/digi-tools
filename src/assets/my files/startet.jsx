import React from "react";

const steps = [
  {
    step: 1,
    image: "/assets/user.png",
    title: "Create Account",
    description: "Sign up for free in seconds. No credit card required to get started.",
  },
  {
    step: 2,
    image: "/assets/package.png",
    title: "Choose Products",
    description: "Customize your experience to suit your workflow.",
  },
  {
    step: 3,
    image: "/assets/rocket.png",
    title: "Start Using Tools",
    description: "Enjoy all premium features immediately and efficiently.",
  },
];

const Startet = () => {
  return (
    <div className="px-4 md:px-0 mt-20 shadow shadow-4xl">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold">Get Started in 3 Steps</h2>
        <p className="text-[#627382] mt-2">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      {/* Responsive grid for 3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {steps.map((step) => (
          <div
            key={step.step}
            className="relative w-full max-w-sm shadow-4xl rounded-lg overflow-hidden flex flex-col items-center p-6"
          >
            {/* Top-right number */}
            <h2 className="absolute top-2 right-2 bg-purple-800 rounded-full w-8 h-8 flex items-center justify-center text-white">
              {step.step}
            </h2>

            {/* Centered Image */}
            <img src={step.image} alt={step.title} className="max-w-full h-auto" />

            {/* Centered Text */}
            <div className="text-center mt-6">
              <h1 className="text-xl font-semibold">{step.title}</h1>
              <p className="text-[#627382] mt-2">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Startet;