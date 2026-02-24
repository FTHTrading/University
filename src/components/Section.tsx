interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** If true, adds a subtle stone-texture overlay */
  stone?: boolean;
  /** Alternate background (ivory instead of parchment) */
  alternate?: boolean;
}

export function Section({
  children,
  className = "",
  id,
  stone = false,
  alternate = false,
}: SectionProps) {
  const bg = alternate ? "bg-ivory" : "bg-parchment";
  const texture = stone ? "stone-texture" : "";

  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${bg} ${texture} ${className}`}
    >
      <div className="mx-auto max-w-[1280px] px-6">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  const align = center ? "text-center" : "";
  const divider = center ? "gold-divider-center" : "gold-divider";

  return (
    <div className={`mb-14 ${align}`}>
      {eyebrow && (
        <p className="engraved text-gold mb-3">{eyebrow}</p>
      )}
      <h2 className="font-serif text-3xl md:text-4xl font-bold">{title}</h2>
      <div className={divider} />
      {description && (
        <p className="mt-4 text-stone-light max-w-2xl mx-auto leading-relaxed text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
