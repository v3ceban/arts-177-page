import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import Image from "next/image";

const HomePage = () => {
  return (
    <section className="text-center sm:text-left">
      <PageHeader className="">This page is under construction</PageHeader>
      <div className="sm:grid sm:grid-cols-2 sm:gap-4">
        <Image
          className="block mx-auto mb-8 sm:order-2 sm:place-self-end sm:mx-0 sm:mb-0 sm:max-w-none max-w-48"
          src="/favicon.svg"
          alt="Logo"
          width={266}
          height={221}
        />
        <p className="text-lg leading-8">
          For the purpose of this assignment{" "}
          <strong>only one page was coded</strong>. The other pages{" "}
          <em>(e.g. this one) </em>are just placeholders. You may wish to{" "}
          <Link className="underline underline-offset-4" href="/contact">
            visit active page
          </Link>
          .{" "}
        </p>
      </div>
    </section>
  );
};

export default HomePage;
