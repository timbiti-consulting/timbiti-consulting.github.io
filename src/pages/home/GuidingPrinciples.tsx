import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  FaBalanceScale,
  FaChartLine,
  FaChevronDown,
  FaHandshake,
  FaLightbulb,
  FaUsers,
} from 'react-icons/fa';

const principles = [
  {
    title: 'Cultural Competence, Humility, and Contextual Evaluation',
    icon: <FaUsers />,
    description:
      'Our team’s diverse backgrounds reflect our commitment to understanding, respecting, and adapting to different cultures and contexts. This fosters an empathetic, adaptable, and open organizational culture.',
    subtopics: [
      {
        title: 'Diversity and Inclusion',
        content:
          'Promotes an inclusive environment where diverse cultural backgrounds are valued.',
      },
      {
        title: 'Open-Mindedness',
        content: 'Encourages a willingness to consider alternative viewpoints.',
      },
      {
        title: 'Adaptability',
        content:
          'Fosters the ability to adjust perspectives based on new information.',
      },
      {
        title: 'Informed Decision-Making',
        content:
          'Ensures that decisions are well-informed by considering unique circumstances.',
      },
      {
        title: 'Ethical Considerations',
        content:
          'Helps identify potential ethical implications in decision-making.',
      },
      {
        title: 'Cultural Sensitivity',
        content:
          'Tailors actions to the specific cultural norms of each situation.',
      },
    ],
  },
  {
    title: 'Commitment to Stakeholder Engagement',
    icon: <FaHandshake />,
    description:
      'We actively engage stakeholders in decision-making processes, ensuring their perspectives and needs are integral to our operations.',
    subtopics: [
      {
        title: 'Collaborative Decision-Making',
        content:
          'Incorporates diverse stakeholder input for well-rounded decisions.',
      },
      {
        title: 'Transparency',
        content: 'Enhances trust and credibility through open communication.',
      },
      {
        title: 'Customer-Centric Approach',
        content:
          'Aligns products and services with customer preferences through feedback.',
      },
      {
        title: 'Innovation',
        content:
          'Engaging stakeholders fosters creative solutions and fresh perspectives.',
      },
      {
        title: 'Sustainability',
        content:
          'Ensures long-term impact by incorporating diverse viewpoints.',
      },
    ],
  },
  {
    title: 'Excellence',
    icon: <FaLightbulb />,
    description:
      'We strive for the highest standards of performance, quality, and continuous improvement in all aspects of our organization.',
    subtopics: [
      {
        title: 'High-Quality Output',
        content:
          'Ensures products and services meet or exceed client expectations.',
      },
      {
        title: 'Continuous Improvement',
        content: 'Encourages learning and innovation to enhance efficiency.',
      },
      {
        title: 'Innovation',
        content: 'Promotes creative problem-solving and better alternatives.',
      },
    ],
  },
  {
    title: 'Integrity',
    icon: <FaBalanceScale />,
    description:
      'Integrity is a core principle that defines our interactions, decision-making, and ethical conduct across the organization.',
    subtopics: [
      {
        title: 'Honesty',
        content: 'Ensures transparency and truthfulness in all communications.',
      },
      {
        title: 'Ethical Conduct',
        content: 'Upholds high ethical standards in work and interactions.',
      },
      {
        title: 'Consistency',
        content: 'Maintains ethical behavior even in challenging situations.',
      },
      {
        title: 'Respect',
        content:
          'Fosters a respectful work environment for all staff and clients.',
      },
      {
        title: 'Customer Trust',
        content: 'Builds trust through integrity in products and services.',
      },
    ],
  },
  {
    title: 'Leveraging Data for Effective Decision-Making',
    icon: <FaChartLine />,
    description:
      'We are committed to data-driven insights and analysis to guide strategic and operational decisions for our clients.',
    subtopics: [
      {
        title: 'Informed Decision-Making',
        content:
          'Minimizes biases and assumptions, leading to better outcomes.',
      },
      {
        title: 'Data-Backed Strategy',
        content: 'Aligns goals with market trends and customer behavior.',
      },
      {
        title: 'Continuous Improvement',
        content:
          'Uses data to identify areas for enhancement and measure progress.',
      },
      {
        title: 'Risk Management',
        content:
          'Anticipates potential risks and proactively addresses challenges.',
      },
    ],
  },
];

function GuidingPrinciples() {
  const [activePrinciple, setActivePrinciple] = useState<number>(0); // First principle selected by default
  const [activeSubtopic, setActiveSubtopic] = useState<number>(0); // First subtopic selected by default
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  return (
    <>
      <div className="space-y-6">
        {/* Display Selected Principle Content */}
        {activePrinciple !== null && (
          <motion.div
            key={activePrinciple}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-lg border bg-white p-6 shadow-md"
          >
            {/* Principle Selection Dropdown */}
            <div className="relative flex justify-center">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 text-2xl font-bold text-primary-foreground transition"
              >
                {principles[activePrinciple].icon}
                {principles[activePrinciple].title}
                <FaChevronDown className="text-base" />
              </button>

              {/* Dropdown Menu */}
              <ul
                className={`absolute left-1/2 top-12 w-[30rem] -translate-x-1/2 rounded-md border border-gray-400 bg-card text-card-foreground shadow-lg transition-all duration-300 ${
                  dropdownOpen ? 'block' : 'hidden'
                }`}
              >
                {principles.map((principle, index) => (
                  <li key={index}>
                    <button
                      onClick={() => {
                        setActivePrinciple(index);
                        setActiveSubtopic(0);
                        setDropdownOpen(false);
                      }}
                      className="flex w-full items-center px-4 py-2 text-left hover:bg-secondary hover:text-secondary-foreground"
                    >
                      <span className="flex w-6 justify-center">
                        {principle.icon}
                      </span>
                      <span className="ml-2">{principle.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-2 text-lg text-gray-700">
              {principles[activePrinciple].description}
            </p>

            {/* Subtopic Titles (Grid Layout) */}
            <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3">
              {principles[activePrinciple].subtopics.map(
                (subtopic, subIndex) => (
                  <button
                    key={subIndex}
                    onClick={() => setActiveSubtopic(subIndex)}
                    className={`rounded-lg border p-2 text-lg font-semibold transition ${
                      activeSubtopic === subIndex
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {subtopic.title}
                  </button>
                )
              )}
            </div>

            {/* Show Selected Subtopic Content */}
            {activeSubtopic !== null && (
              <motion.div
                key={activeSubtopic}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-4 rounded-lg border-l-4 border-primary bg-gray-100 p-4"
              >
                <p className="text-gray-700">
                  {
                    principles[activePrinciple].subtopics[activeSubtopic]
                      .content
                  }
                </p>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </>
  );
}

export default GuidingPrinciples;
