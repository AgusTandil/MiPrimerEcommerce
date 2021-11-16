import axios from "axios";

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
import { AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import AlertDeleteCat from "./AlertDeleteCat";

export default function EditCategories() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const [sex, setSex] = useState("Men");

  useEffect(() => {
    axios
      .get("/api/categories/getCategories")
      .then((res) => res.data)
      .then((data) => setCategories(data));
  }, []);

  const onDelete = (id) => {
    axios.delete(`/api/categories/${id}`).then((data) => {
      console.log(data);
      history.go(0); //NASHEEEE
    });
  };

  const onEdit = (selectedCat) => {
    window.localStorage.setItem("catName", selectedCat.name);
    window.localStorage.setItem("catSex", selectedCat.sex);
    window.localStorage.setItem("catId", selectedCat.id);
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
            <Tab value={"Men"} onClick={(e) => setSex(e.target.value)}>
              Hombre
            </Tab>
            <Tab value={"Women"} onClick={(e) => setSex(e.target.value)}>
              Mujer
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Table variant="striped" colorScheme="teal">
                <TableCaption>Categorías de hombre</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Nombre de la categoría</Th>
                    <Th>Editar</Th>
                    <Th>Eliminar</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {categories.map((cat) =>
                    cat.sex == sex ? (
                      <Tr>
                        <Td value={`${cat.name}`}>{cat.name}</Td>
                        <Td>
                          <Link to={`/admin/edit/categories/${cat.name}`}>
                            <Button
                              colorScheme="teal"
                              onClick={() => onEdit(cat)}
                            >
                              <BiEditAlt />
                            </Button>
                          </Link>
                        </Td>
                        <Td>
                          <AlertDeleteCat catId={cat.id} />
                        </Td>
                      </Tr>
                    ) : null
                  )}
                  <Tr></Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>Nombre de la categoría</Th>
                    <Th>Editar</Th>
                    <Th>Eliminar</Th>
                  </Tr>
                  <br />
                  <div justify="center" align={"center"}>
                    <Link to="/admin/edit/newcategory">
                      <Button size="md" colorScheme="teal">
                        Nueva categoría
                      </Button>
                    </Link>
                  </div>
                </Tfoot>
              </Table>
            </TabPanel>
            <TabPanel>
              <Table variant="striped" colorScheme="teal">
                <TableCaption>Categorías de mujer</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Nombre de la categoría</Th>
                    <Th>Editar</Th>
                    <Th>Eliminar</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {categories.map((cat) =>
                    cat.sex == sex ? (
                      <Tr>
                        <Td value={`${cat.name}`}>{cat.name}</Td>
                        <Td>
                          <Link to={`/admin/edit/categories/${cat.name}`}>
                            <Button
                              colorScheme="teal"
                              onClick={() => onEdit(cat)}
                            >
                              <BiEditAlt />
                            </Button>
                          </Link>
                        </Td>
                        <Td>
                          <AlertDeleteCat catId={cat.id} />
                        </Td>
                      </Tr>
                    ) : null
                  )}
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>Nombre de la categoría</Th>
                    <Th>Editar</Th>
                    <Th>Eliminar</Th>
                  </Tr>
                  <br />
                  <div justify="center" align={"center"}>
                    <Link to="/admin/edit/newcategory">
                      <Button size="md" colorScheme="teal">
                        Nueva categoría
                      </Button>
                    </Link>
                  </div>
                </Tfoot>
              </Table>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
}
