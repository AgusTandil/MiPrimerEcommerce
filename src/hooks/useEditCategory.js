import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { log, success, error } from "../utils/logs";
import { editedCat } from "../utils/alerts";

const useEditCategory = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [sex, setSex] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: name,
      sex: sex,
      id: id,
    };
    console.log(data);
    log("editando categoría...");
    await axios
      .put(`/api/categories/editCategory`, data)
      .then((data) => {
        history.push("/admin");
        success("la categoría se editó correctamente");
        editedCat();
      })
      .catch((err) => {
        console.log(err);
        error(err);
      });
  };

  return {
    onSubmit,
    id,
    setId,
    name,
    setName,
    sex,
    setSex,
  };
};

export default useEditCategory;
