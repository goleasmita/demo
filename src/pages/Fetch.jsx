import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Fetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const apiData = await res.json();
      setData(apiData.products);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          {data.map((v) => (
            <>
              <div className="col-md-3">
                <div className="card">
                  <Link to={`/detail/${v.id}`}>
                    {" "}
                    <img src={v.images[0]} className="card-img-top" alt="..." />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{v.title}</h5>
                    <p className="card-text">{v.description.slice(0, 70)}</p>
                    <a href="#" className="btn btn-primary">
                      {v.price}
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
