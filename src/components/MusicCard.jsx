import { CiYoutube } from "react-icons/ci";
import { FaSpotify } from "react-icons/fa";

const MusicCard = () => {
  return (
    <div className="overflow-hidden my-5 relative h-[380px]">
      <div className="w-[250px] h-[250px]  rounded-3xl overflow-hidden bg-cover">
        <img
          src="https://townsquare.media/site/812/files/2018/07/travis-scott-astroworld-cover-art-full.jpg?w=1080&q=75"
          alt=""
        />
      </div>
      <div className="w-[341px] h-[250px] bg-[#E7DF74] text-black -z-10 rounded-3xl absolute top-[110px] left-[50px] flex items-end p-4">
        <div>
          <h1 className="text-2xl">TITLE</h1>
          <div className="flex justify-between items-center gap-4.5 -mt-4">
            <h1 className="text-3xl font-semibold ">10000 Days</h1>
            <div className="flex justify-between items-center bg-[#333333] w-[115px] rounded-4xl p-1 relative bottom-1.5">
              <div className="w-[50px] h-[50px] rounded-full bg-[#fe0032] text-[#f1f1f1] flex justify-center items-center text-4xl">
                <CiYoutube />
              </div>
              <div className="w-[50px] h-[50px] rounded-full bg-[#1ED760] flex justify-center items-center text-3xl">
                <FaSpotify />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
