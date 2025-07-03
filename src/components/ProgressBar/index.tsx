export default function ProgressBar({ progress }: { progress: number }) {
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
        Progresso:{progress.toFixed(2)}%{" "}
      </p>
    </div>
  );
}
