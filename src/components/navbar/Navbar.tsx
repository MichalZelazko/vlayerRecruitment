import { useState } from "react";
import Logo from "../common/Logo";
import AuthButtons from "./AuthButtons";
import BurgerMenu from "./BurgerMenu";

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
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      <nav className="w-full bg-base-0 border-b border-base-100">
        <div className="w-full px-8 py-4 md:px-16 md:py-9 grid grid-cols-2 xl:grid-cols-[1fr_2fr_1fr] items-center">
          <div className="justify-self-start">
            <Logo />
          </div>

          <ul className="hidden xl:flex gap-x-15 justify-self-center">
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

          <div className="hidden xl:flex justify-self-end">
            <AuthButtons />
          </div>
          <BurgerMenu
            open={isOpenMenu}
            setOpen={setIsOpenMenu}
            className="xl:hidden justify-self-end"
          />
        </div>
      </nav>
      <section
        className={`${
          isOpenMenu ? "block" : "hidden"
        } xl:hidden bg-base-0/70 backdrop-blur-md w-screen h-screen fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out`}
      >
        <div className="w-full h-full flex flex-col items-center justify-between px-8 py-4 md:px-16 md:py-9">
          <div className="w-full flex justify-end items-center">
            <BurgerMenu open={isOpenMenu} setOpen={setIsOpenMenu} />
          </div>
          <ul className="flex flex-col gap-y-5 justify-self-center text-center">
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
          <AuthButtons />
        </div>
      </section>
    </>
  );
}
