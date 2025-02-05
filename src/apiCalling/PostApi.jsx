import React, { useEffect, useState } from 'react';

const PostApi = () => {
    // State for fetching posts
    const [posts, setPosts] = useState([]);

    // State for post submission
    const [formData, setFormData] = useState({
        userId: '',
        title: '',
        body: '',
    });

    // Fetch posts from API
    const fetchPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'GET',
        });
        const data = await response.json();
        setPosts(data.slice(0, 5)); // Limiting to 5 posts for better UI
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        console.log('Post Created:', result);
        alert('Post submitted successfully!');

        // Add new post to UI
        setPosts([result,...posts]);

        // Reset form
        setFormData({ userId: '', title: '', body: '' });
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-gray-100 min-h-screen">
            {/* Form Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <h2 className="text-xl font-bold mb-4 text-center">Create a New Post</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block font-semibold">User ID:</label>
                        <input
                            type="number"
                            name="userId"
                            value={formData.userId}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-lg mt-1"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-semibold">Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-lg mt-1"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-semibold">Body:</label>
                        <textarea
                            name="body"
                            value={formData.body}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-lg mt-1"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
                    >
                        Submit Post
                    </button>
                </form>
            </div>

            {/* Posts Section */}
            <h2 className="text-xl font-bold mb-4">Posts</h2>
            <div className="grid gap-4">
                {posts.map((post) => (
                    <div key={post.id} className="bg-white p-4 border rounded-lg shadow">
                        <h3 className="font-semibold text-lg">{post.title}</h3>
                        <p className="text-gray-700">{post.body}</p>
                        <p className="text-sm text-gray-500 mt-2">User ID: {post.userId}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostApi;
