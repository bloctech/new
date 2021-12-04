import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  useMediaQuery,
  Button,
  CardMedia,
  useTheme,
} from "@material-ui/core";
import bg from "../images/community-bg.png";
import { BsTelegram, BsYoutube, BsFacebook, BsReddit } from "react-icons/bs";
import { AiFillTwitterCircle, AiOutlinePlus } from "react-icons/ai";
import { RiSubtractLine } from "react-icons/ri";
import linkedin from "../images/linkedin.png";
import { makeStyles } from "@material-ui/core/styles";
import Skateboarding from "../videos/Skateboarding.mp4";
import linkedIn from "../images/linkedin_f.png";
import telegram from "../images/telegram.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import partnerImg1 from "../images/partner_img1.png";
import partnerImg2 from "../images/partner_img2.png";
import partnerImg3 from "../images/partner_img3.png";
import partnerImg4 from "../images/partner_img4.png";
import partnerImg5 from "../images/partner_img5.png";
import partnerImg6 from "../images/partner_img6.png";
import partnerImg7 from "../images/partner_img7.png";
import partnerImg8 from "../images/partner_img8.png";
import partnerImg9 from "../images/partner_img9.png";

const useStyles = makeStyles({
  hover: {
    fontWeight: "700",
    fontFamily: "Lato",
    fontSize: "20px",
    color: "#000",
    textDecoration: "none",
    cursor: "pointer",
    "&:hover": {
      color: "#AD00FF",
    },
  },
  btn: {
    background:
      "radial-gradient(133.33% 1564.91% at 14.8% 49.12%, #6300C6 0%, #AD00FF 100%)",
    width: "168px",
    height: "45px",
    borderRadius: "36px",
    textTransform: "capitalize",
    color: "#fff",
    fontSize: "18px",
    fontWeight: "500",
  },
});
function Community() {
  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:960px)");
  const matches1 = useMediaQuery("(max-width:680px)");
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(true);
  const [state3, setState3] = useState(true);
  const handleToggle = (a) => {
    if (a === "first") {
      console.log(a);
      setState1(!state1);
    } else if (a === "second") {
      setState2(!state2);
    } else if (a === "third") {
      setState3(!state3);
    }
  };
  return (
    <Box>
      <Container maxWidth="lg">
        <Box
          mb={15}
          style={{
            backgroundImage: `url(${bg})`,
            backgroundColor: " #cccccc09",
            height: "500px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Box>
        <Box
          mb={2}
          mt={4}
          fontWeight="700"
          fontSize={matches ? "30px" : "50px"}
          fontFamily="Lato"
          color={theme.palette.secondary.contrastText}
          textAlign="center"
        >
          OUR TEAM
        </Box>
        <Box
          textAlign="center"
          mt={1}
          mb={5}
          fontWeight="400"
          fontSize={matches ? "14px" : "18px"}
        >
          Our team comprises an exceptional and diverse group of industry
          experts and highly talented, creative, and passionate professionals;
          with a background spanning; Engineering, Computer science,
          Mathematics, Economics, Finance, management, philosophy, Arts, law,
          and humanities.
        </Box>
        <Grid spacing={4} container>
          <Grid item xs={12} sm={3}>
            <Box
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              p={1}
              height="100%"
              borderRight="5px solid #48007C"
            >
              <Box align="center" mt={1}>
                <img width="90px" src="/images/person.png" alt="" />
              </Box>
              <Box
                mt={2}
                fontWeight="700"
                fontSize={matches ? "13px" : "16px"}
                fontFamily="Lato"
                color={theme.palette.secondary.contrastText}
                textAlign="center"
              >
                Name: Charles Madu
              </Box>
              <Box
                fontWeight="700"
                fontSize={matches ? "13px" : "16px"}
                fontFamily="Lato"
                color={theme.palette.secondary.contrastText}
                textAlign="center"
              >
                Position: Co-Founder & CEO
              </Box>
              <Box
                justifyContent="center"
                my={2}
                display="flex"
                alignItems="center"
              >
                <img
                  style={{ marginLeft: "20px", marginRight: "20px" }}
                  src={linkedIn}
                  alt=""
                />
                <img style={{ marginRight: "20px" }} src={telegram} alt="" />
                <img style={{ marginRight: "20px" }} src={facebook} alt="" />
                <img style={{ marginRight: "20px" }} src={twitter} alt="" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              p={1}
              height="100%"
              borderRight="5px solid #48007C"
            >
              <Box align="center" mt={1}>
                <img width="90px" src="/images/person.png" alt="" />
              </Box>
              <Box
                mt={2}
                fontWeight="700"
                fontSize={matches ? "13px" : "16px"}
                fontFamily="Lato"
                color={theme.palette.secondary.contrastText}
                textAlign="center"
              >
                Name: James Chikelu
              </Box>
              <Box
                fontWeight="700"
                fontSize={matches ? "13px" : "16px"}
                fontFamily="Lato"
                color={theme.palette.secondary.contrastText}
                textAlign="center"
              >
                Position: Co-founder & COO
              </Box>
              <Box
                justifyContent="center"
                my={2}
                display="flex"
                alignItems="center"
              >
                <img
                  style={{ marginLeft: "20px", marginRight: "20px" }}
                  src={linkedIn}
                  alt=""
                />
                <img style={{ marginRight: "20px" }} src={telegram} alt="" />
                <img style={{ marginRight: "20px" }} src={facebook} alt="" />
                <img style={{ marginRight: "20px" }} src={twitter} alt="" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              p={1}
              height="100%"
              borderRight="5px solid #48007C"
            >
              <Box align="center" mt={1}>
                <img width="90px" src="/images/person.png" alt="" />
              </Box>
              <Box
                mt={2}
                fontWeight="700"
                fontSize={matches ? "13px" : "16px"}
                fontFamily="Lato"
                color={theme.palette.secondary.contrastText}
                textAlign="center"
              >
                Name: James Chikelu
              </Box>
              <Box
                fontWeight="700"
                fontSize={matches ? "13px" : "16px"}
                fontFamily="Lato"
                color={theme.palette.secondary.contrastText}
                textAlign="center"
              >
                Position: Co-founder & COO
              </Box>
              <Box
                justifyContent="center"
                my={2}
                display="flex"
                alignItems="center"
              >
                <img
                  style={{ marginLeft: "20px", marginRight: "20px" }}
                  src={linkedIn}
                  alt=""
                />
                <img style={{ marginRight: "20px" }} src={telegram} alt="" />
                <img style={{ marginRight: "20px" }} src={facebook} alt="" />
                <img style={{ marginRight: "20px" }} src={twitter} alt="" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              p={1}
              height="100%"
              borderRight="5px solid #48007C"
            >
              <Box align="center" mt={1}>
                <img width="90px" src="/images/person.png" alt="" />
              </Box>
              <Box
                mt={2}
                fontWeight="700"
                fontSize={matches ? "13px" : "16px"}
                fontFamily="Lato"
                color={theme.palette.secondary.contrastText}
                textAlign="center"
              >
                Name: James Chikelu
              </Box>
              <Box
                fontWeight="700"
                fontSize={matches ? "13px" : "16px"}
                fontFamily="Lato"
                color={theme.palette.secondary.contrastText}
                textAlign="center"
              >
                Position: Co-founder & COO
              </Box>
              <Box
                justifyContent="center"
                my={2}
                display="flex"
                alignItems="center"
              >
                <img
                  style={{ marginLeft: "20px", marginRight: "20px" }}
                  src={linkedIn}
                  alt=""
                />
                <img style={{ marginRight: "20px" }} src={telegram} alt="" />
                <img style={{ marginRight: "20px" }} src={facebook} alt="" />
                <img style={{ marginRight: "20px" }} src={twitter} alt="" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              p={1}
              height="100%"
              borderRight="5px solid #48007C"
            >
              <Box align="center" mt={1}>
                <img width="90px" src="/images/person.png" alt="" />
              </Box>
              <Box
                mt={2}
                fontWeight="700"
                fontSize={matches ? "13px" : "16px"}
                fontFamily="Lato"
                color={theme.palette.secondary.contrastText}
                textAlign="center"
              >
                Name: James Chikelu
              </Box>
              <Box
                fontWeight="700"
                fontSize={matches ? "13px" : "16px"}
                fontFamily="Lato"
                color={theme.palette.secondary.contrastText}
                textAlign="center"
              >
                Position: Co-founder & COO
              </Box>
              <Box
                justifyContent="center"
                my={2}
                display="flex"
                alignItems="center"
              >
                <img
                  style={{ marginLeft: "20px", marginRight: "20px" }}
                  src={linkedIn}
                  alt=""
                />
                <img style={{ marginRight: "20px" }} src={telegram} alt="" />
                <img style={{ marginRight: "20px" }} src={facebook} alt="" />
                <img style={{ marginRight: "20px" }} src={twitter} alt="" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              p={1}
              height="100%"
              borderRight="5px solid #48007C"
            >
              <Box align="center" mt={1}>
                <img width="90px" src="/images/person.png" alt="" />
              </Box>
              <Box
                mt={2}
                fontWeight="700"
                fontSize={matches ? "13px" : "16px"}
                fontFamily="Lato"
                color={theme.palette.secondary.contrastText}
                textAlign="center"
              >
                Name: James Chikelu
              </Box>
              <Box
                fontWeight="700"
                fontSize={matches ? "13px" : "16px"}
                fontFamily="Lato"
                color={theme.palette.secondary.contrastText}
                textAlign="center"
              >
                Position: Co-founder & COO
              </Box>
              <Box
                justifyContent="center"
                my={2}
                display="flex"
                alignItems="center"
              >
                <img
                  style={{ marginLeft: "20px", marginRight: "20px" }}
                  src={linkedIn}
                  alt=""
                />
                <img style={{ marginRight: "20px" }} src={telegram} alt="" />
                <img style={{ marginRight: "20px" }} src={facebook} alt="" />
                <img style={{ marginRight: "20px" }} src={twitter} alt="" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              p={1}
              height="100%"
              borderRight="5px solid #48007C"
            >
              <Box align="center" mt={1}>
                <img width="90px" src="/images/person.png" alt="" />
              </Box>
              <Box
                mt={2}
                fontWeight="700"
                fontSize={matches ? "13px" : "16px"}
                fontFamily="Lato"
                color={theme.palette.secondary.contrastText}
                textAlign="center"
              >
                Name: James Chikelu
              </Box>
              <Box
                fontWeight="700"
                fontSize={matches ? "13px" : "16px"}
                fontFamily="Lato"
                color={theme.palette.secondary.contrastText}
                textAlign="center"
              >
                Position: Co-founder & COO
              </Box>
              <Box
                justifyContent="center"
                my={2}
                display="flex"
                alignItems="center"
              >
                <img
                  style={{ marginLeft: "20px", marginRight: "20px" }}
                  src={linkedIn}
                  alt=""
                />
                <img style={{ marginRight: "20px" }} src={telegram} alt="" />
                <img style={{ marginRight: "20px" }} src={facebook} alt="" />
                <img style={{ marginRight: "20px" }} src={twitter} alt="" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              p={1}
              height="100%"
              borderRight="5px solid #48007C"
            >
              <Box align="center" mt={1}>
                <img width="90px" src="/images/person.png" alt="" />
              </Box>
              <Box
                mt={2}
                fontWeight="700"
                fontSize={matches ? "13px" : "16px"}
                fontFamily="Lato"
                color={theme.palette.secondary.contrastText}
                textAlign="center"
              >
                Name: James Chikelu
              </Box>
              <Box
                fontWeight="700"
                fontSize={matches ? "13px" : "16px"}
                fontFamily="Lato"
                color={theme.palette.secondary.contrastText}
                textAlign="center"
              >
                Position: Co-founder & COO
              </Box>
              <Box
                justifyContent="center"
                my={2}
                display="flex"
                alignItems="center"
              >
                <img
                  style={{ marginLeft: "20px", marginRight: "20px" }}
                  src={linkedIn}
                  alt=""
                />
                <img style={{ marginRight: "20px" }} src={telegram} alt="" />
                <img style={{ marginRight: "20px" }} src={facebook} alt="" />
                <img style={{ marginRight: "20px" }} src={twitter} alt="" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              p={1}
              height="100%"
              borderRight="5px solid #48007C"
            >
              <Box align="center" mt={1}>
                <img width="90px" src="/images/person.png" alt="" />
              </Box>
              <Box
                mt={2}
                fontWeight="700"
                fontSize={matches ? "13px" : "16px"}
                fontFamily="Lato"
                color={theme.palette.secondary.contrastText}
                textAlign="center"
              >
                Name: James Chikelu
              </Box>
              <Box
                fontWeight="700"
                fontSize={matches ? "13px" : "16px"}
                fontFamily="Lato"
                color={theme.palette.secondary.contrastText}
                textAlign="center"
              >
                Position: Co-founder & COO
              </Box>
              <Box
                justifyContent="center"
                my={2}
                display="flex"
                alignItems="center"
              >
                <img
                  style={{ marginLeft: "20px", marginRight: "20px" }}
                  src={linkedIn}
                  alt=""
                />
                <img style={{ marginRight: "20px" }} src={telegram} alt="" />
                <img style={{ marginRight: "20px" }} src={facebook} alt="" />
                <img style={{ marginRight: "20px" }} src={twitter} alt="" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              p={1}
              height="100%"
              borderRight="5px solid #48007C"
            >
              <Box align="center" mt={1}>
                <img width="90px" src="/images/person.png" alt="" />
              </Box>
              <Box
                mt={2}
                fontWeight="700"
                fontSize={matches ? "13px" : "16px"}
                fontFamily="Lato"
                color={theme.palette.secondary.contrastText}
                textAlign="center"
              >
                Name: James Chikelu
              </Box>
              <Box
                fontWeight="700"
                fontSize={matches ? "13px" : "16px"}
                fontFamily="Lato"
                color={theme.palette.secondary.contrastText}
                textAlign="center"
              >
                Position: Co-founder & COO
              </Box>
              <Box
                justifyContent="center"
                my={2}
                display="flex"
                alignItems="center"
              >
                <img
                  style={{ marginLeft: "20px", marginRight: "20px" }}
                  src={linkedIn}
                  alt=""
                />
                <img style={{ marginRight: "20px" }} src={telegram} alt="" />
                <img style={{ marginRight: "20px" }} src={facebook} alt="" />
                <img style={{ marginRight: "20px" }} src={twitter} alt="" />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box
          mb={4}
          mt={7}
          fontWeight="700"
          fontSize={matches ? "30px" : "50px"}
          fontFamily="Lato"
          color={theme.palette.secondary.contrastText}
          textAlign="center"
        >
          Blockchain and Media Advisors
        </Box>
        <Grid spacing={4} container>
          <Grid item xs={12} sm={3}>
            <Box
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              p={1}
              height="100%"
              borderLeft="5px solid #48007C"
            >
              <Box align="center" mt={1}>
                <img width="90px" src="/images/person.png" alt="" />
              </Box>
              <Box
                mt={2}
                fontWeight="700"
                fontSize={matches ? "13px" : "16px"}
                fontFamily="Lato"
                color={theme.palette.secondary.contrastText}
                textAlign="center"
              >
                Name: James Chikelu
              </Box>
              <Box
                mb={2}
                fontWeight="700"
                fontSize={matches ? "13px" : "16px"}
                fontFamily="Lato"
                color={theme.palette.secondary.contrastText}
                textAlign="center"
              >
                Position: Co-founder & COO
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              p={1}
              height="100%"
              borderLeft="5px solid #48007C"
            >
              <Box align="center" mt={1}>
                <img width="90px" src="/images/person.png" alt="" />
              </Box>
              <Box
                mt={2}
                fontWeight="700"
                fontSize={matches ? "13px" : "16px"}
                fontFamily="Lato"
                color={theme.palette.secondary.contrastText}
                textAlign="center"
              >
                Name: James Chikelu
              </Box>
              <Box
                mb={2}
                fontWeight="700"
                fontSize={matches ? "13px" : "16px"}
                fontFamily="Lato"
                color={theme.palette.secondary.contrastText}
                textAlign="center"
              >
                Position: Co-founder & COO
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              p={1}
              height="100%"
              borderLeft="5px solid #48007C"
            >
              <Box align="center" mt={1}>
                <img width="90px" src="/images/person.png" alt="" />
              </Box>
              <Box
                mt={2}
                fontWeight="700"
                fontSize={matches ? "13px" : "16px"}
                fontFamily="Lato"
                color={theme.palette.secondary.contrastText}
                textAlign="center"
              >
                Name: James Chikelu
              </Box>
              <Box
                mb={2}
                fontWeight="700"
                fontSize={matches ? "13px" : "16px"}
                fontFamily="Lato"
                color={theme.palette.secondary.contrastText}
                textAlign="center"
              >
                Position: Co-founder & COO
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              p={1}
              height="100%"
              borderLeft="5px solid #48007C"
            >
              <Box align="center" mt={1}>
                <img width="90px" src="/images/person.png" alt="" />
              </Box>
              <Box
                mt={2}
                fontWeight="700"
                fontSize={matches ? "13px" : "16px"}
                fontFamily="Lato"
                color={theme.palette.secondary.contrastText}
                textAlign="center"
              >
                Name: James Chikelu
              </Box>
              <Box
                mb={2}
                fontWeight="700"
                fontSize={matches ? "13px" : "16px"}
                fontFamily="Lato"
                color={theme.palette.secondary.contrastText}
                textAlign="center"
              >
                Position: Co-founder & COO
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              p={1}
              height="100%"
              borderLeft="5px solid #48007C"
            >
              <Box align="center" mt={1}>
                <img width="90px" src="/images/person.png" alt="" />
              </Box>
              <Box
                mt={2}
                fontWeight="700"
                fontSize={matches ? "13px" : "16px"}
                fontFamily="Lato"
                color={theme.palette.secondary.contrastText}
                textAlign="center"
              >
                Name: James Chikelu
              </Box>
              <Box
                mb={2}
                fontWeight="700"
                fontSize={matches ? "13px" : "16px"}
                fontFamily="Lato"
                color={theme.palette.secondary.contrastText}
                textAlign="center"
              >
                Position: Co-founder & COO
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              p={1}
              height="100%"
              borderLeft="5px solid #48007C"
            >
              <Box align="center" mt={1}>
                <img width="90px" src="/images/person.png" alt="" />
              </Box>
              <Box
                mt={2}
                fontWeight="700"
                fontSize={matches ? "13px" : "16px"}
                fontFamily="Lato"
                color={theme.palette.secondary.contrastText}
                textAlign="center"
              >
                Name: James Chikelu
              </Box>
              <Box
                mb={2}
                fontWeight="700"
                fontSize={matches ? "13px" : "16px"}
                fontFamily="Lato"
                color={theme.palette.secondary.contrastText}
                textAlign="center"
              >
                Position: Co-founder & COO
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box
          mb={4}
          mt={7}
          fontWeight="700"
          fontSize={matches ? "30px" : "50px"}
          fontFamily="Lato"
          color={theme.palette.secondary.contrastText}
          textAlign="center"
        >
          KORAPLAY INVESTORS AND PARTNERS
        </Box>
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
              <img
                height={matches ? "120px" : "auto"}
                src={partnerImg1}
                alt=""
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box align="center">
              <img
                height={matches ? "120px" : "auto"}
                src={partnerImg2}
                alt=""
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box align="center">
              <img
                height={matches ? "120px" : "auto"}
                src={partnerImg3}
                alt=""
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box align="center">
              <img
                height={matches ? "120px" : "auto"}
                src={partnerImg4}
                alt=""
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box align="center">
              <img
                height={matches ? "120px" : "auto"}
                src={partnerImg5}
                alt=""
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box align="center">
              <img
                height={matches ? "120px" : "auto"}
                src={partnerImg6}
                alt=""
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box align="center">
              <img
                height={matches ? "120px" : "auto"}
                src={partnerImg7}
                alt=""
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box align="center">
              <img
                height={matches ? "120px" : "auto"}
                src={partnerImg8}
                alt=""
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box align="center">
              <img
                height={matches ? "120px" : "auto"}
                src={partnerImg9}
                alt=""
              />
            </Box>
          </Grid>
        </Grid>
        {/* <Grid container style={{ justifyContent: "space-around" }}>
          <Grid item xs={11} sm={11} md={5}>
            <Box>
              <Box
                fontSize={matches1 ? "50px" : "72px"}
                fontWeight="900"
                color="primary.main"
                textAlign={matches1 ? "center" : "left"}
              >
                Lets Join Our Network Community
              </Box>
              <Box
                fontSize="20px"
                width={matches ? "auto" : "426px"}
                fontWeight="400"
                mt={1}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.{" "}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box
              width={matches ? "auto" : "602px"}
              mt={matches ? 5 : 0}
              borderRadius="28px"
              height={matches1 ? "400px" : "461px"}
              style={{
                background: "linear-gradient(180deg, #48007C 0%, #6100BF 100%)",
              }}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Grid container style={{ justifyContent: "center" }}>
                <Grid
                  item
                  xs={12}
                  sm={11}
                  md={11}
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginBottom: "20px",
                  }}
                >
                  <Box
                    width={matches1 ? "80px" : "115px"}
                    height={matches1 ? "80px" : "115px"}
                    borderRadius="16px"
                    border="1px solid #FFFFFF"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <a
                      href="#linkedin"
                      target="_blank"
                      className={classes.hover}
                    >
                      <img
                        width={matches1 ? "35px" : "47.04px"}
                        height={matches1 ? "35px" : "47.04px"}
                        src={linkedin}
                        alt=""
                      />
                    </a>
                  </Box>
                  <Box
                    width={matches1 ? "80px" : "115px"}
                    height={matches1 ? "80px" : "115px"}
                    borderRadius="16px"
                    border="1px solid #FFFFFF"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <a
                      href="#telegram"
                      target="_blank"
                      className={classes.hover}
                    >
                      <BsTelegram
                        fontSize={matches1 ? "35px" : "47.04px"}
                        color="#fff"
                      />
                    </a>
                  </Box>

                  <Box
                    width={matches1 ? "80px" : "115px"}
                    height={matches1 ? "80px" : "115px"}
                    borderRadius="16px"
                    border="1px solid #FFFFFF"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    style={{ cursor: "pointer" }}
                  >
                    <a
                      href="#facebook"
                      target="_blank"
                      className={classes.hover}
                    >
                      <BsFacebook
                        fontSize={matches1 ? "35px" : "47.04px"}
                        color="#fff"
                      />
                    </a>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={11}
                  md={11}
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "25px",
                  }}
                >
                  <Box
                    width={matches1 ? "80px" : "115px"}
                    height={matches1 ? "80px" : "115px"}
                    borderRadius="16px"
                    border="1px solid #FFFFFF"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <a
                      href="#twitter"
                      target="_blank"
                      className={classes.hover}
                    >
                      <AiFillTwitterCircle
                        fontSize={matches1 ? "35px" : "47.04px"}
                        color="#fff"
                      />
                    </a>
                  </Box>
                  <Box
                    width={matches1 ? "80px" : "115px"}
                    height={matches1 ? "80px" : "115px"}
                    borderRadius="16px"
                    border="1px solid #FFFFFF"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    style={{ cursor: "pointer" }}
                  >
                    <a href="#reddit" target="_blank" className={classes.hover}>
                      <BsReddit
                        fontSize={matches1 ? "35px" : "47.04px"}
                        color="#fff"
                      />
                    </a>
                  </Box>

                  <Box
                    width={matches1 ? "80px" : "115px"}
                    height={matches1 ? "80px" : "115px"}
                    borderRadius="16px"
                    border="1px solid #FFFFFF"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    style={{ cursor: "pointer" }}
                  >
                    <a
                      href="#youtube"
                      target="_blank"
                      className={classes.hover}
                    >
                      <BsYoutube
                        fontSize={matches1 ? "35px" : "47.04px"}
                        color="#fff"
                      />
                    </a>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid> */}

        {/* <Box mt={10} pt={5}>
          <Box
            fontSize={matches1 ? "50px" : "72px"}
            fontWeight="900"
            color="primary.main"
            textAlign="center"
          >
            Build from within
          </Box>
          <Grid container style={{ justifyContent: "center" }}>
            <Grid
              item
              xs={11}
              sm={12}
              md={4}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                mt={5}
                width="364px"
                height={matches1 ? "auto" : "380px"}
                bgcolo="#FFF"
                boxShadow="0px 0px 11px rgba(0, 0, 0, 0.25)"
                borderTop="6px solid #8800FF"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={(2, 4, 2, 4)}
              >
                <Box fontSize="24px" fontWeight="700" color="primary.main">
                  Run a node
                </Box>
                <Box
                  fontSize="18px"
                  fontWeight="400"
                  textAlign="center"
                  mt={2}
                  mb={4}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.{" "}
                </Box>
                <Button className={classes.btn}>Plugin</Button>
              </Box>
            </Grid>
            <Grid
              item
              xs={11}
              sm={12}
              md={4}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                mt={5}
                width="364px"
                height={matches1 ? "auto" : "380px"}
                bgcolo="#FFF"
                boxShadow="0px 0px 11px rgba(0, 0, 0, 0.25)"
                borderTop="6px solid #8800FF"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={(2, 4, 2, 4)}
              >
                <Box fontSize="24px" fontWeight="700" color="primary.main">
                  Chain Relay
                </Box>
                <Box
                  fontSize="18px"
                  fontWeight="400"
                  textAlign="center"
                  mt={2}
                  mb={4}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.{" "}
                </Box>
                <Button className={classes.btn}>Bond Now</Button>
              </Box>
            </Grid>
            <Grid
              item
              xs={11}
              sm={12}
              md={4}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                mt={5}
                width="364px"
                height={matches1 ? "auto" : "380px"}
                bgcolo="#FFF"
                boxShadow="0px 0px 11px rgba(0, 0, 0, 0.25)"
                borderTop="6px solid #8800FF"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={(2, 4, 2, 4)}
              >
                <Box fontSize="24px" fontWeight="700" color="primary.main">
                  DAO
                </Box>
                <Box
                  fontSize="18px"
                  fontWeight="400"
                  textAlign="center"
                  mt={2}
                  mb={4}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.{" "}
                </Box>
                <Button className={classes.btn}>Join the DAO</Button>
              </Box>
            </Grid>
          </Grid>

          <Grid container style={{ justifyContent: "center" }}>
            <Grid
              item
              xs={11}
              sm={12}
              md={4}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                mt={5}
                width="364px"
                height={matches1 ? "auto" : "380px"}
                bgcolo="#FFF"
                boxShadow="0px 0px 11px rgba(0, 0, 0, 0.25)"
                borderTop="6px solid #8800FF"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={(2, 4, 2, 4)}
              >
                <Box fontSize="24px" fontWeight="700" color="primary.main">
                  Content creator
                </Box>
                <Box
                  fontSize="18px"
                  fontWeight="400"
                  textAlign="center"
                  mt={2}
                  mb={4}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.{" "}
                </Box>
                <Button className={classes.btn}>Apply Today</Button>
              </Box>
            </Grid>
            <Grid
              item
              xs={11}
              sm={12}
              md={4}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                mt={5}
                width="364px"
                height={matches1 ? "auto" : "380px"}
                bgcolo="#FFF"
                boxShadow="0px 0px 11px rgba(0, 0, 0, 0.25)"
                borderTop="6px solid #8800FF"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={(2, 4, 2, 4)}
              >
                <Box fontSize="24px" fontWeight="700" color="primary.main">
                  Moderator
                </Box>
                <Box
                  fontSize="18px"
                  fontWeight="400"
                  textAlign="center"
                  mt={2}
                  mb={4}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.{" "}
                </Box>
                <Button className={classes.btn}>Apply Today</Button>
              </Box>
            </Grid>
            <Grid
              item
              xs={11}
              sm={12}
              md={4}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                mt={5}
                width="364px"
                height={matches1 ? "auto" : "380px"}
                bgcolo="#FFF"
                boxShadow="0px 0px 11px rgba(0, 0, 0, 0.25)"
                borderTop="6px solid #8800FF"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={(2, 4, 2, 4)}
              >
                <Box fontSize="24px" fontWeight="700" color="primary.main">
                  Community leader
                </Box>
                <Box
                  fontSize="18px"
                  fontWeight="400"
                  textAlign="center"
                  mt={2}
                  mb={4}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.{" "}
                </Box>
                <Button className={classes.btn}>Apply Today</Button>
              </Box>
            </Grid>
          </Grid>
        </Box> */}

        {/* <Box mt={15} pt={5}>
          <Box
            fontSize={matches1 ? "50px" : "72px"}
            fontWeight="900"
            color="primary.main"
            textAlign="center"
          >
            Watch with us
          </Box>
          <Grid
            container
            spacing={matches ? 0 : 5}
            style={{ justifyContent: "center" }}
          >
            <Grid
              item
              xs={11}
              sm={11}
              md={4}
              style={{ justifyContent: "center", marginTop: "20px" }}
            >
              <CardMedia
                component="video"
                className={classes.media}
                width={matches ? "90%" : "90%"}
                image={Skateboarding}
                controls
                // autoPlay
              />
            </Grid>
            <Grid
              item
              xs={11}
              sm={11}
              md={4}
              style={{ justifyContent: "center", marginTop: "20px" }}
            >
              <CardMedia
                component="video"
                className={classes.media}
                width={matches ? "90%" : "90%"}
                image={Skateboarding}
                controls
                // autoPlay
              />
            </Grid>
          </Grid>

          <Grid
            spacing={matches ? 0 : 5}
            container
            style={{ justifyContent: "center", marginTop: "20px" }}
          >
            <Grid
              item
              xs={11}
              sm={11}
              md={4}
              style={{ justifyContent: "center", marginTop: "20px" }}
            >
              <CardMedia
                component="video"
                className={classes.media}
                width={matches ? "90%" : "90%"}
                image={Skateboarding}
                controls
                // autoPlay
              />
            </Grid>
            <Grid
              item
              xs={11}
              sm={11}
              md={4}
              style={{ justifyContent: "center", marginTop: "20px" }}
            >
              <CardMedia
                component="video"
                className={classes.media}
                width={matches ? "90%" : "90%"}
                image={Skateboarding}
                controls
                // autoPlay
              />
            </Grid>
          </Grid>
        </Box> */}

        {/* <Box mt={15} mb={8} pt={5}>
          <Box
            fontSize="48px"
            fontWeight="900"
            color="primary.main"
            textAlign="center"
          >
            Get App
          </Box>
          <Box display="flex" justifyContent="center">
            <Box
              fontSize="24px"
              fontWeight="400"
              textAlign="center"
              mt={2}
              mb={5}
              width={matches ? "auto" : "880px"}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </Box>
          </Box>

          <Box>
            <Box
              bgcolor="#FFFFFF"
              boxShadow=" 0px 0px 28px rgba(0, 0, 0, 0.25)"
              height={state1 ? "95px" : "auto"}
              p={5}
              mt={3}
            >
              <Box display="flex" justifyContent="space-between">
                <Box
                  fontSize={{ xs: "20px", sm: "24px" }}
                  fontWeight="900"
                  color="primary.main"
                >
                  Key concepts
                </Box>
                {state1 ? (
                  <AiOutlinePlus
                    color="#AD00FF"
                    fontSize="24px"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      handleToggle("first");
                    }}
                  />
                ) : (
                  <RiSubtractLine
                    color="#AD00FF"
                    fontSize="30px"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      handleToggle("first");
                    }}
                  />
                )}
              </Box>
              <Box display={state1 ? "none" : "block"}>
                <Box fontSize="18px" fontWeight="400" mt={2} mb={2}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </Box>
                <Button className={classes.btn}>Stay Safe</Button>
              </Box>
            </Box>

            <Box
              bgcolor="#FFFFFF"
              boxShadow=" 0px 0px 28px rgba(0, 0, 0, 0.25)"
              height={state2 ? "95px" : "auto"}
              p={5}
              mt={3}
            >
              <Box display="flex" justifyContent="space-between">
                <Box
                  fontSize={{ xs: "20px", sm: "24px" }}
                  fontWeight="900"
                  color="primary.main"
                >
                  Wallets
                </Box>
                {state2 ? (
                  <AiOutlinePlus
                    color="#AD00FF"
                    fontSize="24px"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      handleToggle("second");
                    }}
                  />
                ) : (
                  <RiSubtractLine
                    color="#AD00FF"
                    fontSize="30px"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      handleToggle("second");
                    }}
                  />
                )}
              </Box>
              <Box display={state2 ? "none" : "block"}>
                <Box fontSize="18px" fontWeight="400" mt={2} mb={2}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </Box>
                <Button className={classes.btn}>Stay Safe</Button>
              </Box>
            </Box>

            <Box
              bgcolor="#FFFFFF"
              boxShadow=" 0px 0px 28px rgba(0, 0, 0, 0.25)"
              height={state3 ? "95px" : "auto"}
              p={5}
              mt={3}
            >
              <Box display="flex" justifyContent="space-between">
                <Box
                  fontSize={{ xs: "20px", sm: "24px" }}
                  fontWeight="900"
                  color="primary.main"
                >
                  Exchanges
                </Box>
                {state3 ? (
                  <AiOutlinePlus
                    color="#AD00FF"
                    fontSize="24px"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      handleToggle("third");
                    }}
                  />
                ) : (
                  <RiSubtractLine
                    color="#AD00FF"
                    fontSize="30px"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      handleToggle("third");
                    }}
                  />
                )}
              </Box>
              <Box display={state3 ? "none" : "block"}>
                <Box fontSize="18px" fontWeight="400" mt={2} mb={2}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </Box>
                <Button className={classes.btn}>Stay Safe</Button>
              </Box>
            </Box>
          </Box>
        </Box> */}
        <Box
          mb={2}
          mt={4}
          fontWeight="700"
          fontSize={matches ? "30px" : "50px"}
          fontFamily="Lato"
          color={theme.palette.secondary.contrastText}
          textAlign="center"
        >
          CAREERS
        </Box>
        <Box
          textAlign="center"
          mt={1}
          mb={5}
          fontWeight="400"
          fontSize={matches ? "14px" : "18px"}
        >
          Koraplay is a decentralized entertainment creation and streaming
          service that connects content creators and content consumers directly.
          Koraplay is built with exceptional care for all lovers of
          entertainment and houses a plethora of streaming suites. Koraplay will
          be completely decentralized and run by a vibrant, open-source
          community of developers, content creators, and fans all around the
          globe.
          <br />
          Our company is fully remote, and our team is distributed across
          Africa, Asia, Europe, North America, South America, and others.
        </Box>
        <Box
          fontSize={matches1 ? "25px" : "45px"}
          fontWeight="700"
          color="primary.main"
          textAlign="center"
        >
          Join our team, we are hiring
        </Box>
      </Container>
    </Box>
  );
}

export default Community;
