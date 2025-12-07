import axios, { all } from "axios";
import React from "react";
import { useState,useEffect } from "react";

const Orders = () => {
  const [allOrder, setAllOrder] = useState([]);

  useEffect(()=> {
    axios.get("http://localhost:3002/order").then((res)=>{
      setAllOrder(res.data);
    })
  },[]);
  return (
    <>
      <h3 className="title">My Orders({allOrder.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Stock ID</th>
            <th>Stock Name</th>
            <th>Stock Qty.</th>
            <th>Stock price</th>
            <th>Stock Type</th>
          </tr>

          {/* Data dalenge using Map function. */}
          { allOrder.map((stock, index) => {
            return (
              <tr key={index}>
                <td>{stock._id}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price}</td>
                <td>{stock.mode}</td>
              </tr>
            )
          })}
        </table>
      </div>
    </>
  );
};

export default Orders;
