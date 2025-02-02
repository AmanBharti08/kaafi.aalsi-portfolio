import { CiSearch } from "react-icons/ci";

const GreetPlusSearch = () => {
  return (
    <div className="p-10 flex flex-col gap-8">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-[32px] font-light">HELLO</h1>
        <div className="w-[50px] h-[50px] bg-[#333333] flex justify-center items-center rounded-full">
          <CiSearch className="text-3xl"/>
        </div>
      </div>
      <div className="relative">
      <CiSearch className="text-3xl absolute left-1.5 top-1.5"/>
        <input type="text" placeholder="SEARCH" className="bg-[#333333] p-1.5 text-2xl w-[350px] rounded-2xl pl-12"/>
      </div>
    </div>
  );
};

export default GreetPlusSearch;
