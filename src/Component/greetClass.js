import React, { Component } from "react";

class GreetClass extends Component {
  render() {
    const { firstName, lastName, data } = this.props;
    const address = data.address;

    return (
      <div>
        <h1>
          Hello {firstName} {lastName} from {address.street}, {address.city}
        </h1>
      </div>
    );
  }
}

export default GreetClass;
