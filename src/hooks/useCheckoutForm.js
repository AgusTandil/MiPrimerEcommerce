import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import useCart from "../hooks/useCart";

function useCheckoutForm() {
  const loggedUser = useSelector((state) => state.user);
  const orderform = JSON.parse(window.localStorage.getItem("orderform"));
  const [nameValue, setNameValue] = React.useState("");
  const [adressValue, setAdressValue] = React.useState("");
  const [paymentValue, setPaymentValue] = React.useState("");

  const { totalAmountToPay } = useCart();
  const history = useHistory();

  let handleSubmit = () => {
    if (nameValue == "" || adressValue == "" || paymentValue == "") {
      alert("No puede dejar campos sin completar");
    } else {
      orderform.order.userProfileId = "";
      orderform.order.orderAddress = adressValue;
      orderform.order.orderDate = new Date();
      orderform.order.orderPaymentType = paymentValue;
      orderform.order.totalAmmount = totalAmountToPay;
      orderform.order.orderStatus = "closed";
      window.localStorage.setItem("orderform", JSON.stringify(orderform));

      history.push("/checkout");
      return orderform;
    }
  };

  return {
    handleSubmit,
    nameValue,
    adressValue,
    paymentValue,
    setNameValue,
    setAdressValue,
    setPaymentValue,
  };
}

export default useCheckoutForm;
