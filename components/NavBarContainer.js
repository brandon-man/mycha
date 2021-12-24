import { Flex, Box, Stack, Center, ButtonGroup, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Logo from './Logo'
import HamDrawer from "./HamDrawer";
import NavItems from "./NavItems";
import ShoppingCart from "./ShoppingCart";
import SearchBar from "./Searchbar";
import Account from "./Account";

const NavBarContainer = ({ children, ...props }) => {
  const StickNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: height 0.5s, line-height 0.5s;
  `;
  return (
    <Box bgGradient="url(/images/4.jpg)" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundPosition="center" h={['300','500','850']}>
      <StickNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-end"
        as="nav"
        px={[3, 0, 10]}
        py={[4, 6, 8]}
        mb={[0, 0, 8]}
        ms="auto"
      >
        <Stack 
        direction='row' 
        spacing={['20px','130px', '170px', '550px']} 
        gap={['4','0','4']}
        textAlign='center'
        >
        <Logo display={{ base: 'none', md: 'block', lg: 'block' }} /> 
        <Box>
          <HamDrawer />  
          <NavItems />
        </Box>
        <Logo display={{ base: 'block', md: 'none', lg: 'none' }} /> 
          <Flex 
            top="1rem"
            right="1rem"
            align="center"
          >
          <ButtonGroup variant="ghost" color="gray.600" spacing={['-5','4','2']} gap={['0','2','1']} >
            <SearchBar />
            <Account  />
            <ShoppingCart />
            </ButtonGroup>
            </Flex>
          </Stack>
      </StickNav>
      <Flex
              as="nav"
              align="center"
              justify="space-between"
              wrap="wrap"
              w="100%"
              mb={8}
              p={8}
              bg={["primary.500", "primary.500", "transparent", "transparent"]}
              color={["white", "white", "primary.700", "primary.700"]}
              {...props}
      >
        {children}
      </Flex>
    </Box>
  );
};

export default NavBarContainer;