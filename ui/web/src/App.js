import "./App.css";
import Login from "./components/Login";
import React from "react";

class App extends React.Component {
  state = {
    contacts: "",
  };

  componentDidMount() {
    const url = "../././bizlogic/api";
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ contacts: data });
        console.log(this.state.contacts);
      });
  }
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
