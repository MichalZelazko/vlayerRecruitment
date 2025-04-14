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
    <footer className="w-full bg-base-0 p-16 flex flex-col items-center gap-10">
      <div className="flex w-full justify-between">
        <Logo />
        <ul className="flex gap-x-8">
          <FooterLink href="#">Help center</FooterLink>
          <FooterLink href="#">FAQ</FooterLink>
          <FooterLink href="#">Terms & Privacy</FooterLink>
        </ul>
      </div>
      <hr className="w-full opacity-50" />
      <div className="flex w-full justify-between">
        <p className="text-base-1000 opacity-50 font-medium">
          © 2021 Estatery. All rights reserved.
        </p>
        <ul className="flex gap-x-8">
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
