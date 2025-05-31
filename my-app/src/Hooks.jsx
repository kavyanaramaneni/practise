import { useState } from "react";

function Hooks() {
  const [name, setName] = useState("Guest");

  const handleEvent = () => {
    setName("BroCode");
  };

  return (
    <div>
      <button onClick={handleEvent}>Click Me</button>
      <p>{name}</p>
    </div>
  );
}

export default Hooks;
