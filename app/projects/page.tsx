import React from "react";

import Navbar from "../components/Navbar";
import Project from "../components/Project";

import projects from "../../data/projects.json";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="flex flex-col gap-8 mr-4 ml-4">
      <Navbar
        profileImage={"/profile.jpg"}
        name={"Faizi Fifita"}
        links={{ home: true, blog: true, contact: true }}
        socials={{ github: true }}
      />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl">Projects 🪜</h2>
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
    </div>
  );
}
