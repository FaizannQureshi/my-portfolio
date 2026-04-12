type SectionHeadingProps = {
  label: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({
  label,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
      <p className="font-mono text-sm text-cyan-400 tracking-wide mb-3">
        {label}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-zinc-400 text-base md:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}
