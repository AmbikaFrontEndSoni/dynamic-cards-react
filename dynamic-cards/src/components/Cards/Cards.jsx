import React, { useEffect, useState } from "react";
import "./Cards.css";

const Cards = () => {
  const [card, setCard] = useState([]);

  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await a.json();
    console.log(data);
    setCard(data);
  };
 useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="card-container">
        {card.map((card) => {
          return (
            <div className="card" key={card.id}>
              <h4>{card.title}</h4>
              <p>{card.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Cards;
