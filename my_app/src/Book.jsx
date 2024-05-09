import React from "react";

const Book = (props) => {
  //   const book1 = {
  //     title: "IceBreaker",
  //     imglink:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBAoc9Bl-5Pyr66je7o6h_m6WxqWRZT2_Vm4gjKcKzYQ&s",
  //     author: "Hannah Grace",
  //   };
  //   const book2 = {
  //     title: "They Both Die At The End",
  //     imgLink:
  //       "https://www.9thstreetbooks.com/wp-content/uploads/2019/04/61MfduTO3HL.jpg",
  //     author: "Adam Silvera",
  //   };

  return (
    <div className="book">
      <h2>{props.title}</h2>
      <img src={props.imgLink}></img>
      <h3>{props.author}</h3>
    </div>
  );
};

export default Book;