import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
  StatHelpText,
} from "@chakra-ui/react";
import React from "react";
import { formatDollar, formatNum } from "utils/numberUtil"

function TablesCoinsMarketsRow(props) {
  const { line, logo, name, symbol, price, twentyfourhour, seven, fourteen, thirty, volume, mktcap } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  return (
    <Tr>
      <Td minWidth={{ sm: "50px" }} pl="0px">
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold">
            {line}
          </Text>
        </Flex>
      </Td>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Avatar src={logo} w="50px" borderRadius="12px" me="18px" />
          <Flex direction="column">
            <Text
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%"
            >
              {name}
            </Text>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              {symbol}
            </Text>
          </Flex>
        </Flex>
      </Td>

      <Td>
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold">
            {formatDollar(price, 20)}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Flex direction="column">
          <StatHelpText
            m='0px'
            color={twentyfourhour > 0 ? "green.400" : "red.400"}
            fontWeight='bold'
            ps='3px'
            fontSize='md'>
            {twentyfourhour > 0 ? `+${twentyfourhour}%` : `${twentyfourhour}%`}
          </StatHelpText>
        </Flex>
      </Td>
      <Td>
        <Flex direction="column">
          <StatHelpText
            m='0px'
            color={seven > 0 ? "green.400" : "red.400"}
            fontWeight='bold'
            ps='3px'
            fontSize='md'>
            {seven > 0 ? `+${formatNum(seven)}%` : `${formatNum(seven)}%`}
          </StatHelpText>
        </Flex>
      </Td>
      <Td>
        <Flex direction="column">
          <StatHelpText
            m='0px'
            color={fourteen > 0 ? "green.400" : "red.400"}
            fontWeight='bold'
            ps='3px'
            fontSize='md'>
            {fourteen > 0 ? `+${formatNum(fourteen)}%` : `${formatNum(fourteen)}%`}
          </StatHelpText>
        </Flex>
      </Td>
      <Td>
        <Flex direction="column">
          <StatHelpText
            m='0px'
            color={thirty > 0 ? "green.400" : "red.400"}
            fontWeight='bold'
            ps='3px'
            fontSize='md'>
            {thirty > 0 ? `+${formatNum(thirty)}%` : `${formatNum(thirty)}%`}
          </StatHelpText>
        </Flex>
      </Td>
      <Td>
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold">
            {formatDollar(volume, 20)}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold">
            {formatDollar(mktcap, 20)}
          </Text>
        </Flex>
      </Td>
    </Tr>
  );
}

export default TablesCoinsMarketsRow;
