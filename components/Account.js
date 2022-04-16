import NextLink from "next/link";
import Router from "next/router";
import { RiLoginBoxLine, RiAccountCircleFill } from "react-icons/ri";
import { Box, Button, Flex, IconButton } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../redux/reducers/auth.slice";

function Account() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    Router.push("/");
  };

  return (
    <Box>
      {user ? (
        <Button
          as={IconButton}
          icon={
            <RiAccountCircleFill
              onClick={onLogout}
              fontSize={25}
              color="black"
            />
          }
        />
      ) : (
        <NextLink href="/login" passHref>
          <Flex>
            <Button
              as={IconButton}
              icon={<RiLoginBoxLine fontSize={25} color="black" />}
            />
          </Flex>
        </NextLink>
      )}
    </Box>
  );
}

export default Account;
