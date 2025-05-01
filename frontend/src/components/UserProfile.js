import React from 'react';

const UserProfile = () => {
  // Dummy user data for demonstration
  const user = {
    name: 'Jane Doe',
    username: 'janedoe',
    bio: 'Photographer & Traveler',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    posts: 34,
    followers: 1200,
    following: 180,
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <div className="flex items-center space-x-4">
        <img
          src={user.avatar}
          alt="User avatar"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h2 className="text-lg font-semibold">{user.name}</h2>
          <p className="text-sm text-gray-500">@{user.username}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-700">{user.bio}</p>
      <div className="flex justify-between mt-4 text-center text-sm text-gray-600">
        <div>
          <span className="font-semibold">{user.posts}</span>
          <p>Posts</p>
        </div>
        <div>
          <span className="font-semibold">{user.followers}</span>
          <p>Followers</p>
        </div>
        <div>
          <span className="font-semibold">{user.following}</span>
          <p>Following</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
