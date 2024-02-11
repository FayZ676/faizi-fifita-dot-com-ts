import React from "react";

interface ProjectProps {
  date: string;
  status: string;
  views: number;
  title: string;
  content: string;
  displayOption: string;
}

export default function Project({
  date,
  status,
  views,
  title,
  content,
  displayOption,
}: ProjectProps) {
  return (
    <div
      className={`flex flex-col gap-2 border border-gray-600 rounded-md p-2 transition-transform duration-150 hover:scale-101 ${
        displayOption === "primary" ? "p-4 sm:h-full" : ""
      }`}
    >
      <div className="flex justify-between">
        <p className="text-xs font-light">{date}</p>
        <p className="text-xs font-light">{views}</p>
      </div>
      <h2
        className={`text-lg ${
          displayOption === "primary" ? "sm:text-2xl" : ""
        }`}
      >
        {title}
      </h2>
      <h3
        className={`font-light text-sm ${
          displayOption === "primary" ? "sm:text-base" : ""
        }`}
      >
        {content}
      </h3>
    </div>
  );
}
