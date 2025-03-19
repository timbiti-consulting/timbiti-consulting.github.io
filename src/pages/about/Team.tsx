import ProfileCard from '@/components/ProfileCard';
import Title from '@/components/Title';

function Team() {
  return (
    <>
      <Title title="Meet Our Team" />
      <div className="container grid grid-cols-1 gap-6 px-4 py-16 md:grid-cols-3">
        <ProfileCard
          name="Boris Alladassi"
          imageUrl="/profile_pictures/boris_alladassi.png"
          title="Director of Scientific Research and Evaluation"
          profileUrl="/team/boris-alladassi"
        />
        <ProfileCard
          name="Dr. Samuel Ikendi"
          imageUrl="/profile_pictures/samuel_ikendi.jpg"
          title="Director of Monitoring, Evaluation, and Learning"
          profileUrl="/team/samuel-ikendi"
        />
        <ProfileCard
          name="Dr. Brian Zebosi"
          imageUrl="/profile_pictures/brian_zebosi.jpg"
          title="Deputy Director of Scientific and Evaluation"
          profileUrl="/team/brian-zebosi"
        />
        <ProfileCard
          name="Dr. Lillian Nabwiire"
          imageUrl="/profile_pictures/lillian_nabwiire.jpg"
          title="Senior Research Scientist and Extension Educator in Food Safety"
          profileUrl="/team/lillian-nabwiire"
        />
        <ProfileCard
          name="Dr. Hellen Ninsiima Kayaga"
          imageUrl="/profile_pictures/hellen_kayaga.jpg"
          title="Senior Research and Evaluation Specialist"
          profileUrl="/team/hellen-kayaga"
        />
      </div>
    </>
  );
}

export default Team;
