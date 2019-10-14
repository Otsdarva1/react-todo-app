import React from "react";

export class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }
  render() {
    return (
      <div>
        <h2>AddTodo</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input type="submit" value="Add to todo List" />
        </form>
      </div>
    );
  }

  handleChange = event => {
    //
    const title = event.target.value;
    this.setState({ title: title });
  };

  handleSubmit = event => {
    // submitの遷移を止める
    event.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };
}
