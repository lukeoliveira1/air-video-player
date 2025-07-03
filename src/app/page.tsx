"use client";

import { useRef, useState } from "react";
import ProgressBar from "@/components/ProgressBar";

export default function Home() {
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPlause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    setProgress((video.currentTime / video.duration) * 100);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
      <h1 className="text-center text-black font-bold text-2xl">
        Reprodução de Vídeos
      </h1>
      <video
        poster="/images/preview_video.jpg"
        ref={videoRef}
        controls
        width="640"
        height="480"
        onTimeUpdate={handleTimeUpdate}
        className="rounded shadow"
      >
        <source src="/videos/music_video.mp4" type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>

      <button
        onClick={handlePlayPlause}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Play/Pause
      </button>

      <div>
        <ProgressBar progress={progress} />
      </div>
    </div>
  );
}
