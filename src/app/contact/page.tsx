import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import Image from "next/image";
import { Form } from "@/components/contact-form/form";

const Contact = () => {
  return (
    <section className="gap-8 items-start md:grid grid-cols-[1.5fr_2fr]">
      <section>
        <PageHeader>Contact Me</PageHeader>
        <p className="mb-8 leading-8 sm:mb-16">
          Please use this form to contact me. If filling out forms doesn’t suit
          you - feel free to reach out on{" "}
          <Link
            href="https://www.linkedin.com/in/v3ceban/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            LinkedIn
          </Link>{" "}
          or follow me on{" "}
          <Link
            href="https://github.com/v3ceban/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            GitHub
          </Link>
          !
        </p>
        <Image
          className="block mx-auto sm:max-w-none md:mx-0 max-w-48"
          src="/favicon-shocker.svg"
          alt="Logo"
          width={266}
          height={221}
        />
      </section>
      <Form />
    </section>
  );
};

export default Contact;
