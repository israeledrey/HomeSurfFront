import React, { useEffect, useState } from "react";
import boards from "./boards.json";
import Board from "../Components/Board";
import { useOrderContext } from "../Components/OrderContext";
import axios from "axios";

const Shoping = () => {
  const { showAlert } = useOrderContext();
  const [boardsData, setBoardsData] = useState([]);

  const getData = async () => {
    try {
      const data = await axios.get("http://localhost:3000/api/boards");
      console.log(data);

      setBoardsData(data.data.dataBase);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="shoping">
      {boardsData.map((item) => (
        <Board key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Shoping;
