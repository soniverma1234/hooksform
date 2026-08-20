import { useState } from "react";

const ThemeChanger = () => {
  const [theme, setTheme] = useState(false);

  return (
    <div
      className={`h-screen p-10 ${
        theme ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h1>{theme ? "Dark Mode ON" : "Light Mode ON"}</h1>

      <button
        onClick={() => setTheme(!theme)}
        className="border-2 px-5 py-2 mt-5"
      >
        Switch
      </button>
    </div>
  );
};

export default ThemeChanger;