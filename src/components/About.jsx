import React from "react";
import {
  Box,
  Container,
  Grid,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import homeHeroBg from "../images/home_hero_bg.png";
import cardLogo1 from "../images/card_logo1.png";
import cardLogo2 from "../images/card_logo2.png";
import cardLogo3 from "../images/card_logo3.png";
import cardLogo4 from "../images/card_logo4.png";
import cardLogo5 from "../images/card_logo5.png";
import partnerImg1 from "../images/partner_img1.png";
import partnerImg2 from "../images/partner_img2.png";
import partnerImg3 from "../images/partner_img3.png";
import partnerImg4 from "../images/partner_img4.png";
import partnerImg5 from "../images/partner_img5.png";
import partnerImg6 from "../images/partner_img6.png";
import partnerImg7 from "../images/partner_img7.png";
import partnerImg8 from "../images/partner_img8.png";
import partnerImg9 from "../images/partner_img9.png";
import packegeBg from "../images/packege_bg.png";
import comunityBg from "../images/comunity_bg.png";

function About() {
  const theme = useTheme();
  const matches = useMediaQuery("(max-width:750px)");

  return (
    <>
      <Box mt={9}>
        <Container maxWidth="lg">
          <Box
            style={{
              backgroundImage: `url(${homeHeroBg})`,
              backgroundColor: " #cccccc09",
              height: "500px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Box>
          <Box px={5}>
            <Box
              mt={4}
              fontWeight="700"
              fontSize={matches ? "25px" : "40px"}
              fontFamily="Lato"
              color={theme.palette.secondary.contrastText}
            >
              Build without compromise
            </Box>
            <Box
              mb={7}
              mt={2}
              fontWeight="400"
              fontSize={matches ? "16px" : "24px"}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Box>

            <Grid spacing={4} container>
              <Grid item xs={12} sm={4}>
                <Box boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" p={3}>
                  <img src={cardLogo1} alt="" />
                  <Box
                    mt={2}
                    fontWeight="700"
                    fontSize={matches ? "20px" : "22px"}
                    fontFamily="Lato"
                    color={theme.palette.secondary.contrastText}
                  >
                    Safer smart contracts
                  </Box>
                  <Box
                    my={2}
                    fontWeight="400"
                    fontSize={matches ? "14px" : "18px"}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" p={3}>
                  <img src={cardLogo2} alt="" />
                  <Box
                    mt={2}
                    fontWeight="700"
                    fontSize={matches ? "20px" : "22px"}
                    fontFamily="Lato"
                    color={theme.palette.secondary.contrastText}
                  >
                    No-cost transactions
                  </Box>
                  <Box
                    my={2}
                    fontWeight="400"
                    fontSize={matches ? "14px" : "18px"}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" p={3}>
                  <img src={cardLogo3} alt="" />
                  <Box
                    mt={2}
                    fontWeight="700"
                    fontSize={matches ? "20px" : "22px"}
                    fontFamily="Lato"
                    color={theme.palette.secondary.contrastText}
                  >
                    Energy efficient at scale
                  </Box>
                  <Box
                    my={2}
                    fontWeight="400"
                    fontSize={matches ? "14px" : "18px"}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" p={3}>
                  <img src={cardLogo4} alt="" />
                  <Box
                    mt={2}
                    fontWeight="700"
                    fontSize={matches ? "20px" : "22px"}
                    fontFamily="Lato"
                    color={theme.palette.secondary.contrastText}
                  >
                    Proven security
                  </Box>
                  <Box
                    my={2}
                    fontWeight="400"
                    fontSize={matches ? "14px" : "18px"}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" p={3}>
                  <img src={cardLogo5} alt="" />
                  <Box
                    mt={2}
                    fontWeight="700"
                    fontSize={matches ? "20px" : "22px"}
                    fontFamily="Lato"
                    color={theme.palette.secondary.contrastText}
                  >
                    Industrial scalability
                  </Box>
                  <Box
                    my={2}
                    fontWeight="400"
                    fontSize={matches ? "14px" : "18px"}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid spacing={3} container style={{ marginTop: "90px" }}>
              <Grid
                alignItems="center"
                justifyContent="center"
                item
                xs={12}
                sm={8}
              >
                <Grid
                  container
                  style={{
                    background: " rgba(229, 229, 229, 0.5)",
                    padding: "20px",
                    borderRadius: "30px",
                    border: "1px solid #6300C6",
                  }}
                >
                  <Grid item xs={12} sm={4}>
                    <Box align="center">
                      <img src={partnerImg1} alt="" />
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <Box align="center">
                      <img src={partnerImg2} alt="" />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Box align="center">
                      <img src={partnerImg3} alt="" />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Box align="center">
                      <img src={partnerImg4} alt="" />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Box align="center">
                      <img src={partnerImg5} alt="" />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Box align="center">
                      <img src={partnerImg6} alt="" />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Box align="center">
                      <img src={partnerImg7} alt="" />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Box align="center">
                      <img src={partnerImg8} alt="" />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Box align="center">
                      <img src={partnerImg9} alt="" />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  fontSize={matches ? "25px" : "45px"}
                  fontWeight="700"
                  fontFamily="Lato"
                  color={theme.palette.secondary.contrastText}
                >
                  Our partners, your products
                </Box>
                <Box
                  mt={3}
                  fontSize={matches ? "16px" : "22px"}
                  fontWeight="400"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Box>
                <Box
                  borderRadius="35px"
                  px={3}
                  py={1}
                  width={matches ? "120px" : "150px"}
                  textAlign="center"
                  fontWeight="700"
                  fontSize={matches ? "16px" : "20px"}
                  fontFamily="Lato"
                  color={theme.palette.primary.contrastText}
                  mt={2}
                  style={{
                    background:
                      "radial-gradient(133.33% 1564.91% at 14.8% 49.12%, #6300C6 0%, #AD00FF 100%)",
                  }}
                >
                  Build
                </Box>
              </Grid>
            </Grid>
            <Grid style={{ marginTop: "90px" }} container>
              <Grid item xs={12} sm={4}>
                <Box
                  fontSize="50px"
                  fontWeight="700"
                  fontFamily="Lato"
                  color={theme.palette.secondary.contrastText}
                >
                  The complete package
                </Box>
                <Box
                  mb={matches ? 5 : 0}
                  mt={3}
                  fontSize="24px"
                  fontWeight="400"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Box>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Grid spacing={3} container>
                  <Grid item xs={12} sm={6}>
                    <Box
                      display="flex"
                      alignItems="center"
                      flexDirection="column"
                      p={3}
                      style={{
                        backgroundImage: `url(${packegeBg})`,
                        backgroundColor: " #cccccc09",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <Box
                        mt={1}
                        fontSize="24px"
                        fontWeight="700"
                        fontFamily="Lato"
                        color={theme.palette.secondary.contrastText}
                      >
                        DeFi, NFT & Payments
                      </Box>
                      <Box mt={2} fontSize="18px" fontWeight="400">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </Box>
                      <Box
                        my={2}
                        borderRadius="35px"
                        px={3}
                        py={1}
                        width="120px"
                        textAlign="center"
                        fontWeight="700"
                        fontSize="20px"
                        fontFamily="Lato"
                        color={theme.palette.primary.contrastText}
                        mt={2}
                        style={{
                          background:
                            "radial-gradient(133.33% 1564.91% at 14.8% 49.12%, #6300C6 0%, #AD00FF 100%)",
                        }}
                      >
                        Build
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box
                      display="flex"
                      alignItems="center"
                      flexDirection="column"
                      p={3}
                      style={{
                        backgroundImage: `url(${packegeBg})`,
                        backgroundColor: " #cccccc09",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <Box
                        mt={1}
                        fontSize="24px"
                        fontWeight="700"
                        fontFamily="Lato"
                        color={theme.palette.secondary.contrastText}
                      >
                        DeFi, NFT & Payments
                      </Box>
                      <Box mt={2} fontSize="18px" fontWeight="400">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </Box>
                      <Box
                        my={2}
                        borderRadius="35px"
                        px={3}
                        py={1}
                        width="120px"
                        textAlign="center"
                        fontWeight="700"
                        fontSize="20px"
                        fontFamily="Lato"
                        color={theme.palette.primary.contrastText}
                        mt={2}
                        style={{
                          background:
                            "radial-gradient(133.33% 1564.91% at 14.8% 49.12%, #6300C6 0%, #AD00FF 100%)",
                        }}
                      >
                        Build
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box
                      display="flex"
                      alignItems="center"
                      flexDirection="column"
                      p={3}
                      style={{
                        backgroundImage: `url(${packegeBg})`,
                        backgroundColor: " #cccccc09",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <Box
                        mt={1}
                        fontSize="24px"
                        fontWeight="700"
                        fontFamily="Lato"
                        color={theme.palette.secondary.contrastText}
                      >
                        DeFi, NFT & Payments
                      </Box>
                      <Box mt={2} fontSize="18px" fontWeight="400">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </Box>
                      <Box
                        my={2}
                        borderRadius="35px"
                        px={3}
                        py={1}
                        width="120px"
                        textAlign="center"
                        fontWeight="700"
                        fontSize="20px"
                        fontFamily="Lato"
                        color={theme.palette.primary.contrastText}
                        mt={2}
                        style={{
                          background:
                            "radial-gradient(133.33% 1564.91% at 14.8% 49.12%, #6300C6 0%, #AD00FF 100%)",
                        }}
                      >
                        Build
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box
                      display="flex"
                      alignItems="center"
                      flexDirection="column"
                      p={3}
                      style={{
                        backgroundImage: `url(${packegeBg})`,
                        backgroundColor: " #cccccc09",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <Box
                        mt={1}
                        fontSize="24px"
                        fontWeight="700"
                        fontFamily="Lato"
                        color={theme.palette.secondary.contrastText}
                      >
                        DeFi, NFT & Payments
                      </Box>
                      <Box mt={2} fontSize="18px" fontWeight="400">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </Box>
                      <Box
                        my={2}
                        borderRadius="35px"
                        px={3}
                        py={1}
                        width="120px"
                        textAlign="center"
                        fontWeight="700"
                        fontSize="20px"
                        fontFamily="Lato"
                        color={theme.palette.primary.contrastText}
                        mt={2}
                        style={{
                          background:
                            "radial-gradient(133.33% 1564.91% at 14.8% 49.12%, #6300C6 0%, #AD00FF 100%)",
                        }}
                      >
                        Build
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
        <Box
          mt={10}
          pb={20}
          pt={30}
          px={matches ? 3 : 20}
          style={{
            backgroundImage: `url(${comunityBg})`,
            backgroundColor: " #cccccc09",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top top",
          }}
        >
          <Box
            fontSize="50px"
            fontWeight="700"
            fontFamily="Lato"
            color={theme.palette.primary.contrastText}
          >
            Lets Join Our Community
          </Box>
          <Box
            mt={2}
            fontSize="24px"
            fontWeight="400"
            fontFamily="Lato"
            color={theme.palette.primary.contrastText}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Box>
          <Box
            my={2}
            borderRadius="35px"
            px={3}
            py={1}
            width="120px"
            textAlign="center"
            fontWeight="700"
            fontSize="20px"
            fontFamily="Lato"
            color={theme.palette.primary.contrastText}
            mt={2}
            style={{
              background:
                "radial-gradient(133.33% 1564.91% at 14.8% 49.12%, #6300C6 0%, #AD00FF 100%)",
            }}
          >
            Join
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default About;
