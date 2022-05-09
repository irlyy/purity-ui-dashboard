// Chakra imports
import {
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
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TablesCoinsMarketsRow from "components/Tables/TablesCoinsMarketsRow";
import React from "react";
import { useEffect, useState } from "react";
import { useFetchCoinsMarkets } from 'utils/useFetchCoingeckoData';

const CoinsMarkets = ({ title, captions, data }) => {

  const [coinsMarketsData, setCoinsMarketsData] = useState(null);
  var line = 0;

  useEffect(() => { //TODO: implement
    const getResult = async () => {
      const coindata = await useFetchCoinsMarkets();
      console.log(coindata);
      setCoinsMarketsData(coindata);
  };
  getResult();
  }, []);

  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p='6px 0px 22px 0px'>
        <Text fontSize='xl' color={textColor} fontWeight='bold'>
          {title}
        </Text>
      </CardHeader>
      <CardBody>
        <Table variant='simple' color={textColor}>
          <Thead>
            <Tr my='.8rem' pl='0px' color='gray.400'>
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
            {coinsMarketsData && coinsMarketsData.map((row) => {
              ++line;
              return (
                <TablesCoinsMarketsRow
                  key={row.id}
                  line={line}
                  name={row.name}
                  logo={row.image}
                  symbol={row.symbol}
                  price={row.current_price}
                  twentyfourhour={row.price_change_percentage_24h}
                  seven={row.price_change_percentage_7d_in_currency}
                  fourteen={row.price_change_percentage_14d_in_currency}
                  thirty={row.price_change_percentage_30d_in_currency}
                  volume={row.total_volume}
                  mktcap={row.market_cap}
                />
              );
            })}
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default CoinsMarkets;
