import { LoaderCircle } from "lucide-react";

export default function LoadingState() {
  return (
    <div className="flex flex-col items-center gap-4 py-12">
      <LoaderCircle
        size={48}
        className="animate-spin text-cyan-400"
      />

      <h3 className="text-xl font-semibold">
        AI is analyzing...
      </h3>

      <p className="text-zinc-400">
        Identifying insect species and generating insights
      </p>
    </div>
  );
}