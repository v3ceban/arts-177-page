import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="flex flex-wrap justify-between items-center p-4 mt-32 mb-5 text-xl border-4 border-b-8 border-l-8 border-blue-black">
      <h2 className="font-bold">Contact Me</h2>
      <nav>
        <ul className="flex gap-5">
          <li>
            <Link
              href="https://www.linkedin.com/in/v3ceban/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size="2rem" className="hover:fill-blue-950" />
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/v3ceban/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size="2rem" className="hover:fill-blue-950" />
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
