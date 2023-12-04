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
} from "@mui/material";

export default function IdealSolutionsDistance({
  alternativesIdealSolutionsDistance,
  names,
}) {
  const renderIdealSolutionsDistanceValues = (idealSolutionsValues) => {
    return Object.values(idealSolutionsValues)?.map(
      (idealSolutionsValue, idealSolutionsValueIndex) => (
        <TableCell align="center" key={idealSolutionsValueIndex}>
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
            {idealSolutionsValue.map((value) => value.toFixed(2)).join(", ")}
          </div>
        </TableCell>
      )
    );
  };
  const IdealSolutionsDistanceNegative = renderIdealSolutionsDistanceValues(
    alternativesIdealSolutionsDistance.negative
  );
  const IdealSolutionsDistancePositive = renderIdealSolutionsDistanceValues(
    alternativesIdealSolutionsDistance.positive
  );

  const IdealSolutionsDistanceValues = (
    <>
      <TableRow>
        <TableCell align="center">DFNIS</TableCell>
        {IdealSolutionsDistanceNegative}
      </TableRow>

      <TableRow>
        <TableCell align="center">DFPIS</TableCell>
        {IdealSolutionsDistancePositive}
      </TableRow>
    </>
  );

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
        alignItems: "flex-start",
        marginTop: "20px",
      }}
    >
      <Typography variant="h5">Distance from the ideal solutions</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Distance type </TableCell>
              {names.criteriaNames?.map(
                (idealSolutionsValue, idealSolutionsValueIndex) => (
                  <TableCell key={idealSolutionsValueIndex} align="center">
                    {idealSolutionsValue}
                  </TableCell>
                )
              )}
            </TableRow>
          </TableHead>
          <TableBody>{IdealSolutionsDistanceValues}</TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
