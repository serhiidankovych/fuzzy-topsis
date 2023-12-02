import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { IoArrowForward, IoArrowBackOutline } from "react-icons/io5";

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useDispatch, useSelector } from "react-redux";
import { setCriteriaConfiguration } from "../../../store/actions/criteriaConfigurationActions";

import {
  generateContrastColor,
  handleLinguisticTermsChange,
  transformToTriangleForm,
  checkLinguisticTermsConfines,
} from "../../../utils/linguisticTermsUtils";

import { showToastMessage } from "../../../utils/toastUtils";

export default function CriteriaConfiguration({ handleSetupStep }) {
  const dispatch = useDispatch();
  const names = useSelector((state) => state.nameConfiguration);

  const generatedCriteriaLinguisticTerms = useSelector(
    (state) => state.criteriaConfiguration
  );

  const [criteria, setCriteria] = React.useState(
    generatedCriteriaLinguisticTerms.criteriaLinguisticTerms || []
  );

  useEffect(() => {
    setCriteria((c) => transformToTriangleForm(c));
  }, []);

  const handleSetCriteria = () => {
    const isValid = checkLinguisticTermsConfines(
      criteria,
      showToastMessage,
      names.linguisticTermsForCriteriaNames
    );
    if (isValid) {
      dispatch(setCriteriaConfiguration(criteria));

      handleSetupStep(true);
    }
  };

  const renderInputs = (criteria, nameType) => {
    return criteria?.map((linguisticTerm, index) => (
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        key={index}
      >
        <TextField
          InputProps={{ inputProps: { min: "0", max: "1000", step: "0.5" } }}
          id={`${nameType}${index + 1}-left`}
          label={names.linguisticTermsForCriteriaNames[index]}
          key={`${nameType}-${index}-left`}
          variant="outlined"
          type="number"
          value={linguisticTerm.confines[0]}
          onChange={(e) =>
            handleLinguisticTermsChange(
              index,
              e.target.value,
              0,
              criteria,
              setCriteria
            )
          }
        />
        <TextField
          InputProps={{ inputProps: { min: "0", max: "1000", step: "0.5" } }}
          id={`${nameType}${index + 1}`}
          key={`${nameType}-${index}-middle`}
          variant="outlined"
          type="number"
          value={linguisticTerm.confines[1]}
          onChange={(e) =>
            handleLinguisticTermsChange(
              index,
              e.target.value,
              1,
              criteria,
              setCriteria
            )
          }
        />
        <TextField
          InputProps={{ inputProps: { min: "0", max: "1000", step: "0.5" } }}
          id={`${nameType}${index + 1}-right`}
          key={`${nameType}-${index}-right`}
          variant="outlined"
          type="number"
          value={linguisticTerm.confines[2]}
          onChange={(e) =>
            handleLinguisticTermsChange(
              index,
              e.target.value,
              2,
              criteria,
              setCriteria
            )
          }
        />
      </Stack>
    ));
  };

  const numberOfSets = criteria?.length;
  const contrastColors = Array.from({ length: numberOfSets }, (_, index) =>
    generateContrastColor(index, numberOfSets)
  );

  return (
    <Box
      sx={{
        p: 1.5,
        border: "1px solid #51454f",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <Typography variant="h6">Provide input criteria LT</Typography>
      <Box
        sx={{
          p: 1.5,
          border: "1px solid #51454f",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {renderInputs(criteria, "criteria")}
      </Box>
      <Typography>Linguistic terms:</Typography>
      <Box
        component="span"
        sx={{
          p: 1.5,
          border: "1px solid #51454f",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "3px",
        }}
      >
        <ResponsiveContainer width="80%" height={150}>
          <ScatterChart>
            <CartesianGrid />
            <XAxis type="number" dataKey="x" />
            <YAxis type="number" dataKey="y" />
            <ZAxis type="number" range={[100]} />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />

            {criteria.map((linguisticTerm, index) => (
              <Scatter
                key={index}
                fill={contrastColors[index]}
                data={linguisticTerm.triangularChart}
                line
              />
            ))}
          </ScatterChart>
        </ResponsiveContainer>
      </Box>
      <Typography>~Linguistic terms:</Typography>
      <Box
        component="span"
        sx={{
          p: 1.5,
          border: "1px solid #51454f",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "3px",
        }}
      >
        <ResponsiveContainer width="80%" height={150}>
          <ScatterChart>
            <CartesianGrid />
            <XAxis type="number" dataKey="x" />
            <YAxis type="number" dataKey="y" />
            <ZAxis type="number" range={[100]} />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />

            {criteria.map((linguisticTerm, index) => (
              <Scatter
                key={index}
                fill={contrastColors[index]}
                data={linguisticTerm.normalizedTriangularChart}
                line
              />
            ))}
          </ScatterChart>
        </ResponsiveContainer>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Button
          variant="contained"
          color="green"
          onClick={() => handleSetupStep(false)}
          startIcon={<IoArrowBackOutline />}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="green"
          onClick={handleSetCriteria}
          endIcon={<IoArrowForward />}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}
