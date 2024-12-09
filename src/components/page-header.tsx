import { cn } from "@/lib/utils";

export const PageHeader = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h2
      className={cn(
        "text-3xl mb-8 sm:mb-16 font-bold sm:text-4xl lg:text-5xl xl:text-6xl",
        className,
      )}
    >
      {children}
    </h2>
  );
};
