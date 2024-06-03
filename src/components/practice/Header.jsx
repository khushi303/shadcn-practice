"use client";
import React from "react";
import animationData from "../../lotties/ai-robot.json";
import Lottie from "lottie-react";


export default function Header() {
  return (
    <>
      <div className="py-10">
        <h1 className="text-5xl mx-auto text-center mb-7 font-semibold">
          Hii, I am Lottie.
        </h1>
        <Lottie
          animationData={animationData}
          className="sm:w-[500px] w-[200px] mx-auto"
          speed={1}
        />
      </div>
    </>
  );
}
