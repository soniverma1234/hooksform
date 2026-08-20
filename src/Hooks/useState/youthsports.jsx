import { useState } from "react";
import Swal from "sweetalert2";
import {toast} from "react-toastify"

const YouthSportsForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
  title: 'success',
  text: 'submit form succesfully',
  icon: 'success',
  confirmButtonText: 'Cool'
})
toast.success("hii ")

    // alert("Form submitted!");
    console.log(form);

    setForm({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
    });
  };




  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-4xl px-6 py-10"
    >
      <h1 className="mb-12 text-3xl font-bold text-gray-900">
        Youth Sports Registration Form
      </h1>

      <h2 className="mb-5 text-2xl font-semibold text-gray-900">
        Parent's Name
      </h2>

      <label className="mr-8 inline-block ">
        <input
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          className="h-16 w-full rounded-lg border border-gray-400 px-4  "
        />

        <span className="mt-3 block text-sm text-gray-700">
          First Name
        </span>
      </label>

      <label className="inline-block w-[45%]">
        <input
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          className="h-16 w-full rounded-lg border border-gray-400 px-4 "
        />

        <span className="mt-3 block text-sm text-gray-700">
          Last Name
        </span>
      </label>

      <label className="mr-8 mt-12 inline-block ">
        <span className="mb-5 block text-xl ">
          Phone Number
        </span>

        <input
          type="tel"
          name="phone"
          placeholder="Enter your number"
          value={form.phone}
          onChange={handleChange}
          maxLength="10"
          className="h-16 w-full rounded-lg border border-gray-400 px-4 "
        />
      </label>

      <label className="mt-12 inline-block ">
        <span className="mb-5 block text-xl">
          Email
        </span>

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          className="h-16 w-full rounded-lg border border-gray-400 px-4 "
        />
      </label>

      <label className="mt-12 block">
        <span className="mb-5 block text-xl font-semibold">
          Address
        </span>

        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          className="h-16 w-full rounded-lg border border-gray-400 px-4 text-lg outline-none focus:border-2 focus:border-gray-700"
        />

        <span className="mt-3 block text-sm text-gray-700">
          Street Address
        </span>
      </label>

      <button
        type="submit"
        className="mt-10 rounded-lg bg-black px-8 py-3 text-lg font-semibold text-white hover:bg-gray-800"
      >
        Submit
      </button>
    </form>
  );
};

export default YouthSportsForm;