import { Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const LinkHover = ({ children, to, currentPath }) => {
  const isActive = currentPath === to;

  return (
    <Link
      as={RouterLink}
      to={to}
      px={2}
      py={1}
      borderBottom={isActive ? "3px solid " : "none"}
      borderBottomColor={"secondary.500"}
      _hover={{
        borderBottom: "3px solid ",
        borderBottomColor:"secondary.500",
      
      }}
    >
      {children}
    </Link>
  );
};
