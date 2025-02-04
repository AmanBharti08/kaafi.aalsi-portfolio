import { CiYoutube } from "react-icons/ci";
import { FaSpotify } from "react-icons/fa";

const MusicCard = () => {
  return (
    <div className="overflow-hidden my-5 relative h-[380px] ">
      <div className="w-[250px] h-[250px] z-20  rounded-3xl absolute overflow-hidden bg-cover">
        <img
          src="https://townsquare.media/site/812/files/2018/07/travis-scott-astroworld-cover-art-full.jpg?w=1080&q=75"
          alt=""
        />
      </div>
      <div className="h-[250px]  bg-[#E7DF74] text-black  rounded-3xl absolute top-[110px] right-0 flex gap-3.5 items-end p-3">
        <div>
          <h1 className="text-xl">TITLE</h1>
          <h1 className="text-3xl font-semibold ">10000 Days</h1>
        </div>
        <div className="flex justify-between items-center bg-[#333333] rounded-4xl p-1 gap-1 ">
          <div className="w-[40px] h-[40px] rounded-full bg-[#fe0032] text-[#f1f1f1] flex justify-center items-center text-2xl">
            <CiYoutube />
          </div>
          <div className="w-[40px] h-[40px] rounded-full bg-[#1ED760] flex justify-center items-center text-2xl">
            <FaSpotify />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
