import {
  Box,
  Container,
  Grid,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React from "react";
import roadMapHeroBg from "../images/roadmap_bg.png";
import RoadMapAccordian from "./RoadMapAcordien";

function RoadMap() {
  const theme = useTheme();
  const matches = useMediaQuery("(max-width:750px)");
  return (
    <>
      <Box id="roadmap">
        <Container maxWidth="lg">
          {/* <Box
            style={{
              backgroundImage: `url(${roadMapHeroBg})`,
              backgroundColor: " #cccccc09",
              height: "500px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Box> */}
          <Box
            mb={2}
            mt={4}
            fontWeight="700"
            fontSize={matches ? "30px" : "50px"}
            fontFamily="Lato"
            color={theme.palette.secondary.contrastText}
            textAlign="center"
          >
            RoadMap
          </Box>
          <Box
            mb={5}
            mt={1}
            fontWeight="700"
            fontSize={matches ? "13px" : "25px"}
            fontFamily="Lato"
            color={theme.palette.secondary.contrastText}
            textAlign="center"
          >
            The Koraplay project roadmap is a technical guideline of what is to
            come. Our project is community driven, and we strive to achieve the
            goals we have set at the earliest.
          </Box>
          <Grid spacing={2} container>
            <Grid item xs={12} sm={3}>
              <Box
                height="100%"
                fontWeight="700"
                fontSize={matches ? "19px" : "24px"}
                textAlign="center"
                px={3}
                py={3}
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                borderRight="4px solid #48007C"
              >
                {" "}
                Q4 2021
              </Box>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Box
                fontWeight="400"
                fontSize={matches ? "13px" : "18px"}
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                p={matches ? 1 : 3}
              >
                <ul>
                  <li style={{ marginTop: "8px" }}>
                    Project concept development
                  </li>
                  <li style={{ marginTop: "8px" }}>
                    Talent sourcing and teambuilding
                  </li>
                  <li style={{ marginTop: "8px" }}>Whitepaper release V1.0</li>
                  <li style={{ marginTop: "8px" }}>Website launch</li>
                  <li style={{ marginTop: "8px" }}>
                    Online community development and Project awareness creation
                  </li>
                </ul>
              </Box>
              {/* <RoadMapAccordian />
              <RoadMapAccordian />
              <RoadMapAccordian /> */}
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box
                height="100%"
                fontWeight="700"
                fontSize={matches ? "19px" : "24px"}
                textAlign="center"
                px={3}
                py={3}
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                borderRight="4px solid #48007C"
              >
                {" "}
                Q1 2022
              </Box>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Box
                fontWeight="400"
                fontSize={matches ? "13px" : "18px"}
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                p={matches ? 1 : 3}
              >
                <ul>
                  <li style={{ marginTop: "8px" }}>
                    Token smart contracts development
                  </li>
                  <li style={{ marginTop: "8px" }}>Smart contracts auditing</li>
                  <li style={{ marginTop: "8px" }}>Private sale round 1.0</li>
                  <li style={{ marginTop: "8px" }}>Private sale round 2.0</li>
                  <li style={{ marginTop: "8px" }}>Listing on CoinMarketCap</li>
                  <li style={{ marginTop: "8px" }}>Listing on CoinGecko</li>
                  <li style={{ marginTop: "8px" }}>IDO Sales</li>
                  <li style={{ marginTop: "8px" }}>
                    Testnet launch and deployment
                  </li>
                  <li style={{ marginTop: "8px" }}>Contracts auditing</li>
                  <li style={{ marginTop: "8px" }}>
                    Mainnet deployment and launch of token on Binance Smart
                    Chain, Ethereum, and Polygon, Solona.
                  </li>
                </ul>
              </Box>
              {/* <RoadMapAccordian />
              <RoadMapAccordian />
              <RoadMapAccordian /> */}
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box
                height="100%"
                fontWeight="700"
                fontSize={matches ? "19px" : "24px"}
                textAlign="center"
                px={3}
                py={3}
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                borderRight="4px solid #48007C"
              >
                {" "}
                Q2 2022
              </Box>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Box
                fontWeight="400"
                fontSize={matches ? "13px" : "18px"}
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                p={matches ? 1 : 3}
              >
                <ul>
                  <li style={{ marginTop: "8px" }}>Koraplay MVP release.</li>
                  <li style={{ marginTop: "8px" }}>
                    DEX integrations (Uniswap, Pancakeswaps, etc.)
                  </li>
                  <li style={{ marginTop: "8px" }}>
                    CEX startup sale (IEO & TGE)
                  </li>
                  <li style={{ marginTop: "8px" }}>
                    DEX and CEX listening and public sale{" "}
                  </li>
                  <li style={{ marginTop: "8px" }}>
                    Secure Strategic partnerships
                  </li>
                  <li style={{ marginTop: "8px" }}>
                    Improve existing social media infrastructure and marketing
                    strategy.
                  </li>
                </ul>
              </Box>
              {/* <RoadMapAccordian />
              <RoadMapAccordian />
              <RoadMapAccordian /> */}
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box
                height="100%"
                fontWeight="700"
                fontSize={matches ? "19px" : "24px"}
                textAlign="center"
                px={3}
                py={3}
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                borderRight="4px solid #48007C"
              >
                {" "}
                Q3 2022
              </Box>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Box
                fontWeight="400"
                fontSize={matches ? "13px" : "18px"}
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                p={matches ? 1 : 3}
              >
                <ul>
                  <li style={{ marginTop: "8px" }}>Launch $KORAPLAY staking</li>
                  <li style={{ marginTop: "8px" }}>
                    Koraplay Beta Testing & release
                  </li>
                  <li style={{ marginTop: "8px" }}>
                    Peer review and bug bounty program
                  </li>
                  <li style={{ marginTop: "8px" }}>
                    Contracts Audits and security checks
                  </li>
                  <li style={{ marginTop: "8px" }}>Koraplay bridge</li>
                  <li style={{ marginTop: "8px" }}>
                    “Sister token” token launch and deployment
                  </li>
                </ul>
              </Box>
              {/* <RoadMapAccordian />
              <RoadMapAccordian />
              <RoadMapAccordian /> */}
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box
                height="100%"
                fontWeight="700"
                fontSize={matches ? "19px" : "24px"}
                textAlign="center"
                px={3}
                py={3}
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                borderRight="4px solid #48007C"
              >
                {" "}
                Q4 2022
              </Box>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Box
                fontWeight="400"
                fontSize={matches ? "13px" : "18px"}
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                p={matches ? 1 : 3}
              >
                <ul>
                  <li style={{ marginTop: "8px" }}>
                    Koraplay platform official launch
                  </li>
                  <li style={{ marginTop: "8px" }}>
                    In-platform (“sister”) token public sale or TGE.
                  </li>
                  <li style={{ marginTop: "8px" }}>
                    Strategies performance tuning
                  </li>
                  <li style={{ marginTop: "8px" }}>
                    Launch liquidity mining program to bootstrap use of Koraplay
                  </li>
                  <li style={{ marginTop: "8px" }}>
                    Implement Governance contracts for on-chain governance
                  </li>
                  <li style={{ marginTop: "8px" }}>
                    Create frontend surface on app for on-chain governance
                  </li>
                  <li style={{ marginTop: "8px" }}>
                    Revamp backend and frontend to handle the increasing number
                    of nodes and users.
                  </li>
                </ul>
              </Box>
              {/* <RoadMapAccordian />
              <RoadMapAccordian />
              <RoadMapAccordian /> */}
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box
                height="100%"
                fontWeight="700"
                fontSize={matches ? "19px" : "24px"}
                textAlign="center"
                px={3}
                py={3}
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                borderRight="4px solid #48007C"
              >
                {" "}
                Q5 2022
              </Box>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Box
                fontWeight="400"
                fontSize={matches ? "13px" : "18px"}
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                p={matches ? 1 : 3}
              >
                <ul>
                  <li style={{ marginTop: "8px" }}>
                    Partnerships and marketing
                  </li>
                  <li style={{ marginTop: "8px" }}>
                    Integrate multichain functionalities and capabilities.
                  </li>
                  <li style={{ marginTop: "8px" }}>
                    Upgrade Koraplay to include more features for individuals,
                    creators.
                  </li>
                </ul>
              </Box>
              {/* <RoadMapAccordian />
              <RoadMapAccordian />
              <RoadMapAccordian /> */}
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box
                height="100%"
                fontWeight="700"
                fontSize={matches ? "19px" : "24px"}
                textAlign="center"
                px={3}
                py={3}
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                borderRight="4px solid #48007C"
              >
                {" "}
                Q1 2023
              </Box>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Box
                fontWeight="400"
                fontSize={matches ? "13px" : "18px"}
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                p={matches ? 1 : 3}
              >
                <ul>
                  <li style={{ marginTop: "8px" }}>
                    Launch Koraplay for Small and Medium Businesses.
                  </li>
                  <li style={{ marginTop: "8px" }}>
                    Transition to full community governance of Koraplay.
                  </li>
                </ul>
              </Box>
              {/* <RoadMapAccordian />
              <RoadMapAccordian />
              <RoadMapAccordian /> */}
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box
                height="100%"
                fontWeight="700"
                fontSize={matches ? "19px" : "24px"}
                textAlign="center"
                px={3}
                py={3}
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                borderRight="4px solid #48007C"
              >
                {" "}
                Q2 2023
              </Box>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Box
                fontWeight="400"
                fontSize={matches ? "13px" : "18px"}
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                p={matches ? 1 : 3}
              >
                <ul>
                  <li style={{ marginTop: "8px" }}>
                    Koraplay native blockchain official launch.
                  </li>
                  <li style={{ marginTop: "8px" }}>
                    Continuous development and transition to 100%
                    decentralization.
                  </li>
                </ul>
              </Box>
              {/* <RoadMapAccordian />
              <RoadMapAccordian />
              <RoadMapAccordian /> */}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default RoadMap;
