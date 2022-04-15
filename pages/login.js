import NextLink from "next/link";
import {
  FormControl,
  Input,
  Button,
  Flex,
  Box,
  Heading,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = loginData;

  const handleChange = (e) => {
    setLoginData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
