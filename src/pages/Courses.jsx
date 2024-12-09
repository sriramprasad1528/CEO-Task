const courses = [
  {
    title: "Digital Marketing Mastery",
    duration: "6 weeks",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Project Management Essentials",
    duration: "8 weeks",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Advanced Networking Strategies",
    duration: "4 weeks",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Digital Marketing Mastery",
    duration: "6 weeks",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Project Management Essentials",
    duration: "8 weeks",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Advanced Networking Strategies",
    duration: "4 weeks",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80"
  }
];

function Courses() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Skill-Building Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <span>{course.duration}</span>
                  <span>{course.level}</span>
                </div>
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;