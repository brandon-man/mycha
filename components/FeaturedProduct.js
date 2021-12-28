import { 
    Heading,
    Stack,
    Flex,
    Image 
} from "@chakra-ui/react"

function FeaturedProducts() {
    return (
        <Stack
        as="main"
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto auto auto"
        maxWidth="700px"
        h={["200", "700", "800"]}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
          maxWidth="700px"
        >
            <Heading color="black">Featured Products</Heading>
           </Flex>
           </Stack>
        
    )
}

export default FeaturedProducts;