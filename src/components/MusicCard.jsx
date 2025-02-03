const MusicCard = () => {
  return (
    <div className="overflow-hidden my-5 relative h-[380px]">
      <div className="w-[250px] h-[250px]  rounded-3xl overflow-hidden bg-cover">
        <img
          src="https://townsquare.media/site/812/files/2018/07/travis-scott-astroworld-cover-art-full.jpg?w=1080&q=75"
          alt=""
        />
      </div>
      <div className="w-[341px] h-[250px] bg-[#E7DF74] -z-10 rounded-3xl absolute top-[130px] left-[50px]">
        <h1>TITLE</h1>
        <h1>10000 Days</h1>
      </div>
    </div>
  );
};

export default MusicCard;
