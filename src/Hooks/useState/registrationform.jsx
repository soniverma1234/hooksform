import { useState } from "react";

const Registrationform = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);
    alert("Submitted!");

    setForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}
    className="border-2 border-blue-500 p-5 w-90 bg-blue-300"
    >
       <h1 className="text-blue-900 gap-3 mb-4 font-bold text-center">Registration Form</h1>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form,[e.target.name]: e.target.value })
        }
        className="border-2 border-gray-500"
      />

      <br /><br />

      <label>Email:</label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={form.email}
        onChange={(e) =>
          setForm({
            ...form,
            [e.target.name]: e.target.value
          })
        }
        className="border-2 border-gray-500"
      />

      <br /><br />

      <label>Password:</label>
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        value={form.password}
        onChange={(e) =>
          setForm({
            ...form,
            [e.target.name]: e.target.value
          })
        }
        className="border-2 border-gray-500"
      />

      <br /><br />

      <label>Confirm Password:</label>
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm your password"
        value={form.confirmPassword}
        onChange={(e) =>
          setForm({
            ...form,
            [e.target.name]: e.target.value
          })
        }
        className="border-2 border-gray-500"
      />

      <br /><br />

      <button type="submit"
       className=" block mx-auto bg-blue-500 text-white px-6 py-2 rounded"
      
      >
        Register
      </button>
    </form>
  );
};

export default Registrationform;