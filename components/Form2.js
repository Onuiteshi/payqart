import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Form2 = ({ prevStep, handleChange, handleClick, values, submit }) => {
  const PrevStep = (e) => {
    e.preventDefault();
    prevStep();
  };

  const Submit = (e) => {
    e.preventDefault();
    submit();
  };

  return (
    <div className="container">
      <div style={{ marginBottom: "20px" }}>
        <p
          onClick={PrevStep}
          style={{
            cursor: "pointer",
            display: "inline",
            float: "left",
            fontSize: "19px",
            color: "#ff3366",
          }}
          className="d-inline-block  text-start"
        >
          &#8592; &nbsp;Back
        </p>
        <h4 style={{ color: "purple", overflowY: "hidden" }}>
          Choose Your Plan
        </h4>
      </div>

      <div className={`${styles.form2} row`}>
        <div className={` col-md-2`}>
          <div
            style={{ borderTop: "7px solid #ff3366" }}
            className={`${styles.col3} card`}
          >
            <div className="card-body">
              <span className="fw-bold">Aggresive</span> <br />
              <h1 value="1" onClick={handleClick("tenor")}>
                1
              </h1>
              <span className="fw-bold">month</span>
            </div>
          </div>
        </div>
        <div className={` col-md-2`}>
          <div
            style={{ borderTop: "7px solid #cc99ff" }}
            className={`${styles.col3} card`}
          >
            <div className="card-body">
              <span className="fw-bold">Stretching</span> <br />
              <h1 value="2" onClick={handleClick("tenor")}>
                2
              </h1>
              <span className="fw-bold">months</span>
            </div>
          </div>
        </div>
        <div className={` col-md-2`}>
          <div
            style={{ borderTop: "7px solid #add8e6" }}
            className={`${styles.col3} card`}
          >
            <div className="card-body">
              <span className="fw-bold">Focused</span> <br />
              <h1 value="3" onClick={handleClick("tenor")}>
                3
              </h1>
              <span className="fw-bold">months</span>
            </div>
          </div>
        </div>
        <div className={` col-md-2`}>
          <div
            style={{ borderTop: "7px solid #45b6fe" }}
            className={`${styles.col3} card`}
          >
            <div className="card-body">
              <span className="fw-bold">Casual</span> <br />
              <h1 value="4" onClick={handleClick("tenor")}>
                4
              </h1>
              <span className="fw-bold">months</span>
            </div>
          </div>
        </div>
        <div className={` col-md-2`}>
          <div
            style={{ borderTop: "7px solid #ffa701" }}
            className={`${styles.col3} card`}
          >
            <div className="card-body">
              <span className="fw-bold">Mild</span> <br />
              <h1 value="5" onClick={handleClick("tenor")}>
                5
              </h1>
              <span className="fw-bold">months</span>
            </div>
          </div>
        </div>
        <div className={` col-md-2`}>
          <div
            style={{ borderTop: "7px solid #8cbf1c" }}
            className={`${styles.col3} card`}
          >
            <div className="card-body">
              <span className="fw-bold">Gentle</span> <br />
              <h1 value="6" onClick={handleClick("tenor")}>
                6
              </h1>
              <span className="fw-bold">months</span>
            </div>
          </div>
        </div>

        {/* PAYMENT BREAKDOWN */}
        <div className={`${styles.payment} `}>
          <h4 className="text-center" style={{ color: "purple" }}>
            Payment Breakdown
          </h4>
          <div className="card shadow">
            <div className="card-body row">
              <div className="d-flex justify-content-around mt-5 alighn-items-center col-md-7 rounded">
                <div className="text-center px-4  border-end">
                  <p>Shopping Credit</p>
                  <p>Down Payment</p>
                  <p>Monthly Installment</p>
                  <p>Tenure</p>
                </div>
                <div className="text-center ">
                  <p className="fw-bold">₦0.00</p>
                  <p className="fw-bold">₦0.00</p>
                  <p className="fw-bold">₦0.00</p>
                  <p className="fw-bold"> Month</p>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#6b0f1a",
                  backgroundImage:
                    "linear-gradient(315deg, #6b0f1a 0%, #b91372 74%)",
                }}
                className="col-md-5 card-body text-light text-center"
              >
                <div>
                  <p className="fs-7 text-white fw-bold mt-2 ">
                    Customize Down <br /> Payment
                  </p>
                  <div clasNames="input-group shadow rounded mt-2">
                    <span
                      style={{ color: "purple" }}
                      className="input-group-text "
                    >
                      ₦
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Amount (to the nearest dollar)"
                    />
                  </div>
                  <button
                    type="button"
                    className="btn   mt-5 mb-3 rounded-pill shadow  "
                  >
                    Update Down Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CONTINUE BUTTON */}
        <div className="text-center">
          <button
            type="button"
            style={{ borderColor: "#ff3366" }}
            className="btn  rounded-pill  "
            onClick={Submit}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form2;
