"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div
      className={`hover:text-purple-600 font-semibold ${
        genre === param
          ? "underline underline-offset-8 decoration-4 decoration-purple-500 rounded-lg"
          : ""
      }`}
    >
      <Link href={`/?genre=${param}`}>{title}</Link>
      {/* <Link href={`\?genre=${param}`}>{title}</Link> */}
    </div>
  );
}
