// Data
import blogsData from "../blogsData";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Blogs = () => {
  return (
    <div className="w-full h-full px-4 xl:px-16 text-dark bg-neutral/85 font-[Modernist]">
      <Navbar />

      <div className="w-full h-full p-8 px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <h2 className="text-4xl font-bold leading-none text-center underline">
          Latest Blogs
        </h2>

        {blogsData.map((blog, index) => (
          <div key={index} className="flex flex-col gap-2">
            <img
              src={blog.image}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
            <h2 className="h-full text-xl font-bold leading-tight line-clamp-2">
              {blog.title}
            </h2>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Blogs;
