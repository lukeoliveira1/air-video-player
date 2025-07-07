"use client";

import { useEffect, useRef, useState } from "react";
import ProgressBar from "@/components/ProgressBar";

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [textButton, setTextButton] = useState("Play");
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPlause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setTextButton("Pause");
    } else {
      video.pause();
      setTextButton("Play");
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    setCurrentTime(video.currentTime);
    setDuration(video.duration);
    setProgress((video.currentTime / video.duration) * 100);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handlePlay = () => setTextButton("Pause");
    const handlePause = () => setTextButton("Play");

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

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
        {textButton}
      </button>

      <div>
        <ProgressBar
          progress={progress}
          currentTime={currentTime}
          duration={duration}
        />
      </div>
    </div>
  );
}
