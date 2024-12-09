import { useState } from 'react';
import { FaHeart, FaComment, FaShare, FaImage, FaVideo } from 'react-icons/fa';

const initialPosts = [
  {
    id: 1,
    user: {
      name: "Priya Sharma",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    content: "Just completed my first week at my new tech job! Thanks to The Luck League community for all the support! 🚀",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    likes: 42,
    comments: 8,
    shares: 3
  },
  {
    id: 2,
    user: {
      name: "Rahul Kumar",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    content: "Hosting a workshop on 'Building Your Personal Brand' next week. Who's interested? 🎯",
    likes: 28,
    comments: 15,
    shares: 5
  },
  {
    id: 1,
    user: {
      name: "Priya Sharma",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    content: "Just completed my first week at my new tech job! Thanks to The Luck League community for all the support! 🚀",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    likes: 42,
    comments: 8,
    shares: 3
  },
  {
    id: 2,
    user: {
      name: "Rahul Kumar",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    content: "Hosting a workshop on 'Building Your Personal Brand' next week. Who's interested? 🎯",
    likes: 28,
    comments: 15,
    shares: 5
  }
];

function SocialFeed() {
  const [posts, setPosts] = useState(initialPosts);
  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    const post = {
      id: posts.length + 1,
      user: {
        name: "Current User",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
      },
      content: newPost,
      likes: 0,
      comments: 0,
      shares: 0
    };

    setPosts([post, ...posts]);
    setNewPost('');
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Community Feed</h1>

        {/* Create Post */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <form onSubmit={handlePostSubmit}>
            <textarea
              className="w-full p-4 border border-gray-300 rounded-lg mb-4"
              placeholder="Share your thoughts..."
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              rows="3"
            />
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <button type="button" className="text-gray-500 hover:text-blue-600">
                  <FaImage className="text-xl" />
                </button>
                <button type="button" className="text-gray-500 hover:text-blue-600">
                  <FaVideo className="text-xl" />
                </button>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Post
              </button>
            </div>
          </form>
        </div>

        {/* Posts Feed */}
        <div className="space-y-8">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={`${post.user.avatar}?auto=format&fit=crop&w=32&h=32&q=80`}
                    alt={post.user.name}
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{post.user.name}</h3>
                    <p className="text-gray-500 text-sm">2 hours ago</p>
                  </div>
                </div>
                <p className="mb-4">{post.content}</p>
                {post.image && (
                  <img
                    src={`${post.image}?auto=format&fit=crop&w=800&q=80`}
                    alt="Post content"
                    className="w-full rounded-lg mb-4"
                  />
                )}
                <div className="flex justify-between items-center pt-4 border-t">
                  <button className="flex items-center text-gray-500 hover:text-blue-600">
                    <FaHeart className="mr-2" />
                    {post.likes}
                  </button>
                  <button className="flex items-center text-gray-500 hover:text-blue-600">
                    <FaComment className="mr-2" />
                    {post.comments}
                  </button>
                  <button className="flex items-center text-gray-500 hover:text-blue-600">
                    <FaShare className="mr-2" />
                    {post.shares}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SocialFeed;