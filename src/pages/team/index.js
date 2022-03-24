import CardSection from '../../Components/CardSection/CardSection';
import TeamData from '../../../public/data/team.json';

export default function Team() {
  return (
    <div>
      <h1>Team</h1>
      <CardSection data={TeamData} />
    </div>
  );
}
