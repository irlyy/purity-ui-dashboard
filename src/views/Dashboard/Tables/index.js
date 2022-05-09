// Chakra imports
import { Flex } from "@chakra-ui/react";
import React from "react";
import CoinsMarkets from "./components/CoinsMarkets";
import { tablesTableData, dashboardTableData } from "variables/general";

function Tables() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <CoinsMarkets
        title={"Authors Table"}
        captions={["#", "Coin", "Price", "24H", "7d", "14d", "30d", "24h volume", "Mkt Cap"]}
        data={tablesTableData}
      />
    </Flex>
  );
}

export default Tables;
