import { Heading, Stack, Flex, Image, Grid, Button } from "@chakra-ui/react";
import PriceTag from "./PriceTag";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/reducers/cart.slice";
import { useEffect, useState } from "react";
import axios from "axios";
import { useGetAllProductsQuery } from "../../redux/api/products.api";

const FeaturedProducts = () => {
  
  const dispatch = useDispatch();

  // const { data, error, isLoading } = useGetAllProductsQuery()

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("http://localhost:5000/api/products")
    .then(response => {
      setData(response.data)
    })
    .catch(error => {
      console.error("Error fetching data", error);
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    })
  }, [])

  if (loading) return "Loading...";
  if (error) return "Error...";

  return (
    <Stack
      as="main"
      justifyContent="center"
      alignItems="flex-start"
      m="0 auto auto auto"
      h={[800, 750, 1050, 1350]}
    >
      <Flex flexDirection="column" justify="flex-start" align="center">
        <Heading color="black" p={[4, 4, 8]}>
          Featured Products
        </Heading>
        <Grid
          templateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)"]}
          gap={[2, 3, 8]}
        >
          {data.map((product) => (
            <Stack key={product.id} product={product}>
              <Image objectFit="cover" src={product.image} />
              <Heading
                fontSize={{ base: "xl", md: "2xl" }}
                w="full"
                mb={2}
                p={2}
                color="black"
              >
                {product.name}
              </Heading>
              <PriceTag
                price={product.price}
                currency="USD"
              />
              <Button
                onClick={() => dispatch(addToCart(product))}
                colorScheme="green"
                isFullWidth
              >
                Add to cart
              </Button>
            </Stack>
          ))}
        </Grid>
      </Flex>
    </Stack>
  );
};

export default FeaturedProducts;