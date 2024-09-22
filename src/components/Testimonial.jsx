import React, { useRef } from 'react';

const testimonials = [
  {
    name: 'Quinten Barney',
    role: 'Etsy Merchant',
    img: 'https://via.placeholder.com/50', // Placeholder, replace with actual image URL
    rating: 5,
    feedback:
      'We chose Printify because of their offerings as well as their incredibly low prices. After several years, we’ve come to find that their customer service is also top notch, and their platform just keeps getting better and better.',
  },
  {
    name: 'Nikki',
    role: 'Store link',
    img: 'https://via.placeholder.com/50', // Placeholder, replace with actual image URL
    rating: 5,
    feedback:
      'Printify has been an amazing partner to work with as we grow our business, from the range of merch we can make for our customers to working with our Customer Service team (Hi Martin!) it’s truly made the whole process a breeze.',
  },
  {
    name: 'Anonymous',
    role: 'Store link',
    img: 'https://via.placeholder.com/50', // Placeholder, replace with actual image URL
    rating: 5,
    feedback:
      'Using Printify has been great. Customer service is fast, and their platform is easy to use and handle any issues we may have.',
  },
  {
    name: 'Alex Johnson',
    role: 'Amazon Merchant',
    img: 'https://via.placeholder.com/50', // Placeholder, replace with actual image URL
    rating: 4,
    feedback:
      'The support and tools provided by Printify helped me grow my business significantly over the last year.',
  },
  {
    name: 'Lisa Marie',
    role: 'Etsy Store Owner',
    img: 'https://via.placeholder.com/50', // Placeholder, replace with actual image URL
    rating: 5,
    feedback:
      'I love how easy it is to get started with Printify. I was able to set up my store in no time!',
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-left w-80 flex-shrink-0">
      <div className="flex items-center mb-4">
        <img
          src={testimonial.img}
          alt={testimonial.name}
          className="h-12 w-12 rounded-full mr-4"
        />
        <div>
          <h3 className="font-semibold text-lg">{testimonial.name}</h3>
          <p className="text-green-500">{testimonial.role}</p>
        </div>
      </div>
      <div className="flex items-center mb-4">
        {Array(testimonial.rating)
          .fill('')
          .map((_, i) => (
            <svg
              key={i}
              className="h-5 w-5 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.35 4.148a1 1 0 00.95.69h4.378c.969 0 1.371 1.24.588 1.81l-3.536 2.57a1 1 0 00-.364 1.118l1.35 4.147c.3.92-.755 1.688-1.539 1.118l-3.536-2.57a1 1 0 00-1.175 0l-3.536 2.57c-.784.57-1.838-.198-1.539-1.118l1.35-4.147a1 1 0 00-.364-1.118L2.78 9.575c-.784-.57-.38-1.81.588-1.81h4.379a1 1 0 00.95-.69l1.35-4.148z" />
            </svg>
          ))}
      </div>
      <p className="text-gray-600">{testimonial.feedback}</p>
    </div>
  );
};

const TestimonialsSection = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300, // Scroll left by 300px
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300, // Scroll right by 300px
      behavior: 'smooth',
    });
  };

  return (
    <div className="bg-gray-100 py-16">
      {/* Grid with the 3 columns: two filled with text, one empty */}
      <div className="grid grid-cols-3 gap-x-4 max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 text-left">
            Trusted by over 8M sellers around the world
          </h2>
          <p className="mt-4 text-lg text-gray-500 text-left">
            Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.
          </p>
        <div></div> {/* Empty third column */}
      </div>

      {/* Testimonial slider with arrows */}
      <div className="relative mt-10 flex items-center">
        <button
          onClick={scrollLeft}
          className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-md"
        >
          <svg
            className="h-6 w-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>

        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide px-8"
          style={{ scrollBehavior: 'smooth' }}
        >
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} testimonial={testimonial} />
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md"
        >
          <svg
            className="h-6 w-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestimonialsSection;
