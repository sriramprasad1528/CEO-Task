const events = [
  {
    title: "Annual Member Showcase 2024",
    date: "June 15-16, 2024",
    location: "Virtual Event",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
    type: "Showcase"
  },
  {
    title: "Expert Q&A: Scaling Startups",
    date: "Weekly - Thursdays",
    location: "Online",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80",
    type: "Q&A Session"
  },
  {
    title: "Co-Working Power Hours",
    date: "Daily Sessions",
    location: "Virtual Workspace",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
    type: "Co-Working"
  },
  {
    title: "Annual Member Showcase 2024",
    date: "June 15-16, 2024",
    location: "Virtual Event",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
    type: "Showcase"
  },
  {
    title: "Expert Q&A: Scaling Startups",
    date: "Weekly - Thursdays",
    location: "Online",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80",
    type: "Q&A Session"
  },
  {
    title: "Co-Working Power Hours",
    date: "Daily Sessions",
    location: "Virtual Workspace",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
    type: "Co-Working"
  }
];

function Events() {
  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Upcoming Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-blue-600 mb-2">{event.type}</div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <div className="text-gray-600 mb-2">{event.date}</div>
                <div className="text-gray-600 mb-4">{event.location}</div>
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;