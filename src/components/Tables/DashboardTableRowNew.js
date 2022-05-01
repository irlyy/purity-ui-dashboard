import {
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { useFetchCoingeckoData } from 'utils/useFetchCoingeckoData';
import { formatDollar } from "utils/numberUtil"

function DashboardTableRowNew(props) {
  const { id, name, logo, symbol, marketCapRank, marketCap} = props;
  const { price, marketCapChange: percentage } = useFetchCoingeckoData(id);
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <img src={logo} />
          <Text
            fontSize="md"
            color={textColor}
            fontWeight="bold"
            minWidth="100%"
          >
            {name}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {symbol}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {marketCap}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {marketCapRank}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {formatDollar(price, 20)}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={percentage > 0 ? "green.400" : "red.400"} fontWeight="bold" pb=".5rem">
          {percentage > 0 ? `+${percentage}%` : `${percentage}%`}
        </Text>
      </Td>
    </Tr>
  );
}

export default DashboardTableRowNew;
