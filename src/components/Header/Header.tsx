import Link from "next/link";
import React from "react";
import Image from "next/image";
import { IoHome } from "react-icons/io5";

const Header = () => {
  return (
    <header className="bg-black text-white shadow-lg">
      <nav className="flex items-center justify-between p-4">
        <Link href={"/"} className="text-xl font-bold flex">
          {/* <Image
            src="/image_123650291.JPG"
            alt="NaruIcon"
            className="rounded-full"
            width={50}
            height={50}
            style={{ aspectRatio: "1 / 1" }}
          /> */}
          <h1>なるのポートフォリオ</h1>
          <IoHome className="m-1" />
        </Link>
        <div className="flex items-center gap-1">
          {/* <Link
            href="/"
            className="text-gray-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </Link> */}
          <Link
            href="/profile"
            className="text-gray-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:underline"
          >
            Profile
          </Link>
          <Link
            href="/projects"
            className="text-gray-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:underline"
          >
            Projects
          </Link>
          {/* <Link
            href="/hobby"
            className="text-gray-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:underline"
          >
            Hobby
          </Link> */}
          <Link
            href="/contact"
            className="text-gray-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:underline"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
