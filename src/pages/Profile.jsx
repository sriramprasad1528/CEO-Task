// import { useState } from 'react';
// import ProfileHeader from '../components/profile/ProfileHeader';
// import ProfileTabs from '../components/profile/ProfileTabs';
// import EditProfileModal from '../components/profile/EditProfileModal';

// function Profile() {
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [profile, setProfile] = useState({
//     name: "John Doe",
//     bio: "Senior Software Developer | Tech Enthusiast | Coffee Lover",
//     avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
//     email: "john.doe@example.com",
//     phone: "+91 98765 43210",
//     website: "www.johndoe.com",
//     posts: 42,
//     followers: 1234,
//     following: 567
//   });

//   const posts = Array(9).fill(null).map((_, i) => ({
//     image: `https://source.unsplash.com/random/800x800?sig=${i}`,
//     caption: `Post ${i + 1}`,
//     likes: Math.floor(Math.random() * 1000),
//     comments: Math.floor(Math.random() * 100)
//   }));

//   const savedPosts = Array(6).fill(null).map((_, i) => ({
//     image: `https://i.pinimg.com/originals/03/39/01/033901a8787e9dfcf74d80cf75bc3d60.jpg`,
//     caption: `Saved ${i + 1}`,
//     likes: Math.floor(Math.random() * 1000),
//     comments: Math.floor(Math.random() * 100)
//   }));

//   const taggedPosts = Array(3).fill(null).map((_, i) => ({
//     image: `https://source.unsplash.com/random/800x800?tagged=${i}`,
//     caption: `Tagged ${i + 1}`,
//     likes: Math.floor(Math.random() * 1000),
//     comments: Math.floor(Math.random() * 100)
//   }));

//   const handleProfileUpdate = (updatedProfile) => {
//     setProfile({ ...profile, ...updatedProfile });
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <ProfileHeader
//         profile={profile}
//         isOwnProfile={true}
//         onEditProfile={() => setShowEditModal(true)}
//       />
//       <ProfileTabs
//         posts={posts}
//         savedPosts={savedPosts}
//         taggedPosts={taggedPosts}
//       />
//       {showEditModal && (
//         <EditProfileModal
//           profile={profile}
//           onClose={() => setShowEditModal(false)}
//           onSave={handleProfileUpdate}
//         />
//       )}
//     </div>
//   );
// }

// export default Profile;

import { useState } from 'react';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileTabs from '../components/profile/ProfileTabs';
import EditProfileModal from '../components/profile/EditProfileModal';

function Profile() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    bio: "Senior Software Developer | Tech Enthusiast | Coffee Lover",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    email: "john.doe@example.com",
    phone: "+91 98765 43210",
    website: "www.johndoe.com",
    posts: 42,
    followers: 1234,
    following: 567,
  });

  // Updated posts array with the provided image URL
  const posts = Array(9).fill(null).map((_, i) => ({
    image: "https://i.pinimg.com/originals/9a/40/ed/9a40eda167ced3f9954a1c916e3c80d2.jpg",
    caption: `Post ${i + 1}`,
    likes: Math.floor(Math.random() * 1000),
    comments: Math.floor(Math.random() * 100),
  }));

  const savedPosts = Array(6).fill(null).map((_, i) => ({
    image: `https://i.pinimg.com/originals/03/39/01/033901a8787e9dfcf74d80cf75bc3d60.jpg`,
    caption: `Saved ${i + 1}`,
    likes: Math.floor(Math.random() * 1000),
    comments: Math.floor(Math.random() * 100),
  }));

  const taggedPosts = Array(3).fill(null).map((_, i) => ({
    image: `https://source.unsplash.com/random/800x800?tagged=${i}`,
    caption: `Tagged ${i + 1}`,
    likes: Math.floor(Math.random() * 1000),
    comments: Math.floor(Math.random() * 100),
  }));

  const handleProfileUpdate = (updatedProfile) => {
    setProfile({ ...profile, ...updatedProfile });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <ProfileHeader
        profile={profile}
        isOwnProfile={true}
        onEditProfile={() => setShowEditModal(true)}
      />
      <ProfileTabs
        posts={posts}
        savedPosts={savedPosts}
        taggedPosts={taggedPosts}
      />
      {showEditModal && (
        <EditProfileModal
          profile={profile}
          onClose={() => setShowEditModal(false)}
          onSave={handleProfileUpdate}
        />
      )}
    </div>
  );
}

export default Profile;
