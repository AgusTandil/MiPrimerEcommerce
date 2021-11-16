import * as React from "react";
import { Link } from "react-router-dom";
import { Box, Button, SimpleGrid, Image, Center } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../store/productsReducer";
import { StarIcon } from "@chakra-ui/icons";

const List = () => {
  const products = useSelector((state) => {
    return state.products;
  });

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getProducts());
  }, []);

  const setOneProduct = (e) => {
    localStorage.setItem("product", e);
  };

  return (
    <SimpleGrid
      minChildWidth="305px"
      spacing={50}
      ml={100}
      mr={100}
      mt={100}
      mb={100}
    >
      {products &&
        products.map((product) => {
          return (
            <Box
              key={product.id}
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
            >
              <Image
                src={`${product.image}`}
                boxSize="350px"
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
                <Box d="flex" mt="2" mb="4" alignItems="center">
                  { product.rating ?
                  Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={
                          i < product.rating.rate ? "teal.500" : "gray.300"
                        }
                      />
                    )): "Sin reviews"}
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    {product.rating ? product.rating.count + " reviews" : ""} 
                  </Box>
                </Box>
              </Center>
              <Box mb={5}>
                <Center>
                  <Link to={`/products/${product.title}`}>
                    <Button
                      colorScheme="teal"
                      onClick={() => setOneProduct(product.title)}
                    >
                      Ver más
                    </Button>
                  </Link>
                </Center>
              </Box>
            </Box>
          );
        })}
    </SimpleGrid>
  );
};

export default List;
