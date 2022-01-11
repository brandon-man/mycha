import {
  Input,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  IconButton,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";
import { useRef } from "react";

function SearchBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <Button
        as={IconButton}
        ref={btnRef}
        onClick={onOpen}
        icon={<MdSearch fontSize={25} color="black" />}
        colorScheme="black"
        variant="ghost"
      />
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<MdSearch />} />
              <Input placeholder="Search..." />
            </InputGroup>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SearchBar;
