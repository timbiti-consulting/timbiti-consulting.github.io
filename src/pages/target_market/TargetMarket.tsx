import Card from '@/components/card/Card';
import Title from '@/components/Title';
import {
  FaBuilding,
  FaBullhorn,
  FaClipboardList,
  FaEnvelope,
  FaGlobe,
  FaLandmark,
  FaSeedling,
} from 'react-icons/fa';

function TargetMarket() {
  const targetMarket = [
    { title: 'Non-Governmental Organizations', icon: <FaBuilding /> },
    {
      title:
        'Agriculture Companies (Seed Developers, Biotech, Technology Transfer)',
      icon: <FaSeedling />,
    },
    { title: 'Government Agencies', icon: <FaLandmark /> },
    { title: 'Multinational Organizations', icon: <FaGlobe /> },
  ];

  return (
    <div>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {targetMarket.map((market, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-lg border bg-primary p-6 shadow-md transition hover:scale-105"
          >
            <span className="mb-3 text-4xl text-accent">{market.icon}</span>
            <h3 className="text-center text-lg font-semibold">
              {market.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

function _MarketingStrategy() {
  const marketingStrategy = [
    {
      title: 'Website Development',
      description: 'Building a strong online presence.',
      icon: <FaGlobe />,
    },
    {
      title: 'Email Outreach',
      description: 'Connecting with prospective clients.',
      icon: <FaEnvelope />,
    },
    {
      title: 'Signage & Branding',
      description: 'Showcasing our services with visible branding.',
      icon: <FaBullhorn />,
    },
    {
      title: 'Brochures & Print Marketing',
      description: 'Providing informative materials to visitors.',
      icon: <FaClipboardList />,
    },
  ];

  return (
    <div>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {marketingStrategy.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-lg border bg-white p-6 text-center shadow-md transition hover:scale-105"
          >
            <span className="mb-4 text-4xl text-accent">{step.icon}</span>{' '}
            {/* ✅ Icon instead of Image */}
            <h3 className="text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MarketingStrategy() {
  return (
    <>
      <Title title="Marketing Strategy" />
      <div className="py-12">
        {/* Competitive Edge */}
        <div className="container mb-12 rounded-lg bg-gray-100 p-8 text-center shadow-md">
          <h2 className="text-5xl font-semibold text-secondary-foreground">
            What Sets Us Apart
          </h2>
          <p className="mt-3 text-xl text-gray-700">
            Unlike other Monitoring & Evaluation firms, our talented team brings
            nuanced expertise, making us uniquely competitive in the market.
          </p>
        </div>

        {/* Target Market Section */}
        <Card
          imageUrl="/media/who_we_serve.jpg"
          title="Who We Serve"
          children={<TargetMarket />}
        />

        {/* Marketing & Sales Stra666tegy */}
        <Card
          imageUrl="/media/reaching_clients.jpg"
          title="How We Reach Our Clients"
          invert={true}
          children={<_MarketingStrategy />}
        />

        {/* Marketing Message */}
        <div className="text-primary-foreground-foreground container mt-12 rounded-lg bg-primary p-8 text-center shadow-md">
          <h2 className="text-5xl font-semibold">Why Choose Timbiti?</h2>
          <blockquote className="mt-4 text-xl italic">
            "Timbiti Research Consulting Group LLC is a pioneering firm
            specializing in the evaluation of agriculture and rural development
            interventions. Our approach is grounded in comprehensive qualitative
            and quantitative analysis, empowering our esteemed clients to make
            data-driven decisions."
          </blockquote>
          <div className="mt-6 flex justify-center gap-6 text-lg">
            <a
              href="/contact"
              className="rounded-full bg-white px-6 py-3 font-semibold text-primary-foreground shadow transition hover:bg-gray-200"
            >
              📩 Contact Us for Expert Evaluation
            </a>
            <a
              href="/services"
              className="rounded-full bg-white px-6 py-3 font-semibold text-primary-foreground shadow transition hover:bg-gray-200"
            >
              🔍 Learn More About Our Services
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default MarketingStrategy;
