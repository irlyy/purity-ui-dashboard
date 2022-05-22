import { useEffect, useState } from "react";
import { connectWallet, getCurrentWalletConnected, mintNFT, mintNFT2 } from "utils/interact";
import { getNeedInstallErrorStatus } from "utils/error-status";
import {
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

const Minter = (props) => {

  //State variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setURL] = useState("");
  const [status2, setStatus2] = useState("");
  const [url2, setURL2] = useState("");

  useEffect(async () => { //TODO: implement
    const { address, status } = await getCurrentWalletConnected();
    setWallet(address);
    setStatus(status);
    setStatus2(status);
  }, []);

  const connectWalletPressed = async () => { //TODO: implement
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setStatus2(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const onMintPressed = async () => { //TODO: implement
    const { status } = await mintNFT(url, name, description);
    setStatus(status);
  };

  const onMintPressed2 = async () => { //TODO: implement
    const { status } = await mintNFT2(url2);
    setStatus2(status);
  };

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("👆🏽 Write a message in the text-field above.");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      const { status } = getNeedInstallErrorStatus();
      setStatus(status);
      setStatus2(status);
    }
  }

  // Chakra Color Mode
  let mainTeal = useColorModeValue("teal.300", "teal.300");
  let inputBg = useColorModeValue("white", "gray.800");
  let mainText = useColorModeValue("gray.700", "gray.200");
  let navbarIcon = useColorModeValue("gray.500", "gray.200");
  let searchIcon = useColorModeValue("gray.700", "gray.200");

  // if (secondary) {
  //   navbarIcon = "white";
  //   mainText = "white";
  // }

  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
      <Card minH='40px'>
        <CardBody>
        <div className="Part1">
          <h1 id="title">🧙‍♂️ 游艇兜风 NFT Minter </h1>
        
          <Button id="walletButton"
              w="100%"
              p="8px 32px"
              me="8px"
              colorScheme="teal"
              borderColor="teal.300"
              color="teal.300"
              variant="outline"
              fontSize="xs"
              onClick={connectWalletPressed}>
              {walletAddress.length > 0 ? (
                "Connected: " +
                String(walletAddress).substring(0, 6) +
                "..." +
                String(walletAddress).substring(38)
              ) : (
                <span>Connect Wallet</span>
              )}
            </Button>
            </div>
        </CardBody>
      </Card>
      <Card minH='83px'>
        <CardBody>
          <div className="Part1">
            <p>
              Simply add your asset's link, name, and description, then press "Mint."
            </p>
            <form>
              <h2>🖼 Link to asset: </h2>
              <Input
                fontSize="xs"
                py="11px"
                color={mainText}
                placeholder="e.g. ipfs://QmbUpvyA86q2GLSh1VKKyugNyoJdKFcthX8Joy5mtU2FSv"
                borderRadius="inherit"
                onChange={(event) => setURL(event.target.value)}
              />
              <h2>🤔 Name: </h2>
              <Input
                fontSize="xs"
                py="11px"
                color={mainText}
                placeholder="e.g. My first NFT!"
                borderRadius="inherit"
                onChange={(event) => setName(event.target.value)}
              />
              <h2>✍️ Description: </h2>
              <Input
                fontSize="xs"
                py="11px"
                color={mainText}
                placeholder="e.g. My first NFT Description!"
                borderRadius="inherit"
                onChange={(event) => setDescription(event.target.value)}
              />
            </form>
            <br></br>
            <Button id="mintButton"
              w="100%"
              p="8px 32px"
              me="8px"
              colorScheme="teal"
              borderColor="teal.300"
              color="teal.300"
              variant="outline"
              fontSize="xs"
              onClick={onMintPressed}>
              <span>Mint NFT</span>
            </Button>
            <p id="status">
              {status}
            </p>
          </div>
        </CardBody>
      </Card>
      <Card minH='83px'>
        <CardBody>
          <div className="Part1">
            <p>
              Simply add your asset's link, name, and description, then press "Mint."
            </p>
            <form>
              <h2>🖼 Json Meatdata Link to asset: </h2>
              <Input
                fontSize="xs"
                py="11px"
                color={mainText}
                placeholder="e.g. https://opensea.mypinata.cloud/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/1957"
                borderRadius="inherit"
                onChange={(event) => setURL2(event.target.value)}
              />
            </form>
            <br></br>
            <Button id="mintButton"
              w="100%"
              p="8px 32px"
              me="8px"
              colorScheme="teal"
              borderColor="teal.300"
              color="teal.300"
              variant="outline"
              fontSize="xs"
              onClick={onMintPressed2}>
              <span>Mint NFT V2</span>
            </Button>
            <p id="status">
              {status2}
            </p>
          </div>
        </CardBody>
      </Card>
    </Flex >
  );
};

export default Minter;
