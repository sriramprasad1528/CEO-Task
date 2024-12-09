import { useState } from 'react';
import { FaUsers, FaPlus, FaSearch } from 'react-icons/fa';

function Groups() {
  const [searchTerm, setSearchTerm] = useState('');

  const groups = [
    {
      id: 1,
      name: 'Tech Entrepreneurs',
      members: 1234,
      description: 'A community for tech startup founders and entrepreneurs',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f'
    },
    {
      id: 2,
      name: 'Digital Marketing Pros',
      members: 856,
      description: 'Share and learn digital marketing strategies',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
    },
    {
      id: 3,
      name: 'Frontend Developers',
      members: 2341,
      description: 'Discussion about frontend development technologies',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'
    },
    {
      id: 1,
      name: 'Tech Entrepreneurs',
      members: 1234,
      description: 'A community for tech startup founders and entrepreneurs',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f'
    },
    {
      id: 2,
      name: 'Digital Marketing Pros',
      members: 856,
      description: 'Share and learn digital marketing strategies',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
    },
    {
      id: 3,
      name: 'Frontend Developers',
      members: 2341,
      description: 'Discussion about frontend development technologies',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'
    }
  ];

  const filteredGroups = groups.filter(group =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Groups</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <FaPlus className="mr-2" />
          Create Group
        </button>
      </div>

      <div className="relative mb-6">
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search groups..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGroups.map(group => (
          <div key={group.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={`${group.image}?auto=format&fit=crop&w=800&q=80`}
              alt={group.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{group.name}</h3>
              <div className="flex items-center text-gray-600 mb-4">
                <FaUsers className="mr-2" />
                {group.members.toLocaleString()} members
              </div>
              <p className="text-gray-600 mb-4">{group.description}</p>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Join Group
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Groups;