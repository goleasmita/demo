import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./redux/slice";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h3>Shopping cart</h3>

        {cartItems.map((v) => {
          return (
            <>
              <div className="row">
                <div className="col-lg-3">
                  <img src={v.thumbnail} alt="" />
                </div>
                <div className="col-lg-5">
                  <h4>{v.title}</h4>
                  <p>{v.price}</p>
                </div>
                <div className="col-lg-4">
                  <button>Remove</button>
                </div>
              </div>
            </>
          );
        })}

        <div>
          <button onClick={() => dispatch(clearCart())}>clear cart</button>
        </div>
      </div>
    </>
  );
}
