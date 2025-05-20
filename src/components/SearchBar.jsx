"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };

  return (
    <form
      className="flex justify-between px-5 max-w-6xl mx-auto py-3
      "
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search Keywords..."
        className="w-full h-10 rounded-md placeholder:gray-500 outline-none bg-transparent flex-1"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* text-2xl font-bold bg-purple-500 px-2 py-1 rounded-lg */}
      <button
        className="text-lg font-bold bg-purple-500 rounded-lg disabled:text-grey-400 px-4 py-1 cursor-pointer"
        disabled={search == ""}
      >
        Search
      </button>
    </form>
  );
}
