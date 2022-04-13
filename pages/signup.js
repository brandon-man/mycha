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
} from "@chakra-ui/react";
import { useState } from "react";

const SignUp = () => {
  const [input, setInput] = useState({});

  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const isError = input === "";

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
              <FormLabel htmlFor="name">First Name</FormLabel>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name"
                value={input.firstName || ""}
                onChange={handleInputChange}
              />
              {!isError ? null : (
                <FormErrorMessage>A name is required.</FormErrorMessage>
              )}
              <FormLabel htmlFor="name">Last Name</FormLabel>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={input.lastName || ""}
                onChange={handleInputChange}
              />
              {!isError ? null : (
                <FormErrorMessage>A name is required.</FormErrorMessage>
              )}
              <FormLabel htmlFor="address">Address</FormLabel>
              <Input
                id="address"
                name="address"
                type="text"
                placeholder="Address"
                value={input.address || ""}
                onChange={handleInputChange}
              />
              {!isError ? null : (
                <FormErrorMessage>An address is required.</FormErrorMessage>
              )}
              <FormLabel htmlFor="phone">Phone Number</FormLabel>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="XXX-XXX-XXXX"
                value={input.phone}
                onChange={handleInputChange}
              />
              {!isError ? null : (
                <FormErrorMessage>Number is required.</FormErrorMessage>
              )}
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
        </Box>
      </Box>
    </Flex>
  );
};

export default SignUp;
