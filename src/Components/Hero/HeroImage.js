import { HeroImageStyles } from './HeroStyles';

export default function HeroImage({
  height = '40vh',
  children,
  background = 'Team',
  overlay,
}) {
  return (
    <HeroImageStyles
      style={{
        height: `${height}`,
        backgroundImage: `url(/img/hero/${background}.jpg)`,
      }}
    >
      <img
        src={`/img/hero/${background}.jpg`}
        alt={`Alice and the hair ${background} page header`}
      />
      {overlay && <div className="overlay">{children}</div>}
    </HeroImageStyles>
  );
}
