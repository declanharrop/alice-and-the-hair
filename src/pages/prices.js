import Accordian from '../Components/Accordian/Accordian';
import Head from '../Components/Head';
import HeroImage from '../Components/Hero/HeroImage';

export default function Prices() {
  return (
    <div>
      <Head
        title="Prices"
        url="https://aliceandthehair.co.uk/prices"
        description="Why not check out all of our prices, book online or via phone. We offer a wide range of services please call if you have any questions"
      />
      <HeroImage background="prices" overlay height="70vh">
        <h1>Prices</h1>
      </HeroImage>
      <Accordian />
    </div>
  );
}
