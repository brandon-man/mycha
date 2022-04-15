import { Heading, Stack, Flex, Image, Grid, Button } from "@chakra-ui/react";
import PriceTag from "./PriceTag";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/reducers/cart.slice";
import { useEffect } from "react";
import { productsFetch } from "../../redux/reducers/products.slice";

const FeaturedProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsFetch());
  }, []);

  const { products } = useSelector((state) => state.products);

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
          {products.map((product) => (
            <Stack key={product._id}>
              <Image objectFit="cover" src={product.imageUrl} />
              <Heading
                fontSize={{ base: "xl", md: "2xl" }}
                w="full"
                mb={2}
                p={2}
                color="black"
              >
                {product.name}
              </Heading>
              <PriceTag price={product.price} currency="USD" />
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
