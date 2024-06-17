import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="md:px-4 bg-[#111827] text-white">
      <div className="container m-auto">
        <div className="flex flex-col items-center justify-center h-full min-h-[80vh]">
        <div className="main-heading font-bold text-2xl text-center py-4 md:text-3xl">Lorem ipsum dolor sit amet.</div>
        <div className="main-heading font-medium text-sm text-gray-200 px-4 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum accusantium sequi excepturi.</div>
        </div>
      </div>
    </div>
  );
}
