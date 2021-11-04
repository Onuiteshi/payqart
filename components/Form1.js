import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import paid from "../public/images/paid.png";
import freelance from "../public/images/freelancing.jpg";
import corporate from "../public/images/corporate.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form1 = ({ nextStep, values, handleChange, handleClick, handleDate }) => {
  // TO THE NEXT FORM
  const NextStep = (e) => {
    e.preventDefault();
    console.log(values.userMonthlyPay);
    console.log(values.currentMonthlyLoan);
    console.log(values.employmentType);
    console.log(values.userSalaryDate);
    if (values.userMonthlyPay === "") {
      alert("input salary");
    } else if (values.currentMonthlyLoan === "") {
      alert("Do you have an existing loan?");
    } else if (values.employmentType === "") {
      alert("Choose Employment Type");
    } else {
      nextStep();
    }
  };

  const [startDate, setStartDate] = useState("");
  //   console.log(startDate);

  const anotherDate = parseInt(JSON.stringify(startDate).slice(9, 11)) + 1;
  //   console.log(anotherDate);

  const handleDates = (date) => {
    setStartDate(date), handleDate("userSalaryDate");
  };

  return (
    <div>
      <h4 style={{ color: "purple", marginBottom: "20px" }}>What Do You Do?</h4>
      <div className={`${styles.form1} row`}>
        {/* PAID EMPLOYMENT */}
        <div className={`${styles.col} col-md-4`}>
          <div
            style={{
              maxWidth: "200px",
              maxHeight: "120px",
              borderRadius: "10px",
            }}
            className="card shadow "
            tabIndex="1"
          >
            <div className=" card-body ">
              <Image
                value="1"
                onClick={handleClick("employmentType")}
                src={paid}
                alt="paid"
                width={110}
                height={80}
              />
            </div>
          </div>
          <p className="mt-1 text-center ">
            Paid <br /> Employment
          </p>
        </div>

        {/* FREELANCING */}
        <div className={`${styles.col} col-md-4`}>
          <div
            style={{
              maxWidth: "200px",
              maxHeight: "120px",
              borderRadius: "10px",
            }}
            className="card shadow "
            tabIndex="2"
          >
            <div className=" card-body ">
              <Image
                value="2"
                onClick={handleClick("employmentType")}
                src={freelance}
                alt="paid"
                width={110}
                height={80}
              />
            </div>
          </div>
          <p className=" mt-1 text-center ">
            Self Employed/ <br /> Freelance
          </p>
        </div>

        {/* CORPORATE INSTITUTION */}
        <div className={`${styles.col} col-md-4`}>
          <div
            style={{
              maxWidth: "200px",
              maxHeight: "120px",
              borderRadius: "10px",
            }}
            className="card shadow "
            tabIndex="3"
          >
            <div className="card-body  ">
              <Image
                value="3"
                onClick={handleClick("employmentType")}
                src={corporate}
                alt="paid"
                width={110}
                height={80}
              />
            </div>
          </div>
          <p className="mt-1 text-center ">Corporate Organization</p>
        </div>

        {/* INPUT FIELDS */}
        <div className={`${styles.input} text-start mt-4`}>
          {/* SALARY INPUT */}
          <p htmlFor="exampleDataList" className="form-p text-start">
            How Much Do You Get Paid Monthly?
          </p>
          <div className="input-group shadow rounded mb-3">
            <span
              style={{ backgroundColor: "purple" }}
              className="input-group-text  text-light"
            >
              ₦
            </span>
            <input
              type="text"
              className="form-control"
              defaultValue={values.userMonthlyPay}
              onChange={handleChange("userMonthlyPay")}
            />
          </div>

          {/* DATE PICKER */}
          <p htmlFor="exampleDataList" className="form-p text-start">
            When Is Your Next Salary Date?
          </p>
          <DatePicker
            className="form-control"
            placeholderText="Select Pay Date"
            selected={startDate}
            onChange={handleDates}
          />

          {/* EXISTING LOAN */}
          <p htmlFor="exampleDataList" className="form-p text-start">
            Do You Have An Existing Loan(s)?
          </p>

          <div className="d-flex shadow p-2 justify-content-around">
            <div>
              <input
                style={{ borderColor: "#ff3366" }}
                type="radio"
                name="radio"
                id="yes"
                value="1"
                onClick={handleClick("currentMonthlyLoan")}
              />
              <span className="ms-2">Yes</span>
            </div>
            |
            <div>
              <input
                style={{ borderColor: "#ff3366" }}
                type="radio"
                name="radio"
                id="no"
                value="2"
                onChange={handleClick("currentMonthlyLoan")}
              />
              <span className="ms-2">No</span>
            </div>
          </div>
        </div>

        {/* CONTINUE BUTTON */}
        <div className="text-center">
          <button
            type="button"
            style={{ borderColor: "#ff3366" }}
            className="btn  rounded-pill  "
            onClick={NextStep}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form1;
