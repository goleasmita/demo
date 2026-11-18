import React from "react";
import Card from "./Card";

export default function Props() {
  return (
    <div className="d-flex justify-content-center" style={{ height: "100vh" }}>
      <Card title="demo 1" price={200}>
        <ul>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </Card>
      <Card title="demo 1" price={200} />
      <Card title="demo 1" price={200}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit, consequatur?
        </p>
      </Card>
      <Card title="demo 1" price={200} />
    </div>
  );
}
