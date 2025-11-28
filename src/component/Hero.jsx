import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* 🎥 Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/Sun.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{ filter: "brightness(1.2) contrast(1.15) saturate(1.1)" }}
      ></video>


      {/* 🌗 Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>

      {/* CTA Button at Bottom */}
      <div className="absolute inset-x-0 bottom-10 sm:bottom-16 z-10 flex justify-center px-4">
        <a
          href="#search"
          className="w-full max-w-xs sm:max-w-none sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full transition shadow-lg sm:animate-bounce"
        >
          Search Media
        </a>
      </div>
    </section>
  );
}
