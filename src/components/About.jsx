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
import RoadMap from "./Roadmap";
import FAQ from "./FAQ";

function About() {
  const theme = useTheme();
  const matches = useMediaQuery("(max-width:750px)");

  return (
    <>
      <Box>
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
            p={3}
          >
            <Box
              fontSize={{ sm: "25px", md: "40px" }}
              color="#fff"
              fontWeight="700"
            >
              THE FUTURE OF ENTERTAINMENT CREATION AND STREAMING POWERED BY
              BLOCKCHAIN
            </Box>
            <Box fontSize={{ sm: "18px", md: "25px" }} color="#fff" mt={2}>
              Koraplay is a decentralized multi-chain multimedia entertainment
              creation and streaming platform built for you.
            </Box>
            <Box
              fontSize={{ sm: "14px", md: "18px" }}
              color="#fff"
              mt={2}
              fontWeight="300"
            >
              Koraplay brings you a decentralized platform for creating and
              streaming multimedia entertainment content. The platform, built on
              blockchain technology, offers users a suite of entertainment tools
              ranging from music, short videos, live broadcasts, VRs, and other
              forms of peer-to-peer media streaming. At full capacity, users can
              capture exciting moments and communicate with friends and fans on
              the platform. Koraplay promotes rewards for creativity and effort;
              by giving everyone the freedom and fun to create, share, own,
              stream and monetize unlimited multimedia entertainment contents in
              a wholly decentralized space. The community ensures the efficient
              operation of the platform and each compensated according to the
              value they bring to the platform while enjoying media content.
            </Box>
          </Box>
          <Box px={5}>
            <Box
              my={4}
              fontWeight="700"
              fontSize={matches ? "30px" : "45px"}
              fontFamily="Lato"
              color={theme.palette.secondary.contrastText}
            >
              ABOUT US
            </Box>
            <Grid spacing={4} container>
              <Grid item xs={12} sm={6}>
                <Box
                  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                  p={3}
                  height="100%"
                >
                  <Box
                    mt={2}
                    fontWeight="700"
                    fontSize={matches ? "20px" : "22px"}
                    fontFamily="Lato"
                    color={theme.palette.secondary.contrastText}
                    textAlign="center"
                  >
                    Mission
                  </Box>
                  <Box align="center" mt={1}>
                    <img width="90px" src="/images/mission.png" alt="" />
                  </Box>
                  <Box
                    textAlign="center"
                    my={2}
                    fontWeight="400"
                    fontSize={matches ? "14px" : "18px"}
                  >
                    Koraplay accelerates the global adoption of blockchain
                    technology by deploying it into entertainment thereby{" "}
                    <b>
                      {" "}
                      bringing crypto exposure to the over 4 billion industry
                      users{" "}
                    </b>{" "}
                    within an incentive-backed platform, which optimally rewards
                    every participant.
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box
                  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                  p={3}
                  height="100%"
                >
                  <Box
                    mt={2}
                    fontWeight="700"
                    fontSize={matches ? "20px" : "22px"}
                    fontFamily="Lato"
                    color={theme.palette.secondary.contrastText}
                    textAlign="center"
                  >
                    Vision
                  </Box>
                  <Box align="center" mt={1}>
                    <img width="90px" src="/images/vision.png" alt="" />
                  </Box>
                  <Box
                    textAlign="center"
                    my={2}
                    fontWeight="400"
                    fontSize={matches ? "14px" : "18px"}
                  >
                    Our vision is to{" "}
                    <b>
                      create the most rewarding fusion of blockchain and
                      entertainment{" "}
                    </b>
                    creation and streaming product suites for the 21st century
                    and beyond, and{" "}
                    <b>
                      {" "}
                      reshape the way individuals, creators and small businesses
                      interact with one another.
                    </b>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Box
              mt={4}
              fontWeight="700"
              fontSize={matches ? "30px" : "45px"}
              fontFamily="Lato"
              color={theme.palette.secondary.contrastText}
              textAlign="center"
            >
              PRODUCT SUITES
            </Box>
            <Box align="center" mt={4}>
              <img
                width={matches ? "100%" : "40%"}
                src="/images/product-suites.png"
                alt=""
              />
            </Box>
            <Grid spacing={4} container>
              <Grid item xs={12} sm={4}>
                <Box
                  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                  p={3}
                  height="100%"
                >
                  <Box
                    mt={2}
                    fontWeight="700"
                    fontSize={matches ? "20px" : "22px"}
                    fontFamily="Lato"
                    color={theme.palette.secondary.contrastText}
                    textAlign="center"
                  >
                    MUSIC
                  </Box>
                  <Box align="center" mt={1}>
                    <img width="90px" src="/images/music.png" alt="" />
                  </Box>
                  <Box
                    textAlign="center"
                    my={2}
                    fontWeight="400"
                    fontSize={matches ? "14px" : "18px"}
                  >
                    With Koraplay music, you can create new music and upload it
                    for your fans. Fans can discover content according to their
                    preference and enjoy playlist suggestions based on their
                    listening history. In addition, Koraplay offers a platform
                    for upcoming artists to grow and provides established
                    artists a medium to reach and engage their fans directly.
                    Sing it and upload it, share, collaborate and monetize from
                    your smartphone.
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                  p={3}
                  height="100%"
                >
                  <Box
                    mt={2}
                    fontWeight="700"
                    fontSize={matches ? "20px" : "22px"}
                    fontFamily="Lato"
                    color={theme.palette.secondary.contrastText}
                    textAlign="center"
                  >
                    SHORT VIDEOS
                  </Box>
                  <Box align="center" mt={2}>
                    <img width="80px" src="/images/short-videos.png" alt="" />
                  </Box>
                  <Box
                    textAlign="center"
                    my={2}
                    fontWeight="400"
                    fontSize={matches ? "14px" : "18px"}
                  >
                    Create videos about your interests, daily activities, and
                    many more; there is so much to share. Short, exciting videos
                    to keep your followers engaged and amass more followership.
                    Monetize your content as the creator and monetize your
                    viewing and sharing efforts as the viewer. With Koraplay
                    shorts, there is a reward for everyone. Conveniently capture
                    the most exciting moments of your life, whether with friends
                    or family. Just MAKE IT, OWN IT, STREAM IT or SELL IT; you
                    can turn your short videos into NFTs.
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                  p={3}
                  height="100%"
                >
                  <Box
                    mt={2}
                    fontWeight="700"
                    fontSize={matches ? "20px" : "22px"}
                    fontFamily="Lato"
                    color={theme.palette.secondary.contrastText}
                    textAlign="center"
                  >
                    AR/VR CONTENTS
                  </Box>
                  <Box align="center" mt={1}>
                    <img width="80px" src="/images/ar-vr.png" alt="" />
                  </Box>
                  <Box
                    textAlign="center"
                    my={2}
                    fontWeight="400"
                    fontSize={matches ? "14px" : "18px"}
                  >
                    Take music listening, short videos, and so many contents to
                    a new entertaining level using Koraplay’s AR/VR tools suite.
                    Leverage the exciting tools on the platform to create
                    content that will wow your followers. Our AR/VR tools cut
                    across various applications, and they are for everyone.
                    Without any prior knowledge, you can start creating AR/VR
                    content from your smartphone or desktop. Start here.
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                  p={3}
                  height="100%"
                >
                  <Box
                    mt={2}
                    fontWeight="700"
                    fontSize={matches ? "20px" : "22px"}
                    fontFamily="Lato"
                    color={theme.palette.secondary.contrastText}
                    textAlign="center"
                  >
                    LIVE BROADCAST
                  </Box>
                  <Box align="center" mt={1}>
                    <img src={cardLogo1} alt="" />
                  </Box>
                  <Box
                    textAlign="center"
                    my={2}
                    fontWeight="400"
                    fontSize={matches ? "14px" : "18px"}
                  >
                    Let your followers keep up with your activities on the go
                    using Koraplay live. Capture exciting moments and share with
                    your community of followers in real-time. In addition, they
                    can share and invite others to join the fun. Go live and
                    show the world what is happening around you, discuss topics
                    of interest and get live reactions. Try it today
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                  p={3}
                  height="100%"
                >
                  <Box
                    mt={2}
                    fontWeight="700"
                    fontSize={matches ? "20px" : "22px"}
                    fontFamily="Lato"
                    color={theme.palette.secondary.contrastText}
                    textAlign="center"
                  >
                    DEFI & NFT
                  </Box>
                  <Box align="center" mt={1}>
                    <img src={cardLogo1} alt="" />
                  </Box>
                  <Box
                    textAlign="center"
                    my={2}
                    fontWeight="400"
                    fontSize={matches ? "14px" : "18px"}
                  >
                    Koraplay integrates decentralised finance capabilities and
                    gives you a seamless exposure to everyday use of crypto
                    currency. With koraplay, you can explore, create, sell and
                    buy NFT’s seamlessly right from the streaming app.
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                  p={3}
                  height="100%"
                >
                  <Box
                    mt={2}
                    fontWeight="700"
                    fontSize={matches ? "20px" : "22px"}
                    fontFamily="Lato"
                    color={theme.palette.secondary.contrastText}
                    textAlign="center"
                  >
                    SPACES
                  </Box>
                  <Box align="center" mt={1}>
                    <img src={cardLogo1} alt="" />
                  </Box>
                  <Box
                    textAlign="center"
                    my={2}
                    fontWeight="400"
                    fontSize={matches ? "14px" : "18px"}
                  >
                    With Koraplay you as an individual, a creator, or a small
                    business can now create a space and decide on your audience
                    and monetise directly if you so desire.
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Box
              my={6}
              fontWeight="700"
              fontSize={matches ? "25px" : "40px"}
              fontFamily="Lato"
              color={theme.palette.secondary.contrastText}
              textAlign="center"
            >
              PROBLEMS WITH TRADITIONAL STREAMING SERVICES
            </Box>
            <Grid spacing={4} container>
              <Grid item xs={12} sm={4}>
                <Box
                  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                  p={3}
                  height="100%"
                >
                  <Box
                    mt={2}
                    fontWeight="700"
                    fontSize={matches ? "20px" : "22px"}
                    fontFamily="Lato"
                    color={theme.palette.secondary.contrastText}
                    textAlign="center"
                  >
                    CENTRALIZED CONTROL
                  </Box>
                  <Box align="center" mt={1}>
                    <img width="90px" src="/images/mission.png" alt="" />
                  </Box>
                  <Box
                    textAlign="center"
                    my={2}
                    fontWeight="400"
                    fontSize={matches ? "14px" : "18px"}
                  >
                    There is far-reaching control with centralized platforms;
                    users’ content on many centralized social networks does not
                    explicitly belong to the creators. Instead, users’ contents
                    technically belong to the platforms. They reserve the right
                    to shut a user out of their space at their discretion. Thus,
                    a user is practically at the mercy of the platform with no
                    control over the administration.
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                  p={3}
                  height="100%"
                >
                  <Box
                    mt={2}
                    fontWeight="700"
                    fontSize={matches ? "20px" : "22px"}
                    fontFamily="Lato"
                    color={theme.palette.secondary.contrastText}
                    textAlign="center"
                  >
                    COSTLY INFRASTRUCTURE AND CENTRALIZED DELIVERY NETWORK (CDN)
                    INEFFICIENCIES
                  </Box>
                  <Box align="center" mt={1}>
                    <img width="90px" src="/images/vision.png" alt="" />
                  </Box>
                  <Box
                    textAlign="center"
                    my={2}
                    fontWeight="400"
                    fontSize={matches ? "14px" : "18px"}
                  >
                    CDN networks are geographically suboptimal and often lead to
                    a below-par user experience. It usually results in choppy
                    streams, lousy picture quality, and frequent rebuffering,
                    especially in less developed and highly populated cities. In
                    addition, CDN bandwidths can quickly gulp tens of millions
                    of dollars annually, with colossal maintenance costs. All
                    these represent substantial streaming costs for users.
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                  p={3}
                  height="100%"
                >
                  <Box
                    mt={2}
                    fontWeight="700"
                    fontSize={matches ? "20px" : "22px"}
                    fontFamily="Lato"
                    color={theme.palette.secondary.contrastText}
                    textAlign="center"
                  >
                    LACK OF TRANSPARENCY IN CREATORS’ TRUE EARNINGS, PAYOUTS,
                    AND REWARDS FOR WORK
                  </Box>
                  <Box align="center" mt={1}>
                    <img width="90px" src="/images/vision.png" alt="" />
                  </Box>
                  <Box
                    textAlign="center"
                    my={2}
                    fontWeight="400"
                    fontSize={matches ? "14px" : "18px"}
                  >
                    Globally, the entertainment streaming industry generates
                    much revenue from the diligent works of innovative content
                    creators. However, these creators have little to no control
                    over their content’s distributions and how much their
                    content generates. Moreover, they do not have enough
                    visibility into who is enjoying their content. In sum, we
                    see a lack of clarity and transparency in the mechanisms
                    surrounding content creators’ payouts and rewards for their
                    work.
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                  p={3}
                  height="100%"
                >
                  <Box
                    mt={2}
                    fontWeight="700"
                    fontSize={matches ? "20px" : "22px"}
                    fontFamily="Lato"
                    color={theme.palette.secondary.contrastText}
                    textAlign="center"
                  >
                    DELAYS IN PAYMENT PROCESSING
                  </Box>
                  <Box align="center" mt={1}>
                    <img width="90px" src="/images/vision.png" alt="" />
                  </Box>
                  <Box
                    textAlign="center"
                    my={2}
                    fontWeight="400"
                    fontSize={matches ? "14px" : "18px"}
                  >
                    The structured level of intermediaries adds another layer of
                    problem for creators as it results to payment delays.
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                  p={3}
                  height="100%"
                >
                  <Box
                    mt={2}
                    fontWeight="700"
                    fontSize={matches ? "20px" : "22px"}
                    fontFamily="Lato"
                    color={theme.palette.secondary.contrastText}
                    textAlign="center"
                  >
                    SCALABILITY
                  </Box>
                  <Box align="center" mt={1}>
                    <img width="90px" src="/images/vision.png" alt="" />
                  </Box>
                  <Box
                    textAlign="center"
                    my={2}
                    fontWeight="400"
                    fontSize={matches ? "14px" : "18px"}
                  >
                    Centralized Delivery Networks used by centralized streaming
                    platforms are prone to scalability challenges. The direct
                    effect is a poor user experience for creators and streamers.
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                  p={3}
                  height="100%"
                >
                  <Box
                    mt={2}
                    fontWeight="700"
                    fontSize={matches ? "20px" : "22px"}
                    fontFamily="Lato"
                    color={theme.palette.secondary.contrastText}
                    textAlign="center"
                  >
                    EXPENSIVE CHARGES
                  </Box>
                  <Box align="center" mt={1}>
                    <img width="90px" src="/images/vision.png" alt="" />
                  </Box>
                  <Box
                    textAlign="center"
                    my={2}
                    fontWeight="400"
                    fontSize={matches ? "14px" : "18px"}
                  >
                    With traditional streaming platforms, both content creators
                    and streamers will often have to pay specific subscription
                    fees to perform certain operations within the platform. Not
                    only are these fees very high, but they also get very little
                    in return for their work and creativity.
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                  p={3}
                  height="100%"
                >
                  <Box
                    mt={2}
                    fontWeight="700"
                    fontSize={matches ? "20px" : "22px"}
                    fontFamily="Lato"
                    color={theme.palette.secondary.contrastText}
                    textAlign="center"
                  >
                    USER DATA PRIVACY ISSUES
                  </Box>
                  <Box align="center" mt={1}>
                    <img width="90px" src="/images/vision.png" alt="" />
                  </Box>
                  <Box
                    textAlign="center"
                    my={2}
                    fontWeight="400"
                    fontSize={matches ? "14px" : "18px"}
                  >
                    User data are often shared across platforms, sometimes for
                    gains accruable to the owners of some centralized platforms.
                    These practices infringe on user privacy, and it is one of
                    the problems of traditional streaming platforms.
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                  p={3}
                  height="100%"
                >
                  <Box
                    mt={2}
                    fontWeight="700"
                    fontSize={matches ? "20px" : "22px"}
                    fontFamily="Lato"
                    color={theme.palette.secondary.contrastText}
                    textAlign="center"
                  >
                    Nonexistent fan earnings and governance
                  </Box>
                  <Box align="center" mt={1}>
                    <img width="90px" src="/images/vision.png" alt="" />
                  </Box>
                  <Box
                    textAlign="center"
                    my={2}
                    fontWeight="400"
                    fontSize={matches ? "14px" : "18px"}
                  >
                    Users of traditional platforms has no say in platform
                    governance and even fans who spend resource to gain internet
                    connection and subscribe to stream derive no economic
                    returns for spending time on these platforms.
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Box
              my={6}
              fontWeight="700"
              fontSize={matches ? "25px" : "40px"}
              fontFamily="Lato"
              color={theme.palette.secondary.contrastText}
              textAlign="center"
            >
              KEY FEATURES
              <br />
              <span
                style={{
                  fontWeight: "700",
                  fontSize: matches ? "18px" : "30px",
                }}
              >
                {" "}
                WHY SHOULD YOU USE KORAPLAY?{" "}
              </span>
            </Box>
            <Grid spacing={4} container>
              <Grid item xs={12} sm={4}>
                <Box
                  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                  p={3}
                  height="100%"
                >
                  <Box
                    mt={2}
                    fontWeight="700"
                    fontSize={matches ? "20px" : "22px"}
                    fontFamily="Lato"
                    color={theme.palette.secondary.contrastText}
                    textAlign="center"
                  >
                    Empowering individuals, Creators and Small businesses
                  </Box>
                  <Box align="center" mt={1}>
                    <img width="90px" src="/images/mission.png" alt="" />
                  </Box>
                  <Box
                    textAlign="center"
                    my={2}
                    fontWeight="400"
                    fontSize={matches ? "14px" : "18px"}
                  >
                    Koraplay is reshaping the way individuals, creators and
                    small businesses interact with the each other over
                    entertainment streaming platforms and within the larger
                    blockchain and crypto ecosystem. We are not only bringing
                    crypto exposure to users of entertainment streaming
                    platforms (be they regular individuals, content creators, or
                    SME businesses) but also unlocking values for all
                    participants by ensuring that creators truly own their
                    contents, determines their audience, pricing etc, small
                    businesses can accept instant micropayments based on
                    automated smart contracts with the added benefit of reduced
                    payment delay, streamers can earn by spending more time
                    streaming. With Koraplay, every user wins.
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                  p={3}
                  height="100%"
                >
                  <Box
                    mt={2}
                    fontWeight="700"
                    fontSize={matches ? "20px" : "22px"}
                    fontFamily="Lato"
                    color={theme.palette.secondary.contrastText}
                    textAlign="center"
                  >
                    Proven Security and Freedom
                  </Box>
                  <Box align="center" mt={1}>
                    <img width="90px" src="/images/mission.png" alt="" />
                  </Box>
                  <Box
                    textAlign="center"
                    my={2}
                    fontWeight="400"
                    fontSize={matches ? "14px" : "18px"}
                  >
                    Koraplay is built for maximum security and freedom and
                    undergoes 24/7 security checks non-stop. We have a dedicated
                    unit whose only job is to keep the Koraplay platform secured
                    24/7. In addition, the platform gives creators and owners of
                    content freedom. In koraplay, they have the means to earn
                    what they feel is suitable for their creativity and engage
                    directly with their fans. This freedom puts an end to artist
                    exploitation by platform owners and record labels.
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                  p={3}
                  height="100%"
                >
                  <Box
                    mt={2}
                    fontWeight="700"
                    fontSize={matches ? "20px" : "22px"}
                    fontFamily="Lato"
                    color={theme.palette.secondary.contrastText}
                    textAlign="center"
                  >
                    Zero cost
                  </Box>
                  <Box align="center" mt={1}>
                    <img width="90px" src="/images/mission.png" alt="" />
                  </Box>
                  <Box
                    textAlign="center"
                    my={2}
                    fontWeight="400"
                    fontSize={matches ? "14px" : "18px"}
                  >
                    With traditional streaming platforms, content creators and
                    streamers often pay very high fees to perform certain
                    operations and yet get very little return for their work and
                    creativity. In addition, subscription fees for specific
                    premium content are also relatively very high. In contrast,
                    with Koraplays’ token incentive-based model, users will not
                    have to worry about subscription fees, as everyone can sign
                    up and use Koraplay for free.
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                  p={3}
                  height="100%"
                >
                  <Box
                    mt={2}
                    fontWeight="700"
                    fontSize={matches ? "20px" : "22px"}
                    fontFamily="Lato"
                    color={theme.palette.secondary.contrastText}
                    textAlign="center"
                  >
                    Governance
                  </Box>
                  <Box align="center" mt={1}>
                    <img width="90px" src="/images/mission.png" alt="" />
                  </Box>
                  <Box
                    textAlign="center"
                    my={2}
                    fontWeight="400"
                    fontSize={matches ? "14px" : "18px"}
                  >
                    Participate in Platform Governance and be part of a vibrant
                    community. Submit proposals and vote on proposals. Together
                    with other vibrant members, you can shape the direction of
                    Koraplay.
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                  p={3}
                  height="100%"
                >
                  <Box
                    mt={2}
                    fontWeight="700"
                    fontSize={matches ? "20px" : "22px"}
                    fontFamily="Lato"
                    color={theme.palette.secondary.contrastText}
                    textAlign="center"
                  >
                    Maximum privacy
                  </Box>
                  <Box align="center" mt={1}>
                    <img width="90px" src="/images/mission.png" alt="" />
                  </Box>
                  <Box
                    textAlign="center"
                    my={2}
                    fontWeight="400"
                    fontSize={matches ? "14px" : "18px"}
                  >
                    Koraplay ensures user privacy and data protection by never
                    asking, collecting, or commercializing any user information
                    without explicit consent.
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Box
                  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                  p={3}
                  height="100%"
                >
                  <Box
                    mt={2}
                    fontWeight="700"
                    fontSize={matches ? "20px" : "22px"}
                    fontFamily="Lato"
                    color={theme.palette.secondary.contrastText}
                    textAlign="center"
                  >
                    Simple, easy to use, and Excellent Quality of Experience
                  </Box>
                  <Box align="center" mt={1}>
                    <img width="90px" src="/images/mission.png" alt="" />
                  </Box>
                  <Box
                    textAlign="center"
                    my={2}
                    fontWeight="400"
                    fontSize={matches ? "14px" : "18px"}
                  >
                    Koraplay does not have any complex configurations. Every
                    operation within Koraplay is simplified to the very basics.
                    With a few clicks of a button on your screen, you can get
                    started and get things done. While others are stuck on
                    quality of service, Koraplay has beyond to guarantee you an
                    excellent quality of experience.
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                  p={3}
                  height="100%"
                >
                  <Box
                    mt={2}
                    fontWeight="700"
                    fontSize={matches ? "20px" : "22px"}
                    fontFamily="Lato"
                    color={theme.palette.secondary.contrastText}
                    textAlign="center"
                  >
                    A comprehensive suite of products
                  </Box>
                  <Box align="center" mt={1}>
                    <img width="90px" src="/images/mission.png" alt="" />
                  </Box>
                  <Box
                    textAlign="center"
                    my={2}
                    fontWeight="400"
                    fontSize={matches ? "14px" : "18px"}
                  >
                    Koraplay packs all your entertainment tools in one place. We
                    aim to serve whatever interests you have—ranging from music,
                    short videos, AR/VR content, nfts, defi, to live streaming
                    and other forms of peer-to-peer connections. It is always
                    excitement with Koraplay, never a dull moment.
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                  p={3}
                  height="100%"
                >
                  <Box
                    mt={2}
                    fontWeight="700"
                    fontSize={matches ? "20px" : "22px"}
                    fontFamily="Lato"
                    color={theme.palette.secondary.contrastText}
                    textAlign="center"
                  >
                    Your Space, Your audience, your work, your reward
                  </Box>
                  <Box align="center" mt={1}>
                    <img width="90px" src="/images/mission.png" alt="" />
                  </Box>
                  <Box
                    textAlign="center"
                    my={2}
                    fontWeight="400"
                    fontSize={matches ? "14px" : "18px"}
                  >
                    Whether you are just a regular individual, a content
                    creator, or a small to medium size business owner, Koraplay
                    puts you in charge of your territory.
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                  p={3}
                  height="100%"
                >
                  <Box
                    mt={2}
                    fontWeight="700"
                    fontSize={matches ? "20px" : "22px"}
                    fontFamily="Lato"
                    color={theme.palette.secondary.contrastText}
                    textAlign="center"
                  >
                    DEFI & NFT
                  </Box>
                  <Box align="center" mt={1}>
                    <img width="90px" src="/images/mission.png" alt="" />
                  </Box>
                  <Box
                    textAlign="center"
                    my={2}
                    fontWeight="400"
                    fontSize={matches ? "14px" : "18px"}
                  >
                    Koraplay integrates decentralised finance capabilities and
                    gives you a seamless exposure to everyday use of crypto
                    currency. With koraplay, you can explore, create, sell and
                    buy NFT’s seamlessly right from the streaming app.
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                  p={3}
                  height="100%"
                >
                  <Box
                    mt={2}
                    fontWeight="700"
                    fontSize={matches ? "20px" : "22px"}
                    fontFamily="Lato"
                    color={theme.palette.secondary.contrastText}
                    textAlign="center"
                  >
                    Speed
                  </Box>
                  <Box align="center" mt={1}>
                    <img width="90px" src="/images/mission.png" alt="" />
                  </Box>
                  <Box
                    textAlign="center"
                    my={2}
                    fontWeight="400"
                    fontSize={matches ? "14px" : "18px"}
                  >
                    Koraplay guarantees maximum speed and scalability.
                    Developers, content creators, streamers, and others stand to
                    leverage the blend of technology at Koraplay for optimal
                    user experience. Information and activities are processed
                    faster than the speed of light.
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                  p={3}
                  height="100%"
                >
                  <Box
                    mt={2}
                    fontWeight="700"
                    fontSize={matches ? "20px" : "22px"}
                    fontFamily="Lato"
                    color={theme.palette.secondary.contrastText}
                    textAlign="center"
                  >
                    Optimal reward
                  </Box>
                  <Box align="center" mt={1}>
                    <img width="90px" src="/images/mission.png" alt="" />
                  </Box>
                  <Box
                    textAlign="center"
                    my={2}
                    fontWeight="400"
                    fontSize={matches ? "14px" : "18px"}
                  >
                    Compared to the traditional streaming platform where
                    artists’ revenue from streams depends on their bargaining
                    power through record labels, Koraplay offers an even playing
                    field for all. With Koraplay, both big and small artists
                    earn revenue from their craft according to their value on
                    such content; thereby, eliminating intermediaries in the
                    distribution process and maximizing artist profits.
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                  p={3}
                  height="100%"
                >
                  <Box
                    mt={2}
                    fontWeight="700"
                    fontSize={matches ? "20px" : "22px"}
                    fontFamily="Lato"
                    color={theme.palette.secondary.contrastText}
                    textAlign="center"
                  >
                    Multi-chain and Interoperability
                  </Box>
                  <Box align="center" mt={1}>
                    <img width="90px" src="/images/mission.png" alt="" />
                  </Box>
                  <Box
                    textAlign="center"
                    my={2}
                    fontWeight="400"
                    fontSize={matches ? "14px" : "18px"}
                  >
                    Koraplay will run on several public chains. First on
                    Ethereum, then subsequent protocol integration into Binance
                    Smart Chain, Solana, Polygon, and more. Thus, the platform’s
                    design supports multichain and interoperability
                    functionalities and capabilities. This ensures you do not
                    need to worry about any limitation of specific blockchains
                    when you communicate, send or receive cryptographic
                    information’s.
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Box
              my={6}
              fontWeight="700"
              fontSize={matches ? "25px" : "40px"}
              fontFamily="Lato"
              color={theme.palette.secondary.contrastText}
              textAlign="center"
            >
              TOKEN FUNCTIONS
            </Box>
            <Grid spacing={4} container>
              <Grid item xs={12} sm={4}>
                <Box
                  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                  p={3}
                  height="100%"
                >
                  <Box
                    mt={2}
                    fontWeight="700"
                    fontSize={matches ? "20px" : "22px"}
                    fontFamily="Lato"
                    color={theme.palette.secondary.contrastText}
                    textAlign="center"
                  >
                    Security & Staking
                  </Box>
                  <Box align="center" mt={1}>
                    <img width="90px" src="/images/mission.png" alt="" />
                  </Box>
                  <Box
                    textAlign="center"
                    my={2}
                    fontWeight="400"
                    fontSize={matches ? "14px" : "18px"}
                  >
                    $Koraplay token holders will be able to stake their token
                    and, in return, earn a share of network fees or revenues
                    generated by the platform. In addition, the protocol will
                    adopt a Proof of stake (POS) and a modified BFT consensus
                    mechanism for additional layer of security.
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                  p={3}
                  height="100%"
                >
                  <Box
                    mt={2}
                    fontWeight="700"
                    fontSize={matches ? "20px" : "22px"}
                    fontFamily="Lato"
                    color={theme.palette.secondary.contrastText}
                    textAlign="center"
                  >
                    Liquidity Mining
                  </Box>
                  <Box align="center" mt={1}>
                    <img width="90px" src="/images/mission.png" alt="" />
                  </Box>
                  <Box
                    textAlign="center"
                    my={2}
                    fontWeight="400"
                    fontSize={matches ? "14px" : "18px"}
                  >
                    Liquidity providers will stake their token assets into the
                    lending pools to enable borrowing and short selling and will
                    be eligible to receive $Koraplay tokens through a liquidity
                    mining program. The liquidity mining program is based on a
                    user’s contribution to the platform and other predetermined
                    parameters.
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box
                  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                  p={3}
                  height="100%"
                >
                  <Box
                    mt={2}
                    fontWeight="700"
                    fontSize={matches ? "20px" : "22px"}
                    fontFamily="Lato"
                    color={theme.palette.secondary.contrastText}
                    textAlign="center"
                  >
                    Governance
                  </Box>
                  <Box align="center" mt={1}>
                    <img width="90px" src="/images/mission.png" alt="" />
                  </Box>
                  <Box
                    textAlign="center"
                    my={2}
                    fontWeight="400"
                    fontSize={matches ? "14px" : "18px"}
                  >
                    $Koraplay token holders will be able to propose and vote on
                    proposals and other governance process of the platform. In
                    this way, token holders can influence product features and
                    other vital parameters and have a voice in the development
                    direction. More tokens mean more voting power.
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <RoadMap />
            <FAQ />
            {/* <Grid spacing={4} container>
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
            </Grid> */}
            {/* <Grid spacing={3} container style={{ marginTop: "90px" }}>
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
            </Grid> */}
            {/* <Grid style={{ marginTop: "90px" }} container>
              <Grid item xs={12} sm={4}>
                <Box
                  fontSize={matches ? "25px" : "45px"}
                  fontWeight="700"
                  fontFamily="Lato"
                  color={theme.palette.secondary.contrastText}
                >
                  The complete package
                </Box>
                <Box
                  mb={matches ? 5 : 0}
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
              </Grid>
              <Grid item xs={12} sm={8}>
                <Grid spacing={3} container>
                  <Grid item xs={12} sm={6}>
                    <Box
                      display="flex"
                      alignItems="center"
                      flexDirection="column"
                      p={3}
                      borderTop="10px solid #AD00FF"
                      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                    >
                      <Box
                        mt={1}
                        fontSize={matches ? "19px" : "24px"}
                        fontWeight="700"
                        fontFamily="Lato"
                        color={theme.palette.secondary.contrastText}
                      >
                        DeFi, NFT & Payments
                      </Box>
                      <Box
                        mt={2}
                        fontSize={matches ? "15px" : "18px"}
                        fontWeight="400"
                      >
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
                        width={matches ? "130px" : "150px"}
                        fontSize={matches ? "16px" : "20px"}
                        textAlign="center"
                        fontWeight="700"
                        fontFamily="Lato"
                        color={theme.palette.primary.contrastText}
                        mt={2}
                        style={{
                          background:
                            "radial-gradient(133.33% 1564.91% at 14.8% 49.12%, #6300C6 0%, #AD00FF 100%)",
                        }}
                      >
                        Build Now
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box
                      display="flex"
                      alignItems="center"
                      flexDirection="column"
                      p={3}
                      borderTop="10px solid #AD00FF"
                      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                    >
                      <Box
                        mt={1}
                        fontSize={matches ? "19px" : "24px"}
                        fontWeight="700"
                        fontFamily="Lato"
                        color={theme.palette.secondary.contrastText}
                      >
                        DeFi, NFT & Payments
                      </Box>
                      <Box
                        mt={2}
                        fontSize={matches ? "15px" : "18px"}
                        fontWeight="400"
                      >
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
                        width={matches ? "130px" : "150px"}
                        fontSize={matches ? "16px" : "20px"}
                        textAlign="center"
                        fontWeight="700"
                        fontFamily="Lato"
                        color={theme.palette.primary.contrastText}
                        mt={2}
                        style={{
                          background:
                            "radial-gradient(133.33% 1564.91% at 14.8% 49.12%, #6300C6 0%, #AD00FF 100%)",
                        }}
                      >
                        Build Now
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box
                      display="flex"
                      alignItems="center"
                      flexDirection="column"
                      p={3}
                      borderTop="10px solid #AD00FF"
                      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                    >
                      <Box
                        mt={1}
                        fontSize={matches ? "19px" : "24px"}
                        fontWeight="700"
                        fontFamily="Lato"
                        color={theme.palette.secondary.contrastText}
                      >
                        DeFi, NFT & Payments
                      </Box>
                      <Box
                        mt={2}
                        fontSize={matches ? "15px" : "18px"}
                        fontWeight="400"
                      >
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
                        width={matches ? "130px" : "150px"}
                        fontSize={matches ? "16px" : "20px"}
                        textAlign="center"
                        fontWeight="700"
                        fontFamily="Lato"
                        color={theme.palette.primary.contrastText}
                        mt={2}
                        style={{
                          background:
                            "radial-gradient(133.33% 1564.91% at 14.8% 49.12%, #6300C6 0%, #AD00FF 100%)",
                        }}
                      >
                        Build Now
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box
                      display="flex"
                      alignItems="center"
                      flexDirection="column"
                      p={3}
                      borderTop="10px solid #AD00FF"
                      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
                    >
                      <Box
                        mt={1}
                        fontSize={matches ? "19px" : "24px"}
                        fontWeight="700"
                        fontFamily="Lato"
                        color={theme.palette.secondary.contrastText}
                      >
                        DeFi, NFT & Payments
                      </Box>
                      <Box
                        mt={2}
                        fontSize={matches ? "15px" : "18px"}
                        fontWeight="400"
                      >
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
                        width={matches ? "130px" : "150px"}
                        fontSize={matches ? "16px" : "20px"}
                        textAlign="center"
                        fontWeight="700"
                        fontFamily="Lato"
                        color={theme.palette.primary.contrastText}
                        mt={2}
                        style={{
                          background:
                            "radial-gradient(133.33% 1564.91% at 14.8% 49.12%, #6300C6 0%, #AD00FF 100%)",
                        }}
                      >
                        Build Now
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid> */}
          </Box>
        </Container>
        <Box
          mt={10}
          pb={matches ? 10 : 20}
          pt={matches ? 15 : 30}
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
            fontSize={matches ? "25px" : "50px"}
            fontWeight="700"
            fontFamily="Lato"
            color={theme.palette.primary.contrastText}
          >
            Lets Join Our Community
          </Box>
          <Box
            mt={2}
            fontSize={matches ? "18px" : "24px"}
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
            width={matches ? "130px" : "150px"}
            fontSize={matches ? "16px" : "20px"}
            textAlign="center"
            fontWeight="700"
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
