// Chakra imports
import {
  Flex,
  Grid,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// assets
import peopleImage from "assets/img/people-image.png";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
import youting0 from "assets/img/youting0.jpeg";
import React from "react";
import { timelineData } from "variables/general";
import ActiveUsers from "./components/ActiveUsers";
import BuiltByDevelopers from "./components/BuiltByDevelopers";
import MiniStatistics from "./components/MiniStatistics";
import OrdersOverview from "./components/OrdersOverview";
import Projects from "./components/Projects";
import SalesOverview from "./components/SalesOverview";
import WorkWithTheRockets from "./components/WorkWithTheRockets";

export default function Dashboard() {
  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px'>
        <MiniStatistics
          title={"bitcoin"}
        />
        <MiniStatistics
          title={"ethereum"}
        />
        <MiniStatistics
          title={"binancecoin"}
        />
        <MiniStatistics
          title={"vai"}
        />
      </SimpleGrid>
      <Grid
        templateColumns={{ md: "1fr", lg: "1.8fr 1.2fr" }}
        templateRows={{ md: "1fr auto", lg: "1fr" }}
        my='26px'
        gap='24px'>
        <BuiltByDevelopers
          title={"Built by YTDF club"}
          name={"YTDF"}
          description={
            "YTDF is an innovative club and a new kind of Dao. Everyone in YTDF will be rich. Welcome to join us."
          }
          image={
            <Image
              src={youting0}
              alt='chakra image'
              minWidth={{ md: "300px", lg: "auto" }}
            />
          }
        />
        <WorkWithTheRockets
          backgroundImage={peopleImage}
          title={"Work with the YTDF club"}
          description={
            "Wealth creation is a revolutionary recent positive-sum game. It is all about who takes the opportunity first. You will be rich."
          }
        />
      </Grid>
      <Grid
        templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}
        templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
        gap='24px'
        mb={{ lg: "26px" }}>
        <ActiveUsers
          title={"bitcoin market cap"}
          percentage={23}
          chart={<BarChart />}
        />
        <SalesOverview
          title={"Bitcoin and Ethereum price Overview"}
          percentage={5}
          chart={<LineChart />}
        />
      </Grid>
      <Grid
        templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "2fr 1fr" }}
        templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
        gap='24px'>
        <Projects
          title={"Top-7 trending coins"}
          captions={["Name", "Symbol", "MarketCap", "Rank", "Price", "24H"]}
        />
        <OrdersOverview
          title={"How to Join Us"}
          amount={5}
          data={timelineData}
        />
      </Grid>
    </Flex>
  );
}
