import { Nav } from "@/components/header/nav";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-between p-4 mt-5 mb-32 text-xl border-4 border-b-8 border-l-8 border-blue-black">
      <h1 className={"font-bold hover:underline underline-offset-4"}>
        <Link href="/">Vlad&apos;s Website</Link>
      </h1>
      <Nav />
    </header>
  );
};
