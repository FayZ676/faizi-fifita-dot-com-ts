import React from "react";

import Navbar from "@/app/components/Navbar";

import { getMDXFileData } from "@/app/utils";

export default async function MDXPage({
  params,
}: {
  params: { slug: string };
}) {
  const mdxFileData = await getMDXFileData(params.slug);
  const frontmatter = mdxFileData.frontmatter;
  const content = mdxFileData.content;

  return (
    <div className="flex flex-col gap-8 mr-4 ml-4">
      <Navbar
        profileImage={"/profile.jpg"}
        name={"Faizi Fifita"}
        links={{ home: true, blog: true, work: true, contact: true }}
      />
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-inherit text-2xl font-extrabold">
            {frontmatter.title}
          </h1>
          <h2 className="text-inherit text-lg font-light text-stone-400">
            {frontmatter.position}
          </h2>
        </div>
        <h3 className="text-inherit text-sm font-light text-stone-400">
          {frontmatter.date}
        </h3>
      </div>
      <div className="prose prose-sm prose-invert mx-4">{content}</div>
    </div>
  );
}
