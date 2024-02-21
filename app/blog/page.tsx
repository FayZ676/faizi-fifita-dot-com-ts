import React from "react";
import Navbar from "../components/Navbar";

import blog from "../../data/blog.json";
import BlogEntry from "../components/BlogEntry";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="flex flex-col gap-8 mr-4 ml-4">
      <Navbar
        profileImage={"/profile.jpg"}
        name={"Faizi Fifita"}
        links={{ home: true, work: true, contact: true }}
        socials={{ github: true }}
      />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl">Blog 🗞️</h2>
        <div className="flex flex-col gap-4">
          {blog.map((blogEntry) => (
            <Link href={`/blog/${blogEntry.id}`}>
              <BlogEntry
                date={blogEntry.date}
                views={blogEntry.views}
                title={blogEntry.title}
                content={blogEntry.content}
                key={blogEntry.id}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
