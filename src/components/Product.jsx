import * as React from "react";
import useCart from "../hooks/useCart";
import axios from "axios";
import BounceLoader from "react-spinners/BounceLoader";
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Image,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export function Product() {
  //trae los objetos del local storage
  const nameProduct = localStorage.getItem("product");
  const params = useCart();
  const { addProductToCart } = params;
  const [product, setProduct] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  React.useEffect(async () => {
    setLoading(true);
    await axios
      .get(`/api/products/${nameProduct}`)
      .then((res) => {
        console.log("RES DATA prod", res.data);
        setProduct(res.data);
      })
      .catch((e) => console.log(e));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Box>
      {loading ? (
        <Flex mt="10%" alignSelf="center" justifyContent="center">
          <BounceLoader size={100} color={"#319795"} loading={loading} />
        </Flex>
      ) : (
        <Flex
          mx={{ base: "25", md: "100", xl: "300" }}
          mt={{ base: "10", md: "30", xl: "50" }}
          align="center"
          justify={{ base: "center", md: "space-around", xl: "space-between" }}
          direction={{ base: "column-reverse", md: "row" }}
          pl={{ base: "0", md: "20", xl: "100" }}
          mb={16}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="md"
        >
          <Stack
            spacing={4}
            w={{ base: "80%", md: "40%" }}
            align={["center", "center", "flex-start", "flex-start"]}
            pt={{ base: "0", md: "0", xl: "0" }}
          >
            <Heading
              as="h1"
              size="lg"
              fontWeight="bold"
              color="primary.800"
              textAlign={["center", "center", "left", "left"]}
            >
              {product.title}
            </Heading>
            <Heading
              as="h3"
              size="sm"
              color="primary.800"
              opacity="0.8"
              fontWeight="normal"
              lineHeight={1.5}
              textAlign={["center", "center", "left", "left"]}
            >
              {product.description}
            </Heading>
            <Heading
              as="h4"
              size="md"
              color="primary.800"
              opacity="0.8"
              fontWeight="normal"
              lineHeight={1.5}
              textAlign={["center", "center", "left", "left"]}
            >
             $ {product.price}
            </Heading>
            <Button
              colorScheme="primary"
              borderRadius="8px"
              py="4"
              px="4"
              mb={{ base: "10", md: "15", xl: "20" }}
              lineHeight="1"
              size="md"
              bg="teal.500"
              color="gray.100"
              _hover={{ bg: "teal.600" }}
              onClick={() => addProductToCart(product)}
            >
              Agregar al Carrito
            </Button>
            <Box d="flex" mt="2" mb="4" alignItems="center" pb="10">
              {product.rating
                ? Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={
                          i < product.rating.rate ? "teal.500" : "gray.300"
                        }
                      />
                    ))
                : ""}

              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {product.rating ? product.rating.count + " reviews" : ""} 
              </Box>
            </Box>
          </Stack>
          <Box
            w={{ base: "80%", sm: "60%", md: "50%" }}
            mb={{ base: 12, md: 0 }}
          ></Box>
          <Image
            src={product.image}
            h={{ base: "250", md: "400", xl: "500" }}
            w={{ base: "150", md: "250", xl: "300" }}
            rounded="1rem"
            shadow="2xl"
          />
        </Flex>
      )}
    </Box>
  );
}
