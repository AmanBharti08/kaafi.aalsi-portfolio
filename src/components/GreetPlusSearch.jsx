import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const GreetPlusSearch = () => {
  const [openSearch, setOpenSearch] = useState(false);

  function handleOpenSearch() {
    setOpenSearch(!openSearch);
  }

  return (
    <nav className="flex flex-col gap-6 h-[9em] ">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-[2rem] font-light">HELLO</h1>
        <div className="w-[50px] h-[50px] bg-[#333333] flex justify-center items-center rounded-full">
          <CiSearch className="text-3xl" onClick={handleOpenSearch} />
        </div>
      </div>
      {openSearch && (
        <div className="relative">
          <CiSearch className="text-3xl absolute left-1.5 top-1.5" />
          <input
            type="text"
            placeholder="SEARCH"
            className="bg-[#333333] p-1.5 text-2xl w-full rounded-2xl pl-12"
          />
        </div>
      )}
    </nav>
  );
};

export default GreetPlusSearch;
