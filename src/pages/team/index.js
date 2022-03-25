import CardSection from '../../Components/CardSection/CardSection';
import TeamData from '../../../public/data/team.json';
import HeroImage from '../../Components/Hero/HeroImage';

export default function Team() {
  return (
    <div>
      <HeroImage overlay>
        <h1>Team</h1>
      </HeroImage>
      <CardSection data={TeamData} />
    </div>
  );
}
