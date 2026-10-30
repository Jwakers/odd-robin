"use client";

import { agencyOffer } from "@/content/agency-partnership";
import { RobinMark } from "@/components/robin-mark";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteFooter({ year }: { year: number }) {
  const isAgency = usePathname() === "/for-agencies";

  if (isAgency) {
    return (
      <footer className="border-t border-outline-variant bg-background px-6 py-7 text-foreground md:px-16">
        <div className="mx-auto flex max-w-[1312px] flex-col gap-5 text-[13px] leading-[22px] md:flex-row md:items-center md:justify-between">
          <Link href="/" className="flex items-center gap-2.5 font-mono text-base font-semibold tracking-tight">
            <RobinMark className="size-9" />
            {agencyOffer.businessName}
          </Link>
          <p>Independent development. Built on partnership.</p>
          <p>© {year} {agencyOffer.businessName}</p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="flex flex-col items-center gap-4 border-t border-outline-variant bg-background px-6 py-8 text-center">
      <Link href="/" className="flex items-center gap-2.5 font-mono text-base font-semibold tracking-tight text-foreground">
        <RobinMark className="size-9" />
        Odd Robin
      </Link>
      <p className="font-mono text-xs uppercase leading-5 tracking-widest text-outline">
        &copy; {year} Odd Robin · Bold digital support for Gloucester small businesses.
      </p>
    </footer>
  );
}
