import React, { useState } from "react";

export default function LoginForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    city: "",
    message: "",
    checked: false,
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData({
      ...data,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("form submitted");
    console.log(data);
  };
  return (
    <>
      <div className="container pt-5">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="plz enter your name"
            value={data.name}
            onChange={handleChange}
          />{" "}
          <br />
          <br />
          <input
            type="email"
            name="email"
            placeholder="plz enter your email"
            value={data.email}
            onChange={handleChange}
          />{" "}
          <br />
          <br />
          <textarea
            name="message"
            value={data.message}
            onChange={handleChange}></textarea>
          <br />
          <br />
          <select name="city" value={data.city} onChange={handleChange}>
            <option value="">Select City</option>
            <option value="Nerul">Nerul</option>
            <option value="Vashi">Vashi</option>
            <option value="Panvel">Panvel</option>
          </select>{" "}
          <br />
          <br />
          <input
            type="checkbox"
            checked={data.checked}
            onChange={handleChange}
            name="checked"
          />
          <br />
          <br />
          <input
            name="gender"
            type="radio"
            value="Male"
            checked={data.gender === "Male"}
            onChange={handleChange}
          />
          Male &nbsp;
          <input
            name="gender"
            type="radio"
            value="Female"
            checked={data.gender === "Female"}
            onChange={handleChange}
          />
          Female
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
