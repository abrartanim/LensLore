import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import DarkModeSwitch from "./DarkModeSwitch";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between p-4 max-w-6xl mx-auto">
      <div className="flex gap-4">
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex gap-4 items-center">
        <DarkModeSwitch />
        <Link href={"/"} className="flex gap-1 items-center ">
          <span className="text-2xl font-bold bg-purple-500 px-2 py-1 rounded-lg">
            Lens
          </span>
          <span className="text-xl  hidden sm:inline">Lore</span>
        </Link>
      </div>
    </div>
  );
}
