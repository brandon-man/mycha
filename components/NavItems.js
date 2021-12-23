import NextLink from "next/link";
import { Box, Flex, Text } from "@chakra-ui/react";

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
        <Box>
            <Box
            display={{ base: 'none', md: 'block' }}
            flexBasis={{ base: '100%', md: 'auto' }}
            
          >
            <Flex  
            align="center"     
            justify='center'
            direction='row'
            pt={[4, 4, 0, 0]}
            >       
<MenuItem to="/">
    Shop
  </MenuItem>
  <MenuItem to="/">
    About
  </MenuItem>
  <MenuItem to="/">
    Account
  </MenuItem>
</Flex>
</Box>
</Box>
    )
}

export default NavItems;