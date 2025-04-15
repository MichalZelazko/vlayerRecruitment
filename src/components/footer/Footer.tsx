import Logo from "../common/Logo";
import FooterLink from "./FooterLink";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedInLogo,
  TwitterLogo,
} from "./SocialMediaIcons";

export default function Footer() {
  return (
    <footer className="w-full bg-base-0 p-8 sm:p-16 flex flex-col items-center gap-6 sm:gap-10">
      <div className="flex flex-col sm:flex-row gap-6 w-full justify-between">
        <Logo />
        <ul className="flex flex-col sm:flex-row items-center gap-x-8 gap-y-4">
          <FooterLink href="#">Help center</FooterLink>
          <FooterLink href="#">FAQ</FooterLink>
          <FooterLink href="#">Terms & Privacy</FooterLink>
        </ul>
      </div>
      <hr className="w-full opacity-50" />
      <div className="flex flex-col sm:flex-row w-full justify-between gap-6 ">
        <p className="text-base-1000 opacity-50 font-medium text-center sm:text-left">
          © 2021 Estatery. All rights reserved.
        </p>
        <ul className="flex gap-x-10 justify-around">
          <FooterLink href="#">
            <FacebookLogo width={20} height={20} color="#000" />
          </FooterLink>
          <FooterLink href="#">
            <InstagramLogo width={20} height={20} color="#000" />
          </FooterLink>
          <FooterLink href="#">
            <TwitterLogo width={20} height={20} color="#000" />
          </FooterLink>
          <FooterLink href="#">
            <LinkedInLogo width={20} height={20} color="#000" />
          </FooterLink>
        </ul>
      </div>
    </footer>
  );
}
