import Link from "next/link";
import { promises as fs } from "fs";

import Project from "./components/Project";
import Tools from "./components/Tools";
import ContactForm from "./components/ContactForm";
import FunFacts from "./components/FunFacts";
import Navbar from "./components/Navbar";
import BlogEntry from "./components/BlogEntry";

import blog from "../data/blog.json";
import facts from "../data/facts.json";
import Button from "./components/Button";
import { getAllMDXFrontmatter } from "./utils";

export default async function Home() {
  const frontmatters = await getAllMDXFrontmatter();

  return (
    <main className="flex flex-col gap-8 mr-4 ml-4">
      <Navbar
        profileImage={"/profile.jpg"}
        name={"Faizi Fifita"}
        links={{ blog: true, work: true, contact: true }}
        socials={{ github: true, linkedin: true }}
      />
      <div className="flex flex-col gap-4 sm:items-center sm:flex-row sm:justify-between">
        <div className="flex flex-col gap-2 sm:w-1/2">
          <h1 className="text-2xl">
            Hey there,
            <br />
            I&apos;m glad you&apos;re here 🥳
          </h1>
          <h3>
            I&apos;m Faizi, a full-stack developer from Oregon focussed on
            building beautiful software that make life easier.
          </h3>
        </div>
        <FunFacts facts={facts} />
      </div>
      <div className="border-b"></div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h2 className="text-xl">Work 🪜</h2>
          <Link href={"/work"}>
            <Button text="See more" />
          </Link>
        </div>
        <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:grid-rows-2">
          {frontmatters
            .filter((frontmatter) => frontmatter.displayOption !== "none")
            .map((frontmatter) => (
              <Link
                href={`/work/${frontmatter.slug}`}
                key={frontmatter.id}
                className={
                  frontmatter.displayOption === "primary"
                    ? "sm:col-start-1 sm:row-start-1 sm:row-end-3"
                    : ""
                }
              >
                <Project
                  views={12}
                  title={frontmatter.title}
                  description={frontmatter.description}
                  displayOption={frontmatter.displayOption}
                />
              </Link>
            ))}
        </div>
      </div>
      <div className="border-b"></div>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl">Favorite Tools 🛠️</h2>
        <Tools />
      </div>
      <div className="border-b"></div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl">Blog 🗞️</h2>
          <Button text="See more" />
        </div>
        <div className="flex flex-col gap-4">
          {blog.map((blogEntry) => (
            <Link href={`/blog/${blogEntry.id}`} key={blogEntry.id}>
              <BlogEntry
                date={blogEntry.date}
                views={blogEntry.views}
                title={blogEntry.title}
                content={blogEntry.content}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="border-b"></div>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl">
          Send me a message <span className="">👋</span>
        </h2>
        <ContactForm />
      </div>
    </main>
  );
}
