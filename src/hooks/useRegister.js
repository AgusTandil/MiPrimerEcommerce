import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { log, success, error } from "../utils/logs";
import { registeredAlert, errorAlert, incorrectsChars } from "../utils/alerts";

const useRegister = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [disabled, setDisabled] = useState(true);
  const history = useHistory();
  var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  const nameValidation = (e) => {
    console.log(e);
    if (format.test(e)) incorrectsChars();
    else {
      return true;
    }
  };

  const onSignUp = async (e) => {
    e.preventDefault();
    const data = {
      fullName: name,
      address: address,
      country: country,
      phone: phone,
      email: email,
      password: password,
    };
    log("register attempt...");
    if (nameValidation(name)) {
      await axios
        .post(`/api/auth/register`, data)
        .then((data) => {
          history.push("/login");
          success("new user registered successfully");
          registeredAlert();
        })
        .catch((err) => {
          console.log(err);
          error(err);
          errorAlert();
        });
    }
  };

  return {
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    address,
    setAddress,
    country,
    setCountry,
    password,
    setPassword,
    onSignUp,
    error,
    disabled,
    nameValidation,
  };
};

export default useRegister;
