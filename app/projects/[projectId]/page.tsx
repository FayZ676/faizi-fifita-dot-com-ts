import Navbar from "@/app/components/Navbar";
import projects from "../../../data/projects.json";
import Project from "@/app/components/Project";

export default function Page({ params }: { params: { projectId: string } }) {
  const project = projects.find(
    (project) => project.id === Number(params.projectId)
  );
  return (
    <div className="flex flex-col gap-8 mr-4 ml-4">
      <Navbar
        profileImage={"/profile.jpg"}
        name={"Faizi Fifita"}
        links={{ home: true, blog: true, projects: true, contact: true }}
      />
      {project ? (
        <Project
          status={project.status}
          views={project.views}
          date={project.date}
          title={project.title}
          content={project.content}
        />
      ) : (
        <p>No project matching the provided id.</p>
      )}
    </div>
  );
}
