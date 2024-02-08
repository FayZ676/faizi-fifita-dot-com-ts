"use client";

import React, { useState } from "react";

interface FunFactsProps {
  facts: { id: number; fact: string }[];
}

export default function FunFacts({ facts }: FunFactsProps) {
  const [fact, setFact] = useState(facts[0]);

  const handleUpdateFact = () => {
    setFact(facts[Math.floor(Math.random() * facts.length)]);
  };

  return (
    <div className="flex flex-col rounded-xl p-4 mx-4 border border-gray-600">
      <div className="text-xl font-bold">Fun Fact Machine 🎰</div>
      <p className="font-light">{fact.fact}</p>
      <button
        onClick={handleUpdateFact}
        className="mr-auto bg-gray-800 rounded-md hover:bg-gray-700 py-1 px-3 mt-2 font-light"
      >
        New Fact
      </button>
    </div>
  );
}
