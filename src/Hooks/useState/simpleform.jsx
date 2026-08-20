import { useState } from "react"

const SimpleForm = () => {
    const [From, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });



    const handleSubmit = (e) => {
        e.preventDefault();
        alert("form summited!")
        console.log(From);

  setForm({
    name: "",
    email: "",
    password: ""
});

    }

    return (
        <form onSubmit={handleSubmit}
        className="border-2 border-blue-700 p-5 w-90  "
         bg-amber-950 
        
        >
            <h2
            className=" text-blue-800 gap-3 mb-4 font-bold "
             
             >Simpal form</h2>

            <input type="text" placeholder="Enter your name:"
                value={From.name} onChange={(e) => setForm({
                    ...From, name: e.target.value,
                })

                } 
                className="text-center border-2 border-gray-500"/>

            <br />
            <br />
            <input type="text" placeholder="Enter your email:"
                value={From.email} onChange={(e) => setForm({
                    ...From, email: e.target.value,
                })
                }
                className="text-center border-2 border-gray-500" />
            <br />
            <br />
            <input type="text" placeholder="Enter your password:"
                value={From.password} onChange={(e) => setForm({
                    ...From, password: e.target.value
                })
                }
                className="text-center border-2 border-gray-500"  />
            <br />
            <br />
            <button type="submit"
            className=" bg-blue-700 text-white px-6 py-2 rounded"
            >Login</button>

        </form>
    )
}

export default SimpleForm;