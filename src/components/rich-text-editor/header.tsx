import { Level } from "@tiptap/extension-heading";
import { Editor } from "@tiptap/react";
import Image from "next/image";

export const Header = ({ editor }: { editor: Editor }) => {
  const levels = [1, 2, 3, 4, 5, 6] as Level[];

  const handleSetHeading = (level: Level) => {
    editor.chain().focus().toggleHeading({ level }).run();
  };

  const handleAlign = (alignment: "left" | "center" | "right") => {
    editor.chain().focus().setTextAlign(alignment).run();
  };

  return (
    <header
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      className="grid justify-items-center p-2 rounded-l border-2 sm:rounded-t sm:rounded-bl-none border-blue-black sm:grid-cols-14"
    >
      {levels.map((level) => (
        <Button
          key={level}
          onClick={() => handleSetHeading(level)}
          icon={`/rte-buttons/h${level}.svg`}
        />
      ))}

      <Button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        icon="/rte-buttons/bold.svg"
      />

      <Button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        icon="/rte-buttons/italic.svg"
      />

      <Button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        disabled={!editor.can().chain().focus().toggleUnderline().run()}
        icon="/rte-buttons/underline.svg"
      />

      <Button
        onClick={() => handleAlign("left")}
        icon="/rte-buttons/align-left.svg"
      />

      <Button
        onClick={() => handleAlign("center")}
        icon="/rte-buttons/align-center.svg"
      />

      <Button
        onClick={() => handleAlign("right")}
        icon="/rte-buttons/align-right.svg"
      />

      <Button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        icon="/rte-buttons/bullet-list.svg"
      />

      <Button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        icon="/rte-buttons/ordered-list.svg"
      />
    </header>
  );
};

const Button = ({
  onClick,
  disabled,
  icon,
}: {
  onClick: () => void;
  disabled?: boolean;
  icon: string;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onClick();
  };

  return (
    <button
      className="my-1 sm:my-0 max-w-fit"
      onClick={handleClick}
      disabled={disabled}
    >
      <Image
        src={icon}
        alt={icon.replace(/\/rte-buttons\/|\.svg/g, "")}
        width={30}
        height={30}
        className="rounded transition-all duration-100 hover:invert"
      />
    </button>
  );
};
