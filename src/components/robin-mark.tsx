import Image from "next/image";

/** Decorative mark: pair with a visible or accessible Odd Robin name. */
export function RobinMark({ className = "size-10" }: { className?: string }) {
  return (
    <Image
      src="/odd-robin.svg"
      alt=""
      aria-hidden="true"
      width={40}
      height={40}
      className={`shrink-0 ${className}`}
    />
  );
}
