import React from "react";
const Test3 = () => {
  return (
    <>
      {/* Header Section */}
      <div className="bg-white h-[60px] flex items-center px-4 shadow-md">
        <div className="text-lg font-bold">EatRight</div>
        <div className="ml-auto flex gap-6 text-sm font-medium">
          <div>About</div>
          <div>Category</div>
          <div>Menu</div>
          <div>Contact</div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-black h-[400px] w-full text-white flex flex-col justify-center items-center bg-[url('/a.jpg')] bg-no-repeat bg-cover">
        <h1 className="text-4xl font-bold">Eat Right Food</h1>
        <h3 className="text-lg mt-2">Eating healthy food is good for your health</h3>
        <button className="bg-lime-700 mt-4 h-[40px] w-[100px] rounded shadow-lg hover:bg-lime-800">
          Login
        </button>
      </div>

      {/* About Section */}
      <div className="mt-8 px-12 flex gap-12">
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4">
            Your Online, Healthy Grocery Store
          </h1>
          <p className="text-gray-700 text-justify leading-6">
            Thrive Market is proud to carry thousands of premium products—from
            100% non-GMO food to cruelty-free beauty to plant-powered cleaning
            and more. We deliver to every zip code in the lower 48 states, and
            each order is carefully packed and shipped from our warehouses. Our
            mission? To make healthy living easy and affordable for everyone.
            For as low as $5/month billed annually.
          </p>
        </div>
        <div className="flex-1">
          <p className="text-gray-700 text-justify leading-6">
            Thrive Market is proud to carry thousands of premium products—from
            100% non-GMO food to cruelty-free beauty to plant-powered cleaning
            and more. We deliver to every zip code in the lower 48 states, and
            each order is carefully packed and shipped from our warehouses. Our
            mission? To make healthy living easy and affordable for everyone.
          </p>
        </div>
      </div>

      {/* Types of Food Section */}
      <div className="mt-16 text-center">
        <h1 className="text-2xl font-semibold">Types Of Food</h1>
        <hr className="bg-neutral-950 h-[2px] mt-4 mx-auto w-24" />
      </div>
      <div className="flex mt-8 justify-center gap-8">
        <div className="bg-[url('/a.jpg')] h-[200px] w-[250px] rounded-2xl shadow-lg bg-cover"></div>
        <div className="bg-[url('/a.jpg')] h-[200px] w-[250px] rounded-2xl shadow-lg bg-cover"></div>
        <div className="bg-[url('/a.jpg')] h-[200px] w-[250px] rounded-2xl shadow-lg bg-cover"></div>
      </div>

      {/* Features Section */}
      <div className="mt-16 px-12 flex flex-wrap justify-center gap-12">
        {Array(4).fill(null).map((_, index) => (
          <div
            key={index}
            className="flex gap-4 items-center w-[300px] p-4 bg-white shadow-md rounded-lg"
          >
            <div
              className={`bg-[url('/${index === 0 ? 'a' : index === 1 ? 'th' : index === 2 ? 'cc' : 'bb'}.jpg')] h-[100px] w-[100px] bg-cover bg-center rounded-full`}
            ></div>
            <p className="text-sm text-gray-700">
              Flat Rate Shipping: It doesn't get any easier than this. Flat rate
              shipping is just $9.95 per address.
            </p>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white mt-16 py-8">
        <div className="container mx-auto flex flex-wrap justify-between px-12">
          <div>
            <h2 className="text-lg font-bold">EatRight</h2>
            <p className="text-sm mt-2">
              Bringing healthy and affordable food to your doorstep.
            </p>
          </div>
          <div>
            <h3 className="text-md font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>About</li>
              <li>Category</li>
              <li>Menu</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold">Contact Us</h3>
            <p className="mt-2 text-sm">
              Email: support@eatright.com
              <br />
              Phone: +1 234 567 890
            </p>
          </div>
        </div>
        <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
          &copy; 2025 EatRight. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Test3;
