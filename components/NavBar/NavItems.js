import { Box, Flex} from "@chakra-ui/react";
import About from "./NavItemAbout";
import Contact from "./NavItemContact";
import Material from "./NavItemMaterials";
import Shop from "./NavItemShop";

const NavItems = () => {
    return (
            <Box
            display={{ base: 'none', md: 'block', lg: 'block' }}
            flexBasis={{ base: '100%', md: 'auto', lg: 'auto' }}
          >
            <Flex  
            align="center"     
            justify='center'
            direction='row'
            px={3}
            pt={[4, 4, 4, 3]}
            gap={['0','0','15','28']}
            > 
            <Shop />
            <About />
            <Contact />
            <Material />
</Flex>
</Box>
    )
}

export default NavItems;