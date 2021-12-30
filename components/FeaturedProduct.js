import { 
    Heading,
    Stack,
    Flex,
    Image, 
    Grid,
    Text,
    HStack
} from "@chakra-ui/react"

const products = [
  {
    image: "/images/sencha.jpg",
    name: "sencha",
    price: "$20",
  },
  {
    image: "/images/hoji.jpg",
    name: "hojicha",
    price: "$25",
  },
  {
    image: "/images/matcha.jpg",
    name: "matcha",
    price: "$30",
  },
  {
    image: "/images/genmai.jpg",
    name: "genmaicha",
    price: "$23",
  },
];

function FeaturedProducts() {
    return (
        <Stack
        as="main"
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto auto auto"
        h={[700, 750, 1050, 1250]}
      >
        <Flex
          flexDirection="column"
          justify="flex-start"
          align="center"
        >
            <Heading color="black" p={[4, 4, 8]}>Featured Products</Heading>
              <Grid templateColumns={['repeat(2, 1fr)','repeat(4, 1fr)']}gap={[2, 3, 8]}>
              {products.map((item, index) => (
                <Stack key={index}>
              <Image objectFit="cover" src={item.image} />
                <Heading  
                  fontSize={{ base: "xl", md: "2xl" }}
                  textAlign="center"
                  w="full"
                  mb={2}
                  p={2}
                  color="black">
                    {item.name}
                  </Heading>
                <Text textAlign="center" color="black">{item.price}</Text>
                </Stack>))}
              </Grid>
           </Flex>
           </Stack>
        
    )
}

export default FeaturedProducts;