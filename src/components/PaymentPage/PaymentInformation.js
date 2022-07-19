import React, { useState } from "react";
import "./payment.css";
const PaymentInformation = () => {
  const [payment, setPayment] = useState(1);
  const [book, setBook] = useState(null);
  const toBooking = () => {
    setBook(1);
    setPayment(null);
  };
  return (
    <div className="mainPayment">
      {book && (
        <>
          <h3>Trip Booking</h3>
          <h1>Annapurna Circuit Trek - 11 Days</h1>
          <div className="paymentContainer">
            <h4>Personal Details (Trip Leader)</h4>
            <div className="bookRow">
              <div>
                <h6>Full Name</h6>
                <input />
              </div>
              <div>
                <h6>E-mail</h6>
                <input />
              </div>
              <div>
                <h6>Contact no.</h6>
                <input />
              </div>
            </div>
            <h4>Your Location</h4>
            <div className="bookRow">
              <div>
                <h6>Country</h6>
                <input />
              </div>
              <div>
                <h6>City</h6>
                <input />
              </div>
              <div>
                <h6>Street</h6>
                <input />
              </div>
            </div>
            <h4>Arrival/Departure Dates</h4>
            <div className="bookRow">
              <div>
                <h6>Arrival Date</h6>
                <input />
              </div>
              <div>
                <h6>Departure Date</h6>
                <input />
              </div>
              <div>
                <h6>Departure Date from List</h6>
                <input />
              </div>
            </div>
            <h3>Other Information</h3>
            <div className="bookRow">
              <textarea rows="10" cols="90" />
            </div>
            <button className="bookBtn">Book</button>
          </div>
        </>
      )}
      {payment && (
        <>
          <h3>Payment Information</h3>
          <h1>Annapurna Circuit Trek - 11 Days</h1>
          <div className="paymentContainer">
            <h3>Participants</h3>
            <small>Total no. of participants</small>
            <div className="paymentAmount">
              <h5>-</h5>
              <h5>0</h5>
              <h5>+</h5>
            </div>
            <div className="mainPaymentPackage">
              <div className="paymentPackage">
                <h3>Package Price(Per Person):</h3>
                <h3>Rs. 50000</h3>
              </div>
              <div className="paymenthr" />
              <div className="paymentPackage">
                <h3>Total Package Price:</h3>
                <h3>Rs. 10000000</h3>
              </div>
              <div className="paymenthr" />
              <div className="paymentPackage">
                <h3>Your Current Payment:</h3>
                <h3>Rs. 50000</h3>
              </div>
              <div className="paymenthr" />
              <div className="paymentPackage">
                <h3>Remaining Amount:</h3>
                <h3>Rs. 00</h3>
              </div>
              <div className="paymenthr" />
            </div>
            <div className="paymentBtn">
              <button onClick={toBooking}>Proceed to payment</button>
            </div>
            <div className="paymentType">
              <h1>PayPal</h1>
              <h1>DebitCard</h1>
              <h1>e-Sewa</h1>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PaymentInformation;
