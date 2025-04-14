interface IFooterLink {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function FooterLink({ href, className, children }: IFooterLink) {
  return (
    <li>
      <a
        href={href}
        className={`text-base-1000 opacity-50 hover:text-secondary-500 transition-colors duration-300 font-medium uppercase ${className}`}
      >
        {children}
      </a>
    </li>
  );
}
