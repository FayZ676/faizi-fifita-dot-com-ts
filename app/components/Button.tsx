import React from "react";

interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return (
    <button className="bg-gray-800 rounded-md hover:bg-gray-700 py-1 px-3 font-light transition-transform duration-150 hover:scale-105">
      {text}
    </button>
  );
}
