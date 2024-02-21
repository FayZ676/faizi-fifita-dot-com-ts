import React from "react";
import { getAllMDXFrontmatter } from "../utils";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default async function Work() {
  const frontmatters = await getAllMDXFrontmatter();
  return (
    <div className="flex flex-col gap-8 mr-4 ml-4">
      <Navbar
        profileImage={"/profile.jpg"}
        name={"Faizi Fifita"}
        links={{ home: true, blog: true, contact: true }}
        socials={{ github: true }}
      />
      <div className="flex flex-col gap-5">
        {frontmatters.map((frontmatter) => (
          <Link href={`work/${frontmatter.slug}`} key={frontmatter.slug}>
            <div>
              <div className="flex justify-between">
                <h2 className="text-lg font-bold">{frontmatter.title}</h2>
                <p className="text-xs font-light bg-gray-800 rounded-sm p-1 my-auto">
                  12 views
                </p>
              </div>
              <p className="text-sm text-stone-400">
                {frontmatter.description}
              </p>
              <hr className="mt-2 border-t border-stone-400" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
