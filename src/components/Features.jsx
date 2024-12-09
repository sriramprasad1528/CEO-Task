import { FaUsers, FaBook, FaVideo, FaLaptop, FaHandshake, FaTrophy } from 'react-icons/fa';

const features = [
  {
    icon: <FaUsers className="text-4xl text-blue-600" />,
    title: 'Weekly Opportunity Digest',
    description: 'Get curated job openings, freelance gigs, and business partnerships.'
  },
  {
    icon: <FaBook className="text-4xl text-blue-600" />,
    title: 'Success Stories',
    description: 'Learn from real-life success stories within our community.'
  },
  {
    icon: <FaVideo className="text-4xl text-blue-600" />,
    title: 'Live Q&A with Experts',
    description: 'Monthly sessions with industry experts across various fields.'
  },
  {
    icon: <FaLaptop className="text-4xl text-blue-600" />,
    title: 'Exclusive Courses',
    description: 'Access to skill-building courses focused on high-demand skills.'
  },
  {
    icon: <FaHandshake className="text-4xl text-blue-600" />,
    title: 'Peer Support Groups',
    description: 'Connect with members who share similar goals.'
  },
  {
    icon: <FaTrophy className="text-4xl text-blue-600" />,
    title: 'Recognition & Rewards',
    description: 'Get recognized for your contributions to the community.'
  }
];

function Features() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                {feature.icon}
                <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;