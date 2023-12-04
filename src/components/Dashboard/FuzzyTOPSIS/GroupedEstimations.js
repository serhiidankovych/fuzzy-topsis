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
  Button,
  TablePagination,
} from "@mui/material";

import { IoChevronDown, IoChevronUp } from "react-icons/io5";

export default function GroupedEstimations({
  groupedAlternativesEstimations,
  groupedCriteriaEstimations,
  names,
  criteriaLinguisticTerms,
  alternativesLinguisticTerms,
}) {
  const [isAlternativesDetailsShown, setIsAlternativesDetailsShown] =
    React.useState(false);
  const [isCriteriaDetailsShown, setIsCriteriaDetailsShown] =
    React.useState(false);
  const rowsPerPage = 1;
  const [alternativePage, setAlternativePage] = React.useState(0);
  const [criteriaPage, setCriteriaPage] = React.useState(0);
  const handleChangeAlternativePage = (event, newPage) => {
    setAlternativePage(newPage);
  };
  const handleChangeCriteriaPage = (event, newPage) => {
    setCriteriaPage(newPage);
  };
  const GroupedAlternativesEstimations = names.alternativeNames?.map(
    (alternativeName, alternativeIndex) => {
      const criterionCells = names.criteriaNames?.map(
        (criteriaName, criteriaIndex) => {
          const itemId = `a${alternativeIndex + 1}-c${criteriaIndex + 1}`;

          const linguisticTerms = groupedAlternativesEstimations[
            itemId
          ]?.linguisticTermsId?.map((estimation, estimationIndex) => (
            <div
              key={estimationIndex}
              style={{
                textAlign: "center",
                padding: "5px",
                border: "1px solid #51454f",
                backgroundColor: "#232222",
                margin: "3px",
                borderRadius: "5px",
              }}
            >
              {
                names.linguisticTermsForAlternativesNames[
                  estimation.linguisticTermId
                ]
              }
            </div>
          ));

          return (
            <TableCell
              key={criteriaIndex}
              align="center"
              sx={{ minWidth: "115px" }}
            >
              {linguisticTerms}
            </TableCell>
          );
        }
      );

      return (
        <TableRow key={alternativeIndex}>
          <TableCell align="center" sx={{ minWidth: "115px" }}>
            {alternativeName}
          </TableCell>
          {criterionCells}
        </TableRow>
      );
    }
  );

  const GroupedCriteriaEstimations = names.criteriaNames?.map(
    (criteriaName, criteriaIndex) => {
      const criterionCells = names.expertNames?.map(
        (expertName, expertIndex) => {
          const itemId = `c${criteriaIndex + 1}`;

          const linguisticTerms = (
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
              {
                names.linguisticTermsForCriteriaNames[
                  groupedCriteriaEstimations[itemId]?.linguisticTermsId[
                    expertIndex
                  ].linguisticTermId
                ]
              }
            </div>
          );

          return (
            <TableCell
              key={expertIndex}
              align="center"
              sx={{ minWidth: "115px" }}
            >
              {linguisticTerms}
            </TableCell>
          );
        }
      );

      return (
        <TableRow key={criteriaIndex}>
          <TableCell align="center" sx={{ minWidth: "115px" }}>
            {criteriaName}
          </TableCell>
          {criterionCells}
        </TableRow>
      );
    }
  );

  const GroupedAlternativesEstimationsConfines = names.alternativeNames.map(
    (alternativeName, alternativeIndex) => {
      const criterionCells = names.criteriaNames?.map(
        (criteriaName, criteriaIndex) => {
          const itemId = `a${alternativeIndex + 1}-c${criteriaIndex + 1}`;

          const linguisticTerms = groupedAlternativesEstimations[
            itemId
          ]?.linguisticTermsId?.map((estimation, estimationIndex) => (
            <div
              key={estimationIndex}
              style={{
                textAlign: "center",
                padding: "5px",
                border: "1px solid #51454f",
                backgroundColor: "#232222",
                margin: "3px",
                borderRadius: "5px",
              }}
            >
              {alternativesLinguisticTerms.alternativeLinguisticTerms[
                estimation.linguisticTermId
              ].normalizedConfines
                ?.map((number) => number.toFixed(2))
                .join(", ")}
            </div>
          ));

          return (
            <TableCell
              key={criteriaIndex}
              align="center"
              sx={{ minWidth: "115px" }}
            >
              {linguisticTerms}
            </TableCell>
          );
        }
      );

      return (
        <TableRow key={alternativeIndex}>
          <TableCell align="center" sx={{ minWidth: "115px" }}>
            {alternativeName}
          </TableCell>
          {criterionCells}
        </TableRow>
      );
    }
  );

  const GroupedCriteriaEstimationsConfines = names.criteriaNames?.map(
    (criteriaName, criteriaIndex) => {
      const criterionCells = names.expertNames?.map(
        (expertName, expertIndex) => {
          const itemId = `c${criteriaIndex + 1}`;

          const linguisticTerms = (
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
              {criteriaLinguisticTerms.criteriaLinguisticTerms[
                groupedCriteriaEstimations[itemId]?.linguisticTermsId[
                  expertIndex
                ].linguisticTermId
              ].normalizedConfines
                ?.map((number) => number.toFixed(2))
                .join(", ")}
            </div>
          );

          return (
            <TableCell
              key={expertIndex}
              align="center"
              sx={{ minWidth: "115px" }}
            >
              {linguisticTerms}
            </TableCell>
          );
        }
      );

      return (
        <TableRow key={criteriaIndex}>
          <TableCell align="center" sx={{ minWidth: "115px" }}>
            {criteriaName}
          </TableCell>
          {criterionCells}
        </TableRow>
      );
    }
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
        <Typography variant="h5">
          Aggregated alternatives estimations
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexWrap: "wrap",
            paddingLeft: "8px",
          }}
        ></Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Alternatives</TableCell>

                {names.criteriaNames?.map((criteriaName, criteriaIndex) => (
                  <TableCell align="center" key={criteriaIndex}>
                    {criteriaName}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {GroupedAlternativesEstimations.slice(
                alternativePage * rowsPerPage,
                alternativePage * rowsPerPage + rowsPerPage
              ).map((row) => row)}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[]}
            component="div"
            count={GroupedAlternativesEstimations.length}
            rowsPerPage={rowsPerPage}
            page={alternativePage}
            onPageChange={handleChangeAlternativePage}
          />
        </TableContainer>

        {isAlternativesDetailsShown && (
          <>
            <Typography variant="h6">Triangular form</Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Alternatives</TableCell>

                    {names.criteriaNames?.map((criteriaName, criteriaIndex) => (
                      <TableCell align="center" key={criteriaIndex}>
                        {criteriaName}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>{GroupedAlternativesEstimationsConfines}</TableBody>
              </Table>
            </TableContainer>
          </>
        )}
        <Button
          color="green"
          startIcon={
            isAlternativesDetailsShown ? <IoChevronUp /> : <IoChevronDown />
          }
          onClick={() => setIsAlternativesDetailsShown((prev) => !prev)}
        >
          {isAlternativesDetailsShown ? "Hide" : "Show"} details
        </Button>
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
        <Typography variant="h5"> Aggregated criteria estimations</Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Criteria</TableCell>
                {names.expertNames?.map((expertName, expertIndex) => (
                  <TableCell align="center" key={expertIndex}>
                    {expertName}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            {/* <TableBody>{GroupedCriteriaEstimations}</TableBody> */}
            <TableBody>
              {GroupedCriteriaEstimations.slice(
                criteriaPage * rowsPerPage,
                criteriaPage * rowsPerPage + rowsPerPage
              ).map((row) => row)}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[]}
            component="div"
            count={GroupedCriteriaEstimations.length}
            rowsPerPage={rowsPerPage}
            page={criteriaPage}
            onPageChange={handleChangeCriteriaPage}
          />
        </TableContainer>

        {isCriteriaDetailsShown && (
          <>
            <Typography variant="h6">Triangular form</Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Criteria</TableCell>
                    {names.expertNames?.map((expertName, expertIndex) => (
                      <TableCell align="center" key={expertIndex}>
                        {expertName}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>{GroupedCriteriaEstimationsConfines}</TableBody>
              </Table>
            </TableContainer>
          </>
        )}
        <Button
          color="green"
          startIcon={
            isCriteriaDetailsShown ? <IoChevronUp /> : <IoChevronDown />
          }
          onClick={() => setIsCriteriaDetailsShown((prev) => !prev)}
        >
          {isCriteriaDetailsShown ? "Hide" : "Show"} details
        </Button>
      </Box>
    </>
  );
}
