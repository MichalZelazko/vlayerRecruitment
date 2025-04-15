interface ISectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  className,
}: ISectionHeadingProps) {
  return (
    <div className={`flex flex-col gap-y-4 ${className}`}>
      <h2 className="text-3xl font-bold text-center">{title}</h2>
      {subtitle && <p className="text-base-600">{subtitle}</p>}
    </div>
  );
}
