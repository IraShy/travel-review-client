import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";

const Bounce = styled.div`
  animation: 2s ${keyframes`${bounce}`} infinite;
`;

class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
        <Bounce>
          <h1 className="bounce">Hey traveller!</h1>
        </Bounce>
      </div>
    );
  }
}

export default Home;
