import Card from '@/components/card/Card';
import Research from '@/pages/home/Research';
import Title from '@/components/Title';
import GuidingPrinciples from '@/pages/home/GuidingPrinciples';

function Home() {
  return (
    <>
      <Title title="TIMBITI RESEARCH CONSULTING GROUP LLC" />
      <Card
        imageUrl="/media/about_ard.jpg"
        title="About ARD Research Consultants LLC"
        description="Timbiti Research Consulting Group LLC, formed in 2023, specializes in
        agriculture and rural development data analysis and interpretation,
        including data collection, evaluation, and research, for agricultural
        development organizations in the East African region, with a focus on
        Uganda. Our team of associates brings a wealth of experience in
        agriculture research, ensuring data quality, the use of modern
        technology, and innovative approaches to improve the evaluation of
        agricultural intervention programs."
      />
      <Card
        imageUrl="/media/principles.jpg"
        invert={true}
        title="Guiding Principles & Values"
        children={<GuidingPrinciples />}
      />
      <Card
        imageUrl="/media/research.jpg"
        title="Research"
        children={<Research />}
      />
    </>
  );
}

export default Home;
