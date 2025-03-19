import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChartLine, FaEnvelope, FaSearch, FaUsers } from 'react-icons/fa';

function Research() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  const researchContent = [
    {
      title: 'Our Research Approach',
      icon: <FaSearch className="bg-primary" />,
      content: `At Timbiti Research Consultants Group, our research is characterized by a commitment to evidence-based, high-quality, culturally responsive equitable research. Equitable research plays a pivotal role in decision-making, affecting communities socially, politically, financially, and environmentally.`,
    },
    {
      title: 'Who We Work With',
      icon: <FaUsers />,
      content: `We collaborate with multinational, national, private, and public sectors, and our staff are highly respected in their respective fields of expertise. Our clients include non-governmental organizations, government agencies, and private sector entities involved in agriculture intervention and research.`,
    },
    {
      title: 'Our Competitive Advantage',
      icon: <FaChartLine />,
      content: `Our staff have transdisciplinary training in agriculture and rural development, covering areas such as biostatistics, international agriculture development, rural change and transformation, extension, and genetics. This expertise gives us a competitive edge in developing holistic solutions.`,
    },
    {
      title: 'Stay Connected',
      icon: <FaEnvelope />,
      content: `Our research findings are accessible through different avenues, including email, our website, and directly from our clients. For access to our products, please contact us at (mwanyakha@gmail.com) TRCG. LLC using our official contact information.`,
    },
  ];

  return (
    <>
      <div className="container space-y-8">
        {/* Animated Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg text-gray-700"
        >
          We conduct <strong>demand-driven research</strong> with a focus on
          agriculture and rural development. Our expertise spans biostatistics,
          international development, rural transformation, and genetics.
        </motion.p>

        {/* Interactive Collapsible Sections */}
        {researchContent.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="cursor-pointer rounded-lg border p-4 shadow-md"
            onClick={() => toggleSection(index)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-2xl text-secondary-foreground">
                  {section.icon}
                </span>
                <h3 className="text-xl font-semibold">{section.title}</h3>
              </div>
              <span className="text-xl">{expanded === index ? '−' : '+'}</span>
            </div>

            {expanded === index && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
                className="mt-3 text-gray-600"
              >
                {section.content}
              </motion.p>
            )}
          </motion.div>
        ))}

        {/* Call-To-Action (CTA) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="flex justify-center"
        >
          <a
            href="mailto:mwanyakha@gmail.com"
            className="rounded-full bg-accent px-6 py-2 text-xl text-accent-foreground hover:bg-accent/80 focus:outline-none"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </>
  );
}

export default Research;
