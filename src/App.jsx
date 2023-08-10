import { useEffect, useState } from "react";
import { Background, Parallax } from "react-parallax";
import NavigationBar from "./components/navigationBar";
import { getMovieList, searchMovies } from "./api";
import Card from "./components/Card";

const App = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => setPopular(result));
  }, []);

  console.log({ popular: popular });

  const PopularMovieList = () => {
    const baseImgUrl = "https://image.tmdb.org/t/p/w500";
    return popular.map((movie, i) => {
      return (
        <Card
          key={i}
          title={movie.title}
          popularity={movie.popularity}
          release_date={movie.release_date}
          vote_average={movie.vote_average}
          baseImgUrl={baseImgUrl}
          poster_path={movie.poster_path}
        />
      );
    });
  };

  const search = async (q) => {
    if (event.key === "Enter") {
      const query = await searchMovies(q);
      setPopular(query.results);
      console.log({ query });
    }
  };

  return (
    <div className="App">
      <NavigationBar />
      <header className="App-header relative mt-24 w-full h-[400px] justify-center items-center flex before:blur-sm before:content-[''] before:top-0 before:left-0 before:absolute before:w-full before:h-full before:bg-[url('./assets/movies.jpg')] before:-z-40">
        <div className="container mx-auto flex flex-col">
          <h1 className="font-inter text-3xl drop-shadow-xl mb-5 font-black tracking-wide p-9 text-emerald-400 text-center">
            Cari Ulasan Film Anda Disini
          </h1>
          <input
            type="text"
            className="max-w-sm w-1/2 mx-auto rounded-lg text-sm px-3 py-3"
            placeholder="Search Your Favorite Movie here..."
            onChange={({ target }) => search(target.value)}
            onKeyDown={({ target }) => search(target.value)}
          />
        </div>
      </header>
      <Parallax blur={15} strength={900}>
        <Background>
          <div className="bg-gradient-to-t from-slate-950 to-slate-300 w-[2000px] h-[4000px]"></div>
        </Background>
        <div className="container w-full mx-auto flex flex-wrap gap-3 px-3 justify-center">
          <PopularMovieList />
        </div>
      </Parallax>
    </div>
  );
};

export default App;
