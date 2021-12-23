import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    VStack,
    StackDivider
  } from '@chakra-ui/react'
  import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons'

const menuItems = [
  {
    main: "Shop",
    first: "All Tea",
    second: "Sencha",
    third: "Genmaicha",
  },
  {
    main: "About",
    first: "Our Story",
    second: "Sustainability",
    third: "Environment",
  },
  {
    main: "Account"
  }
];

function DrawerMenu() {
    return (
      <VStack divider={<StackDivider borderColor='gray.300' />} spacing='24px' align='stretch'>
      {menuItems.map((item, index) => (
        <Menu key={index}>
        {({ isOpen }) => (
      <>
      <MenuButton isActive={isOpen} as={Button} color="black" variant="ghost">
          {item.main}
        {isOpen ? <ChevronDownIcon /> : <ChevronRightIcon />}
      </MenuButton>
      <MenuList>
        <MenuItem>{item.first}</MenuItem>
        <MenuItem onClick={() => alert('Tea')}>{item.second}</MenuItem>
        <MenuItem onClick={() => alert('Tea')}>{item.third}</MenuItem>
      </MenuList>
    </>
  )}
</Menu>))}
</VStack>
    )
}

export default DrawerMenu;
