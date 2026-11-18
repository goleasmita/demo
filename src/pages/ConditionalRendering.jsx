import React, { useState } from "react";
// import PrimeUser from "./PrimeUser";
// import GuestUser from "./GuestUser";

export default function ConditionalRendering() {
  const [isPrime, setIsPrime] = useState(false);

  const handleToggle = () => {
    setIsPrime(!isPrime);
  };
  return (
    <div>
      <button onClick={handleToggle}>{isPrime ? "Guest" : "Prime"}</button>
      <h1>{isPrime ? "Welcome to Prime user" : "Welcome to Guest User"}</h1>
    </div>
  );
}
