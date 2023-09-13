"use client";

import React, { useState } from "react";

export default function Signup(): JSX.Element {
  const [formData, setFormData] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, userName, email, password, confirmPassword } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!name || !userName || !email || !password || !confirmPassword) {
      alert("Please fill out all fields");
      return;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Simulate sending data to the server (replace with actual API call)
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Reset the form after successful submission
        setFormData({
          name: "",
          userName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });

        alert("You have successfully signed up!");
      } else {
        alert("Sign up failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="mt-[200px] flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg shadow-md p-8 w-[400px]">
        <p className="font-bold text-center uppercase text-3xl">Sign up</p>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="mt-4" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="border-2 border-[#f9a8d4] text-black rounded-md font-medium px-4 py-2 mb-4"
            placeholder="Name"
            value={name}
            onChange={handleChange}
            required
          />
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            name="userName"
            id="userName"
            className="border-2 border-[#f9a8d4] text-black rounded-md font-medium px-4 py-2 mb-4"
            placeholder="Username"
            value={userName}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="border-2 border-[#f9a8d4] text-black rounded-md font-medium px-4 py-2 mb-4"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="border-2 border-[#f9a8d4] text-black rounded-md font-medium px-4 py-2 mb-4"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            minLength={6}
            required
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className="border-2 border-[#f9a8d4] text-black rounded-md font-medium px-4 py-2 mb-4"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleChange}
            minLength={6}
            required
          />
          <button
            type="submit"
            className="bg-[#f9a8d4] text-slate-800 font-md uppercase text-1xl lg:text-[20px] w-24 h-12 md:w-20 md:h-10 hover:bg-slate-800 hover:text-[#f9a8d4] ease-in duration-300 m-auto rounded-md"
          >
            Sign Up
          </button>
          <p className="text-center mt-4">
            Already have an account?{" "}
            <a href="#" className="text-[#f9a8d4]">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
// import React, { useState } from "react";

// export default function Signup(): JSX.Element {
//   const [name, setName] = useState("");
//   const [userName, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // basic validation
//     if (!name || !userName || !email || !password || !confirmPassword) {
//       alert("Please fill out all fields");
//       return;
//     }

//     // check if password and confirm password match
//     if (password !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     // send data to server
//     const data = { name, userName, email, password };
//     fetch("/api/signup", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });
//     // .then((res) => res.json())
//     // .then((data) => console.log(data))
//     // .catch((err) => console.log(err));

//     // reset form
//     setName("");

//     setUserName("");
//     setEmail("");
//     setPassword("");
//     setConfirmPassword("");

//     alert("You have successfully signed up!");
//   };

//   return (
//     <div className="mt-[200px] flex justify-center items-center h-screen">
//       <div className="bg-white rounded-lg shadow-md p-8 w-[400px]">
//         <p className="font-bold text-center uppercase text-3xl">Sign up</p>
//         <form  onSubmit={handleSubmit}
//         className="flex flex-col">
//           <label className="mt-4" htmlFor="name">
//             Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             className="border-2 border-[#f9a8d4] text-black rounded-md font-medium px-4 py-2 mb-4"
//             placeholder="Name"
//             required
//           />
//           <label htmlFor="userName">Username</label>
//           <input
//             type="text"
//             name="userName"
//             id="userName"
//             className="border-2 border-[#f9a8d4] text-black rounded-md font-medium px-4 py-2 mb-4"
//             placeholder="Username"
//             required
//           />
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             className="border-2 border-[#f9a8d4] text-black rounded-md font-medium px-4 py-2 mb-4"
//             placeholder="Email"
//             required
//           />
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             name="password"
//             id="password"
//             className="border-2 border-[#f9a8d4] text-black rounded-md font-medium px-4 py-2 mb-4"
//             placeholder="Password"
//             minLength={6}
//             required
//           />
//           <label htmlFor="confirmPassword">Confirm Password</label>
//           <input
//             type="password"
//             name="confirmPassword"
//             id="confirmPassword"
//             className="border-2 border-[#f9a8d4] text-black rounded-md font-medium px-4 py-2 mb-4"
//             placeholder="Confirm Password"
//             minLength={6}
//             required
//           />
          
//           <button className="bg-[#f9a8d4] text-slate-800 font-md uppercase text-1xl lg:text-[20px] w-24 h-12 md:w-20 md:h-10 hover:bg-slate-800 hover:text-[#f9a8d4] ease-in duration-300 m-auto rounded-md">
//             Sign Up
//           </button>
//           <p className="text-center mt-4">
//             Already have an account?{" "}
//             <a href="#" className="text-[#f9a8d4]">
//               Login
//             </a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }
