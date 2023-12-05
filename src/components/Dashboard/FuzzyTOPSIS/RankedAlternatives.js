import React from "react";

import Box from "@mui/material/Box";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  IconButton,
  Button,
} from "@mui/material";
import {
  IoChevronForward,
  IoChevronDown,
  IoChevronUp,
  IoCheckmark,
  IoClose,
} from "react-icons/io5";

export default function RankedAlternatives({ rankedAlternatives, names }) {
  const renderRankValues = (rankedValues) => {
    return rankedValues?.map((rankedValue, rankedValueIndex) => {
      const alternativeKey = rankedValue[0];
      const comparisonSymbol = rankedValue[2];
      const alternativeValue = rankedValue[1];
      const isLastElement = rankedValueIndex === rankedValues.length - 1;

      return (
        <React.Fragment key={alternativeKey}>
          <TableCell align="center" key={rankedValueIndex}>
            <div
              style={{
                textAlign: "center",
                padding: "5px",
                border: "1px solid #51454f",
                backgroundColor: "#232222",
                margin: "3px",
                borderRadius: "5px",
              }}
            >
              {names.alternativeNames[alternativeKey]} (
              {alternativeValue.toFixed(2)})
            </div>
          </TableCell>
          {!isLastElement && (
            <TableCell align="center">
              {comparisonSymbol == ">" ? (
                <IoChevronForward />
              ) : (
                comparisonSymbol
              )}
            </TableCell>
          )}
        </React.Fragment>
      );
    });
  };
  const RankedAlternatives = renderRankValues(rankedAlternatives);
  const RankValues = <TableRow>{RankedAlternatives}</TableRow>;

  return (
    <Box
      component={Paper}
      sx={{
        p: 1.5,
        border: "1px solid #51454f",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        alignItems: "stretch",
        marginTop: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",

          flexWrap: "wrap",
        }}
      >
        <Typography variant="h5">Ranked alternatives</Typography>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableBody>{RankValues}</TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
