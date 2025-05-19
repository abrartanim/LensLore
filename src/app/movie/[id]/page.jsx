import React from "react";
import { FiThumbsUp } from "react-icons/fi";
import Image from "next/image";
export default async function MoviePage({ params }) {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();
  console.log(movie);
  return (
    <div className="w-full flex items-center">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
          alt={movie.title || movie.name}
        ></Image>

        <div>
          <h2 className="text-lg text-purple-400 font-bold">
            {movie.name || movie.title}
          </h2>
          <h3 className="text-xl">{movie.overview}</h3>
          <p className="flex item-center py-2">
            {movie.release_date || movie.first_air_date}
            <FiThumbsUp className="h-5 ml-3 mr-1" />
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
