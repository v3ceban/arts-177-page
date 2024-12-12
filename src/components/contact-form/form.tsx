import { Input } from "./input";
import RichTextEditor from "@/components/rich-text-editor/editor";

export const Form = () => {
  return (
    <form className="md:grid md:grid-cols-2 md:gap-x-2 md:gap-y-6 lg:gap-x-12">
      <Input type="text" placeholder="Your first name">
        First Name
      </Input>
      <Input type="text" placeholder="Your last name">
        Last Name
      </Input>
      <Input type="email" placeholder="you@your-email.com">
        Email
      </Input>
      <Input
        type="select"
        options={[
          { value: "general", label: "General Question" },
          { value: "project", label: "Project Idea" },
          { value: "estimate", label: "Work Estimate" },
        ]}
      >
        Question Type
      </Input>
      <label className="block col-span-2 mb-4 text-2xl font-bold md:mb-0">
        Message
        <RichTextEditor className="flex mt-4 w-full text-base font-normal sm:block" />
      </label>
      <button
        type="submit"
        className="block col-span-2 p-3 mt-8 w-full text-lg font-semibold text-center rounded cursor-pointer md:mt-auto md:w-auto bg-blue-black text-neon-yellow hover:bg-blue-950"
      >
        Send Message
      </button>
    </form>
  );
};
