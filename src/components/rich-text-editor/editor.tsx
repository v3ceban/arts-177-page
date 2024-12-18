"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import { Header } from "./header";
import { cn } from "@/lib/utils";
import "@/styles/editor.css";

const RichTextEditor = ({ className }: { className?: string }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4, 5, 6],
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Placeholder.configure({
        placeholder: "Type your message here...",
      }),
      Link,
      Underline,
    ],
    immediatelyRender: false,
  });

  if (!editor) {
    return null;
  }

  return (
    <section className={cn(className)}>
      <Header editor={editor} />
      <EditorContent
        editor={editor}
        className="p-6 w-full rounded-r border-r-2 outline-none sm:rounded-t-none sm:border-t-0 sm:border-b-2 border-y-2 border-blue-black editor sm:rounded-b-2 sm:border-x-2"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      />
    </section>
  );
};

export default RichTextEditor;
