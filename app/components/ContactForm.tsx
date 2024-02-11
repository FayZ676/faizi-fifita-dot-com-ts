"use client";

import React from "react";

export default function ContactForm() {
  return (
    <form
      action=""
      className="flex flex-col gap-4 border border-gray-600 rounded-md p-4 sm:grid sm:grid-cols-2"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Buggs Bunny"
            className="text-white font-light text-sm bg-gray-800 rounded-md p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="iheart@carrots.com"
            className="text-white font-light text-sm bg-gray-800 rounded-md p-2"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 sm:row-end-3 sm:row-start-1 sm:col-start-2">
        <label htmlFor="message">Message</label>
        <textarea
          name=""
          id="message"
          rows={5}
          placeholder="What's up doc? ..."
          className="flex-1 text-white font-light text-sm bg-gray-800 rounded-md p-2"
        ></textarea>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        className="mr-auto bg-gray-800 rounded-md hover:bg-gray-700 py-1 px-3 font-light"
      >
        Send
      </button>
    </form>
  );
}
