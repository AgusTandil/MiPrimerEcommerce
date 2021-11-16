import axios from "axios";

import { log, success, error } from "../../utils/logs";

//cositas de Chakra UI
import { Flex } from "@chakra-ui/layout";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import {
  Table,
  TableCaption,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/table";

//cosas de React
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

//íconos de React
import { BiEditAlt } from "react-icons/bi";
import { useStore } from "react-redux";

export default function Users() {
  const store = useStore();
  const history = useHistory();
  const [users, setUsers] = useState([]);

  const usuarioLogueado = store.getState().user.fullName;
  useEffect(() => {
    axios
      .get("/api/users/allUsers")
      .then((res) => res.data)
      .then((data) => setUsers(data));
  }, []);

  const onEdit = (selectedUser) => {
    window.localStorage.setItem("userName", selectedUser.fullName);
    window.localStorage.setItem("userAccess", selectedUser.access);
    window.localStorage.setItem("userId", selectedUser.id);
  };

  return (
    <>
      <br />
      <Flex
        justify="center"
        maxHeight="100%"
        maxWidth="90%"
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Tabs ml={"100px"} justify="center" variant="enclosed">
          <TabList>
            <Tab>Usuarios</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Table variant="striped" colorScheme="teal">
                <TableCaption>Lista de usuarios del sitio</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Nombre del usuario</Th>
                    <Th>Correo electrónico</Th>
                    <Th>País</Th>
                    <Th>Permisos</Th>
                    <Th>Editar</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {users.map((user) => (
                    <Tr>
                      <Td>{user.fullName}</Td>
                      <Td>{user.email}</Td>
                      <Td>{user.country}</Td>
                      <Td>
                        {user.access == "user" ? "Usuario" : "Administrador"}
                      </Td>
                      <Td>
                        <Link to={`/admin/edit/users/${user.id}`}>
                          {usuarioLogueado == user.fullName ? (
                            <Button
                              disabled
                              colorScheme="teal"
                              onClick={() => onEdit(user)}
                            >
                              {" "}
                              <BiEditAlt />
                            </Button>
                          ) : (
                            <Button
                              colorScheme="teal"
                              onClick={() => onEdit(user)}
                            >
                              {" "}
                              <BiEditAlt />
                            </Button>
                          )}
                        </Link>
                      </Td>
                    </Tr>
                  ))}
                  <Tr></Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>Nombre del usuario</Th>
                    <Th>Correo electrónico</Th>
                    <Th>País</Th>
                    <Th>Permisos</Th>
                    <Th>Editar</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
}
