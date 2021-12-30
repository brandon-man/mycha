import {
    Box,
    Heading,
    Text,
    Button,
    Stack
} from '@chakra-ui/react';

function LandingPage() {
    return (
        <Box 
            px={[20, 40, 20, 530]}
            py={[4, 6, 55]}
            mb={[0, 0, 8]}
        >
            <Stack
                px={[0, 40, 80, 80]}
                direction='column' 
                spacing={[5, 5, 30]} 
                textAlign='center'
            >
            <Heading fontSize={['lg', 'xl', '4xl']} color="black">my cha</Heading>
            <Text fontSize={['sm', 'md', 'lg']} color="black">The best green tea</Text>
            <Button fontSize={['sm', 'md', 'lg']} color="black" bgGradient='linear(to-r, rgb(208, 240, 192), rgb(253, 248, 220), rgb(167, 219, 66))'>Shop Now</Button>
            </Stack>
        </Box>
    )
}

export default LandingPage