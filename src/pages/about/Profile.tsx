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
      name: 'Boris Alladassi',
      imageUrl: '/profile_pictures/boris_alladassi.png',
      title: 'Director of Scientific Research and Evaluation',
      profileUrl: '/team/boris-alladassi',
      description: [
        'As the Director of Scientific Research and Evaluation for Timbiti Research Consulting Group, Boris Alladassi is a Plant Breeder with a strong background in Quantitative Genetics, Genomics, and Agricultural Biostatistics. He has 9 years of research and teaching experience in plant breeding, contributing to the development of stress-resilient and high-yielding varieties of common bean, maize, sorghum, and cowpea across West and East Africa and North America. Throughout his academic and professional career, he has been a consultant, advising peers and students on designing robust research experiments, collecting high-quality data, and applying advanced statistical analysis methods.',
        'Boris is completing his Ph.D. in Plant Breeding with a minor in Statistics at Iowa State University. His research focuses on the genetic dissection and prediction of complex traits in maize and sorghum using cutting-edge genomic tools, a critical step towards designing climate-resilient cultivars that meet the needs of the farmers in the future. He has published 9 manuscripts in peer-reviewed journals and presented at over 20 scientific meetings. His expertise and dedication have earned him multiple accolades, including his selection as a Borlaug Scholar by the National Association of Plant Breeders in 2023.',
      ],
      phone: '+1(515)715-3313',
      email: 'alladassi.meb@gmail.com',
      address: 'Ames, IA 50010',
    },
    'samuel-ikendi': {
      name: 'Dr. Samuel Ikendi',
      imageUrl: '/profile_pictures/samuel_ikendi.jpg',
      title: 'Director of Monitoring, Evaluation, and Learning',
      profileUrl: '/team/samuel-ikendi',
      description: [
        'Dr. Ikendi Samuel is the director of Monitoring, Evaluation, and Learning for Timbiti Consultants Group LLC. He served as the Director of Programs Development, Evaluation, and Learning. Samuel began his career as a Monitoring and Evaluation Advisor 2017 with the Center for Sustainable Rural Livelihoods until December 2022. The Center is based at Iowa State University, implementing livelihoods programs in Uganda through the Iowa State University Uganda Program to end hunger through a comprehensive approach to capacity development. ',
        'Samuel has published extensively the results of his program impact evaluation of the Center on Food and Nutrition Security, extension program, and global service-learning. His scholarship was recognized twice as “Distinguished” during the Association for International Agricultural and Extension Education Conferences in Guelph, Canada, 2023, and Orlando, Florida, United States, 2024. Also, one of his articles was recognized as the “Article of the Year, 2024” in the Journal of Agricultural Education during the American Association for Agricultural Education Conference held in Manhattan, Kansas, United States.',
        "Additionally, in 2021-2022, Dr. Ikendi served as Director for Sustainable Development with the Engineers Without Borders ISU Chapter. He led the sustainable development group to understand and operationalize the planning, monitoring, evaluation, and learning, a component that supports engineering students' projects in Ghana, West Africa. The projects included water supplies, health clinic construction, shea nut value addition, agriculture and irrigation, and kitchen stoves.",
        'Samuel has been successful in his academic and career path due to his growing expertise in program development cycles, skills in conducting needs assessments, Delphi studies, and leadership and management skills. He is conversant with using research tools SPSS, Qualtrics, SAS, NVivo, Atlas. ti, Kobo, and basic GIS for his research.',
        "Samuel earned his Doctor of Philosophy in Agriculture Extension Education from Iowa State University in 2022. He also holds two master's degrees in Sustainable Agriculture and Community and Regional Planning from Iowa State University in 2019 and a Bachelor of Agribusiness Management from Makerere University, Kampala, Uganda, in 2011.",
      ],
    },
    'brian-zebosi': {
      name: 'Dr. Brian Zebosi',
      imageUrl: '/profile_pictures/brian_zebosi.jpg',
      title: 'Deputy Director of Scientific and Evaluation',
      profileUrl: '/team/brian-zebosi',
      description: [
        'Dr Brian Zebosi is the Deputy Director of Scientific and Evaluation for Timbiti Research Consulting Group LLC. He has an extensive background in Agriculture Extension, along with 7 years in applied research and program Evaluation, has taught Brian that performing this work requires a high level of concentration, analysis, and contextual interpretation of each project results. He has outstanding skills in quantitative methodologies and especially adept at developing data-driven insights. In addition to his Applied Research and program Evaluation. Experiences, Brain also has a strong background in teaching biology, genetics, and biostatistics.',
        'Brian holds a Bsc. Agricultural land use and management from Makerere University, Kampala. M.Sc.. and Ph.D. Genetics and Genomics, Iowa State University, USA. He has 7 years of experience collecting, cleaning, and analyzing utilizing various software packages including STATA, and R-Studio. During his free time plays soccer with his son and analyzes statistics.',
      ],
    },
    'lillian-nabwiire': {
      name: 'Dr. Lillian Nabwiire',
      imageUrl: '/profile_pictures/lillian_nabwiire.jpg',
      title: 'Senior Research Scientist and Extension Educator in Food Safety',
      profileUrl: '/team/lillian-nabwiire',
      description: [
        'Dr. Lillian Nabwiire is a Senior Research Scientist and Extension Educator in Food Safety for Timbiti Reseach Consulting Group LLC. She is a scholar with diverse interests, research, and work experiences in Food Safety, Food Science, and Human Nutrition. In her current role, she develops, evaluates, and delivers food safety educational programming for growers and food handlers along the farm-to-fork continuum with a long-term goal of protecting public health. Nabwire holds a doctoral degree in Food Science and Human Nutrition from Iowa State University and a bachelor’s from Makerere University Uganda. She enjoys reading and spending time with her daughter and husband during her free time. She has skills using various statistical software such as SPSS.',
      ],
    },
    'hellen-kayaga': {
      name: 'Dr. Hellen Ninsiima Kayaga',
      imageUrl: '/profile_pictures/hellen_kayaga.jpg',
      title: 'Senior Research and Evaluation Specialist',
      profileUrl: '/team/hellen-kayaga',
      description: [
        "Hellen Ninsiima Kayaga is a Senior Research and Evaluation Specialist for Timbiti Research Consulting Group LLC.She is an accomplished Agricultural Scientist with over 11 years of experience in field crops research, agronomy, and crop improvement. She holds a Bachelor's degree in Agriculture from Makerere University, a Master's in Plant Breeding and Seed Systems from the same institution, a Ph.D. in Genetics from Stellenbosch University, and is currently completing a Master’s in Crop Production and Physiology at Iowa State University. Kayaga has extensive expertise in designing and executing field experiments, data collection, analysis, and management. She is passionate about communicating agriculture techniques to farmers and has collaborated successfully with researchers from diverse cultural backgrounds throughout her career.",
        "Her professional journey includes roles at reputed organizations such as the International Institute of Tropical Agriculture (IITA), the International Center for Tropical Agriculture (CIAT), and the National Agricultural Research Organization (NARO) in Uganda. Kayaga has contributed to research projects on various crops, including maize, common beans, and bananas, and has published several manuscripts. Currently, Kayaga is a Graduate Research Assistant at Iowa State University's Agronomy Department, where she is involved in data collection, validation, and analysis for the Bayer Era project. She has collaborated on post-harvest sampling, biomass partitioning, and kernel moisture content studies for soybeans and corn. With her strong scientific background, excellent communication skills, and ability to work in diverse teams, she is a valuable asset in the field of agricultural research and crop improvement.",
      ],
      phone: '+1(515)815-0286',
      email: 'hkayaga@gmail.com',
      address: 'Ames, IA 50010',
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
            <div className="mt-4 space-y-2 text-md text-gray-600">
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
