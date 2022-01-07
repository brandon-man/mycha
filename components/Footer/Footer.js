import { Box, Stack, StackDivider } from "@chakra-ui/react";
import Logo from "../Logo";
import SocialMediaLinks from "../SocialMediaLinks";
import Copyright from "./Copyright";
import LinkGrid from "./LinkGrid";
import { SubscribeForm } from "./SubscribeForm";

function Footer() {
  return (
    <Box
    color="black"
    display={{ base: 'none', md: 'block', lg: 'block' }}
    bgGradient='linear(rgb(239, 238, 222) 0%, rgb(208, 240, 192) 25%, rgb(167, 219, 66) 50%)'
    as="footer"
    role="contentinfo"
    width={2000}
    py="12"
    px={{
      base: '4',
      md: '8',
    }}
  >
    <Stack spacing="10" divider={<StackDivider />}>
      <Stack
        direction={{
          base: 'column',
          lg: 'row',
        }}
        spacing={{
          base: '10',
          lg: '28',
        }}
      > 
      <Box flex="1">
        <Logo />
      </Box>
      <Stack
          direction={{
            base: 'column',
            md: 'row',
          }}
          spacing={{
            base: '10',
            md: '20',
          }}
        >
          <LinkGrid 
               spacing={{
                base: '10',
                md: '20',
                lg: '28',
              }}
              flex="1"
          />
          <SubscribeForm 
            width={{
              base: 'full',
              md: 'sm',
            }}
          />
          </Stack>
        </Stack>
      <Stack
        direction={{
          base: 'column-reverse',
          md: 'row',
        }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Copyright />
        <SocialMediaLinks />      
      </Stack>
      </Stack>
      </Box>
  );
}

export default Footer;