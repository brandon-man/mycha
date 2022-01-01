import { ButtonGroup, IconButton } from "@chakra-ui/react";
import { GrYoutube, GrInstagram, GrFacebook } from "react-icons/gr";

const SocialMediaLinks = () => {
  return (
    <ButtonGroup variant="ghost" color="gray.600" spacing={['8','0']} gap={10}>
      <IconButton
        as="a"
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        icon={<GrFacebook fontSize="20px" />}
        _hover={{ color: "green", stroke: "green" }}
      />
      <IconButton
        as="a"
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        icon={<GrInstagram fontSize="20px" />}
        _hover={{ color: "green", stroke: "green" }}
      />
      <IconButton
        as="a"
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Youtube"
        icon={<GrYoutube fontSize="20px" />}
        _hover={{ color: "green", stroke: "green" }}
      />
    </ButtonGroup>
  );
};

export default SocialMediaLinks;