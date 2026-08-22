import { useState } from "react";
const Toggal = () => {
     const [light, setLight] = useState(false);

  return (
    <>
     <body>{light ? "🟡 Light ON" : "⚪ Light OFF"}</body>
     <br />
     <button onClick={() => setLight(!light)}>Switch</button>
    </>
  );
};

export default Toggal;