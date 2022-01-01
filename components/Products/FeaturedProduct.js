import { 
    Heading,
    Stack,
    Flex,
    Image, 
    Grid,
    Button
} from "@chakra-ui/react"
import data from './_data'
import PriceTag from "./PriceTag";

function FeaturedProducts(props) {
  const { salePrice } = props
  const { products } = data;

    return (
        <Stack
        as="main"
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto auto auto"
        h={[700, 750, 1050, 1350]}
      >
        <Flex
          flexDirection="column"
          justify="flex-start"
          align="center"
        >
            <Heading color="black" p={[4, 4, 8]}>Featured Products</Heading>
              <Grid templateColumns={['repeat(2, 1fr)','repeat(4, 1fr)']} gap={[2, 3, 8]}>
              {products.map((product) => (
                <Stack key={product.id} product={product}>
              <Image objectFit="cover" src={product.image} />
                <Heading  
                  fontSize={{ base: "xl", md: "2xl" }}
                  w="full"
                  mb={2}
                  p={2}
                  color="black">
                    {product.name}
                  </Heading>
                  <PriceTag price={product.price} salePrice={salePrice} currency="USD" />
                <Button colorScheme="green" isFullWidth>
                  Add to cart
                </Button>
                </Stack>))}
              </Grid>
           </Flex>
           </Stack>
        
    )
}

export default FeaturedProducts;