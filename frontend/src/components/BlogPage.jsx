import { useState } from "react";
import BlogCard from "./BlogCard";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "How You Get Affected ?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium iste vitae nulla quas recusandae ipsa quam dolores, sint ut non quaerat in minus corporis tenetur officia deleniti quos nihil doloremque consequuntur placeat sapiente! Dolore facere consequuntur voluptatem sapiente provident iusto dicta numquam, neque deleniti possimus iure. Inventore nisi hic iure earum omnis assumenda aperiam eaque deleniti delectus, rem nesciunt odit incidunt autem mollitia illo sint cumque eligendi voluptas sit asperiores?",
      image:
        "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
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
