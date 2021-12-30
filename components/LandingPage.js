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
            px={[20, 40, 0, 530]}
            py={[4, 6, 55]}
            mb={[0, 0, 8]}
        >
            <Stack
            px={[0, 40, 80]}
                direction='column' 
                spacing={['10px','20px', '30px']} 
                textAlign='center'
            >
            <Heading color="black">my cha</Heading>
        <Text color="black">The best green tea</Text>
        <Button color="black" bg="teal">Shop Now</Button>
            </Stack>
        </Box>
    )
}

export default LandingPage