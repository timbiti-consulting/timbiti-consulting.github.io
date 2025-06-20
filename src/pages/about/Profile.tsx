import { useParams } from 'react-router-dom';

interface ProfileContent {
  name: string;
  imageUrl: string;
  title: string;
  profileUrl: string;
  description: string[];
  phone?: string;
  email?: string;
  address?: string;
}

function Profile() {
  const { profile_id } = useParams<{ profile_id?: string }>();

  const profiles: { [key: string]: ProfileContent } = {
    'boris-alladassi': {
      name: 'Boris Mahule Elyse Alladassi (PhD)',
      imageUrl: '/profile_pictures/boris_alladassi.png',
      title: 'Director of Scientific Research and Evaluation',
      profileUrl: '/team/boris-alladassi',
      description: [
        'He has over ten years of experience in plant breeding research with skills in qualitative and quantitative agricultural research, contributing to the development of stress-resilient and high-yielding varieties of common bean, maize, sorghum, and cowpea across West and East Africa and North America. Throughout his academic and professional career, Boris has been a consultant, advising peers and students on designing robust research experiments, collecting high-quality data, and applying advanced statistical analysis methods. At TRCGCL, Boris is the director scientific research and evaluation.',
      ],
      // phone: '+1(515)715-3313',
      // email: 'alladassi.meb@gmail.com',
      // address: 'Ames, IA 50010',
    },
    'samuel-ikendi': {
      name: 'Dr. Ikendi Samuel (PhD)',
      imageUrl: '/profile_pictures/samuel_ikendi.jpg',
      title: 'Director of Monitoring, Evaluation, and Learning',
      profileUrl: '/team/samuel-ikendi',
      description: [
        'Samuel has eight years of evaluation experience utilizing both qualitative, quantitative, and mixed methods. He began his program planning, monitoring, and evaluation career in 2017with the Iowa State University’s Center for Rural Livelihoods (CSRL) (2017-2022), where he implemented livelihood activities in Uganda and supported the evaluation education of Iowa State University’s Engineers Without Borders (2021-2022), implementing projects in Ghana.',
        'Samuel has published extensively the results of his program impact evaluation of the Center on Food and Nutrition Security, extension program, and global service-learning. His scholarship was recognized twice as “Distinguished” during the Association for International Agricultural and Extension Education Conferences in Guelph, Canada, 2023, and Orlando, Florida, United States, 2024. Also, one of his articles was recognized as the “Article of the Year, 2024” in the Journal of Agricultural Education during the American Association for Agricultural Education Conference held in Manhattan, Kansas, United States. At TRCGC Samuel is the director of research and evaluation.',
      ],
    },
    'brian-zebosi': {
      name: 'Dr. Brian Zebosi (PhD)',
      imageUrl: '/profile_pictures/brian_zebosi.jpg',
      title: 'Deputy Director of Scientific and Evaluation',
      profileUrl: '/team/brian-zebosi',
      description: [
        'Brian has an extensive background in Agriculture Extension, along with 7 years in applied research and program Evaluation. He has outstanding skills in quantitative methodologies and especially adept at developing data-driven insights. In addition to his applied research and program evaluation experiences, Brain also has a strong background in teaching biology, genetics, and biostatistics. At TRCGCL, Brian is the deputy director of scientific research and evaluation.',
      ],
    },
    'lillian-nabwiire': {
      name: 'Dr. Lillian Nabwiire (PhD)',
      imageUrl: '/profile_pictures/lillian_nabwiire.jpg',
      title: 'Senior Research Scientist and Extension Educator in Food Safety',
      profileUrl: '/team/lillian-nabwiire',
      description: [
        'Lilian has diverse interests, research and work experiences in food safety, food science and human nutrition. In her current role, she develops, evaluates, and delivers food safety educational programming for growers and food handlers along the farm-to-fork continuum with a long-term goal of protecting public health. Also, she has skills using various statistical software such as SPSS. At TRCGCL, Lilian is a senior research scientist and extension educator.',
      ],
    },
    'hellen-kayaga': {
      name: 'Dr. Hellen Ninsiima Kayaga (PhD)',
      imageUrl: '/profile_pictures/hellen_kayaga.jpg',
      title: 'Senior Research and Evaluation Specialist',
      profileUrl: '/team/hellen-kayaga',
      description: [
        'Hellen has extensive expertise in designing and executing field experiments, data collection, analysis, and management. She is passionate about communicating agriculture techniques to farmers and has collaborated successfully with researchers from diverse cultural backgrounds throughout her career. Her professional journey includes roles at reputed organizations such as the International Institute of Tropical Agriculture (IITA), the International Center for Tropical Agriculture (CIAT), and the National Agricultural Research Organization (NARO) in Uganda. At TRCGCL, Hellen is a senior research and evaluation specialist.',
      ],
      // phone: '+1(515)815-0286',
      // email: 'hkayaga@gmail.com',
      // address: 'Ames, IA 50010',
    },
  };

  const profile = profiles[profile_id!];

  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-lg bg-white p-6 shadow-lg">
        {profile && (
          <div className="text-center">
            <img
              className="mx-auto h-48 w-48 rounded-full border-4 border-gray-200"
              src={profile.imageUrl}
              alt={profile.name}
            />
            <h1 className="mt-4 text-2xl font-semibold text-gray-800">
              {profile.name}
            </h1>
            <p className="text-lg text-gray-600">{profile.title}</p>
            <div className="text-md mt-4 space-y-2 text-gray-700">
              {profile.description.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
            </div>
            <div className="text-md mt-4 space-y-2 text-gray-600">
              {profile.phone && (
                <p>
                  <strong>Phone:</strong> {profile.phone}
                </p>
              )}
              {profile.email && (
                <p>
                  <strong>Email:</strong> {profile.email}
                </p>
              )}
              {profile.address && (
                <p>
                  <strong>Address:</strong> {profile.address}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
