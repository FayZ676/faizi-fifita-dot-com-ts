import React from "react";

interface BlogEntryProps {
  date: string;
  views: number;
  title: string;
  content: string;
}

export default function BlogEntry({
  date,
  views,
  title,
  content,
}: BlogEntryProps) {
  return (
    <div className="flex gap-2 border border-gray-600 rounded-md p-2 transition-transform duration-150 hover:-translate-y-1">
      <h2 className="flex flex-shrink-0 items-center font-medium text-sm">
        {title}:
      </h2>
      <p className="flex items-center text-nowrap overflow-hidden font-light text-xs">
        {content}
      </p>
      <div className="flex-shrink-0 text-xs font-light bg-gray-800 rounded-sm p-1">
        {views} views
      </div>
    </div>
  );
}
