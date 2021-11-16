import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const registeredAlert = () => {
  MySwal.fire({
    title: "Su cuenta ha sido creada con éxito",
    icon: "success",
  });
};

export const loginError = () => {
  MySwal.fire({
    title: "Usuario o contraseña incorrecta. Por favor intente nuevamente.",
    icon: "error",
  });
};

export const incorrectsChars = () => {
  MySwal.fire({
    title: "Usuario o contraseña incorrecta. Por favor intente nuevamente.",
    icon: "error",
  });
};

export const userUpdated = () => {
  MySwal.fire({
    title: "¡Listo!",
    icon: "success",
  });
};
export const permissionDenied = () => {
  MySwal.fire({
    title: "No tienes permisos de administrador para realizar esta acción",
    icon: "error",
  });
};

export const errorAlert = () => {
  MySwal.fire({
    title: "No fue posible crear su cuenta",
    icon: "error",
  });
};

export const productAdded = () => {
  MySwal.fire({
    title: "Producto añadido correctamente",
    icon: "success",
  });
};

export const editedProd = () => {
  MySwal.fire({
    title: "El producto se editó correctamente",
    icon: "success",
  });
};

export const createdCat = () => {
  MySwal.fire({
    title: "¡Tu nueva categoría está lista!",
    icon: "success",
  });
};

export const editedCat = () => {
  MySwal.fire({
    title: "Categoría editada",
    icon: "success",
  });
};

export const nostockAlert = () => {
  MySwal.fire({
    title: "Ups...",
    text: "¡No hay suficiente stock!",
    icon: "error",
    width: "20%",
  });
};
