import { useState } from "react";
import { toast } from "react-toastify";

const Loginform = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, email, password);
    alert("Form Submitted!");

setName("");
setEmail("");
setPassword("");
  }
  toast.success("Form submitted successfully!");

  return (
    <form
      onSubmit={handleSubmit}
      className="border-2 border-blue-500 p-5 w-90 bg-pink-200"
    >
      <h1 className="text-blue-900 gap-3 mb-4 font-bold text-center">Login Form</h1>

      <div className="flex items-center gap-3 mb-4">
        <label htmlFor="name">Name:</label>

        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-2 border-gray-500"
        />
      </div>

      <div className="flex items-center gap-3 mb-4">
        <label htmlFor="email">Email:</label>

        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 border-gray-500"
        />
      </div>

      <div className="flex items-center gap-3 mb-4">
        <label htmlFor="password">Password:</label>

        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 border-gray-500"
        />
      </div>

      <button
        type="submit"
        className=" block mx-auto bg-blue-500 text-white px-6 py-2 rounded"
      >
        Login
      </button>
    </form>
  );
};

export default Loginform;