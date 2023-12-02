import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { IoMenu } from "react-icons/io5";
import { Container } from "@mui/material";
import { IoTriangleOutline } from "react-icons/io5";

export default function Header({ handleDisplaySetup }) {
  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        padding: "10px 0 10px 0",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            color="secondary"
            sx={{
              fontWeight: "900",
              textAlign: "center",
              fontFamily: "Inconsolata ",
              display: "flex",
              alignItems: "center",
            }}
          >
            <IoTriangleOutline />
            topsis
          </Typography>
          <IconButton onClick={handleDisplaySetup} color="green">
            <IoMenu />
          </IconButton>
        </Box>
      </Container>
    </AppBar>
  );
}
