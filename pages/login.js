import NextLink from "next/link";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Flex,
  Box,
  Heading,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Username: ${username} & Password: ${password}`);
  };

  const isErrorUser = username === "";
  const isErrorPass = password === "";

  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box p={8} width="320px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form onSubmit={handleSubmit}>
            <FormControl isRequired isInvalid={isErrorUser}>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input
                id="username"
                name="username"
                type="text"
                value={username}
                onChange={handleUsernameChange}
              />
              {!isErrorUser ? null : (
                <FormErrorMessage>A username is required.</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isRequired isInvalid={isErrorPass}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="******"
                value={password}
                onChange={handlePasswordChange}
              />
              {!isErrorPass ? (
                <FormHelperText>
                  Password must be a mininum of 6 characters.
                </FormHelperText>
              ) : (
                <FormErrorMessage>Password is required.</FormErrorMessage>
              )}
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

export default SignUp;
