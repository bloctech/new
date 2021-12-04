import * as React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import MinimizeIcon from "@material-ui/icons/Minimize";

export default function RoadMapAccordian() {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState(false);
  const matches = useMediaQuery("(max-width:750px)");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Box>
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
                expanded ? (
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
                Supporting Ethereum bridge proofs in Chainweb 2.4
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </>
  );
}
