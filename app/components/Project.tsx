import React from "react";

interface ProjectProps {
  date: string;
  status: string;
  views: number;
  title: string;
  content: string;
}

export default function Project({
  date,
  status,
  views,
  title,
  content,
}: ProjectProps) {
  return (
    <div className="flex flex-col gap-2 border border-gray-600 rounded-md p-2">
      <div className="flex justify-between">
        <p>{date}</p>
        <div className="flex gap-4">
          <p>{status}</p>
          <p>{views}</p>
        </div>
      </div>
      <h2>{title}</h2>
      <h3>{content}</h3>
    </div>
  );
}
