"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

interface NavbarProps {
  profileImage?: string | null;
  name?: string | null;
  links?: {
    blog?: boolean;
    projects?: boolean;
    contact?: boolean;
    home?: boolean;
  } | null;
  socials?: {
    github?: boolean;
    linkedin?: boolean;
  } | null;
}

export default function Navbar({
  profileImage = null,
  name = null,
  links = null,
  socials = null,
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex justify-between">
        {(profileImage || name) && (
          <div className="flex gap-4 items-center">
            {profileImage && (
              <Image
                alt="Headshot of Faizi Fifita"
                src={profileImage}
                width={70}
                height={70}
                className="rounded-full"
              ></Image>
            )}
            {name && <h1 className="text-2xl font-semibold">{name}</h1>}
          </div>
        )}
        {links && (
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsMenuOpen(!isMenuOpen);
            }}
            className="sm:hidden"
          >
            <HiOutlineMenuAlt3 className="h-8 w-8 text-gray-400 transition-colors duration-300 hover:text-white" />
          </button>
        )}
      </div>
      {(links || socials) && (
        <div
          className={`flex flex-col justify-end ${
            isMenuOpen ? "" : "hidden sm:flex"
          } border-b border-gray-600 pb-4 gap-2 sm:flex-row sm:border-none sm:pb-0`}
        >
          <ul className="flex text-right justify-end text-lg font-light">
            {links?.blog && (
              <li>
                <Link
                  href={"/blog"}
                  className="text-gray-400 border border-transparent rounded-md px-2 py-1 transition-colors duration-400 hover:border-gray-600 hover:text-white"
                >
                  Blog
                </Link>
              </li>
            )}
            {links?.projects && (
              <li>
                <Link
                  href={"/projects"}
                  className="text-gray-400 border border-transparent rounded-md px-2 py-1 transition-colors duration-400 hover:border-gray-600 hover:text-white"
                >
                  Projects
                </Link>
              </li>
            )}
            {links?.contact && (
              <li>
                <Link
                  href={"#"}
                  className="text-gray-400 border border-transparent rounded-md px-2 py-1 transition-colors duration-500 hover:border-gray-600 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            )}
            {links?.home && (
              <li>
                <Link
                  href={"/"}
                  className="text-gray-400 border border-transparent rounded-md px-2 py-1 transition-colors duration-500 hover:border-gray-600 hover:text-white"
                >
                  Home
                </Link>
              </li>
            )}
          </ul>
          <div className="flex gap-4 justify-end">
            {socials?.github && (
              <Link href={"#"}>
                <FaGithub className="h-8 w-8 transition-transform duration-300 hover:scale-110" />
              </Link>
            )}
            {socials?.linkedin && (
              <Link href={"#"}>
                <FaLinkedin className="h-8 w-8 transition-transform duration-300 hover:scale-110" />
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
