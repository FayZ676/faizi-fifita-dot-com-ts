import Navbar from "@/app/components/Navbar";
import blog from "../../../data/blog.json";
import BlogEntry from "@/app/components/BlogEntry";

export default function Page({ params }: { params: { blogId: string } }) {
  const blogEntry = blog.find((entry) => entry.id === Number(params.blogId));
  return (
    <div className="flex flex-col gap-8 mr-4 ml-4">
      <Navbar
        profileImage={"/profile.jpg"}
        name={"Faizi Fifita"}
        links={{ home: true, blog: true, projects: true, contact: true }}
      />
      {blogEntry ? (
        <BlogEntry
          views={blogEntry.views}
          date={blogEntry.date}
          title={blogEntry.title}
          content={blogEntry.content}
        />
      ) : (
        <p>No blog matching the provided id.</p>
      )}
    </div>
  );
}
