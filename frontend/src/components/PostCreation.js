import React, { useState } from 'react';

const PostCreation = () => {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo, just alert the caption and image name
    alert("Post created with caption: \"" + caption + "\" and image: " + (image ? image.name : "No image"));
    setCaption('');
    setImage(null);
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6">
      <h2 className="text-lg font-semibold mb-4">Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full border border-gray-300 rounded p-2 mb-4 resize-none"
          rows="3"
          placeholder="Write a caption..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-4"
        />
        <button
          type="submit"
          className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default PostCreation;
