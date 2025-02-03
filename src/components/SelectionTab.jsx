import { useState } from "react";
import { CiCircleInfo } from "react-icons/ci";

const SelectionTab = () => {
  const [openMusic, setOpenMusic] = useState(true);
  const [openInfo, setOpenInfo] = useState(false);
  const [openBlogs, setOpenBlogs] = useState(false);

  function handleOpenInfo() {
    setOpenInfo(true);
    setOpenMusic(false);
    setOpenBlogs(false);
  }
  function handleOpenMusic() {
    setOpenInfo(false);
    setOpenMusic(true);
    setOpenBlogs(false);
  }
  function handleOpenBlogs() {
    setOpenInfo(false);
    setOpenMusic(false);
    setOpenBlogs(true);
  }

  const unselect = "bg-black text-[#F1F1F1]";

  return (
    <div className="px-6">
      <div className="bg-[#333333] flex justify-between p-2 rounded-3xl">
        <div
          className={`${
            openMusic ? "bg-[#E7DF74] text-black" : unselect
          } rounded-2xl p-2 w-[40%] flex justify-center items-center  text-2xl font-bold cursor-pointer`}
          onClick={handleOpenMusic}
        >
          MUSIC
        </div>
        <div
          className={`p-2 rounded-full w-[50px] ${
            openInfo ? "bg-[#E7DF74] text-black" : unselect
          } h-[50px]  text-4xl font-bold cursor-pointer flex justify-center items-center`}
          onClick={handleOpenInfo}
        >
          <CiCircleInfo />
        </div>
        <div
          className={`${
            openBlogs ? "bg-[#E7DF74] text-black" : unselect
          } rounded-2xl p-2 w-[40%] flex justify-center items-center text-2xl font-bold cursor-pointer`}
           onClick={handleOpenBlogs}
        >
          BLOGS
        </div>
      </div>
    </div>
  );
};

export default SelectionTab;
