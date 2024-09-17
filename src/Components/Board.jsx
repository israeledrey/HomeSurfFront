import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import boards from "../pages/boards.json";
import { OrderContext } from "../Components/OrderContext";
import Orders from "../pages/Orders";

const Board = ({ item }) => {
  const { id } = useParams();
  const { addOrder, showAlert, alertById } = useContext(OrderContext);

  if (!item) {
    item = boards.find((item) => item.id === id);
    return (
      <div className="board-params">
        <Link to={`/Board/${item.id}`}>
          <img src={item.image} />
        </Link>
        <h1>{item.brand}</h1>
        <p>{item.model}</p>
        <p>{item.type}</p>
        <p>{item.length}$</p>
        <button onClick={() => addOrder(item)}> Add prouct</button>
      </div>
    );
  }

  return (
    <div className="board-params">
      <Link to={`/Board/${item.id}`}>
        <img src={item.image} />
      </Link>
      <h1>{item.brand}</h1>
      <p>{item.model}</p>
      <p>{item.type}</p>
      <p>{item.price}$</p>
      <button onClick={() => addOrder(item)}> Add prouct</button>
      {showAlert && alertById === item.id && (
        <div className="order-alert">Order Added</div>
      )}
    </div>
  );
};

export default Board;
