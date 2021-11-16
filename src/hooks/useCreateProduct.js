import { useState } from "react";
import axios from "axios";
import { log, success, error } from "../utils/logs";
import { productAdded } from "../utils/alerts";
import { useHistory } from "react-router";

const useCreateProduct = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [sex, setSex] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [imageLink, setImageLink] = useState("");
  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: title,
      price: price,
      description: description,
      sex: sex,
      image: imageLink,
      category: category,
      stock: stock,
    };
    console.log(data);
    log("agregando producto...");
    await axios
      .post(`/api/products/addProduct`, data)
      .then((data) => {
        console.log(data);
        history.push("/admin");
        success("el producto se añadió correctamente");
        productAdded();
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

export default useCreateProduct;
