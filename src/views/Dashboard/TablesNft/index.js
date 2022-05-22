// Chakra imports
import React from "react";
import Minter from "./components/Minter";
import MinterStepOverview from "./components/MinterStepOverview";
import {
  Flex,
  Grid,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { nftMintSteps } from "variables/general";

function TablesNft() {
  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
      <Grid
        templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "2fr 1fr" }}
        templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
        gap='24px'>
        <Minter></Minter>
        <MinterStepOverview
          title={"How to Join Us"}
          amount={5}
          data={nftMintSteps}
        />
      </Grid>
    </Flex>
  );
}

export default TablesNft;
