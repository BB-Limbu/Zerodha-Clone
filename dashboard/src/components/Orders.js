
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios  from 'axios';

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
    

    useEffect(() => {
        axios.post("http://localhost:3002/newOrder").then((res) =>{
            setAllOrders(res.data.allOrders);
        })
        .catch((err) => console.log(err));
    }, [])


  return (
    <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;