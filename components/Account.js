import NextLink from "next/link";
import { RiLoginBoxLine } from "react-icons/ri";

import { Button, IconButton } from "@chakra-ui/react";

function Account() {
  return (
    <NextLink href="/login" passHref>
      <Button
        as={IconButton}
        icon={<RiLoginBoxLine fontSize={25} color="black" />}
      />
    </NextLink>
  );
}

export default Account;
