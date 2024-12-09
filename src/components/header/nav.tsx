"use client";

import React from "react";
import { Links } from "@/components/header/links";

export const Nav = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav>
      <button
        className="font-bold sm:hidden hover:underline focus:underline"
        onClick={() => setIsOpen(true)}
      >
        Menu
      </button>
      <Links
        className={`${isOpen ? "flex" : "hidden"} fixed top-0 left-0 flex-col gap-16 justify-center items-center w-full h-full text-2xl bg-neon-yellow`}
        onClick={() => setIsOpen(false)}
      />
      <Links className="hidden gap-14 min-w-0 sm:flex" />
    </nav>
  );
};
