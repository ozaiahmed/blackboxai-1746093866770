import React, { useState, useEffect } from 'react';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from backend API (dummy for now)
    // Replace with actual API call
    setPosts([
      {
        id: 1,
        user: 'janedoe',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        image: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg',
        caption: 'Beautiful day in the mountains!',
      },
      {
        id: 2,
        user: 'johnsmith',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        image: 'https://images.pexels.com/photos/34950/pexels-photo.jpg',
        caption: 'Sunset vibes',
      },
    ]);
  }, []);

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg shadow">
          <div className="flex items-center p-4">
            <img
              src={post.avatar}
              alt={`${post.user} avatar`}
              className="w-10 h-10 rounded-full object-cover"
            />
            <p className="ml-4 font-semibold">{post.user}</p>
          </div>
          <img
            src={post.image}
            alt="Post"
            className="w-full object-cover max-h-96"
          />
          <div className="p-4">
            <p>{post.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
