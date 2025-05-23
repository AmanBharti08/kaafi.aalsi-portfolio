import image from "../assets/ArtistImage.jpg";

const InfoPage = () => {
  return (
    <div className="my-5 flex flex-col items-center">
      <div className="overflow-hidden h-[380px] rounded-3xl">
        <img src={image} alt="" className="opacity-[50%]" />
      </div>
      <h1 className="text-[#E7DF74] text-[3rem] font-extrabold">KAAFI AALSI</h1>
    </div>
  );
};

export default InfoPage;
