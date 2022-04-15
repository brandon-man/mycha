import {
  Flex,
  Box,
  Stack,
  ButtonGroup,
  Grid,
  useMediaQuery,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import Logo from "../Logo";
import HamDrawer from "../HamDrawer";
import NavItems from "./NavItems";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import SearchBar from "../Search/SearchBar";
import Account from "../Account";
import { useEffect, useState } from "react";

const NavBarContainer = ({ children }) => {
  const [navBackground, setNavBackground] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 770px)");

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setNavBackground(true);
      } else {
        setNavBackground(false);
      }
    };
    window.addEventListener("scroll", changeBackground);
  }, []);

  const StickNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    transition: height 0.5s, line-height 0.5s;
  `;
  return (
    <Box
      bgGradient="url(/images/4.jpg)"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center"
      h={["300", "500", "850"]}
    >
      <StickNav
        backgroundColor={navBackground ? "white" : "transparent"}
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
          direction="row"
          spacing={["0", "0", "200px", "550px"]}
          gap={["4", "0", "0", "4"]}
          textAlign="center"
        >
          <Logo display={{ base: "none", md: "block", lg: "block" }} />
          <Grid
            templateColumns={[
              "repeat(3, 1fr)",
              "repeat(3, 1fr)",
              "repeat(2, 1fr)",
            ]}
            gap={["0", "20", "0", "80"]}
          >
            <Flex align="center" justify="space-between">
              {isMobile ? <HamDrawer /> : <NavItems />}
            </Flex>
            <Logo display={{ base: "block", md: "none", lg: "none" }} />
            <Flex align="center" justify="space-between">
              <ButtonGroup
                variant="ghost"
                color="gray.600"
                spacing={["-5", "4", "2"]}
                gap={["0", "2", "1"]}
              >
                <SearchBar />
                <ShoppingCart />
                <Account />
              </ButtonGroup>
            </Flex>
          </Grid>
        </Stack>
      </StickNav>
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        px={[0, 4, 4]}
        mt={[4, 8, 8]}
      >
        {children}
      </Flex>
    </Box>
  );
};

export default NavBarContainer;
