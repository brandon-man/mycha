import {
  Text,
  Box,
  Flex,
  UnorderedList,
  Image,
  Stack,
  Divider,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SearchInput from "./SearchInput";

const SearchBar = () => {
  const [searchTerm, updateSearchTerm] = useState("");
  const [searchResults, updateSearchResults] = useState([]);
  const [filteredResults, updateFilteredResults] = useState([]);
  const { products } = useSelector((state) => state.products);

  // add product to dependency otherwise effect won't get updated value
  useEffect(() => {
    updateSearchResults(products);
  }, [products]);

  const handleChange = (e) => {
    updateSearchTerm(e.target.value);
    updateFilteredResults(
      searchResults.filter((result) =>
        result.name.match(new RegExp(e.target.value, "gi"))
      )
    );
  };

  const SearchResults = () => {
    const Message = ({ text }) => (
      <Box>
        <Text>{text}</Text>
        <Divider />
      </Box>
    );

    if (!filteredResults.length) {
      return <Message text="We couldn't find anything for your search term." />;
    }

    if (!searchResults.length) {
      return <Message text="Loading search results" />;
    }

    if (!searchTerm) {
      return <Message text="Try to search for something..." />;
    }

    return (
      <UnorderedList>
        {filteredResults.map((result) => (
          <Stack key={result._id}>
            <Flex direction="row" align="center" m={2} gap={2}>
              <Image boxSize="50px" src={result.imageUrl} />
              <Text>{result.name}</Text>
            </Flex>
          </Stack>
        ))}
      </UnorderedList>
    );
  };

  return (
    <Box>
      <SearchInput searchTerm={searchTerm} handleChange={handleChange}>
        <SearchResults />
      </SearchInput>
    </Box>
  );
};

export default SearchBar;
