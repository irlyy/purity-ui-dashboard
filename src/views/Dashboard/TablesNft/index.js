// Chakra imports
import { Flex } from "@chakra-ui/react";
import React from "react";
import Minter from "./components/Minter";

function TablesNft() {
  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
      <div className="App">
        <Minter></Minter>
      </div>
    </Flex>
  );
}

export default TablesNft;
