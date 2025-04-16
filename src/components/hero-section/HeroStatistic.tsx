interface IHeroStatisticProps {
  value: string | number;
  title: string;
  className?: string;
}

export default function HeroStatistic({
  value,
  title,
  className,
}: IHeroStatisticProps) {
  return (
    <div
      className={`w-35 lg:w-40 flex flex-col items-start gap-1 pl-6 border-l-2 border-base-300 ${className}`}
    >
      <h3 className="text-3xl font-bold text-secondary-500">{value}</h3>
      <p className="text-base-600 font-medium">{title}</p>
    </div>
  );
}
