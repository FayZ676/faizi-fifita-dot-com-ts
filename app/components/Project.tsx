import React from "react";

interface ProjectProps {
  views: number;
  title: string;
  description: string;
  displayOption: string;
}

export default function Project({
  views,
  title,
  description,
  displayOption,
}: ProjectProps) {
  return (
    <div
      className={`flex flex-col gap-2 border border-gray-600 rounded-md p-2 transition-transform duration-150 hover:scale-101 ${
        displayOption === "primary" ? "p-4 sm:h-full" : ""
      }`}
    >
      <div className="flex justify-between">
        <h2
          className={`text-lg ${
            displayOption === "primary" ? "sm:text-2xl" : ""
          }`}
        >
          {title}
        </h2>
        <div className="text-xs font-light bg-gray-800 rounded-sm p-1 my-auto">
          {views} views
        </div>
      </div>
      <h3
        className={`font-light text-sm ${
          displayOption === "primary" ? "sm:text-base" : ""
        }`}
      >
        {description}
      </h3>
    </div>
  );
}
