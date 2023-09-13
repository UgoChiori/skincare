"use client";

import React from "react";

export default function Contact(): JSX.Element {
  const sendEmail = () => {
    window.open("mailto:ugochiori@gmail.com", "_blank");
  };

  return (
    <div className="mt-[200px] flex justify-center items-center h-screen">
    <div className="bg-white rounded-lg shadow-md p-8 w-[400px]">
      <p className="font-bold text-center uppercase text-3xl text-pink-300">Contact</p>
      <div className="flex justify-center mt-10">
        <div className="w-[400px]">
          <form className="flex flex-col text-pink-300">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="border-2 border-[#f9a8d4] text-black rounded-md font-medium px-8 py-2"
              placeholder="Name"
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="border-2 border-[#f9a8d4] text-black rounded-md font-medium px-8 py-2"
              placeholder="Email"
            />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
              className="border-2 border-[#f9a8d4] rounded-md text-black font-medium px-8 py-2 italic mb-4"
              placeholder="Write your message here..."
            />
            <button
              onClick={sendEmail}
              className="bg-[#f9a8d4] text-slate-800 font-bold uppercase text-1xl lg:text-[20px] w-24 h-12 md:w-20 md:h-10 hover:bg-slate-800 hover:text-[#f9a8d4] ease-in duration-300 m-auto rounded-md"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
}
