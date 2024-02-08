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
    <div className="flex flex-col gap-2 border border-gray-600 rounded-md p-2">
      <div className="flex justify-between">
        <p>{date}</p>
        <p>{views}</p>
      </div>
      <h2>{title}</h2>
      <h3>{content}</h3>
    </div>
  );
}
