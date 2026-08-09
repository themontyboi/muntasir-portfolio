type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      {eyebrow ? (
        <p className="section-label mb-3 text-xs font-semibold uppercase tracking-[0.28em]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="section-title text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="section-copy mt-4 text-base leading-7 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
