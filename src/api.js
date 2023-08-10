import axios from "axios";
const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "cbfadead658a7b81f4efaae438b96aea";
export const getMovieList = async () => {
  const apiToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYmZhZGVhZDY1OGE3YjgxZjRlZmFhZTQzOGI5NmFlYSIsInN1YiI6IjY0ZDMxMTBjYjZjMjY0MDExZGEwMDE5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vLt8Cwij6yuFy42lJMd757lw0ReBBQc9_Yy6z1afYnw";

  const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
  console.log({ movieList: movie });
  return movie.data.results;
};

export const searchMovies = async (q) => {
  const search = await axios.get(
    `${`${baseUrl}/search/movie?query=${q}&api_key=${apiKey}`}`
  );
  return search.data;
};
