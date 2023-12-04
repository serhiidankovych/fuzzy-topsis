import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Button } from "@mui/material";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import useMediaQuery from "@mui/material/useMediaQuery";

import lendingImage from "../../../assets/lending.png";

function Start({ handleDisplaySetup }) {
  const matches = useMediaQuery("(max-width:1060px)");

  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "15px",
            height: "100vh",
            flexWrap: "wrap",
            marginTop: matches ? "50px" : "0px",
            justifyContent: "space-around",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "500px",
              alignItems: "flex-start",
              justifyContent: " center",
              textAlign: "justify",
              gap: "7px",
            }}
          >
            <Typography
              variant="h2"
              fontFamily={"Inconsolata "}
              sx={{
                fontWeight: "900",
              }}
              color="textPrimary"
            >
              FUZZY TOPSIS
            </Typography>

            <Typography color="textPrimary">
              Fuzzy TOPSIS is a decision-making technique that combines the
              principles of the Technique for Order of Preference by Similarity
              to Ideal Solution with fuzzy set theory.
            </Typography>
            <Typography color="textSecondary" fontFamily={"Inconsolata "}>
              by Hwang and Yoon
            </Typography>
            <Button
              variant="contained"
              color="green"
              endIcon={<IoArrowForwardCircleOutline />}
              onClick={handleDisplaySetup}
            >
              Get Started
            </Button>
          </Box>
          <img
            src={lendingImage}
            alt="lending"
            loading="lazy"
            style={{ maxWidth: " 100%", width: " 450px" }}
          />
        </Box>
      </Box>
    </>
  );
}

export default Start;
