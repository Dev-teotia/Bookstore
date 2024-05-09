import React from "react";
import Book from "./Book";

const Bookstore = () => {
  const book = [
    {
      title: "IceBreaker",
      imgLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBAoc9Bl-5Pyr66je7o6h_m6WxqWRZT2_Vm4gjKcKzYQ&s",
      author: "Hannah Grace",
    },
    {
      title: "They Both Die At The End",
      imgLink:
        "https://i0.wp.com/centrevillesentinel.com/wp-content/uploads/2021/09/D581A5F1-119E-483E-8D3E-9E2193F66E0D.jpg?fit=556%2C900&ssl=1",
      author: "Adam Silvera",
    },
    {
      title: "They Both Die At The End",
      imgLink:
        "https://www.9thstreetbooks.com/wp-content/uploads/2019/04/61MfduTO3HL.jpg",
      author: "Adam Silvera",
    },
    {
      title: "They Both Die At The End",
      imgLink:
        "https://www.9thstreetbooks.com/wp-content/uploads/2019/04/61MfduTO3HL.jpg",
      author: "Adam Silvera",
    },
    {
      title: "They Both Die At The End",
      imgLink:
        "https://www.9thstreetbooks.com/wp-content/uploads/2019/04/61MfduTO3HL.jpg",
      author: "Adam Silvera",
    },
  ];
  return (
    <div className="booklist">
      {book.map((b, index) => {
        return <Book {...b} key={index} />;
      })}

      {book.map((b, index) => {
        return <Book {...b} key={index} />;
      })}
    </div>
  );
};

export default Bookstore;