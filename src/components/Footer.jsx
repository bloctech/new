import { Box, Grid, useMediaQuery, useTheme } from "@material-ui/core";
import React from "react";
import linkedIn from "../images/linkedin_f.png";
import telegram from "../images/telegram.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import social from "../images/social.png";
import youtube from "../images/youtube.png";

function Footer() {
  const theme = useTheme();
  const matches = useMediaQuery("(max-width:750px)");
  return (
    <>
      <Box>
        <Box px={3} py={matches ? 7 : 15}>
          <Grid container>
            <Grid item xs={12} sm={4}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Box
                  width={matches ? "150" : "200px"}
                  height={matches ? "150" : "200px"}
                  borderRadius="100px"
                  bgcolor={theme.palette.primary.main}
                ></Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Box
                mt={matches ? 5 : 0}
                fontWeight="700"
                fontSize={matches ? "20px" : "24px"}
                fontFamily="Lato"
                color={theme.palette.secondary.contrastText}
              >
                Build
              </Box>
              <Box
                mt={2}
                fontWeight="400"
                fontSize={matches ? "14px" : "16px"}
                fontFamily="Lato"
              >
                Wallets
              </Box>
              <Box
                mt={2}
                fontWeight="400"
                fontSize={matches ? "14px" : "16px"}
                fontFamily="Lato"
              >
                Exchanges
              </Box>
              <Box
                mt={2}
                fontWeight="400"
                fontSize={matches ? "14px" : "16px"}
                fontFamily="Lato"
              >
                Explorer
              </Box>
              <Box
                mt={2}
                fontWeight="400"
                fontSize={matches ? "14px" : "16px"}
                fontFamily="Lato"
              >
                Docs
              </Box>
              <Box
                mt={2}
                fontWeight="400"
                fontSize={matches ? "14px" : "16px"}
                fontFamily="Lato"
              >
                Blog
              </Box>
              <Box
                mt={2}
                fontWeight="400"
                fontSize={matches ? "14px" : "16px"}
                fontFamily="Lato"
              >
                Roadmap
              </Box>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Box
                mt={matches ? 2 : 0}
                fontWeight="700"
                fontSize={matches ? "20px" : "24px"}
                fontFamily="Lato"
                color={theme.palette.secondary.contrastText}
              >
                Build
              </Box>
              <Box
                mt={2}
                fontWeight="400"
                fontSize={matches ? "14px" : "16px"}
                fontFamily="Lato"
              >
                Pact language resources
              </Box>
              <Box
                mt={2}
                fontWeight="400"
                fontSize={matches ? "14px" : "16px"}
                fontFamily="Lato"
              >
                Useful tools
              </Box>
              <Box
                mt={2}
                fontWeight="400"
                fontSize={matches ? "14px" : "16px"}
                fontFamily="Lato"
              >
                Quickstart
              </Box>
              <Box
                mt={2}
                fontWeight="400"
                fontSize={matches ? "14px" : "16px"}
                fontFamily="Lato"
              >
                Pact developer tutorials
              </Box>
              <Box
                mt={2}
                fontWeight="400"
                fontSize={matches ? "14px" : "16px"}
                fontFamily="Lato"
              >
                Chat on Discord
              </Box>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Box
                mt={matches ? 2 : 0}
                fontWeight="700"
                fontSize={matches ? "20px" : "24px"}
                fontFamily="Lato"
                color={theme.palette.secondary.contrastText}
              >
                Apply
              </Box>
              <Box
                mt={2}
                fontWeight="400"
                fontSize={matches ? "14px" : "16px"}
                fontFamily="Lato"
              >
                Grants
              </Box>
              <Box
                mt={2}
                fontWeight="400"
                fontSize={matches ? "14px" : "16px"}
                fontFamily="Lato"
              >
                Developer program
              </Box>
              <Box
                mt={2}
                fontWeight="400"
                fontSize={matches ? "14px" : "16px"}
                fontFamily="Lato"
              >
                Ambassadors
              </Box>
              <Box
                mt={2}
                fontWeight="400"
                fontSize={matches ? "14px" : "16px"}
                fontFamily="Lato"
              >
                Careers
              </Box>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Box
                mt={matches ? 2 : 0}
                fontWeight="700"
                fontSize={matches ? "20px" : "24px"}
                fontFamily="Lato"
                color={theme.palette.secondary.contrastText}
              >
                Links
              </Box>
              <Box
                mt={2}
                fontWeight="400"
                fontSize={matches ? "14px" : "16px"}
                fontFamily="Lato"
              >
                About
              </Box>
              <Box
                mt={2}
                fontWeight="400"
                fontSize={matches ? "14px" : "16px"}
                fontFamily="Lato"
              >
                Team
              </Box>
              <Box
                mt={2}
                fontWeight="400"
                fontSize={matches ? "14px" : "16px"}
                fontFamily="Lato"
              >
                FAQ
              </Box>
              <Box
                mt={2}
                fontWeight="400"
                fontSize={matches ? "14px" : "16px"}
                fontFamily="Lato"
              >
                Whitepapers
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
          display="flex"
          flexDirection={matches ? "column" : "row"}
          justifyContent="space-between"
          alignItems="center"
          p={3}
        >
          <Box
            fontWeight="700"
            fontSize={matches ? "15px" : "20px"}
            fontFamily="Lato"
          >
            Name Here All rights reserved @ 2021
          </Box>
          <Box mt={matches ? 2 : 0} display="flex" alignItems="center">
            <img
              style={{ marginLeft: "20px", marginRight: "20px" }}
              src={linkedIn}
              alt=""
            />
            <img style={{ marginRight: "20px" }} src={telegram} alt="" />
            <img style={{ marginRight: "20px" }} src={facebook} alt="" />
            <img style={{ marginRight: "20px" }} src={twitter} alt="" />
            <img style={{ marginRight: "20px" }} src={social} alt="" />
            <img style={{ marginRight: "20px" }} src={youtube} alt="" />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
