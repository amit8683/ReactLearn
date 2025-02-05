import React, { useEffect, useState } from 'react';

const GetApi = () => {
    const [posts, setPosts] = useState([]);
    const getPosts=async() => {
       const response=await fetch("https://jsonplaceholder.typicode.com/posts",{
            method: 'GET',
        })
        //here response is in json format SO we have to convert it to a Object
        console.log("mera"+response);
        //Convert JSON into object
        const result =await response.json();
        console.log(result);
        setPosts(result);
        return result ;

    }
    useEffect(()=>{
        getPosts();
    },[])
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
  )
}

export default GetApi
