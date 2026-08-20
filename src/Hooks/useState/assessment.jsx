import { useState } from "react";

const TeachersAssessmentForm = () => {
  const [form, setForm] = useState({
    date: "",
    firstName: "",
    lastName: "",
    subject: "",
    schedule: "",
    roomNumber: "",
    schoolYear: "",
    comments: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);
    alert("Form Submitted!");

    setForm({
      date: "",
      firstName: "",
      lastName: "",
      subject: "",
      schedule: "",
      roomNumber: "",
      schoolYear: "",
      comments: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}
     className="border-2 border-black bg-pink-200 p-6 w-[600px]">

      <h1 className="text-black font-bold ">Teachers Assessment Form</h1>

      <label>Date:</label>
      <br />
      <input
        type="date"
        value={form.date}
        onChange={(e) =>
          setForm({
            ...form,
            date: e.target.value
          })
        }
        className="border border-gray "
      />

      <br />
      <br />

      <label>Name of Teacher:</label>
      <br />

      <input
        type="text"
        className="border border-gray "
        placeholder="First name"
        value={form.firstName}
        onChange={(e) =>
          setForm({
            ...form,
            firstName: e.target.value
          })
        }
      />

      <input
        type="text"
        placeholder="Last name"
        className="border border-gray ml-2"
        value={form.lastName}
        onChange={(e) =>
          setForm({
            ...form,
            lastName: e.target.value
          })
        }
      />

      <br />
      <br />

      <label>Subject: </label>
      <input type="text" placeholder="" 
      className="border border-gray "
      />
      <br /><br />
      <label>Schedule:</label>
      <input type="text"placeholder="" 
      className="border border-gray ml-2"/>

      <input
        type="text"
        value={form.subject}
        onChange={(e) =>
          setForm({
            ...form,
            subject: e.target.value
          })
        }
      />

      <input
        type="text"
        value={form.schedule}
        onChange={(e) =>
          setForm({
            ...form,
            schedule: e.target.value
          })
        }
      />

      <br />
      <br />

      <label>Room Number: </label>
      <input type="text"placeholder="" 
      className="border border-gray "/>
      <br /><br />
      <label>School Year: </label>
      <input type="text"placeholder="" 
      className="border border-gray "/>

      

      <input
        type="text"
        value={form.roomNumber}
        onChange={(e) =>
          setForm({
            ...form,
            roomNumber: e.target.value
          })
        }
      />
      <input
        type="text"
        value={form.schoolYear}
        onChange={(e) =>
          setForm({
            ...form,
            schoolYear: e.target.value
          })
        }
      />


      <br />
      <br />

      <button type="submit" className= "border-2 rounded-[10px] border-gray-500 py-2 px-2">SUBMIT</button>


    </form>
  );
};

export default TeachersAssessmentForm;