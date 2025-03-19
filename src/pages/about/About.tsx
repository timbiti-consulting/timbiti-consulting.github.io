import Card from '@/components/card/Card';
import DualCard from '@/components/card/DualCard';
import Title from '@/components/Title';

function About() {
  return (
    <>
      <Title title="Who We Are" />
      <Card
        imageUrl="/media/who_we_are.jpg"
        bordered={false}
        title="Who We Are"
        description="Timbiti Research and Evaluation Consulting Group LLC was incorporated in
        2023, specializing in agricultural and rural development research and
        evaluation for agricultural development organizations in the East
        African region. Our team comprises associates with over 10 years of
        experience in agriculture research, ensuring the collection of
        high-quality data, the application of modern technology, and innovation
        to enhance the evaluation of agricultural intervention programs. We
        approach our clients' work with robust analysis and pragmatic solutions
        to improve agriculture and rural development in East Africa. Our
        services encompass monitoring, evaluation, and learning, socioeconomic
        research, as well as cost-benefit analysis."
      />

      <DualCard
        title1="Mission Statement"
        description1="Timbiti Research Consulting Group aspires to become an organization of
        excellence in agriculture and rural development research in Uganda and
        East Africa, delivering services to clients at competitive and
        affordable costs."
        title2="Vision"
        description2="Our vision at Timbiti Research Consulting Group LLC is to become a
        leading provider of research, evaluation, and agricultural technical
        assistance to organizations. We aim to leverage data for effective
        decision-making, foster partnerships, and promote inclusion."
      />
    </>
  );
}

export default About;
