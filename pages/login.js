import NextLink from "next/link";
import { useRouter } from "next/router";
import {
  FormControl,
  Input,
  Button,
  Flex,
  Box,
  Heading,
  Link,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../redux/reducers/auth.slice";

const Login = () => {
  const router = useRouter();

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = loginData;

  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      console.error(message);
    }
    if (isSuccess || user) {
      router.push("/");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch]);

  const handleChange = (e) => {
    setLoginData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username,
      password,
    };
    dispatch(login(userData));
  };

  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box
        p={8}
        m={10}
        width="320px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form onSubmit={handleSubmit}>
            <FormControl isRequired p={2}>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired p={2}>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handleChange}
              />
              <Button
                isLoading={isLoading}
                type="submit"
                colorScheme="teal"
                variant="outline"
                width="full"
                mt={4}
              >
                Sign In
              </Button>
            </FormControl>
          </form>
          <Box my={4} textAlign="center">
            New to us?{" "}
            <NextLink href={"/signup"} passHref>
              <Link color="teal.500">Sign Up</Link>
            </NextLink>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Login;
