import React, { useEffect, useState } from "react";

export default function Home({ search = "" }) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const apiData = await res.json();

      setData(apiData.products);
      setFilter(apiData.products);
    };

    fetchData();
  }, []);

  // =========================
  // CATEGORY FILTER
  // =========================

  const filterProduct = (cat) => {
    const result = data.filter((v) => v.category === cat);
    setFilter(result);
  };

  // =========================
  // SEARCH FROM NAVBAR
  // =========================

  const filteredProducts = filter.filter((v) => {
    const value = search.toLowerCase();

    return (
      v.title.toLowerCase().includes(value) ||
      v.description.toLowerCase().includes(value) ||
      v.category.toLowerCase().includes(value)
    );
  });

  return (
    <div>
      {/* CATEGORY BUTTONS */}

      <button onClick={() => setFilter(data)}>All</button>

      <button onClick={() => filterProduct("beauty")}>Beauty</button>

      <button onClick={() => filterProduct("fragrances")}>Fragrances</button>

      <button onClick={() => filterProduct("furniture")}>Furniture</button>

      <button onClick={() => filterProduct("groceries")}>Groceries</button>

      {/* PRODUCTS */}

      <div className="container mt-4">
        <div className="row g-2">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((v) => (
              <div className="col-md-3" key={v.id}>
                <div className="card h-100">
                  <img
                    src={v.images[0]}
                    className="card-img-top"
                    alt={v.title}
                    style={{
                      height: "220px",
                      objectFit: "contain",
                    }}
                  />

                  <div className="card-body">
                    <h5 className="card-title">
                      {v.title.length > 23
                        ? v.title.slice(0, 23) + "..."
                        : v.title}
                    </h5>

                    <p className="card-text">
                      {v.description.length > 60
                        ? v.description.slice(0, 60) + "..."
                        : v.description}
                    </p>

                    <div className="d-flex justify-content-between">
                      <button className="btn btn-primary">${v.price}</button>

                      <button className="btn btn-success">Add To Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center mt-4">
              <h3>No products found</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
