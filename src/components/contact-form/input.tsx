type option = {
  value: string;
  label: string;
};

export const Input = ({
  children,
  type,
  placeholder,
  options,
}: {
  children: React.ReactNode;
  type: string;
  placeholder?: string;
  options?: option[];
}) => {
  return (
    <label className="block mb-4 text-2xl font-bold md:mb-0">
      {children}
      {type === "select" ? (
        <select className="block p-2 mt-4 w-full text-base font-normal rounded border-2 sm:p-3 bg-neon-yellow border-blue-black">
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          placeholder={placeholder || ""}
          className="block p-2 mt-4 w-full text-base font-normal placeholder-current rounded border-2 sm:p-3 placeholder:opacity-75 placeholder:font-light bg-neon-yellow border-blue-black"
        />
      )}
    </label>
  );
};
