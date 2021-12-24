import NextLink from 'next/link'
import { RiAccountCircleLine } from 'react-icons/ri';

import { Button, IconButton } from '@chakra-ui/react'

function Account() {
    return (
        <NextLink href="/" passHref>
            <Button as={IconButton}  icon={<RiAccountCircleLine fontSize={25} />} />
        </NextLink>
    )
}

export default Account