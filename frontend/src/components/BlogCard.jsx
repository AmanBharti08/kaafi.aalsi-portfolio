const BlogCard = ({ title, description, image }) => {
  return (
    <div className="my-5 p-2 rounded-2xl bg-[#111111] h-full flex flex-col gap-2">
      <div className="rounded-2xl  overflow-hidden ">
        <img src={image} alt="" />
      </div>
      <div className="rounded-2xl  bg-black p-4 flex flex-col gap-1.5">
        <h1 className="font-bold text-xl underline">{title}</h1>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
