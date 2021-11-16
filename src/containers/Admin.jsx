import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";

import NavbarAdmin from "../components/admin/NavbarAdmin";
import NewProduct from "../components/admin/NewProduct";
import EditProducts from "../components/admin/EditProducts.jsx";
import EditCategories from "../components/admin/EditCategories.jsx";
import NewCategoryForm from "../components/admin/NewCategoryForm.jsx";
import EditCategoriesForm from "../components/admin/EditCategoriesForm.jsx";
import Registro from "../components/admin/Registro";

import Sidebar from "../components/admin/Sidebar";
import EditForm from "../components/admin/EditForm";
import Users from "../components/admin/ Users";
import EditUserForm from "../components/admin/EditUserForm";
import { useSelector } from "react-redux";
import { Image } from "@chakra-ui/image";
import { Text } from "@chakra-ui/layout";
import Home from "../components/admin/Home";

function Admin() {
  const loggedUser = useSelector((state) => state.user);

  return (
    <>
      {loggedUser.access === "admin" ? (
        <div className="Admin">
          <BrowserRouter>
            <NavbarAdmin position="fixed" top="0" width="100%" />
            <div
              style={{
                display: "table-cell",
                width: "15%",
                verticalAlign: "top",
              }}
            >
              <Sidebar />
            </div>
            <div
              style={{
                display: "table-cell",
                width: "85%",
                verticalAlign: "top",
              }}
            >
              <Route path="/admin/table" render={() => <Registro />} />
              <Route
                exact
                path="/admin/edit/products"
                render={() => <EditProducts />}
              />
              <Route exact path="/admin/edit/users" render={() => <Users />} />
              <Route
                exact
                path="/admin/edit/users/:id"
                render={() => <EditUserForm />}
              />
              <Route
                exact
                path="/admin/edit/products/:title"
                render={() => <EditForm />}
              />
              <Route path="/admin/products" render={() => <NewProduct />} />
              <Route
                exact
                path="/admin/edit/categories"
                render={() => <EditCategories />}
              />
              <Route
                path="/admin/edit/categories/:name"
                render={() => <EditCategoriesForm />}
              />
              <Route
                exact
                path="/admin/edit/newcategory"
                render={() => <NewCategoryForm />}
              />
              <Route exact path="/admin" render={() => <Home />} />
            </div>
          </BrowserRouter>
        </div>
      ) : (
        <>
          <div justify="center" align="center">
            <Text mt="100px">no sos admin, no te pases de vivo ;))))))</Text>
            <Image src="https://shutupandeat.ca/wp-content/uploads/2018/02/technical.jpg"></Image>
          </div>
        </>
      )}
    </>
  );
}

export default Admin;
