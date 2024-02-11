import React from "react";

interface TestimonialProps {
  name: string;
  position: string;
  content: string;
}

export default function Testimonial({
  name,
  position,
  content,
}: TestimonialProps) {
  return (
    <div className="flex flex-col bg-gray-800 rounded-md p-4">
      <p className="text-sm">"{content}"</p>
      <div className="text-xs font-light">
        <p>{name}</p>
        <p>{position}</p>
      </div>
    </div>
  );
}
