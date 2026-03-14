import { cn } from "./utils";

interface ProgressProps {
  value: number;
  className?: string;
}

export function Progress({ value, className }: ProgressProps) {
  return (
    <div className={cn("h-4 w-full bg-gray-700/50 rounded", className)}>
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-200 transition-all duration-500 rounded"
        style={{ 
          width: `${value}%`,
          willChange: 'width'
        }}
      />
    </div>
  );
}