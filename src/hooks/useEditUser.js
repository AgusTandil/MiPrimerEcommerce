import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { log, success, error } from "../utils/logs";
import { permissionDenied, userUpdated } from "../utils/alerts";
import { useStore } from "react-redux";

const useEditUser = () => {
  const selectedUser = localStorage.getItem("selectedUser");
  const store = useStore();
  const history = useHistory();
  const [name, setName] = useState("");
  const [access, setAccess] = useState("");
  const [id, setId] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      id: id,
      access: access,
    };
    if (store.getState().user.access === "admin") {
      log("editando usuario...");
      await axios
        .put(`/api/users/edit/`, data)
        .then((data) => {
          history.push("/admin");
          success("el usuario se editó correctamente");
          userUpdated();
        })
        .catch((err) => {
          console.log(err);
          error(err);
        });
    } else {
      error("No tenés permisos de administrador");
      permissionDenied();
    }
  };

  return {
    onSubmit,
    access,
    setAccess,
    id,
    setId,
    name,
    setName,
  };
};

export default useEditUser;
