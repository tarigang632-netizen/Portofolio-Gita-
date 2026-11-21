interface SparkleStarProps {
  size?: number;
  className?: string;
}

export function SparkleStar({ size = 14, className = '' }: SparkleStarProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`text-gold fill-current shrink-0 ${className}`.trim()}
    >
      <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
    </svg>
  );
}
