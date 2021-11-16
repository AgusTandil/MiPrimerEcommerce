import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Box, Center, Flex, SimpleGrid } from "@chakra-ui/layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { getProducts } from "../../store/productsReducer";

import { AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import axios from "axios";

export default function EditProducts() {
  const history = useHistory();
  const location = useLocation();
  const products = useSelector((state) => {
    return state.products;
  });

  const dispatch = useDispatch();

  const onDelete = (id) => {
    axios.delete(`/api/products/${id}`).then((data) => {
      console.log(data);
      history.go(0); //NASHEEEE
    });
  };

  const onProduct = (prod) => {
    window.localStorage.setItem("product", prod);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Flex maxHeight="100%" bg={useColorModeValue("gray.50", "gray.800")}>
      <SimpleGrid minChildWidth="120px" spacing="40px" maxWidth="90%">
        {products &&
          products.map((product) => {
            return (
              <Box height="200px" align={"center"} justify={"center"}>
                <Image
                  src={`${product.image}`}
                  boxSize="80px"
                  objectFit="scale-down"
                />{" "}
                <Center>
                  <Box
                    mt="10"
                    ml="5"
                    mr="5"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >{`${product.title}`}</Box>
                </Center>
                <Center>
                  <Box>{`$ ${product.price}`}</Box>
                </Center>
                <Center>
                  <Box d="flex" mt="2" alignItems="center"></Box>
                </Center>
                <Box md="flex" mt="2">
                  <Link to={`/admin/edit/products/${product.title}`}>
                    <Button
                      colorScheme="teal"
                      size="sm"
                      onClick={() => onProduct(product.title)}
                    >
                      <BiEditAlt />
                    </Button>
                  </Link>
                  <Button
                    colorScheme="red"
                    size="sm"
                    onClick={() => onDelete(product.id)}
                  >
                    <AiOutlineDelete />
                  </Button>
                </Box>
              </Box>
            );
          })}
      </SimpleGrid>
    </Flex>
  );
}
