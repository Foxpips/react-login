import React from "react";
import { connect } from "react-redux";
import { setName } from "../reducers/login.reducer";

class Home extends React.Component {
  handleChange = event => {
    this.props.setName(event.target.value);
  };

  handleSubmit = event => {
    alert("A name was submitted: " + event.target.value);
    console.log(event.target.value);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>Home</h1>
        <span>welcome {this.props.userName}</span>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" onBlur={this.handleChange} />
            </label>
            <label>
              Proficiency:
              <select defaultValue="default">
                <option value="default">Please Select...</option>
                <option value="Java">Java</option>
                <option value="CSharp">C#</option>
                <option value="ReactJS">ReactJS</option>
                <option value="Angular">Angular</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ userName: state.login.user.name }),
  { setName }
)(Home);
