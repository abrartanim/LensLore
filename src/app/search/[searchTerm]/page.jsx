import Results from "@/components/Results";
import React from "react";

export default async function SearchPage({ params }) {
  const { searchTerm } = params;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
  );

  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const results = data.results;
  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-1">
          No movie by that name, Search again !!!
        </h1>
      )}

      {results && <Results results={results} />}
    </div>
  );
}
