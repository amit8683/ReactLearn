import React from 'react'

const Contact = () => {
  return (
    <div>
       <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Contact Us</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full p-2 border border-gray-300 rounded" placeholder="Your Email" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea className="w-full p-2 border border-gray-300 rounded" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Send</button>
      </form>
    </div>
    </div>
  )
}

export default Contact
