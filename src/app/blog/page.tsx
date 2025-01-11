import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import { FaRegUser, FaRegHeart } from 'react-icons/fa6';
import { IoSearch, IoCartOutline } from 'react-icons/io5';
import ShopSlider from '../components/ShopSlider';

// Sanity client configuration
const client = createClient({
  projectId: 'qdtn2ujs', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name (e.g., "production")
  apiVersion: '2023-12-30', // Use the latest API version
  useCdn: false, // Disable CDN for faster data fetching
});

// Image URL builder
const builder = imageUrlBuilder(client);
const urlFor = (source: string) => builder.image(source).width(600).height(500).url();

// GROQ query to fetch blog data
const blogQuery = `
  *[_type == "blog"] {
    _id,
    title,
    description,
    image {
      asset -> {
        _id,
        url
      }
    }
  }
`;

export default async function BlogPage() {
  // Fetch blog data from Sanity
  const blogs = await client.fetch(blogQuery);

  // Swap 2nd and 3rd blog
  if (blogs.length >= 3) {
    const temp = blogs[1];
    blogs[1] = blogs[2];
    blogs[2] = temp;
  }

  return (
    <>
      <div className="overflow-x-hidden">
        {/* Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full pt-4 md:pt-[60px] px-4">
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10 text-center md:ml-[35%]">
            <Link href="/"><li className="text-[14px] md:text-[16px] font-semibold">Home</li></Link>
            <Link href="/shop"><li className="text-[14px] md:text-[16px] font-semibold">Shop</li></Link>
            <Link href="/product"><li className="text-[14px] md:text-[16px] font-semibold">Product</li></Link>
            <Link href="/contact"><li className="text-[14px] md:text-[16px] font-semibold">Contact</li></Link>
          </ul>
          <div className="flex justify-center space-x-4 md:space-x-6 mt-4 md:mt-0 md:mr-[200px] text-[14px] md:text-[16px] font-bold">
            <Link href="/account"><FaRegUser className="text-base md:text-lg hover:text-gray-400" /></Link>
            <Link href="/product"><IoSearch className="text-base md:text-lg hover:text-gray-400" /></Link>
            <FaRegHeart className="text-base md:text-lg hover:text-gray-400" />
            <Link href="/cart"><IoCartOutline className="text-base md:text-lg hover:text-gray-400" /></Link>
          </div>
        </div>

        {/* Banner */}
        <div className="relative w-full h-[250px] md:h-[350px] mt-[30px]">
          <Image
            src="/images/Group 43.png"
            alt="insta"
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#000000] px-4">
            <h1 className="text-[20px] md:text-[36px] font-bold">Blog</h1>
            <p className="opacity-[0.8] max-w-[600px] text-[14px] md:text-[18px] mt-2 font-semibold">
              Home - Blog
            </p>
          </div>
        </div>

        {/* Blog Section */}
        <div className="container mx-auto p-6 max-w-screen-2xl lg:mx-50px">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10 pt-[30px] lg:mx-[50px]">
            {/* Blog Cards */}
            <div className="col-span-1">
              {blogs.map((blog: { _id: string; title: string; description: string; image?: { asset?: { url: string } } }) => (
                <div key={blog._id} className="w-full h-auto mb-8">
                  {blog.image && blog.image.asset && (
                    <Image
                      src={urlFor(blog.image.asset.url)}
                      alt={blog.title}
                      width={550}
                      height={300}
                      className="w-full h-[300px] object-cover rounded-md"
                    />
                  )}
                  <div className="mt-4 flex justify-start">
                    <Image
                      src="/images/date.png"
                      alt={`Extra image for ${blog.title}`}
                      width={190}
                      height={60}
                      className="object-cover opacity-50"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-2xl font-semibold">{blog.title}</h2>
                    <p className="text-gray-600 opacity-70 mt-[15px] text-justify">{blog.description}</p>
                    <Link href="#">
                      <p className="text-[12px] md:text-[16px] font-semibold text-black inline-block pt-4">
                        Read More
                        <span className="block w-full h-[2px] bg-black mt-1 opacity-70"></span>
                      </p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="w-full md:w-[300px] h-auto rounded-lg p-4 lg:ml-[120px]">
              <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 mb-6">
                <input type="text" className="w-full outline-none text-sm" placeholder="Search..." />
                <FaSearch className="text-gray-800 ml-2 text-sm" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Categories</h3>
                <ul className="space-y-4 opacity-[0.5]">
                  {['Crafts', 'Design', 'Handmade', 'Interior', 'Wood'].map((category, index) => (
                    <li key={index} className="flex justify-between text-gray-700">
                      <span>{category}</span>
                      <span>{Math.floor(Math.random() * 10)}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-[60px]">
                  <h1 className="text-[24px] text-[#000000] pb-[30px] font-semibold">Recent Posts</h1>
                  {['laptb.png', 'laptop.png', 'tea.png', 'compcoffe.jpg','tea.png','laptb.png'].map((img, idx) => (
                    <div key={idx} className="flex mt-4">
                      <Image src={`/images/${img}`} alt="recent" width={70} height={50} className="rounded-md" />
                      <div className="ml-[20px]">
                        <p className="text-[10px] font-semibold">Going all-in with millennial design</p>
                        <p className="text-[12px] pt-[10px] opacity-[0.5]">03 Aug 2022</p>
                      </div>
                    </div>
                  ))}
                </div>
           
              </div>
            </div>
          </div>
        </div>
      </div>
      <ShopSlider />
    </>
  );
}
