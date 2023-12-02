import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";

import { BsGithub } from "react-icons/bs";
export default function Footer() {
  const redirectToGitHub = () => {
    const githubUrl = "https://github.com/serhiidankovych/fuzzy-topsis";

    window.open(githubUrl, "_blank");
  };
  return (
    <Box
      sx={{
        padding: "20px 0 20px 0",
        marginBottom: "0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <IconButton
        aria-label="menu"
        color="green"
        size="large"
        onClick={redirectToGitHub}
      >
        <BsGithub />
      </IconButton>
      <Box flexGrow={1}>
        <Typography
          gutterBottom
          align="left"
          sx={{ margin: "0px" }}
          color="textSecondary"
          fontFamily={"Inconsolata "}
        >
          Copyright (c) {new Date().getFullYear()}
        </Typography>
        <Typography
          color="textSecondary"
          fontFamily={"Inconsolata "}
          align="left"
        >
          DANKOVYCH SERHII
        </Typography>
      </Box>
    </Box>
  );
}
