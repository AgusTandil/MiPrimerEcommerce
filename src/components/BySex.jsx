import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSex } from "../store/sexReducer";

import { Box, Flex, Center, Image, Button, SimpleGrid } from "@chakra-ui/react";

const BySex = ({ sex }) => {
  const categories = useSelector((state) => {
    return state.sex;
  });
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getSex(sex));
  }, [sex]);

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
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image src={`${category.image}`} boxSize="350px" />{" "}
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
                <Box d="flex" mt="2" alignItems="center">
                  <Box as="span" mb="5" color="gray.600" fontSize="sm">
                    {category.rating
                      ? `${category.rating.count} ${category.rating.rate} star reviews`
                      : ""}
                  </Box>
                </Box>
              </Center>
              <Box mb={5}>
                <Center>
                  {/* <Link to={`/categorys/${category.title}`}> */}
                  <Button
                    colorScheme="teal"
                    //   onClick={() => setOneProduct(product.title)}
                  >
                    Ver más
                  </Button>
                  {/* </Link> */}
                </Center>
              </Box>
            </Box>
          );
        })}
    </SimpleGrid>
  );
};

export default BySex;
