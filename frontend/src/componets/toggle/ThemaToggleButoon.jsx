import { Button, useColorMode } from "@chakra-ui/react";


export const ThemaToggleButoon = () => {
  const {colorMode,toggleColorMode} = useColorMode();


    return (
        <Button onClick={toggleColorMode}>
            {colorMode=='light'? "Luna":"Sol"}
        </Button>
    )
}
