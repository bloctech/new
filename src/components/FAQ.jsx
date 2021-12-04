import { Box, Container } from "@material-ui/core";
import * as React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import MinimizeIcon from "@material-ui/icons/Minimize";
function FAQ() {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState(false);
  const matches = useMediaQuery("(max-width:750px)");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box id="faq">
      <Container maxWidth="lg">
        <Box>
          <Box
            mb={2}
            mt={4}
            fontWeight="700"
            fontSize={matches ? "30px" : "50px"}
            fontFamily="Lato"
            color={theme.palette.secondary.contrastText}
            textAlign="center"
          >
            FAQ
          </Box>
          <Box
            borderRadius="0px"
            mt={2}
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
          >
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              style={{ borderRadius: "0px" }}
            >
              <AccordionSummary
                expandIcon={
                  expanded === "panel1" ? (
                    <MinimizeIcon
                      style={{
                        color: theme.palette.primary.main,
                      }}
                    />
                  ) : (
                    <AddIcon
                      style={{
                        color: theme.palette.primary.main,
                      }}
                    />
                  )
                }
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Box
                  fontSize={matches ? "15px" : "20px"}
                  fontFamily="Lato"
                  fontWeight="700"
                  px={2}
                  py={1}
                >
                  1. What is Koraplay
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  pl={2}
                  pb={3}
                  fontSize="16px"
                  fontFamily="Lato"
                  textAlign="left"
                  fontWeight="400"
                >
                  Koraplay is the decentralized entertainment streaming platform
                  and app, which adopts blockchain technology. It offers users
                  the fun and freedom to create, share, distribute, monetize and
                  stream different categories of media content. In addition,
                  users can earn tokens according to their activities on the
                  platform. Koraplay will have web and mobile versions, and it
                  will run on Android OS, iOS, and Windows OS. Koraplay key
                  mission is to increase the adoption of crypto to users of
                  entertainment streaming platforms and unlocking values for all
                  participants
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box
            borderRadius="0px"
            mt={2}
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
          >
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              style={{ borderRadius: "0px" }}
            >
              <AccordionSummary
                expandIcon={
                  expanded === "panel2" ? (
                    <MinimizeIcon
                      style={{
                        color: theme.palette.primary.main,
                      }}
                    />
                  ) : (
                    <AddIcon
                      style={{
                        color: theme.palette.primary.main,
                      }}
                    />
                  )
                }
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Box
                  fontSize={matches ? "15px" : "20px"}
                  fontFamily="Lato"
                  fontWeight="700"
                  px={2}
                  py={1}
                >
                  2. Is Koraplay only beneficial to content creators?
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  pl={2}
                  pb={3}
                  fontSize="16px"
                  fontFamily="Lato"
                  textAlign="left"
                  fontWeight="400"
                >
                  <b>No.</b> Koraplay is built for everyone. Whether you are a
                  content creator or just a content consumer/streamer, there is
                  a reward for you based on your efforts towards the platform’s
                  development. For example, streaming any content on Koraplay
                  enlists you for the “sister” token airdrop. In addition, the
                  more you create, share, and stream on Koraplay, the more you
                  are better off economically. Now you too can make a living by
                  just streaming on Koraplay. <b>Try Koraplay today!</b>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box
            borderRadius="0px"
            mt={2}
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
          >
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              style={{ borderRadius: "0px" }}
            >
              <AccordionSummary
                expandIcon={
                  expanded === "panel3" ? (
                    <MinimizeIcon
                      style={{
                        color: theme.palette.primary.main,
                      }}
                    />
                  ) : (
                    <AddIcon
                      style={{
                        color: theme.palette.primary.main,
                      }}
                    />
                  )
                }
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Box
                  fontSize={matches ? "15px" : "20px"}
                  fontFamily="Lato"
                  fontWeight="700"
                  px={2}
                  py={1}
                >
                  3. What are Koraplay’s success strategies?
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  pl={2}
                  pb={3}
                  fontSize="16px"
                  fontFamily="Lato"
                  textAlign="left"
                  fontWeight="400"
                >
                  <b> A. Utilizing new and emerging technology: </b>Koraplay
                  adopts a blend of Artificial Intelligence, Machine Learning,
                  Virtual and Augmented Realities, and Blockchain to offer the
                  users an unrivalled streaming experience. These intelligent
                  tools will enhance user experience in ways many have not
                  experienced. Furthermore, being in a fast-paced industry, we
                  are open to constantly evolving our products with changing
                  technologies to stay abreast of recent trends.
                  <br />
                  <b> B. Strategic Partnerships:</b> Our business will enter
                  into strategic and valuable partnerships with leading industry
                  players, influencers, and brands to ensure that users receive
                  high-quality content. The firm will also collaborate with
                  other businesses to adopt our services for their operations as
                  well.
                  <br />
                  <b>C. Extensive Marketing Strategies: </b>Koraplay will
                  leverage social media and other digital marketing channels as
                  marketing tools to target its potential user base. It will
                  also invest heavily and strategically to become a thought
                  leader in its niche, putting it in the spotlight for
                  prospective users and advertisers. In addition, the company
                  will use a mix of marketing strategies to achieve efficiency
                  and better results.
                  <br />
                  <b>D. Overall Customer Satisfaction: </b>Customer satisfaction
                  is crucial to Koraplay’s continued survival. A secure delivery
                  platform will assist the business in building a loyal customer
                  base that will drive Koraplay to success. In addition, a
                  transparent feedback system for resolving issues timely and
                  adopting a community-based product development strategy, where
                  every feature will be developed based on inputs from actual
                  users, will all ensure success.
                  <br />
                  <b>E. Day-one Attitude: </b>No matter how big we get, we will
                  continuously develop around the goals we had from the first
                  day, offering the best experience for our users.
                  <br />
                  <b> F. Expertise:</b>Sourcing the best talents for internal
                  roles that offer our users the best experiences with
                  professionalism and a winning mentality.
                  <br />
                  <b>G. Proper Sensitization: </b>Given our goal to blend
                  blockchain technology into the media entertainment streaming
                  industry, we aim to engage in the robust education of
                  potential users. Digital tokens are relatively new and are
                  still not widely accepted; therefore, we will adopt measures
                  that will boost public confidence to get people to use our
                  products. In addition, we aim to make our products
                  user-friendly and straightforward without unnecessary
                  ambiguities. <br />
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box
            borderRadius="0px"
            mt={2}
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
          >
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
              style={{ borderRadius: "0px" }}
            >
              <AccordionSummary
                expandIcon={
                  expanded === "panel4" ? (
                    <MinimizeIcon
                      style={{
                        color: theme.palette.primary.main,
                      }}
                    />
                  ) : (
                    <AddIcon
                      style={{
                        color: theme.palette.primary.main,
                      }}
                    />
                  )
                }
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Box
                  fontSize={matches ? "15px" : "20px"}
                  fontFamily="Lato"
                  fontWeight="700"
                  px={2}
                  py={1}
                >
                  4. What is $KORAPLAY Token?
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  pl={2}
                  pb={3}
                  fontSize="16px"
                  fontFamily="Lato"
                  textAlign="left"
                  fontWeight="400"
                >
                  $KORAPLAY token is the governance token of the Koraplay
                  platform. $KORAPLAY functions for governance, voting, and
                  staking within the platform. At full launch, after listing,
                  $KORAPLAY can also be traded on the digital assets’ exchanges
                  such as Binance, Coinbase, and others.
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box
            borderRadius="0px"
            mt={2}
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
          >
            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
              style={{ borderRadius: "0px" }}
            >
              <AccordionSummary
                expandIcon={
                  expanded === "panel5" ? (
                    <MinimizeIcon
                      style={{
                        color: theme.palette.primary.main,
                      }}
                    />
                  ) : (
                    <AddIcon
                      style={{
                        color: theme.palette.primary.main,
                      }}
                    />
                  )
                }
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Box
                  fontSize={matches ? "15px" : "20px"}
                  fontFamily="Lato"
                  fontWeight="700"
                  px={2}
                  py={1}
                >
                  5. Where can I buy $KORAPLAY?
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  pl={2}
                  pb={3}
                  fontSize="16px"
                  fontFamily="Lato"
                  textAlign="left"
                  fontWeight="400"
                >
                  $KORAPLAY tokens can be bought and sold on various DEXs and
                  CEXs.
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box
            borderRadius="0px"
            mt={2}
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
          >
            <Accordion
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
              style={{ borderRadius: "0px" }}
            >
              <AccordionSummary
                expandIcon={
                  expanded === "panel6" ? (
                    <MinimizeIcon
                      style={{
                        color: theme.palette.primary.main,
                      }}
                    />
                  ) : (
                    <AddIcon
                      style={{
                        color: theme.palette.primary.main,
                      }}
                    />
                  )
                }
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Box
                  fontSize={matches ? "15px" : "20px"}
                  fontFamily="Lato"
                  fontWeight="700"
                  px={2}
                  py={1}
                >
                  6. Can I stake $KORAPLAY?
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  pl={2}
                  pb={3}
                  fontSize="16px"
                  fontFamily="Lato"
                  textAlign="left"
                  fontWeight="400"
                >
                  <b>Yes.</b> You can stake $Koraplay and earn from the Network
                  fees. In addition, staking $Koraplay helps add an extra layer
                  of security to the Koraplay Network. Also, by staking
                  $koraplay token you also become eligible to propose and
                  participate in decision making of the platform development
                  directions.
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box
            borderRadius="0px"
            mt={2}
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
          >
            <Accordion
              expanded={expanded === "panel7"}
              onChange={handleChange("panel7")}
              style={{ borderRadius: "0px" }}
            >
              <AccordionSummary
                expandIcon={
                  expanded === "panel7" ? (
                    <MinimizeIcon
                      style={{
                        color: theme.palette.primary.main,
                      }}
                    />
                  ) : (
                    <AddIcon
                      style={{
                        color: theme.palette.primary.main,
                      }}
                    />
                  )
                }
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Box
                  fontSize={matches ? "15px" : "20px"}
                  fontFamily="Lato"
                  fontWeight="700"
                  px={2}
                  py={1}
                >
                  7. Will Koraplay hold funds on its platform?
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  pl={2}
                  pb={3}
                  fontSize="16px"
                  fontFamily="Lato"
                  textAlign="left"
                  fontWeight="400"
                >
                  <b> No.</b> Koraplay is neither a bank nor a vault for fait or
                  digital assets and tokens. Koraplay does not hold users’
                  assets within its platform. The primary product of Koraplay is
                  the entertainment contents available for streaming in the
                  platform. To purchase, unlock or download a premium content,
                  all the user need do is to connect the koraplay API extension
                  to an external wallet usually a DEX wallet such as trust
                  wallet or meta mask and pay for such unlocking. The Koraplay
                  app and platform is designed in such a way that only the exact
                  amount (token quantity) needed for any fee can be successfully
                  processed. Tokens less or greater than the required quantity
                  or amount will not be able to be processed and would display
                  an error text. In this way, we ensure that no users funds are
                  stored in the platform. At the point of registration, users
                  will be required to whitelist their Dex wallet address so that
                  token airdrops and other token payment receipts will accrue
                  directly to the users Dex wallet.
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box
            borderRadius="0px"
            mt={2}
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
          >
            <Accordion
              expanded={expanded === "panel8"}
              onChange={handleChange("panel8")}
              style={{ borderRadius: "0px" }}
            >
              <AccordionSummary
                expandIcon={
                  expanded === "panel8" ? (
                    <MinimizeIcon
                      style={{
                        color: theme.palette.primary.main,
                      }}
                    />
                  ) : (
                    <AddIcon
                      style={{
                        color: theme.palette.primary.main,
                      }}
                    />
                  )
                }
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Box
                  fontSize={matches ? "15px" : "20px"}
                  fontFamily="Lato"
                  fontWeight="700"
                  px={2}
                  py={1}
                >
                  8. Does the Purchase of the $Koraplay token imply buying
                  shares in the business entity?
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  pl={2}
                  pb={3}
                  fontSize="16px"
                  fontFamily="Lato"
                  textAlign="left"
                  fontWeight="400"
                >
                  <b> NO. </b>$Koraplay tokens and any other sister tokens are
                  not and will never imply nor translate to shares of the
                  business entity. Hence, buying, selling, or owning the above
                  digital tokens does not mean buying, selling, or holding a
                  share of the entity Koraplay.
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box
            borderRadius="0px"
            mt={2}
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
          >
            <Accordion
              expanded={expanded === "panel9"}
              onChange={handleChange("panel9")}
              style={{ borderRadius: "0px" }}
            >
              <AccordionSummary
                expandIcon={
                  expanded === "panel9" ? (
                    <MinimizeIcon
                      style={{
                        color: theme.palette.primary.main,
                      }}
                    />
                  ) : (
                    <AddIcon
                      style={{
                        color: theme.palette.primary.main,
                      }}
                    />
                  )
                }
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Box
                  fontSize={matches ? "15px" : "20px"}
                  fontFamily="Lato"
                  fontWeight="700"
                  px={2}
                  py={1}
                >
                  9. Is $Koraplay tokens financial security or investment?
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  pl={2}
                  pb={3}
                  fontSize="16px"
                  fontFamily="Lato"
                  textAlign="left"
                  fontWeight="400"
                >
                  <b>NO.</b> $Koraplay tokens and any other sister tokens are
                  not and will never imply nor translate to financial securities
                  or investment. Buying, selling, or owning the above digital
                  tokens do not translate to buying, selling, or owning
                  financial security or investment.
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box
            borderRadius="0px"
            mt={2}
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
          >
            <Accordion
              expanded={expanded === "panel10"}
              onChange={handleChange("panel10")}
              style={{ borderRadius: "0px" }}
            >
              <AccordionSummary
                expandIcon={
                  expanded === "panel10" ? (
                    <MinimizeIcon
                      style={{
                        color: theme.palette.primary.main,
                      }}
                    />
                  ) : (
                    <AddIcon
                      style={{
                        color: theme.palette.primary.main,
                      }}
                    />
                  )
                }
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Box
                  fontSize={matches ? "15px" : "20px"}
                  fontFamily="Lato"
                  fontWeight="700"
                  px={2}
                  py={1}
                >
                  10. What role do the tokens play in your business activity?
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  pl={2}
                  pb={3}
                  fontSize="16px"
                  fontFamily="Lato"
                  textAlign="left"
                  fontWeight="400"
                >
                  The Koraplay network tokens are not shares, financial
                  securities, or an investment of any sort. There are two major
                  roles of the tokens;
                  <br />
                  a. For Proposing changes and voting on in-platform proposals
                  (Governance)
                  <br />
                  b. Other in-platform operations that may require payments
                  (Utilities)
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box
            borderRadius="0px"
            mt={2}
            boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 20px 0px"
          >
            <Accordion
              expanded={expanded === "panel11"}
              onChange={handleChange("panel11")}
              style={{ borderRadius: "0px" }}
            >
              <AccordionSummary
                expandIcon={
                  expanded === "panel11" ? (
                    <MinimizeIcon
                      style={{
                        color: theme.palette.primary.main,
                      }}
                    />
                  ) : (
                    <AddIcon
                      style={{
                        color: theme.palette.primary.main,
                      }}
                    />
                  )
                }
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Box
                  fontSize={matches ? "15px" : "20px"}
                  fontFamily="Lato"
                  fontWeight="700"
                  px={2}
                  py={1}
                >
                  11. Is Koraplay a cryptocurrency investment company?
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  pl={2}
                  pb={3}
                  fontSize="16px"
                  fontFamily="Lato"
                  textAlign="left"
                  fontWeight="400"
                >
                  <b> NO.</b> The Koraplay platform and entity is not an
                  investment company, a bank, financial or crypto asset
                  intermediary, or exchange service provider. We do not hold or
                  invest the funds or digital assets of/for our customers or the
                  users of our streaming platform. We are only an entertainment
                  streaming company using the latest technology to bring the
                  best experience for our users.
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default FAQ;
