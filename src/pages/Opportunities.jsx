import { FaBriefcase, FaHandshake, FaLightbulb } from 'react-icons/fa';

const opportunities = [
  {
    title: "Tech Startup Partnerships",
    description: "Connect with innovative startups looking for co-founders and early employees",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    category: "Business Partnerships"
  },
  {
    title: "Remote Developer Positions",
    description: "Curated list of remote development opportunities from top companies",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    category: "Job Openings"
  },
  {
    title: "Freelance Projects",
    description: "High-value freelance projects from verified clients",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    category: "Freelance Gigs"
  },
  {
    title: "Tech Startup Partnerships",
    description: "Connect with innovative startups looking for co-founders and early employees",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    category: "Business Partnerships"
  },
  {
    title: "Remote Developer Positions",
    description: "Curated list of remote development opportunities from top companies",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    category: "Job Openings"
  },
  {
    title: "Freelance Projects",
    description: "High-value freelance projects from verified clients",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    category: "Freelance Gigs"
  }
];

function Opportunities() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Weekly Opportunity Digest</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {opportunities.map((opportunity, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={opportunity.image} 
                alt={opportunity.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-blue-600 mb-2">{opportunity.category}</div>
                <h3 className="text-xl font-semibold mb-2">{opportunity.title}</h3>
                <p className="text-gray-600">{opportunity.description}</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Opportunities;