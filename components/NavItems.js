import NextLink from "next/link";
import { Box, Flex, Text, Button } from "@chakra-ui/react";

const MenuItem = ({ children, isLast, to = '/' }) => {
    return (
      <Text
        mb={{ base: isLast ? 0 : 8, sm: 0 }}
        mr={{ base: 0, sm: isLast ? 0 : 8 }}
        display="block"
      >
        <NextLink href={to} passHref>{children}</NextLink>
      </Text>
    );
  };

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
            pt={[4, 4, 0, 3]}
            >       
<MenuItem to="/">
  <Button variant="ghost">
    Shop
    </Button>
  </MenuItem>
  <MenuItem to="/">
  <Button variant="ghost">
    About
    </Button>
  </MenuItem>
  <MenuItem to="/">
  <Button variant="ghost">
    Contact
    </Button>
  </MenuItem>
</Flex>
</Box>
    )
}

export default NavItems;