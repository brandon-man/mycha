import {
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const Shop = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen}>
      <MenuButton variant="ghost" onMouseEnter={onOpen} onMouseLeave={onClose}>
        Shop {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </MenuButton>
      <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
        <MenuItem>Sencha</MenuItem>
        <MenuItem>Hojicha</MenuItem>
        <MenuItem>Matcha</MenuItem>
        <MenuItem>Genmaicha</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Shop;
