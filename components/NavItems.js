import { Box, Flex, useDisclosure, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'

const NavItems = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
    return (
            <Box
            display={{ base: 'none', md: 'block', lg: 'block' }}
            flexBasis={{ base: '100%', md: 'auto', lg: 'auto' }}
          >
            <Flex  
            align="center"     
            justify='center'
            direction='row'
            px={3}
            pt={[4, 4, 0, 3]}
            gap={18}
            > 
            <Menu isOpen={isOpen}>  
  <MenuButton 
    variant="ghost"
    onMouseEnter={onOpen}
    onMouseLeave={onClose}
  >
    Shop {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
    </MenuButton>
    <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                <MenuItem>Sencha</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
                <MenuItem>Menu Item 3</MenuItem>
            </MenuList>
            
    </Menu>   
    <Menu isOpen={isOpen}>  
    <MenuButton 
    variant="ghost"
    onMouseEnter={onOpen}
    onMouseLeave={onClose}
  >
    About {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
    </MenuButton>
    <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                <MenuItem>Menu Item 1</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
                <MenuItem>Menu Item 3</MenuItem>
            </MenuList> 
            </Menu>   
            <Menu isOpen={isOpen}>  
    <MenuButton 
    variant="ghost"
    onMouseEnter={onOpen}
    onMouseLeave={onClose}
  >
    Contact {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
    </MenuButton>
    <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                <MenuItem>Menu Item 1</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
                <MenuItem>Menu Item 3</MenuItem>
            </MenuList> 
            </Menu>   
            <Menu isOpen={isOpen}>  
    <MenuButton 
    variant="ghost"
    onMouseEnter={onOpen}
    onMouseLeave={onClose}
  >
    Materials {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
    </MenuButton>
    <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                <MenuItem>Menu Item 1</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
                <MenuItem>Menu Item 3</MenuItem>
            </MenuList> 
            </Menu>   
</Flex>
</Box>
    )
}

export default NavItems;