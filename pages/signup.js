import NextLink from "next/link";
import Router from "next/router";
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
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../redux/reducers/auth.slice";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const { username, password, email } = formData;

  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      console.error(message);
    }
    if (isSuccess || user) {
      Router.push("/");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch]);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username,
      password,
      email,
    };
    console.log(userData);
    dispatch(register(userData));
  };

  const isFormError = formData === "";

  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box
        p={8}
        m={10}
        maxWidth="500px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <Box textAlign="center">
          <Heading>Sign Up</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form onSubmit={handleSubmit}>
            <FormControl isRequired isInvalid={isFormError}>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input
                id="username"
                name="username"
                type="text"
                value={username}
                onChange={handleChange}
              />
              {!isFormError ? null : (
                <FormErrorMessage>A username is required.</FormErrorMessage>
              )}
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="******"
                value={password}
                onChange={handleChange}
              />
              {!isFormError ? (
                <FormHelperText>
                  Password must be a mininum of 6 characters.
                </FormHelperText>
              ) : (
                <FormErrorMessage>Password is required.</FormErrorMessage>
              )}
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={handleChange}
              />
              {!isFormError ? null : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
              <Button
                isLoading={isLoading}
                type="submit"
                colorScheme="teal"
                variant="outline"
                width="full"
                mt={4}
              >
                Submit
              </Button>
            </FormControl>
          </form>
          <Box my={4} textAlign="center">
            Already have an account?{" "}
            <NextLink href={"/login"} passHref>
              <Link color="teal.500">Login</Link>
            </NextLink>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default SignUp;
