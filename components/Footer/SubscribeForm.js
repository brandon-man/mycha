import {
  Button,
  chakra,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import FooterHeading from "./FooterHeading";

export const SubscribeForm = (props) => {
  return (
    <chakra.form {...props} onSubmit={(e) => e.preventDefault()}>
      <Stack spacing="4">
        <FooterHeading>Subscribe to our newsletter</FooterHeading>
        <Text>Get notified when we add new products.</Text>
        <Stack
          spacing="4"
          direction={{
            base: "column",
            md: "row",
          }}
        >
          <Input
            color="black"
            bg={useColorModeValue("white", "inherit")}
            placeholder="Enter your email"
            type="email"
            required
            focusBorderColor={useColorModeValue("green.500", "green.300")}
            _placeholder={{
              opacity: 1,
              color: useColorModeValue("gray.500", "whiteAlpha.700"),
            }}
          />
          <Button
            type="submit"
            colorScheme="green"
            flexShrink={0}
            width={{
              base: "full",
              md: "auto",
            }}
          >
            Subscribe
          </Button>
        </Stack>
      </Stack>
    </chakra.form>
  );
};
