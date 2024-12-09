import { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaEdit } from 'react-icons/fa';

function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+91 98765 43210",
    bio: "Senior Software Developer with 5+ years of experience in full-stack development",
    linkedin: "linkedin.com/in/johndoe",
    github: "github.com/johndoe",
    skills: ["React", "Node.js", "Python", "AWS", "Docker"],
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-48 bg-blue-600">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg"
            >
              <FaEdit className="text-blue-600" />
            </button>
          </div>
          
          <div className="relative px-6 py-8">
            <div className="absolute -top-16 left-6">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
              />
            </div>

            <div className="mt-16">
              {isEditing ? (
                <div className="space-y-4">
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({...profile, name: e.target.value})}
                    className="w-full p-2 border rounded"
                  />
                  <textarea
                    value={profile.bio}
                    onChange={(e) => setProfile({...profile, bio: e.target.value})}
                    className="w-full p-2 border rounded"
                    rows="3"
                  />
                  <button
                    onClick={handleSave}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    Save Changes
                  </button>
                </div>
              ) : (
                <>
                  <h1 className="text-3xl font-bold mb-2">{profile.name}</h1>
                  <p className="text-gray-600 mb-6">{profile.bio}</p>
                </>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <FaEnvelope className="text-gray-400 mr-2" />
                      {profile.email}
                    </div>
                    <div className="flex items-center">
                      <FaPhone className="text-gray-400 mr-2" />
                      {profile.phone}
                    </div>
                    <div className="flex items-center">
                      <FaLinkedin className="text-gray-400 mr-2" />
                      {profile.linkedin}
                    </div>
                    <div className="flex items-center">
                      <FaGithub className="text-gray-400 mr-2" />
                      {profile.github}
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;