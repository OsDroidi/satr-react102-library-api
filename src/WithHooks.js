import React, { useState, useEffect } from "react";
import axios from "axios";

const WithHooks = () => {
  const [bookTitle, setBookTitle] = useState([]);

  useEffect(() => {
    callApi();
  }, []);

  const callApi = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => {
        console.log(response.data);
        setBookTitle(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>تطبيق المكتبة | Library</h1>
      {bookTitle.map((val, key) => {
        return (
          <div key={key}>
            <p>{val.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default WithHooks;
