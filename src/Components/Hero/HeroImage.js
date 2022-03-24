import { HeroImageStyles } from './HeroStyles';

export default function HeroImage({
  height = '40vh',
  children,
  background = 'Team',
}) {
  return (
    <HeroImageStyles
      style={{
        height: `${height}`,
        backgroundImage: `url(/img/hero/${background}.jpg)`,
      }}
    >
      <div className="overlay">{children}</div>
    </HeroImageStyles>
  );
}
