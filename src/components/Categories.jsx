import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategory } from "../store/categoryReducer";
import { getProducts } from "../store/productsReducer";
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

import { Box, Flex, Center, Image, Button, SimpleGrid } from "@chakra-ui/react";

const Categories = ({ sex, cat }) => {
  const categories = useSelector((state) => {
    return state.category;
  });
  const dispatch = useDispatch();

  React.useEffect(() => {
    const obj = { sex: sex, cat: cat };
    dispatch(getCategory(obj));
  }, [sex, cat]);

  const setOneProduct = (e) => {
    localStorage.setItem("product", e);
  };

  const product = useSelector((state) => {
    return state.product;
  });

  React.useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <SimpleGrid
      minChildWidth="305px"
      spacing={50}
      ml={100}
      mr={100}
      mt={100}
      mb={100}
    >
      {categories &&
        categories.map((category) => {
          return (
            <Box
              key={category.id}
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image
                src={`${category.image}`}
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
                >{`${category.title}`}</Box>
              </Center>
              <Center>
                <Box>{`$ ${category.price}`}</Box>
              </Center>
              <Center>
                <Box d="flex" mt="2" mb="4" alignItems="center">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={
                          i < category.rating.rate ? "teal.500" : "gray.300"
                        }
                      />
                    ))}
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    {category.rating.count} reviews
                  </Box>
                </Box>
              </Center>
              <Box mb={5}>
                <Center>
                  <Link to={`/products/${category.title}`}>
                    <Button
                      colorScheme="teal"
                      onClick={() => setOneProduct(category.title)}
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

export default Categories;
