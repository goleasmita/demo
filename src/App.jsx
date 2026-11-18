import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./componnets/Navbar";
import Footer from "./componnets/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Props from "./pages/Props";
import ConditionalRendering from "./pages/ConditionalRendering";
import State from "./pages/State";
import Map from "./pages/Map";
import Fetch from "./pages/Fetch";
import DetailPage from "./pages/DetailPage";
import Cart from "./pages/Cart";
import LoginForm from "./pages/form/LoginForm";

export default function App() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <BrowserRouter>
        <Navbar search={search} setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<Home search={search} />} />
          <Route path="/about" element={<About />} />
          <Route path="/props" element={<Props />} />
          <Route path="/render" element={<ConditionalRendering />} />
          <Route path="/state" element={<State />} />
          <Route path="/map" element={<Map />} />
          <Route path="/fetch" element={<Fetch />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/form" element={<LoginForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
