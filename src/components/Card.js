import React from "react";

function Card({ item }) {
  return (
    <div
      key={item.id}
      className="card-outer-wrapper pt-5 pb-3 px-3 my-5 mx-auto position-relative"
    >
      <h3>{`${item.first_name}  ${item.last_name}`} </h3>
      <h6>Email: {item.email}</h6>
      <img src={item.avatar} alt="" className="position-absolute" />
      <br />
      <h1></h1>
    </div>
  );
}

export default Card;
