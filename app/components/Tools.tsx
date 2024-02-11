import Link from "next/link";
import React from "react";

export default function Tools() {
  return (
    <div className="flex flex-wrap gap-2 mx-4">
      <Link href={"#"}>
        <div className="py-1 px-2 bg-green-400 rounded-md text-black text-xs font-mono transition-transform duration-150 hover:scale-105">
          Supabase
        </div>
      </Link>
      <Link href={"#"}>
        <div className="py-1 px-2 bg-blue-400 rounded-md text-black text-xs font-mono transition-transform duration-150 hover:scale-105">
          Tailwind CSS
        </div>
      </Link>
      <Link href={"#"}>
        <div className="py-1 px-2 bg-gray-900 rounded-md text-white text-xs font-mono transition-transform duration-150 hover:scale-105">
          Next JS
        </div>
      </Link>
      <Link href={"#"}>
        <div className="py-1 px-2 bg-red-400 rounded-md text-black text-xs font-mono transition-transform duration-150 hover:scale-105">
          Figma
        </div>
      </Link>
      <Link href={"#"}>
        <div className="py-1 px-2 bg-yellow-400 rounded-md text-black text-xs font-mono transition-transform duration-150 hover:scale-105">
          Hugging Face
        </div>
      </Link>
      <Link href={"#"}>
        <div className="py-1 px-2 bg-white rounded-md text-black text-xs font-mono transition-transform duration-150 hover:scale-105">
          OpenAI
        </div>
      </Link>
    </div>
  );
}
