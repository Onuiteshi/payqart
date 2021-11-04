import React, { useEffect } from "react";
import iPhone from "../public/images/iphone.jpg";
import Shirt from "../public/images/mens shirt.jpg";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Order = (props) => {
  return (
    <div className={`${styles.orderContainer} container`}>
      <p className="fs-6 text-start">ORDER SUMMARY</p>
      {/* ORDERS */}
      <div style={{ borderRadius: "20px" }} className="card shadow  p-3 ">
        <div className="card-body">
          <div className="d-flex   mb-4">
            <div className="shadow card text-start me-4 rounded">
              <div className="card-body">
                <Image src={iPhone} width={60} height={60} alt="phone" />
              </div>
            </div>
            <p className="text-start text-secondary">
              iphone X <br />
              ₦75,000 <br />
              Qty:1
            </p>
          </div>
          <div className="d-flex ">
            <div className="shadow card text-start me-4">
              <div className="card-body">
                <Image src={Shirt} width={60} height={60} alt="phone" />
              </div>
            </div>
            <p className="text-start text-secondary">
              Mens Shirt <br />
              ₦5,500 <br />
              Qty:1
            </p>
          </div>
        </div>
      </div>

      {/* TOTAL */}
      <div style={{ borderRadius: "20px" }} className="card shadow p-1 mt-3">
        <div className="d-flex card-body flex-row mt-1 justify-content-between">
          <p className="text-start text-secondary">TOTAL :</p>
          <p className="fw-bold">₦{props.requestedAmount}</p>
        </div>
      </div>
    </div>
  );
};

export default Order;
