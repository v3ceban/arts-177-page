import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex justify-between p-4 mt-32 mb-5 text-xl border-4 border-b-8 border-l-8 border-blue-black">
      <h2 className="font-bold">Contact Me</h2>
      <nav>
        <ul className="flex gap-5">
          <li>
            <Link
              href="https://www.linkedin.com/in/v3ceban/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/v3ceban/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
