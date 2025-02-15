import React, { useEffect, useState } from "react";
import axios from "axios";

const GetAxios = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      
      // Logging correct response data
      console.log("Response:", response);
      
      // Set posts with the actual data array
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded-2xl shadow-lg border border-gray-200">
            <h2 className="font-semibold text-lg mb-2 text-gray-800">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetAxios;
