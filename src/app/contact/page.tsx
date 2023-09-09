"use client";

import React from "react";

export default function Contact(): JSX.Element {
  const sendEmail = () => {
    window.open("mailto:ugochiori@gmail.com", "_blank");
  };

  return (
    <div className="mt-[200px]">
      <p className="font-bold text-center uppercase text-3xl">Contact</p>
      <div className="flex justify-center mt-10">
        <div className="w-[400px]">
          <form className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="border-2 border-[#CEFF00] text-black rounded-full font-medium px-8 py-2"
              placeholder="name"
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="border-2 border-[#CEFF00] text-black rounded-full font-medium px-8 py-2"
            />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
              className="border-2 border-[#CEFF00] rounded-[15px] text-black font-medium px-8 py-2 italic"
            />
            <button
              onClick={sendEmail}
              className="bg-[#CEFF00] text-slate-800 font-bold uppercase text-1xl lg:text-[20px] px-4 py-2 hover:bg-slate-800 hover:text-[#CEFF00] ease-in duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// export default function Contact() {
//   const sendEmail = () => {
//     window.open("mailto:ugochiori@gmail.com", "_blank");
//   };

//   return (
//     <div className="mt-[200px]">
//       <p className="font-bold text-center uppercase text-3xl">Contact</p>
//       <div className="flex justify-center mt-10">
//         <div className="w-[400px]">
//           <form className="flex flex-col">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               name="name"
//               id="name"
//               className="border-2 border-[#CEFF00] text-black rounded-full font-medium px-8 py-2"
//               placeholder="name"
//             />
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               className="border-2 border-[#CEFF00] text-black rounded-full font-medium px-8 py-2"
//             />
//             <label htmlFor="message">Message</label>
//             <textarea
//               name="message"
//               id="message"
//               cols={30}
//               rows={10}
//               className="border-2 border-[#CEFF00] rounded-[15px] text-black font-medium px-8 py-2 italic"
//             />
//             <button
//               onClick={sendEmail}
//               className="bg-[#CEFF00] text-slate-800 font-bold uppercase text-1xl lg:text-[20px] px-4 py-2 hover:bg-slate-800 hover:text-[#CEFF00] ease-in duration-300"
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
