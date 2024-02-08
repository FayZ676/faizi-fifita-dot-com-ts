"use client";

import React from "react";

export default function ContactForm() {
  return (
    <form
      action=""
      className="flex flex-col gap-2 border border-gray-600 rounded-md p-2"
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        placeholder="Buggs Bunny"
        className="text-white font-light text-sm bg-gray-800 rounded-md p-2"
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        placeholder="iheart@carrots.com"
        className="text-white font-light text-sm bg-gray-800 rounded-md p-2"
      />
      <label htmlFor="message">Message</label>
      <textarea
        name=""
        id="message"
        rows={5}
        placeholder="What's up doc? ..."
        className="text-white font-light text-sm bg-gray-800 rounded-md p-2"
      ></textarea>
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        className="mr-auto bg-gray-800 rounded-md hover:bg-gray-700 py-1 px-3 mt-2 font-light"
      >
        Send
      </button>
    </form>
  );
}
