import Head from '../Components/Head';
import HeroVideo from '../Components/Hero/HeroVideo';
import HomePageStyles from '../styles/Home.styles';

export default function Home() {
  return (
    <>
      <Head />
      <HomePageStyles>
        <HeroVideo />
      </HomePageStyles>
    </>
  );
}
