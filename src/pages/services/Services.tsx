import Card from '@/components/card/Card';
import Title from '@/components/Title';
import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaClipboardList,
  FaCogs,
  FaDatabase,
  FaLeaf,
  FaMoneyBillWave,
  FaTractor,
} from 'react-icons/fa';

const monitoringEvaluation = {
  description:
    'Timbiti Research Consulting Group LLC has a diverse team of experts with interdisciplinary academic training in quantitative and qualitative methodologies. Our consultants possess expertise in various areas of research, monitoring, and evaluation.',
  topics: [
    {
      title: 'Culturally Responsive Evaluation Design',
      icon: <FaClipboardList />,
    },
    {
      title: 'Survey Development, Implementation, and Analysis',
      icon: <FaChartPie />,
    },
    { title: 'Data Collection and Management Plans', icon: <FaDatabase /> },
    { title: 'Process and Impact Evaluation', icon: <FaChartLine /> },
    { title: 'Systems Thinking Evaluation', icon: <FaCogs /> },
  ],
};

const professionalAgricultureServices = {
  description:
    'In addition to our research and evaluation portfolio, we offer professional agriculture services tailored to meet the diverse needs of our clients and partners.',
  topics: [
    { title: 'Research', icon: <FaLeaf /> },
    {
      title: 'Cost-Benefit Analysis & Cost-Effectiveness',
      icon: <FaMoneyBillWave />,
    },
    {
      title: 'Extension Services & Material Development',
      icon: <FaBookOpen />,
    },
    {
      title: 'Agriculture & Rural Development Consulting',
      icon: <FaTractor />,
    },
    { title: 'Dashboard Design', icon: <FaChartBar /> },
    {
      title: 'Experimental Designs & Implementation',
      icon: <FaChalkboardTeacher />,
    },
  ],
};

interface SectionProps {
  data: {
    description: string;
    topics: { title: string; icon: JSX.Element }[];
  };
}

function Section({ data }: SectionProps) {
  return (
    <div className="space-y-4">
      <p className="text-center text-lg text-gray-700">{data.description}</p>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.topics.map((topic, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-lg border bg-white p-2 text-center shadow-md"
          >
            <span className="text-4xl text-secondary-foreground">
              {topic.icon}
            </span>
            <h3 className="text-lg font-semibold">{topic.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

function Services() {
  return (
    <>
      <Title title="Services" />
      <div className="container space-y-8 py-12">
        <Card
          imageUrl="/media/monitoring.jpg"
          bordered={true}
          title="Monitoring and Evaluation"
          children={<Section data={monitoringEvaluation} />}
        />
        <Card
          imageUrl="/media/agriculture_services.jpg"
          bordered={true}
          title="Professional Agriculture Services"
          children={<Section data={professionalAgricultureServices} />}
        />
      </div>
    </>
  );
}

export default Services;
