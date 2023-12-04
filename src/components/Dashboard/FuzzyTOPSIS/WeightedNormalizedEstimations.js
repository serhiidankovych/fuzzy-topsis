import React, { useState } from "react";
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
} from "@mui/material";
import { IoRepeatSharp } from "react-icons/io5";

export default function WeightedNormalizedEstimations({
  names,
  alternativesWeightedNormalizedEstimations,
}) {
  const [transposed, setTransposed] = useState(false);
  const toggleTransposition = () => {
    setTransposed(!transposed);
  };

  const renderLinguisticTerms = (terms) => (
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
      {terms?.map((number) => number.toFixed(2)).join(", ")}
    </div>
  );

  const tableData = transposed
    ? names.criteriaNames.map((criteriaName, criteriaIndex) => ({
        criteriaName,
        alternatives: names.alternativeNames.map(
          (alternativeName, alternativeIndex) => ({
            alternativeName,
            itemId: `a${alternativeIndex + 1}-c${criteriaIndex + 1}`,
          })
        ),
      }))
    : names.alternativeNames.map((alternativeName, alternativeIndex) => ({
        alternativeName,
        criteria: names.criteriaNames.map((criteriaName, criteriaIndex) => ({
          criteriaName,
          itemId: `a${alternativeIndex + 1}-c${criteriaIndex + 1}`,
        })),
      }));

  const alternativesWeightedNormalizedEstimationsRows = tableData.map(
    (row, rowIndex) => (
      <TableRow key={rowIndex}>
        {transposed ? (
          <TableCell align="center" sx={{ minWidth: "115px" }}>
            {row.criteriaName}
          </TableCell>
        ) : (
          <TableCell align="center" sx={{ minWidth: "115px" }}>
            {row.alternativeName}
          </TableCell>
        )}
        {transposed
          ? row.alternatives.map((alternative, altIndex) => (
              <TableCell
                key={altIndex}
                align="center"
                sx={{ minWidth: "115px" }}
              >
                {renderLinguisticTerms(
                  alternativesWeightedNormalizedEstimations[alternative.itemId]
                )}
              </TableCell>
            ))
          : row.criteria.map((criterion, critIndex) => (
              <TableCell
                key={critIndex}
                align="center"
                sx={{ minWidth: "115px" }}
              >
                {renderLinguisticTerms(
                  alternativesWeightedNormalizedEstimations[criterion.itemId]
                )}
              </TableCell>
            ))}
      </TableRow>
    )
  );
  return (
    <>
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography variant="h5">
            Weighted normalized aletrnatives estimations
          </Typography>
          <IconButton onClick={toggleTransposition} color="green">
            <IoRepeatSharp />
          </IconButton>
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  {transposed ? "Criteria" : "Alternatives"}
                </TableCell>
                {transposed
                  ? names.alternativeNames.map((name, index) => (
                      <TableCell key={index} align="center">
                        {name}
                      </TableCell>
                    ))
                  : names.criteriaNames.map((name, index) => (
                      <TableCell key={index} align="center">
                        {name}
                      </TableCell>
                    ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {alternativesWeightedNormalizedEstimationsRows}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
