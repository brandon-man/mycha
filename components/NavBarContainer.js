import { Flex, Box, Stack, Center, ButtonGroup, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Logo from './Logo'
import HamDrawer from "./HamDrawer";
import NavItems from "./NavItems";
import ShoppingCart from "./ShoppingCart";
import SearchBar from "./Searchbar";

const NavBarContainer = ({ children, ...props }) => {
  const StickNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: height 0.5s, line-height 0.5s;
  `;
  return (
    <Box>
      <StickNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-end"
        as="nav"
        px={[3, 4, 10]}
        py={[4, 8]}
        mb={[0, 0, 8]}
        ms="auto"
      >
        <Stack 
        direction='row' 
        spacing={['100px','600px']} 
        textAlign='center'
        >
        <Box>
          <HamDrawer />   
          <NavItems />
        </Box>
        <Box>
        <Center flex="1">
          <Logo /> 
          </Center>
          </Box>
          <ButtonGroup variant="ghost" color="gray.600" spacing={2} gap={1}>
            <SearchBar />
            <ShoppingCart />
            </ButtonGroup>
          </Stack>
      </StickNav>
            <Image 
              src="/images/1.jpg"
              height="100%"
              width="100%"
              alt="Tea" 
            />
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