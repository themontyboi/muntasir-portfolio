type GlitchNameProps = {
  name: string;
};

export function GlitchName({ name }: GlitchNameProps) {
  return (
    <span className="glitch-name">
      <span>{name}</span>
      <span className="glitch-name-layer glitch-name-layer-top" aria-hidden="true">
        {name}
      </span>
      <span className="glitch-name-layer glitch-name-layer-bottom" aria-hidden="true">
        {name}
      </span>
    </span>
  );
}
