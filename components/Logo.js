import React from "react"
import { Box, Heading, Text } from "@chakra-ui/react"

function Logo(props) {
  return (
    <Box {...props}>
      <Heading fontSize={["md", "2xl", "4xl"]} fontWeight="bold">
        my cha
      </Heading>
      <Text fontSize={["xs", "md", "lg"]}>マイ茶</Text>
    </Box>
  )
}

export default Logo;