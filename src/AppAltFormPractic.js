import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      isVegan: false,
      isKosher: false,
      isLactoseFree: false
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({
          dietaryRestrictions: {
            [name]: checked
          }
        })
      : this.setState({
          [name]: value
        });
  }

  render() {
    return (
      <main>
        <form>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          <input
            placeholder="Last Name"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br />
          <input
            placeholder="Age"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <br />

          {/* Здесь создайте переключатели для выбора пола */}
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
          {/* Здесь создайте поле со списком для выбора пункта назначения */}
          <br />
          <label>Choose ur city</label>
          <select
            value={this.state.destination}
            onChange={this.handleChange}
            name="destination"
          >
            <option value="">-- Please Choose a destination --</option>
            <option value="aCity">aCity</option>
            <option value="bCity">bCity</option>
            <option value="cCity">cCity</option>
            <option value="dCity">dCity</option>
            <option value="eCity">eCity</option>
          </select>
          {/* Здесь создайте флажки для указания диетологических ограничений */}
          <br />
          <label>
            <input
              type="checkbox"
              name="isVegan"
              onChange={this.handleChange}
              checked={this.state.isVegan}
            />{" "}
            Vegan?
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              name="isKosher"
              onChange={this.handleChange}
              checked={this.state.isKosher}
            />{" "}
            Kosher?
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              name="isLactoseFree"
              onChange={this.handleChange}
              checked={this.state.isLactoseFree}
            />{" "}
            Lactose Free?
          </label>
          <br />
          <button>Submit</button>
        </form>
        <hr />
        <h2>
          <font color="#3AC1EF">Entered information:</font>
        </h2>
        <p>
          Your name: {this.state.firstName} {this.state.lastName}
        </p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>
        <p>Your dietary restrictions:</p>
        <p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
        <p>Kosher: {this.state.isKosher ? "Yes" : "No"}</p>
        <p>Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"}</p>
      </main>
    );
  }
}

export default App;
