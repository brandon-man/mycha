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
  DrawerFooter,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon, DeleteIcon } from "@chakra-ui/icons";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../redux/reducers/cart.slice";
import PriceTag from "../Products/PriceTag";

const ShoppingCart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <Box>
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
              <Box>
                {cart.map((item) => (
                  <Box key={item._id}>
                    <Image objectFit="cover" src={item.imageUrl} />
                    <PriceTag price={item.price} currency="USD" />
                    <Text>{item.quantity}</Text>
                    <ButtonGroup isAttached variant="outline">
                      <IconButton
                        onClick={() => dispatch(decrementQuantity(item._id))}
                        aria-label="Remove from cart"
                        icon={<MinusIcon />}
                      />
                      <IconButton
                        onClick={() => dispatch(incrementQuantity(item._id))}
                        aria-label="Add to cart"
                        icon={<AddIcon />}
                      />
                      <IconButton
                        onClick={() => dispatch(removeFromCart(item._id))}
                        aria-label="Empty cart"
                        icon={<DeleteIcon />}
                      />
                    </ButtonGroup>
                    <Text>${item.quantity * item.price}</Text>
                  </Box>
                ))}
              </Box>
            )}
          </DrawerBody>
          <DrawerFooter>
            <Heading>Total: ${getTotalPrice()}</Heading>
            <Button
              fontSize={["sm", "md", "lg"]}
              color="black"
              bgGradient="linear(to-r, rgb(208, 240, 192), rgb(253, 248, 220), rgb(167, 219, 66))"
            >
              Checkout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default ShoppingCart;
