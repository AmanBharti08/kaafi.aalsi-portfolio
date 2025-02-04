import { useState } from "react";
import BlogCard from "./BlogCard";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "How You Get Affected",
      description: "saomething",
      image: "link",
    },
  ]);

  return (
    <div className="">
      {blogs.map((blog, index) => {
        return (
          <BlogCard
            title={blog.title}
            description={blog.description}
            image={blog.image}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default BlogPage;
