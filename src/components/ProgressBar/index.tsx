interface ProgressBarProps {
  progress: number;
  currentTime: number;
  duration: number;
}

function formatTime(seconds: number): string {
  if (isNaN(seconds) || seconds === Infinity) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function ProgressBar({
  progress,
  currentTime,
  duration,
}: ProgressBarProps) {
  return (
    <div className="my-4">
      <div className="w-xl h-2 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 transition-all duration-100 ease-linear"
          style={{
            width: `${progress}%`,
          }}
        ></div>
      </div>
      <p className="text-sm text-gray-700 mt-2 text-center">
        Progresso: {progress.toFixed(2)}%{" "}
      </p>
      <p className="text-sm text-gray-700 mt-2 text-center">
        {formatTime(currentTime)} / {formatTime(duration)}
      </p>
    </div>
  );
}
