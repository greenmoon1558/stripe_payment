import React, { Component } from "react";
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
import "./App.css";
import StripeBtn from "./StripeBtn";
class App extends Component {
  constructor(props) {
    super(props);
    this.changeAmount = this.changeAmount.bind(this);
    this.state = {
      amount: "9.99"
    };
  }
  changeAmount(e) {
    this.setState({ amount: e.target.value });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col />
              <Col>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                  <Input
                    value={this.state.amount}
                    onChange={this.changeAmount}
                    placeholder="Amount"
                    min={0}
                    type="number"
                    step="1"
                  />
                  <InputGroupAddon addonType="append">.00</InputGroupAddon>
                </InputGroup>
                <StripeBtn amount={this.state.amount} />
              </Col>
              <Col />
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}
export default App;
