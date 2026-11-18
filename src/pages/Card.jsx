import React from "react";

export default function Card({ title, price, children }) {
  return (
    <div>
      <div className="container">
        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {children ||
                "this is jbxc djcxbmncv cjxbc cmbnmc cxjbcxnnm cxmbnmcx,shjsdj"}
            </p>
            <a href="#" className="btn btn-primary">
              ${price}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
