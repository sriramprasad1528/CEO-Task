import { useState } from 'react';
import { FaBriefcase, FaBuilding, FaSearch } from 'react-icons/fa';

const jobListings = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "Remote",
    salary: "₹18-25 LPA",
    type: "Full-time",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    id: 2,
    title: "Product Manager",
    company: "InnovateX",
    location: "Bangalore",
    salary: "₹20-30 LPA",
    type: "Full-time",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978"
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "DesignHub",
    location: "Mumbai",
    salary: "₹12-18 LPA",
    type: "Contract",
    image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd"
  },
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "Remote",
    salary: "₹18-25 LPA",
    type: "Full-time",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    id: 2,
    title: "Product Manager",
    company: "InnovateX",
    location: "Bangalore",
    salary: "₹20-30 LPA",
    type: "Full-time",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978"
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "DesignHub",
    location: "Mumbai",
    salary: "₹12-18 LPA",
    type: "Contract",
    image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd"
  }
];

function JobPortal() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const filteredJobs = jobListings.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterType === 'all' || job.type === filterType)
  );

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Job Portal</h1>
        
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search jobs..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="px-4 py-2 rounded-lg border border-gray-300"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">All Types</option>
            <option value="Full-time">Full-time</option>
            <option value="Contract">Contract</option>
            <option value="Part-time">Part-time</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredJobs.map(job => (
            <div key={job.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={`${job.image}?auto=format&fit=crop&w=800&q=80`}
                alt={job.company}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <FaBuilding className="mr-2" />
                  {job.company}
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <FaBriefcase className="mr-2" />
                  {job.location} • {job.type}
                </div>
                <div className="text-blue-600 font-semibold mb-4">{job.salary}</div>
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JobPortal;