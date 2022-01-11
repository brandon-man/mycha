import { CgShoppingCart } from "react-icons/cg";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  IconButton,
  Image,
  Text,
  Box,
  Heading,
  ButtonGroup,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon, DeleteIcon } from '@chakra-ui/icons';
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../../redux/cart.slice';
import PriceTag from "../Products/PriceTag";

const ShoppingCart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  // Extracting cart state from redux store
  const cart = useSelector((state) => state.cart);
  // Reference to the dispatch function from redux store
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <>
      <Button
        as={IconButton}
        ref={btnRef}
        onClick={onOpen}
        icon={<CgShoppingCart fontSize={25} color="black" />}
        colorScheme="black"
        variant="ghost"
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Cart</DrawerHeader>
          <DrawerBody>
            {cart.length === 0 ? (
              <Text>Your cart is empty</Text>
            ) : (
              <>
                {cart.map((item) => (
                  <Box>
                    <Image objectFit="cover" src={item.image} />
                    <PriceTag
                      price={item.price}
                      currency="USD"
                    />
                    <Text>{item.quantity}</Text>
                    <ButtonGroup isAttached variant='outline'>
                      <IconButton 
                      onClick={() => dispatch(incrementQuantity(item.id))}
                      aria-label='Add to cart' 
                      icon={<AddIcon />} 
                      />
                      <IconButton 
                      onClick={() => dispatch(decrementQuantity(item.id))}
                      aria-label='Remove from cart' 
                      icon={<MinusIcon />} 
                      />
                      <IconButton 
                      onClick={() => dispatch(removeFromCart(item.id))}
                      aria-label='Empty cart' 
                      icon={<DeleteIcon />} 
                      />
                    </ButtonGroup>
                    <Text>${item.quantity * item.price}</Text>
                  </Box>
                ))}
                <Heading>Total: ${getTotalPrice()}</Heading>
              </>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ShoppingCart;
