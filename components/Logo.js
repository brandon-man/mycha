import React from "react"
import { Box, Text } from "@chakra-ui/react"

function Logo(props) {
  return (
    <Box {...props}>
      <Text fontSize={["xl","4xl"]} fontWeight="bold">
        my cha
      </Text>
    </Box>
  )
}

export default Logo;