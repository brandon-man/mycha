import { Text } from '@chakra-ui/layout'
import * as React from 'react'

const Copyright = (props) => (
  <Text fontSize="sm" {...props}>
    &copy; {new Date().getFullYear()} my cha, Inc. All rights reserved.
  </Text>
)

export default Copyright;