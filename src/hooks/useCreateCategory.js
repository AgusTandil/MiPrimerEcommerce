import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { log, success, error } from "../utils/logs";
import { createdCat } from "../utils/alerts";

const useCreateCategory = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [sex, setSex] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: name,
      sex: sex,
    };
    console.log(data);
    log("creando categoría...");
    await axios
      .post(`/api/categories/addCategory`, data)
      .then((data) => {
        history.push("/admin");
        success("la categoría fue creada correctamente");
        createdCat();
      })
      .catch((err) => {
        console.log(err);
        error(err);
      });
  };

  return {
    onSubmit,

    name,
    setName,
    sex,
    setSex,
  };
};

export default useCreateCategory;
