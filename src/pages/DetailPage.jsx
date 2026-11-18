import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function DetailPage() {
  const [data, setData] = useState({});
  const [similarData, setSimilarData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const apiData = await res.json();
      setData(apiData);

      const similarRes = await fetch(
        `https://dummyjson.com/products/category/${apiData.category}`,
      );
      const similarApiData = await similarRes.json();
      const similarFilter = await similarApiData.products.filter(
        (prod) => prod.id !== apiData.id,
      );
      setSimilarData(similarFilter);
    };
    fetchData();
  }, [id]);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src={data.thumbnail} className="w-100" alt="" />
          </div>
          <div className="col-lg-6 d-flex justify-content-center flex-column">
            <h4>{data.title}</h4>
            <p>{data.description}</p>
          </div>
        </div>
      </div>

      <h1>Similar products</h1>

      <div className="container">
        <div className="row">
          {similarData.map((v) => (
            <>
              <div className="col-md-3">
                <div className="card">
                  <Link to={`/detail/${v.id}`}>
                    {" "}
                    <img src={v.images[0]} className="card-img-top" alt="..." />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{v.title}</h5>
                    <p className="card-text">{v.description}</p>
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
