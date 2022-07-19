import React from "react";
import Navbar from "../BlogPage/Navbar";
import Footer from "../Home/Footer";
import PaymentInformation from "./PaymentInformation";

const MainPayment = () => {
  return (
    <div className="paymentFull">
      <Navbar />
      <PaymentInformation />
      <Footer />
    </div>
  );
};

export default MainPayment;
