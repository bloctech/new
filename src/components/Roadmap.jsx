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
      <Box>
        <Container maxWidth="lg">
          <Box
            style={{
              backgroundImage: `url(${roadMapHeroBg})`,
              backgroundColor: " #cccccc09",
              height: "500px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Box>
          <Box
            mb={matches ? 5 : 15}
            mt={4}
            fontWeight="900"
            fontSize={matches ? "30px" : "50px"}
            fontFamily="Lato"
            color={theme.palette.secondary.contrastText}
            textAlign="center"
          >
            Road Map
          </Box>
          <Grid spacing={2} container>
            <Grid item xs={12} sm={3}>
              <Box
                height="95%"
                mt={2}
                fontWeight="700"
                fontSize={matches ? "20px" : "24px"}
                textAlign="center"
                px={3}
                pt={2}
                pb={6}
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                borderRight="4px solid #48007C"
              >
                {" "}
                January 2021
              </Box>
            </Grid>
            <Grid item xs={12} sm={9}>
              <RoadMapAccordian />
              <RoadMapAccordian />
              <RoadMapAccordian />
            </Grid>
          </Grid>
          <Grid style={{ marginTop: "20px" }} spacing={2} container>
            <Grid item xs={12} sm={9}>
              <RoadMapAccordian />
              <RoadMapAccordian />
              <RoadMapAccordian />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box
                height="95%"
                mt={2}
                fontWeight="700"
                fontSize={matches ? "20px" : "24px"}
                textAlign="center"
                px={3}
                pt={2}
                pb={6}
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                borderLeft="4px solid #48007C"
              >
                {" "}
                February 2021
              </Box>
            </Grid>
          </Grid>
          <Grid style={{ marginTop: "20px" }} spacing={2} container>
            <Grid item xs={12} sm={3}>
              <Box
                height="95%"
                mt={2}
                fontWeight="700"
                fontSize={matches ? "20px" : "24px"}
                textAlign="center"
                px={3}
                pt={2}
                pb={6}
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                borderRight="4px solid #48007C"
              >
                {" "}
                March 2021
              </Box>
            </Grid>
            <Grid item xs={12} sm={9}>
              <RoadMapAccordian />
              <RoadMapAccordian />
            </Grid>
          </Grid>
          <Grid style={{ marginTop: "20px" }} spacing={2} container>
            <Grid item xs={12} sm={9}>
              <RoadMapAccordian />
              <RoadMapAccordian />
              <RoadMapAccordian />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box
                height="95%"
                mt={2}
                fontWeight="700"
                fontSize={matches ? "20px" : "24px"}
                textAlign="center"
                px={3}
                pt={2}
                pb={6}
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                borderLeft="4px solid #48007C"
              >
                {" "}
                April 2021
              </Box>
            </Grid>
          </Grid>
          <Grid style={{ marginTop: "20px" }} spacing={2} container>
            <Grid item xs={12} sm={3}>
              <Box
                height="95%"
                mt={2}
                fontWeight="700"
                fontSize={matches ? "20px" : "24px"}
                textAlign="center"
                px={3}
                pt={2}
                pb={6}
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                borderRight="4px solid #48007C"
              >
                {" "}
                May 2021
              </Box>
            </Grid>
            <Grid item xs={12} sm={9}>
              <RoadMapAccordian />
              <RoadMapAccordian />
            </Grid>
          </Grid>
          <Grid style={{ marginTop: "20px" }} spacing={2} container>
            <Grid item xs={12} sm={9}>
              <RoadMapAccordian />
              <RoadMapAccordian />
              <RoadMapAccordian />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box
                height="95%"
                mt={2}
                fontWeight="700"
                fontSize={matches ? "20px" : "24px"}
                textAlign="center"
                px={3}
                pt={2}
                pb={6}
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                borderLeft="4px solid #48007C"
              >
                {" "}
                June 2021
              </Box>
            </Grid>
          </Grid>
          <Grid style={{ marginTop: "20px" }} spacing={2} container>
            <Grid item xs={12} sm={3}>
              <Box
                height="95%"
                mt={2}
                fontWeight="700"
                fontSize={matches ? "20px" : "24px"}
                textAlign="center"
                px={3}
                pt={2}
                pb={6}
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                borderRight="4px solid #48007C"
              >
                {" "}
                July 2021
              </Box>
            </Grid>
            <Grid item xs={12} sm={9}>
              <RoadMapAccordian />
              <RoadMapAccordian />
            </Grid>
          </Grid>
          <Grid style={{ marginTop: "20px" }} spacing={2} container>
            <Grid item xs={12} sm={9}>
              <RoadMapAccordian />
              <RoadMapAccordian />
              <RoadMapAccordian />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box
                height="95%"
                mt={2}
                fontWeight="700"
                fontSize={matches ? "20px" : "24px"}
                textAlign="center"
                px={3}
                pt={2}
                pb={6}
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                borderLeft="4px solid #48007C"
              >
                {" "}
                Auguest 2021
              </Box>
            </Grid>
          </Grid>
          <Grid style={{ marginTop: "20px" }} spacing={2} container>
            <Grid item xs={12} sm={3}>
              <Box
                height="95%"
                mt={2}
                fontWeight="700"
                fontSize={matches ? "20px" : "24px"}
                textAlign="center"
                px={3}
                pt={2}
                pb={6}
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                borderRight="4px solid #48007C"
              >
                {" "}
                September 2021
              </Box>
            </Grid>
            <Grid item xs={12} sm={9}>
              <RoadMapAccordian />
              <RoadMapAccordian />
              <RoadMapAccordian />
            </Grid>
          </Grid>
          <Grid style={{ marginTop: "20px" }} spacing={2} container>
            <Grid item xs={12} sm={9}>
              <RoadMapAccordian />
              <RoadMapAccordian />
              <RoadMapAccordian />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box
                height="95%"
                mt={2}
                fontWeight="700"
                fontSize={matches ? "20px" : "24px"}
                textAlign="center"
                px={3}
                pt={2}
                pb={6}
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                borderLeft="4px solid #48007C"
              >
                {" "}
                October 2021
              </Box>
            </Grid>
          </Grid>
          <Grid style={{ marginTop: "20px" }} spacing={2} container>
            <Grid item xs={12} sm={3}>
              <Box
                height="95%"
                mt={2}
                fontWeight="700"
                fontSize={matches ? "20px" : "24px"}
                textAlign="center"
                px={3}
                pt={2}
                pb={6}
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                borderRight="4px solid #48007C"
              >
                {" "}
                November 2021
              </Box>
            </Grid>
            <Grid item xs={12} sm={9}>
              <RoadMapAccordian />
              <RoadMapAccordian />
              <RoadMapAccordian />
            </Grid>
          </Grid>
          <Box
            mb={5}
            mt={10}
            fontWeight="700"
            fontSize={matches ? "25px" : "35px"}
            fontFamily="Lato"
            color={theme.palette.secondary.contrastText}
            textAlign="center"
          >
            Upcoming milestones
          </Box>
          <Grid style={{ marginTop: "20px" }} spacing={2} container>
            <Grid item xs={12} sm={3}>
              <Box
                height="100%"
                fontWeight="700"
                fontSize={matches ? "20px" : "24px"}
                textAlign="center"
                p={3}
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                borderRight="4px solid #48007C"
              >
                {" "}
                DeFi & dApps
              </Box>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                p={2}
              >
                <Box
                  fontWeight="700"
                  fontFamily="Lato"
                  fontSize={matches ? "14px" : "20px"}
                >
                  {" "}
                  Publishing new token economics document
                </Box>
                <Box
                  fontWeight="700"
                  fontFamily="Lato"
                  fontSize={matches ? "14px" : "20px"}
                  color={theme.palette.secondary.light}
                >
                  {" "}
                  In Progress
                </Box>
              </Box>
              <Box
                mt={2}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                p={2}
              >
                <Box
                  fontWeight="700"
                  fontFamily="Lato"
                  fontSize={matches ? "14px" : "20px"}
                >
                  {" "}
                  Launching Kadenaswap “Bountyswap” on mainnet
                </Box>
                <Box
                  fontWeight="700"
                  fontFamily="Lato"
                  fontSize={matches ? "14px" : "20px"}
                  color={theme.palette.secondary.light}
                >
                  {" "}
                  design phase
                </Box>
              </Box>
              <Box
                mt={2}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                p={2}
              >
                <Box
                  fontWeight="700"
                  fontFamily="Lato"
                  fontSize={matches ? "14px" : "20px"}
                >
                  {" "}
                  Publishing new token economics document
                </Box>
                <Box
                  fontWeight="700"
                  fontFamily="Lato"
                  fontSize={matches ? "14px" : "20px"}
                  color={theme.palette.secondary.light}
                >
                  {" "}
                  ongoing
                </Box>
              </Box>
              <Box
                mt={2}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                p={2}
              >
                <Box
                  fontWeight="700"
                  fontFamily="Lato"
                  fontSize={matches ? "14px" : "20px"}
                >
                  {" "}
                  Launching Kadenaswap “Bountyswap” on mainnet
                </Box>
                <Box
                  fontWeight="700"
                  fontFamily="Lato"
                  fontSize={matches ? "14px" : "20px"}
                  color={theme.palette.secondary.light}
                >
                  {" "}
                  partner identified
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid style={{ marginTop: "20px" }} spacing={2} container>
            <Grid item xs={12} sm={3}>
              <Box
                height="100%"
                fontWeight="700"
                fontSize={matches ? "20px" : "24px"}
                textAlign="center"
                p={3}
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                borderRight="4px solid #48007C"
              >
                {" "}
                Infra
              </Box>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                p={2}
              >
                <Box
                  fontWeight="700"
                  fontFamily="Lato"
                  fontSize={matches ? "14px" : "20px"}
                >
                  {" "}
                  Publishing new token economics document
                </Box>
                <Box
                  fontWeight="700"
                  fontFamily="Lato"
                  fontSize={matches ? "14px" : "20px"}
                  color={theme.palette.secondary.light}
                >
                  {" "}
                  In Progress
                </Box>
              </Box>
              <Box
                mt={2}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                p={2}
              >
                <Box
                  fontWeight="700"
                  fontFamily="Lato"
                  fontSize={matches ? "14px" : "20px"}
                >
                  {" "}
                  Launching Kadenaswap “Bountyswap” on mainnet
                </Box>
                <Box
                  fontWeight="700"
                  fontFamily="Lato"
                  fontSize={matches ? "14px" : "20px"}
                  color={theme.palette.secondary.light}
                >
                  {" "}
                  design phase
                </Box>
              </Box>
              <Box
                mt={2}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                p={2}
              >
                <Box
                  fontWeight="700"
                  fontFamily="Lato"
                  fontSize={matches ? "14px" : "20px"}
                >
                  {" "}
                  Publishing new token economics document
                </Box>
                <Box
                  fontWeight="700"
                  fontFamily="Lato"
                  fontSize={matches ? "14px" : "20px"}
                  color={theme.palette.secondary.light}
                >
                  {" "}
                  ongoing
                </Box>
              </Box>
              <Box
                mt={2}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                p={2}
              >
                <Box
                  fontWeight="700"
                  fontFamily="Lato"
                  fontSize={matches ? "14px" : "20px"}
                >
                  {" "}
                  Launching Kadenaswap “Bountyswap” on mainnet
                </Box>
                <Box
                  fontWeight="700"
                  fontFamily="Lato"
                  fontSize={matches ? "14px" : "20px"}
                  color={theme.palette.secondary.light}
                >
                  {" "}
                  partner identified
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid style={{ marginTop: "20px" }} spacing={2} container>
            <Grid item xs={12} sm={3}>
              <Box
                height="100%"
                fontWeight="700"
                fontSize={matches ? "20px" : "24px"}
                textAlign="center"
                p={3}
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                borderRight="4px solid #48007C"
              >
                {" "}
                Marketing
              </Box>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                p={2}
              >
                <Box
                  fontWeight="700"
                  fontFamily="Lato"
                  fontSize={matches ? "14px" : "20px"}
                >
                  {" "}
                  Publishing new token economics document
                </Box>
                <Box
                  fontWeight="700"
                  fontFamily="Lato"
                  fontSize={matches ? "14px" : "20px"}
                  color={theme.palette.secondary.light}
                >
                  {" "}
                  In Progress
                </Box>
              </Box>
              <Box
                mt={2}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                p={2}
              >
                <Box
                  fontWeight="700"
                  fontFamily="Lato"
                  fontSize={matches ? "14px" : "20px"}
                >
                  {" "}
                  Launching Kadenaswap “Bountyswap” on mainnet
                </Box>
                <Box
                  fontWeight="700"
                  fontFamily="Lato"
                  fontSize={matches ? "14px" : "20px"}
                  color={theme.palette.secondary.light}
                >
                  {" "}
                  design phase
                </Box>
              </Box>
              <Box
                mt={2}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                p={2}
              >
                <Box
                  fontWeight="700"
                  fontFamily="Lato"
                  fontSize={matches ? "14px" : "20px"}
                >
                  {" "}
                  Publishing new token economics document
                </Box>
                <Box
                  fontWeight="700"
                  fontFamily="Lato"
                  fontSize={matches ? "14px" : "20px"}
                  color={theme.palette.secondary.light}
                >
                  {" "}
                  ongoing
                </Box>
              </Box>
              <Box
                mt={2}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                p={2}
              >
                <Box
                  fontWeight="700"
                  fontFamily="Lato"
                  fontSize={matches ? "14px" : "20px"}
                >
                  {" "}
                  Launching Kadenaswap “Bountyswap” on mainnet
                </Box>
                <Box
                  fontWeight="700"
                  fontFamily="Lato"
                  fontSize={matches ? "14px" : "20px"}
                  color={theme.palette.secondary.light}
                >
                  {" "}
                  partner identified
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid
            style={{ marginTop: "20px", marginBottom: "50px" }}
            spacing={2}
            container
          >
            <Grid item xs={12} sm={3}>
              <Box
                height="100%"
                fontWeight="700"
                fontSize={matches ? "20px" : "24px"}
                textAlign="center"
                p={3}
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                borderRight="4px solid #48007C"
              >
                {" "}
                Wallet
              </Box>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                p={2}
              >
                <Box
                  fontWeight="700"
                  fontFamily="Lato"
                  fontSize={matches ? "14px" : "20px"}
                >
                  {" "}
                  Publishing new token economics document
                </Box>
                <Box
                  fontWeight="700"
                  fontFamily="Lato"
                  fontSize={matches ? "14px" : "20px"}
                  color={theme.palette.secondary.light}
                >
                  {" "}
                  In Progress
                </Box>
              </Box>
              <Box
                mt={2}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                p={2}
              >
                <Box
                  fontWeight="700"
                  fontFamily="Lato"
                  fontSize={matches ? "14px" : "20px"}
                >
                  {" "}
                  Launching Kadenaswap “Bountyswap” on mainnet
                </Box>
                <Box
                  fontWeight="700"
                  fontFamily="Lato"
                  fontSize={matches ? "14px" : "20px"}
                  color={theme.palette.secondary.light}
                >
                  {" "}
                  design phase
                </Box>
              </Box>
              <Box
                mt={2}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                p={2}
              >
                <Box
                  fontWeight="700"
                  fontFamily="Lato"
                  fontSize={matches ? "14px" : "20px"}
                >
                  {" "}
                  Publishing new token economics document
                </Box>
                <Box
                  fontWeight="700"
                  fontFamily="Lato"
                  fontSize={matches ? "14px" : "20px"}
                  color={theme.palette.secondary.light}
                >
                  {" "}
                  ongoing
                </Box>
              </Box>
              <Box
                mt={2}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                p={2}
              >
                <Box
                  fontWeight="700"
                  fontFamily="Lato"
                  fontSize={matches ? "14px" : "20px"}
                >
                  {" "}
                  Launching Kadenaswap “Bountyswap” on mainnet
                </Box>
                <Box
                  fontWeight="700"
                  fontFamily="Lato"
                  fontSize={matches ? "14px" : "20px"}
                  color={theme.palette.secondary.light}
                >
                  {" "}
                  partner identified
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default RoadMap;
