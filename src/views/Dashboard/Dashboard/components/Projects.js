// Chakra imports
import {
  Flex,
  Icon,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import DashboardTableRowNew from "components/Tables/DashboardTableRowNew";
import React from "react";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { useFetchCoingeckoTrending } from 'utils/useFetchCoingeckoData';

const Projects = ({ title, amount, captions, data }) => {
  const { trendingData } = useFetchCoingeckoTrending();
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card p='16px' overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p='12px 0px 28px 0px'>
        <Flex direction='column'>
          <Text fontSize='lg' color={textColor} fontWeight='bold' pb='.5rem'>
            {title}
          </Text>
          <Flex align='center'>
            <Icon
              as={IoCheckmarkDoneCircleSharp}
              color='teal.300'
              w={4}
              h={4}
              pe='3px'
            />
            <Text fontSize='sm' color='gray.400' fontWeight='normal'>
              <Text fontWeight='bold' as='span'>
                Top-7 trending coins on CoinGecko as searched by users in the last 24 hours (Ordered by most popular first)
              </Text>
            </Text>
          </Flex>
        </Flex>
      </CardHeader>
      <Table variant='simple' color={textColor}>
        <Thead>
          <Tr my='.8rem' ps='0px'>
            {captions.map((caption, idx) => {
              return (
                <Th color='gray.400' key={idx} ps={idx === 0 ? "0px" : null}>
                  {caption}
                </Th>
              );
            })}
          </Tr>
        </Thead>
        <Tbody>
          {trendingData && trendingData.map((row) => {
            return (
              <DashboardTableRowNew
                name={row.item.name}
                logo={row.item.small}
                symbol={row.item.symbol}
                marketCapRank={row.item.market_cap_rank}
              />
            );
          })}
        </Tbody>
      </Table>
    </Card>
  );
};

export default Projects;
