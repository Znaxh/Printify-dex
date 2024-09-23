import React from "react";

const Review = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left side: Product image layout */}
        <div className="">
        <div className="relative">
            <video
              src="https://printify.com/pfh/assets/steps/design.mp4"
              autoPlay
              className="w-[600px] h-[700px] object-cover"
              muted
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Right side: Text content */}
        <div className="w-full md:w-1/2 text-center md:text-left p-4">
          <h2 className="text-3xl font-bold mb-4">
            Easily add your design to a wide range of products
          </h2>
          <p className="text-gray-700 mb-6">
            With our free design tools, you can easily add your custom designs
            to t-shirts, mugs, phone cases, and hundreds of other products.
          </p>
          <a
            href="#"
            className="text-green-500 font-semibold hover:underline"
          >
            All products &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Review;
