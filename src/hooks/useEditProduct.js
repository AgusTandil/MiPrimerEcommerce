import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { log, success, error } from "../utils/logs";
import { editedProd } from "../utils/alerts";

const useEditProduct = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [sex, setSex] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [imageLink, setImageLink] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: title,
      id: id,
      price: price,
      description: description,
      sex: sex,
      image: imageLink,
      category: category,
      stock: stock,
    };
    console.log(data);
    log("editando producto...");
    await axios
      .put(`/api/products/edit`, data)
      .then((data) => {
        console.log(data);
        history.push("/admin");
        success("el producto se editó correctamente");
        editedProd();
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
    title,
    setTitle,
    price,
    setPrice,
    description,
    setDescription,
    sex,
    setSex,
    category,
    setCategory,
    stock,
    setStock,
    imageLink,
    setImageLink,
  };
};

export default useEditProduct;
