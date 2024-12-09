import { useState } from 'react';
import { FaThLarge, FaBookmark, FaUserTag } from 'react-icons/fa';

function ProfileTabs({ posts, savedPosts, taggedPosts }) {
  const [activeTab, setActiveTab] = useState('posts');

  const tabs = [
    { id: 'posts', icon: FaThLarge, label: 'Posts' },
    { id: 'saved', icon: FaBookmark, label: 'Saved' },
    { id: 'tagged', icon: FaUserTag, label: 'Tagged' }
  ];

  const getContent = () => {
    switch (activeTab) {
      case 'posts':
        return posts;
      case 'saved':
        return savedPosts;
      case 'tagged':
        return taggedPosts;
      default:
        return posts;
    }
  };

  return (
    <div>
      {/* Tabs */}
      <div className="border-t border-gray-200 mt-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center space-x-8">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-t-2 ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-500'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-5xl mx-auto py-8">
        <div className="grid grid-cols-3 gap-4">
          {getContent().map((item, index) => (
            <div key={index} className="aspect-square relative group">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-6 text-white">
                <div className="flex items-center">
                  <span className="font-bold mr-2">{item.likes}</span>
                  <span>likes</span>
                </div>
                <div className="flex items-center">
                  <span className="font-bold mr-2">{item.comments}</span>
                  <span>comments</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileTabs;