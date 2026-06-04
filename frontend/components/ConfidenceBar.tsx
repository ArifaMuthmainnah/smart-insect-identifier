type Props = {
  confidence: number;
};

export default function ConfidenceBar({
  confidence,
}: Props) {
  return (
    <div className="w-full">
      <div className="mb-2 flex justify-between text-sm">
        <span>Confidence</span>
        <span>{confidence}%</span>
      </div>

      <div className="h-3 w-full rounded-full bg-zinc-800 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
          style={{
            width: `${confidence}%`,
          }}
        />
      </div>
    </div>
  );
}