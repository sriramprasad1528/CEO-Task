const successStories = [
  {
    name: "Priya Sharma",
    role: "Tech Entrepreneur",
    story: "Found her co-founder through The Luck League and raised $1M in seed funding",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Rahul Verma",
    role: "Frontend Developer",
    story: "Landed a remote position at a Silicon Valley startup through our network",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Anita Desai",
    role: "Product Manager",
    story: "Transitioned from engineering to product management with mentor guidance",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Priya Sharma",
    role: "Tech Entrepreneur",
    story: "Found her co-founder through The Luck League and raised $1M in seed funding",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Rahul Verma",
    role: "Frontend Developer",
    story: "Landed a remote position at a Silicon Valley startup through our network",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Anita Desai",
    role: "Product Manager",
    story: "Transitioned from engineering to product management with mentor guidance",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80"
  }
];

function SuccessStories() {
  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Success Stories</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={story.image} 
                alt={story.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{story.name}</h3>
                <div className="text-blue-600 mb-2">{story.role}</div>
                <p className="text-gray-600">{story.story}</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Read Full Story
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SuccessStories;