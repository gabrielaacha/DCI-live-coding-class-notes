import React from "react";
import UserList from "./UserList";
export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      list: [],
    };
  }
  render() {
    this.changeHandel = (e) => {
      console.log(e.target.value);
      this.setState({ userInput: e.target.value.trim() });
      //console.log(this.state.userInput);
    };
    this.add = (e) => {
      e.preventDefault();
      const userText = this.state.userInput;
      this.setState({
        userInput: "",
        list: [...this.state.list, userText],
      });
    };
    return (
      <React.Fragment>
        <form onSubmit={this.add}>
          <input
            type="text"
            value={this.state.userInput}
            onChange={this.changeHandel}
            placeholder="type something"
          />
          <input type="submit" value="Add" />
        </form>
        <UserList list={this.state.list} />
      </React.Fragment>
    );
  }
}
