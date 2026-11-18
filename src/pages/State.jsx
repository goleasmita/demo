import React, { useEffect, useState } from "react";

export default function State() {
  const [city, setCity] = useState("Nerul");
  const [age, setAge] = useState(20);

  const handleUpdate = () => {
    // setCity("Vashi");
    setAge(1 + age);
  };

  useEffect(() => {
    console.log("Useeffect call.....");
  }, [age]);
  return (
    <div>
      <h1>city: {city}</h1>
      <h1>age: {age}</h1>
      <button onClick={handleUpdate}>Click</button>
      <button onClick={() => setCity("Nerul")}>Nerul</button>
      <button onClick={() => setCity("Vashi")}>Vashi</button>
      <button onClick={() => setCity("Panvel")}>Panvel</button>
      <button onClick={() => setCity("Thane")}>Thane</button>
    </div>
  );
}
