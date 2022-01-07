import { 
  Flex, 
  Box, 
  Stack, 
  ButtonGroup,
  Grid
 } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Logo from '../Logo'
import HamDrawer from "../HamDrawer";
import NavItems from "./NavItems";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import SearchBar from "../SearchBar";
import Account from "../Account";
import { useEffect, useState } from "react";


const NavBarContainer = ({ children, ...props }) => {

  const [navBackground, setNavBackground] = useState(false)
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavBackground(true)
    } else {
      setNavBackground(false)
    }
  }

  // Only fires when the code is running on the browser and avoids errors when doing tests or static site generation with next.js
  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
  });
    
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
        backgroundColor={navBackground ? 'white' : 'transparent'}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-end"
        as="nav"
        px={[3, 0, 10]}
        py={[4, 6, 4]}
        mb={[0, 0, 8]}
        ms="auto"
      >
        <Stack 
        direction='row' 
        spacing={['0','0','200px','550px']} 
        gap={['4','0','0','4']}
        textAlign='center'
        >
        <Logo display={{ base: 'none', md: 'block', lg: 'block' }} /> 
        <Grid templateColumns={['repeat(3, 1fr)','repeat(3, 1fr)','repeat(2, 1fr)']} gap={['0','20','0','80']}>
          <Flex align="center" justify="space-between">
          <HamDrawer />  
          <NavItems />
          </Flex>
          <Logo display={{ base: 'block', md: 'none', lg: 'none' }} /> 
          <Flex align="center" justify="space-between">
          <ButtonGroup variant="ghost" color="gray.600" spacing={['-5','4','2']} gap={['0','2','1']} >
            <SearchBar />
            <Account  />
            <ShoppingCart />
            </ButtonGroup>
            </Flex>
        </Grid>
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