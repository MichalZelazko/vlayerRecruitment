import Logo from "../common/Logo";
import AuthButtons from "./AuthButtons";

interface INavbarLink {
  name: string;
  href: string;
}

const NAVBAR_LINKS: INavbarLink[] = [
  { name: "Rent", href: "#" },
  { name: "Buy", href: "#" },
  { name: "Sell", href: "#" },
  { name: "Manage Property", href: "#" },
  { name: "Resources", href: "#" },
];

export default function Navbar() {
  return (
    <nav className="w-full bg-base-0 border-b border-base-100">
      <div className="w-full px-16 py-9 grid grid-cols-[1fr_2fr_1fr] items-center">
        <div className="justify-self-start">
          <Logo />
        </div>

        <ul className="flex space-x-15 justify-self-center">
          {NAVBAR_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-base-1000 hover:text-secondary-500 font-medium transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="justify-self-end">
          <AuthButtons />
        </div>
      </div>
    </nav>
  );
}
