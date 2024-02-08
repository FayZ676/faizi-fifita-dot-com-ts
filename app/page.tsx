import Link from "next/link";

import Project from "./components/Project";
import Tools from "./components/Tools";
import ContactForm from "./components/ContactForm";
import FunFacts from "./components/FunFacts";
import Navbar from "./components/Navbar";
import BlogEntry from "./components/BlogEntry";

import projects from "../data/projects.json";
import blog from "../data/blog.json";
import facts from "../data/facts.json";
import testimonials from "../data/testimonials.json";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 mr-4 ml-4">
      <Navbar
        profileImage={"/profile.jpg"}
        name={"Faizi Fifita"}
        links={{ blog: true, projects: true, contact: true }}
        socials={{ github: true, linkedin: true }}
      />
      {/* Hero */}
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl">
          Hey there,
          <br />
          I&apos;m glad you&apos;re here 🥳
        </h1>
        <FunFacts facts={facts} />
      </div>
      <div className="border-b"></div>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl">Testimonials 👏🏻</h2>
        <div className="flex flex-col gap-4 mx-4">
          {testimonials.map((testimonial) => (
            <Testimonial
              name={testimonial.name}
              content={testimonial.content}
              position={testimonial.position}
              key={testimonial.id}
            />
          ))}
        </div>
      </div>
      <div className="border-b"></div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h2 className="text-xl">Projects 🪜</h2>
          <button className="bg-gray-800 rounded-md hover:bg-gray-700 py-1 px-3 font-light">
            See all
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            <Link href={`/projects/${project.id}`}>
              <Project
                date={project.date}
                status={project.status}
                content={project.content}
                title={project.title}
                views={project.views}
                key={project.title}
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
          <button className="bg-gray-800 rounded-md hover:bg-gray-700 py-1 px-3 font-light">
            See all
          </button>
        </div>
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
      <div className="border-b"></div>
      <div className="flex flex-col gap-4">
        {" "}
        <h2 className="text-xl">Send me a message 👋</h2>
        <ContactForm />
      </div>
    </main>
  );
}
