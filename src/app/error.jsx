"use client";

import { useEffect } from "react";
import React from "react";

export default function error({ error, reset }) {
  useEffect(() => {
    console.log("error", error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1>Something went wrong</h1>
      <button className="hover:text-purple=500">Try Again</button>
    </div>
  );
}
