import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      textArea: "",
      isFriendly: true,
      gender: "",
      favColor: "blue"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={this.state.firstName}
          name="firstName"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Last Name"
          value={this.state.lastName}
          name="lastName"
          onChange={this.handleChange}
        />
        <br />
        <textarea
          value={this.state.textArea}
          name="textArea"
          onChange={this.handleChange}
          placeholder="Area"
        />
        <br />
        <label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          />
          Is friendly?
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />
          Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          />
          Female
        </label>
        <br />
        <label>Favorite Color</label>
        <select
          value={this.state.favColor}
          onChange={this.handleChange}
          name="favColor"
        >
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
        </select>
        <h1>
          {this.state.firstName} {this.state.lastName} {this.state.textArea}
        </h1>
        <h2>
          <font color="#3AC1EF">You are a {this.state.gender}</font>
        </h2>
        <h2>
          <font color="#3AC1EF">
            Your favorite color is {this.state.favColor}
          </font>
        </h2>
        {/* <button>Submit</button> */}
      </form>
    );
  }
}

export default App;
