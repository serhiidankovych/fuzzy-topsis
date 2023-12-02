import React from "react";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Slider from "@mui/material/Slider";

import { IoArrowForward } from "react-icons/io5";

import DatasetConfiguration from "./DatasetConfiguration";

import { useDispatch, useSelector } from "react-redux";
import {
  setNumberConfiguration,
  updateWeightParameter,
} from "../../../store/actions/numberConfigurationActions";
import { setNameConfiguration } from "../../../store/actions/nameConfigurationActions";
import { setOptimizationConfiguration } from "../../../store/actions/optimizationConfigurationActions";
import { setExpertsEstimationConfiguration } from "../../../store/actions/expertsEstimationConfigurationActions";
import { setCriteriaConfiguration } from "../../../store/actions/criteriaConfigurationActions";
import { setAlternativeConfiguration } from "../../../store/actions/alternativeConfigurationActions";

import {
  generateExpertEstimations,
  generateCriteriaEstimations,
} from "../../../utils/expertEstimationsUtils";
import { generateTriangularValues } from "../../../utils/linguisticTermsUtils";
import {
  generateOptimization,
  generateNames,
  generateLinguisticTerms,
} from "../../../utils/namesUtils";
import { setCriteriaEstimationConfiguration } from "../../../store/actions/criteriaEstimationConfigurationActions";

export default function NumberConfiguration({
  handleSetupStep,
  setIsSetupFinised,
  setIsDatasetNotUsed,
  isDatasetNotUsed,
  setIsExpertsEstimationsOpen,
}) {
  const dispatch = useDispatch();
  const initialNumbers = useSelector((state) => state.numberConfiguration);

  const [numberOfAlternatives, setNumberOfAlternatives] = React.useState(3);
  const [numberOfCriteria, setNumberOfCriteria] = React.useState(3);
  const [
    numberOfLinguisticTermsForAlternatives,
    setNumberOfLinguisticTermsForAlternatives,
  ] = React.useState(3);
  const [
    numberOfLinguisticTermsForCriteria,
    setNumberOfLinguisticTermsForCriteria,
  ] = React.useState(3);
  const [numberOfExperts, setNumberOfExperts] = React.useState(3);

  const [weightParameter, setWeightParameter] = React.useState(0.6);

  React.useEffect(() => {
    setNumberOfAlternatives(initialNumbers.numberOfAlternatives || 3);
    setNumberOfCriteria(initialNumbers.numberOfCriteria || 3);
    setNumberOfLinguisticTermsForAlternatives(
      initialNumbers.numberOfLinguisticTermsForAlternatives || 3
    );
    setNumberOfLinguisticTermsForCriteria(
      initialNumbers.numberOfLinguisticTermsForCriteria || 3
    );
    setNumberOfExperts(initialNumbers.numberOfExperts || 3);
    setWeightParameter(initialNumbers.weightParameter);
  }, [initialNumbers]);

  // Generate data
  const generatedAlternativeNames = generateNames(
    "Alternative",
    numberOfAlternatives
  );
  const generatedCriteriaNames = generateNames("Criteria", numberOfCriteria);
  const generatedLinguisticTermsForAlternativesNames = generateNames(
    "A-LT",
    numberOfLinguisticTermsForAlternatives
  );
  const generatedLinguisticTermsForCriteriaNames = generateNames(
    "C-LT",
    numberOfLinguisticTermsForCriteria
  );

  const generatedExpertsNames = generateNames("Expert", numberOfExperts);
  const generatedOptimization = generateOptimization(numberOfCriteria);

  const generatedCriteriaTriangularValues = generateTriangularValues(
    numberOfLinguisticTermsForCriteria,
    1
  );
  const generatedAlternativesTriangularValues = generateTriangularValues(
    numberOfLinguisticTermsForAlternatives,
    1
  );

  const generatedCriteriaLinguisticTerms = generateLinguisticTerms(
    numberOfLinguisticTermsForCriteria,
    "lt-criteria",
    generatedCriteriaTriangularValues
  );

  const generatedAlternativeLinguisticTerms = generateLinguisticTerms(
    numberOfLinguisticTermsForAlternatives,
    "lt-alternative",
    generatedAlternativesTriangularValues
  );

  const handleSetNumbers = () => {
    if (isDatasetNotUsed) {
      dispatch(
        setNumberConfiguration(
          numberOfAlternatives,
          numberOfCriteria,
          numberOfLinguisticTermsForAlternatives,
          numberOfLinguisticTermsForCriteria,
          numberOfExperts,
          weightParameter
        )
      );
      dispatch(
        setNameConfiguration(
          [...generatedAlternativeNames],
          [...generatedCriteriaNames],
          [...generatedLinguisticTermsForAlternativesNames],
          [...generatedLinguisticTermsForCriteriaNames],
          [...generatedExpertsNames]
        )
      );

      dispatch(setOptimizationConfiguration(generatedOptimization));

      dispatch(setCriteriaConfiguration([...generatedCriteriaLinguisticTerms]));

      dispatch(
        setAlternativeConfiguration([...generatedAlternativeLinguisticTerms])
      );

      dispatch(
        setCriteriaEstimationConfiguration(
          generateCriteriaEstimations(numberOfExperts, numberOfCriteria)
        )
      );
      dispatch(
        setExpertsEstimationConfiguration(
          generateExpertEstimations(
            numberOfExperts,
            numberOfAlternatives,
            numberOfCriteria
          )
        )
      );
    } else {
      dispatch(updateWeightParameter(weightParameter));
      setWeightParameter(weightParameter);
    }

    handleSetupStep(true);
    setIsDatasetNotUsed(false);
    setIsExpertsEstimationsOpen(true);
  };

  return (
    <>
      <Box
        component="span"
        sx={{
          p: 1.5,
          border: "1px solid #51454f",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <Typography variant="h6">Provide input numbers</Typography>
        <DatasetConfiguration setIsDatasetNotUsed={setIsDatasetNotUsed} />
        <Box
          component="span"
          sx={{
            p: "8px",
            border: "1px solid #51454f",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography id="alternatives-slider" gutterBottom>
            Alternatives
          </Typography>
          <Slider
            aria-labelledby="alternatives-slider"
            value={numberOfAlternatives}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={3}
            max={15}
            onChange={(e) => setNumberOfAlternatives(e.target.value)}
            color="green"
            disabled={!isDatasetNotUsed}
          />
        </Box>
        <Box
          component="span"
          sx={{
            p: "8px",
            border: "1px solid #51454f",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography id="criteria-slider" gutterBottom>
            Criteria
          </Typography>
          <Slider
            aria-labelledby="criteria-slider"
            value={numberOfCriteria}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={3}
            max={10}
            onChange={(e) => setNumberOfCriteria(e.target.value)}
            color="green"
            disabled={!isDatasetNotUsed}
          />
        </Box>
        <Box
          component="span"
          sx={{
            p: "8px",
            border: "1px solid #51454f",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography id="linguistic-terms-slider" gutterBottom>
            Linguistic terms for alternatives
          </Typography>
          <Slider
            aria-labelledby="linguistic-terms-slider"
            value={numberOfLinguisticTermsForAlternatives}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={3}
            max={7}
            onChange={(e) =>
              setNumberOfLinguisticTermsForAlternatives(e.target.value)
            }
            color="green"
            disabled={!isDatasetNotUsed}
          />
        </Box>
        <Box
          component="span"
          sx={{
            p: "8px",
            border: "1px solid #51454f",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography id="linguistic-terms-slider" gutterBottom>
            Linguistic terms for criteria
          </Typography>
          <Slider
            aria-labelledby="linguistic-terms-slider"
            value={numberOfLinguisticTermsForCriteria}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={3}
            max={7}
            onChange={(e) =>
              setNumberOfLinguisticTermsForCriteria(e.target.value)
            }
            color="green"
            disabled={!isDatasetNotUsed}
          />
        </Box>
        <Box
          component="span"
          sx={{
            p: "8px",
            border: "1px solid #51454f",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography id="experts-slider" gutterBottom>
            Experts
          </Typography>
          <Slider
            aria-labelledby="experts-slider"
            value={numberOfExperts}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={5}
            onChange={(e) => setNumberOfExperts(e.target.value)}
            color="green"
            disabled={!isDatasetNotUsed}
          />
        </Box>
        <Box
          component="span"
          sx={{
            p: "8px",
            border: "1px solid #51454f",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography id="experts-slider" gutterBottom>
            Weight degree(υ)
          </Typography>
          <Slider
            aria-labelledby="experts-slider"
            value={weightParameter}
            valueLabelDisplay="auto"
            step={0.1}
            marks
            min={0}
            max={1}
            onChange={(e) => setWeightParameter(e.target.value)}
            color="green"
            // disabled={!isDatasetNotUsed}
          />
        </Box>

        <Button
          variant="contained"
          color="green"
          sx={{
            marginTop: "20px",
          }}
          endIcon={<IoArrowForward />}
          onClick={handleSetNumbers}
        >
          Next step
        </Button>
      </Box>
    </>
  );
}
