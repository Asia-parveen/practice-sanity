import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Blog = () => {
  const blogData = [
    {
      id: 1,
      image: '/images/tea.png',
      title: 'Going all-in with millennial design',
      description: 'A brief description of the blog post.',
      link: '#',
      extraImage: '/images/date.png', // Extra image added for this blog
    },
    {
      id: 2,
      image: '/images/laptop.png',
      title: 'Exploring modern tea cultures',
      description: 'Learn about how tea culture evolves globally.',
      link: '#',
      extraImage: '/images/date.png', // Extra image added for this blog
    },
    {
      id: 3,
      image: '/images/laptb.png',
      title: 'Sustainable packaging trends',
      description: 'How brands are making their packaging eco-friendly.',
      link: '#',
      extraImage: '/images/date.png', // Extra image added for this blog
    },
  ];

  return (
    <>
      <div className="text-center pt-[20px]">
        <h1 className="text-center text-[24px] md:text-[36px] font-semibold">Our Blogs</h1>
        <p className="opacity-[0.5] max-w-[600px] mx-auto text-[14px]">
          Find a bright ideal to suit your taste with our great selection
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  lg:gap-1 px-4  py-8">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="max-w-[390px] mx-auto  overflow-hidden"
          >
            {/* Blog Image */}
            <Image
              src={blog.image}
              alt={`Image for ${blog.title}`}
              width={300}
              height={300}
              className="object-cover w-full"
            />
            <div className="p-4">
              {/* Blog Title */}
              <h2 className="text-[18px] md:text-[20px] font-semibold">{blog.title}</h2>
              <p className="text-[14px] text-gray-500 mt-2">{blog.description}</p>
              {/* Read More Link */}
              <Link href={blog.link}>
                <p className="text-[14px] md:text-[18px] font-semibold text-[#000000] inline-block pt-4  lg:pl-[30%] pl-[31%]">
                 <Link href="/blog">Read More</Link>
                  <span className="block w-full h-[2px] bg-black mt-1 opacity-[0.7]"></span>
                </p>
              </Link>
              {/* Extra Image Below Link */}
              <div className="mt-4 flex justify-center">
                <Image
                  src={blog.extraImage}
                  alt={`Extra image for ${blog.title}`}
                  width={190}
                  height={60}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;