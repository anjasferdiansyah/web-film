const Card = ({
  title,
  popularity,
  release_date,
  vote_average,
  baseImgUrl,
  poster_path,
}) => {
  return (
    <div>
      <div className="card h-[630px] bg-zinc-600/70 my-14 rounded-lg">
        <div className="card-judul font-playfair flex flex-wrap ml-3 text-lg w-52 h-20 items-center text-sky-400 font-bold p-2">
          {title}
        </div>
        <div className="flex justify-center overflow-hidden">
          <img src={`${baseImgUrl}/${poster_path}`} width={300} alt="" />
        </div>
        <div className="text-desc my-2 mx-3 text-emerald-400">
          <div className="font-bold">Release Date : {release_date}</div>
          <h2 className="text-teal-100">Popularity : {popularity}</h2>
          <p className="text-teal-100">⭐{vote_average}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
