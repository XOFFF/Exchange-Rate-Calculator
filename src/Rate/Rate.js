import React from "react";
import "./Rate.css";
import Calc from "../Calc/Calc";

class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: {},
    };
    this.currency = ["EUR", "PLN", "RUB"];
    this.getRate();
  }
  getRate = () => {
    fetch(
      "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_RAo2PoGASdjCfu1fYp07P8nFg0rboJcYNrK0JkKq"
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        let result = {};

        for (let i = 0; i < this.currency.length; i++) {
          result[this.currency[i]] = response.data[this.currency[i]];
        }
        this.setState({ response: result });
      });
  };
  render() {
    return (
      <div className="rate">
        <h3>Exchange rate on {new Date().toDateString()}</h3>
        <div className="flex-container">
          {Object.keys(this.state.response).map((keyName, i) => (
            <div className="block flex-item" key={keyName}>
              <div className="currency-name">{keyName}</div>
              <div className="currency-in">
                {this.state.response[keyName].toFixed(2)}*
              </div>
              <p>* You can buy for 1 USD</p>
            </div>
          ))}
        </div>
        <Calc rate={this.state.response} />
      </div>
    );
  }
}

export default Rate;
