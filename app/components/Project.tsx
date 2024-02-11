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
    <div className="flex flex-col gap-2 border border-gray-600 rounded-md p-2 transition-transform duration-150 hover:-translate-y-1 hover:scale-105">
      <div className="flex justify-between">
        <p className="text-xs font-light">{date}</p>
        <p className="text-xs font-light">{views}</p>
      </div>
      <h2>{title}</h2>
      <h3 className="font-light text-sm">{content}</h3>
    </div>
  );
}
