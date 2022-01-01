import { Divider, Stack, Flex } from "@chakra-ui/react";
import SocialMediaLinks from "../SocialMediaLinks";

function Footer() {
  return (
    <Stack
    as="main"
    justifyContent="center"
    alignItems="flex-start"
    m="0 auto auto auto"
    h={[60, 50, 50, 100]}
  >
    <Flex
      flexDirection="column"
      justify="flex-start"
      align="center"
    >
        <Divider m="0 auto 4rem auto" borderColor="gray.500" />        
          <SocialMediaLinks />      
     </Flex>
      </Stack>
  );
}

export default Footer;