import CardSection from '../../Components/CardSection/CardSection';
import TeamData from '../../../public/data/team.json';
import HeroImage from '../../Components/Hero/HeroImage';
import Head from '../../Components/Head';

export default function Team() {
  return (
    <div>
      <Head
        title="Team"
        url="https://aliceandthehair.co.uk/team"
        description="Meet our wild and wonderful team members. See what services they offer and check out their level. Pick your favs and book your appointment."
      />
      <HeroImage overlay height="50vh" background="Team">
        <h1>Team</h1>
      </HeroImage>
      <CardSection data={TeamData} />
    </div>
  );
}
