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
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const SignUp = () => {
  // const [input, setInput] = useState({});

  // const handleInputChange = (e) => {
  //   setInput((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  // };
  const dispatch = useDispatch();

  const { isFetching, isSuccess, isError, errorMessage } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (isSuccess) {
      dispatch(clearState());
      history.push("/");
    }
    if (isError) {
      console.error(errorMessage);
      dispatch(clearState());
    }
  }, [isSuccess, isError]);

  // const isError = input === "";

  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box
        p={8}
        maxWidth="500px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <Box textAlign="center">
          <Heading>Sign Up</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form>
            <FormControl isRequired isInvalid={isError}>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input
                id="username"
                name="username"
                type="text"
                value={input.username || ""}
                onChange={handleInputChange}
              />
              {!isError ? null : (
                <FormErrorMessage>A username is required.</FormErrorMessage>
              )}
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="******"
                value={input.password || ""}
                onChange={handleInputChange}
              />
              {!isError ? (
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
                value={input.email || ""}
                onChange={handleInputChange}
              />
              {!isError ? null : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
              <Button
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
