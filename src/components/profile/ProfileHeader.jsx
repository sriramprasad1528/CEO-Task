import { FaEdit, FaCog, FaShareAlt } from 'react-icons/fa';

function ProfileHeader({ profile, isOwnProfile, onEditProfile }) {
  return (
    <div className="relative">
      {/* Cover Photo */}
      <div className="h-64 bg-gradient-to-r from-blue-500 to-purple-500">
        {isOwnProfile && (
          <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg">
            <FaEdit className="text-blue-600" />
          </button>
        )}
      </div>
      
      {/* Profile Info */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-24">
          <div className="flex flex-col sm:flex-row items-center">
            {/* Profile Picture */}
            <div className="relative">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
              />
              {isOwnProfile && (
                <button 
                  onClick={onEditProfile}
                  className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full text-white"
                >
                  <FaEdit size={16} />
                </button>
              )}
            </div>

            {/* Profile Stats */}
            <div className="mt-6 sm:mt-0 sm:ml-6 text-center sm:text-left">
              <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-bold">{profile.name}</h1>
                {isOwnProfile ? (
                  <button className="text-gray-600 hover:text-gray-800">
                    <FaCog size={20} />
                  </button>
                ) : (
                  <button className="text-gray-600 hover:text-gray-800">
                    <FaShareAlt size={20} />
                  </button>
                )}
              </div>
              <p className="text-gray-600 mt-1">{profile.bio}</p>
              
              <div className="flex space-x-8 mt-4">
                <div className="text-center">
                  <div className="font-bold">{profile.posts}</div>
                  <div className="text-gray-600">Posts</div>
                </div>
                <div className="text-center">
                  <div className="font-bold">{profile.followers}</div>
                  <div className="text-gray-600">Followers</div>
                </div>
                <div className="text-center">
                  <div className="font-bold">{profile.following}</div>
                  <div className="text-gray-600">Following</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;