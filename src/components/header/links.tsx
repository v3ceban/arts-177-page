"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const Links = ({
  links = ["about", "portfolio", "contact"],
  className,
  onClick,
}: {
  links?: string[];
  className?: string;
  onClick?: () => void;
}) => {
  const pathname = usePathname();

  return (
    <ul onClick={onClick} className={cn("font-bold", className)}>
      {links.map((link) => (
        <li key={link}>
          <Link
            className={`${pathname.includes(link) ? "underline" : "hover:underline"} capitalize underline-offset-4`}
            href={link}
            prefetch={true}
          >
            {link}
          </Link>
        </li>
      ))}
    </ul>
  );
};
