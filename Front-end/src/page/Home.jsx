import React, { useEffect, useState } from "react";
import axios from "axios";
import { MovieCard } from "../Component/movieCard";
function Home() {
  const [movieData, setMovieData] = useState([]);
  const getMovies = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8080/movies", {
        withCredentials: true,
      });
      console.log(res);
      setMovieData(res.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movieData);
  return (
    <>
      <div className="mt-50 gap-6 flex flex-wrap">
        {movieData.map((el) => (
          <MovieCard movie={el} key={el._id} />
        ))}
      </div>
    </>
  );
}

export default Home;
