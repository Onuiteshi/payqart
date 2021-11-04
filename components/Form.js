import React, { Component } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";
import axios from "axios";

export class Form extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    step: 1,
    userMonthlyPay: "",
    userSalaryDate: "",
    plan: "",
    downpayment: 0,
    employmentType: "",
    currentMonthlyLoan: "",
    tenor: "",
    data: {},
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  uploadData = {
    currentMonthlyLoan: parseInt(this.state.currentMonthlyLoan),
    userMonthlyPay: parseInt(this.state.userMonthlyPay),
    userSalaryDate: parseInt(this.state.userSalaryDate),
    employmentType: this.state.employmentType,
    tenor: this.state.tenor,
    averageMonthlyRevenue: null,
    averageMonthlyExpense: null,
    requestedAmount: this.props.requestedAmount,
  };

  submit = () => {
    console.log(this.state.tenor);
    console.log(this.state.employmentType);
    console.log(this.state.currentMonthlyLoan);
    axios({
      method: "post",
      url: `https://payqart.compound.ng/api/application/calculate`,
      data: this.uploadData,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        console.log(response);
        if (response.status === "success") {
          this.setState({ data: response });
        }
      })
      .catch((err) => {
        // if(err.response.data.status === 400){
        console.log(err.response.data);

        // }
      });
  };

  // Go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle field change
  handleChange = (input) => (e) => {
    console.log(input);
    console.log(e);
    this.setState({
      [input]: e.target.value,
    });
  };

  handleClick = (input) => (e) => {
    console.log(input);
    console.log(e.target.getAttribute("value"));
    this.setState({
      [input]: e.target.getAttribute("value"),
    });
  };
  handleDate = (input) => (e) => {
    console.log(input);

    const anotherDate = parseInt(JSON.stringify(e).slice(9, 11)) + 1;
    console.log(anotherDate);
    this.setState({
      [input]: anotherDate,
    });
  };

  render() {
    const { step } = this.state;
    const {
      currerntMonthlyLoan,
      plan,
      downpayment,
      datepicker,
      userMonthlyPay,
      userSalaryDate,
      employmentType,
      tenor,
    } = this.state;
    const values = {
      currerntMonthlyLoan,
      plan,
      downpayment,
      datepicker,
      userMonthlyPay,
      userSalaryDate,
      employmentType,
      tenor,
    };
    switch (step) {
      case 1:
        return (
          <Form1
            nextStep={this.nextStep}
            values={values}
            handleChange={this.handleChange}
            handleClick={this.handleClick}
            handleDate={this.handleDate}
          />
        );
      case 2:
        return (
          <Form2
            prevStep={this.prevStep}
            values={values}
            handleChange={this.handleChange}
            handleClick={this.handleClick}
            submit={this.submit}
          />
        );
      default:
        <h1>okay</h1>;
    }
  }
}

export default Form;
