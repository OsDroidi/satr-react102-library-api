import React, { Component } from "react";
import axios from "axios";

export default class WithClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookTitle: [],
    };
  }

  componentDidMount() {
    this.callApi();
  }

  callApi = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => {
        console.log(response.data);
        this.setState({ bookTitle: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h1>تطبيق المكتبة | Library</h1>
        {this.state.bookTitle.map((val, key) => {
          return (
            <div key={key}>
              <p>{val.title}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
