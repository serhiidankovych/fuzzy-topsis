import React from "react";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import { setNumberConfiguration } from "../../../store/actions/numberConfigurationActions";
import { setNameConfiguration } from "../../../store/actions/nameConfigurationActions";
import { setCriteriaConfiguration } from "../../../store/actions/criteriaConfigurationActions";
import { setAlternativeConfiguration } from "../../../store/actions/alternativeConfigurationActions";
import { setCriteriaEstimationConfiguration } from "../../../store/actions/criteriaEstimationConfigurationActions";
import { setExpertsEstimationConfiguration } from "../../../store/actions/expertsEstimationConfigurationActions";
import { setOptimizationConfiguration } from "../../../store/actions/optimizationConfigurationActions";
import { useDispatch } from "react-redux";
import { dataset1 } from "../../../templates/dataset1";
import { dataset2 } from "../../../templates/dataset2";

export default function DatasetConfiguration({ setIsDatasetNotUsed }) {
  const dispatch = useDispatch();

  const handleSetDataset = (dataset) => {
    dispatch(
      setNumberConfiguration(
        dataset.numberOfAlternatives,
        dataset.numberOfCriteria,
        dataset.numberOfLinguisticTermsForAlternatives,
        dataset.numberOfLinguisticTermsForCriteria,
        dataset.numberOfExperts,
        dataset.weightParameter
      )
    );
    const {
      alternativeNames,
      criteriaNames,
      linguisticTermsForAlternativesNames,
      linguisticTermsForCriteriaNames,
      expertNames,
    } = dataset.names;

    dispatch(
      setNameConfiguration(
        alternativeNames,
        criteriaNames,
        linguisticTermsForAlternativesNames,
        linguisticTermsForCriteriaNames,
        expertNames
      )
    );
    dispatch(setCriteriaConfiguration(dataset.criteriaLinguisticTerms));
    dispatch(setAlternativeConfiguration(dataset.alternativesLinguisticTerms));
    dispatch(setCriteriaEstimationConfiguration(dataset.criteriaEstimations));
    dispatch(setExpertsEstimationConfiguration(dataset.expertsEstimations));
    dispatch(setOptimizationConfiguration(dataset.optimization));
    setIsDatasetNotUsed(false);
  };

  return (
    <div>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
        sx={{
          borderRadius: "8px",
        }}
      >
        <Button
          variant="contained"
          color="green"
          onClick={() => handleSetDataset(dataset1)}
        >
          Dataset #1
        </Button>
        <Button
          variant="contained"
          color="green"
          onClick={() => handleSetDataset(dataset2)}
        >
          Dataset #2
        </Button>
      </Stack>
    </div>
  );
}
