import React from "react";

import SecondsCounter from "./counter";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      let six = Math.floor((this.state.counter / 100000) % 10);
      let five = Math.floor((this.state.counter / 10000) % 10);
      let four = Math.floor((this.state.counter / 1000) % 10);
      let three = Math.floor((this.state.counter / 100) % 10);
      let two = Math.floor((this.state.counter / 10) % 10);
      let one = this.state.counter % 10;

      console.log(
        "Este es el contador de cada digito!!!! ----->",
        six,
        five,
        four,
        three,
        two,
        one
      );

      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    let six = Math.floor((this.state.counter / 100000) % 10);
    let five = Math.floor((this.state.counter / 10000) % 10);
    let four = Math.floor((this.state.counter / 1000) % 10);
    let three = Math.floor((this.state.counter / 100) % 10);
    let two = Math.floor((this.state.counter / 10) % 10);
    let one = this.state.counter % 10;

    return (
      <SecondsCounter
        digitOne={one}
        digitTwo={two}
        digitThree={three}
        digitFour={four}
        digitFive={five}
        digitSix={six}
      />
    );
  }
}

export default Home;
