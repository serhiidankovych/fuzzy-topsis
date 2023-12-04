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
import { IoTrendingDown, IoTrendingUp } from "react-icons/io5";
export default function AveragedEstimations({
  names,
  criteriaAveragedEstimations,
  alternativesAveragedEstimations,
  optimization,
}) {
  const [transposed, setTransposed] = useState(false);
  const toggleTransposition = () => {
    setTransposed(!transposed);
  };

  const CriteriaAveragedEstimations = names.criteriaNames?.map(
    (criteriaName, criteriaIndex) => {
      const itemId = `c${criteriaIndex + 1}`;

      const criterionCells = (
        <TableRow key={criteriaIndex}>
          <TableCell align="center">{criteriaName}</TableCell>
          <TableCell align="center">
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
              {criteriaAveragedEstimations[itemId]
                ?.map((number) => number.toFixed(2))
                .join(", ")}
            </div>
          </TableCell>
          <TableCell align="center">
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
              {optimization[itemId] === "Max" ? (
                <IoTrendingUp />
              ) : (
                <IoTrendingDown />
              )}
            </div>
          </TableCell>
        </TableRow>
      );
      return criterionCells;
    }
  );

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

  const alternativesAveragedEstimationsRows = tableData.map((row, rowIndex) => (
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
            <TableCell key={altIndex} align="center" sx={{ minWidth: "115px" }}>
              {renderLinguisticTerms(
                alternativesAveragedEstimations[alternative.itemId]
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
                alternativesAveragedEstimations[criterion.itemId]
              )}
            </TableCell>
          ))}
    </TableRow>
  ));
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
            Averaged alternatives estimations
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
            <TableBody>{alternativesAveragedEstimationsRows}</TableBody>
          </Table>
        </TableContainer>
      </Box>

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
        <Typography variant="h5">Averaged criteria estimations</Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Criteria</TableCell>
                <TableCell align="center">Weigth</TableCell>
                <TableCell align="center">Optimization</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{CriteriaAveragedEstimations}</TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
