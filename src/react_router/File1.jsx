import React from 'react';
import { useNavigate,Outlet } from 'react-router-dom';

const File1 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Home Route</h1>
      <div className="space-x-4">
        <button 
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => navigate('about')}
        >
          Go to About
        </button>
        <button 
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          onClick={() => navigate('contact')}
        >
          Go to Contact
        </button>
      </div>
      <div>
        <Outlet />
      </div>

    </div>
  );
}

export default File1;
