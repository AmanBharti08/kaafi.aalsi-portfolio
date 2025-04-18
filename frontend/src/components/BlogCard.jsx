import { FaArrowRight } from "react-icons/fa";

const BlogCard = ({ title, description, image }) => {
  return (
    <div className="my-5 p-2 rounded-2xl bg-[#111111] h-full flex flex-col gap-2 relative">
      <div className="rounded-2xl  overflow-hidden ">
        <img src={image} alt="" />
      </div>
      <div className="absolute w-[45px] h-[45px] rounded-full bg-[#E7DF74] flex justify-center items-center text-black right-0 top-50">
        <FaArrowRight />
      </div>
      <div className="rounded-2xl  bg-black p-4 flex flex-col gap-5">
        <h1 className="font-bold text-xl text-center">{title}</h1>
        <p className="font-light">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
