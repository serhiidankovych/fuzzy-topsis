import React from "react";
import { useSelector } from "react-redux";
import GroupedEstimations from "./GroupedEstimations";
import AveragedEstimations from "./AveragedEstimations";

import {
  getAveragedEstimations,
  groupEstimations,
} from "../../../utils/fuzzyTOPSISUtils";

export default function FuzzyTOPSIS() {
  const names = useSelector((state) => state.nameConfiguration);
  const numbers = useSelector((state) => state.numberConfiguration);
  const expertsEstimations = useSelector(
    (state) => state.expertsEstimationConfiguration
  );

  const criteriaEstimations = useSelector(
    (state) => state.criteriaEstimationConfiguration
  );

  const criteriaLinguisticTerms = useSelector(
    (state) => state.criteriaConfiguration
  );

  const alternativesLinguisticTerms = useSelector(
    (state) => state.alternativeConfiguration
  );

  const groupedAlternativesEstimations = groupEstimations(
    expertsEstimations.expertsEstimation,
    "alternatives"
  );

  const groupedCriteriaEstimations = groupEstimations(
    criteriaEstimations.criteriaEstimation,
    "criteria"
  );

  const optimization = useSelector((state) => state.optimizationConfiguration);

  const criteriaAveragedEstimations = getAveragedEstimations(
    groupedCriteriaEstimations,
    criteriaLinguisticTerms.criteriaLinguisticTerms,
    numbers.numberOfExperts
  );

  console.log(criteriaAveragedEstimations);

  const alternativesAveragedEstimations = getAveragedEstimations(
    groupedAlternativesEstimations,
    alternativesLinguisticTerms.alternativeLinguisticTerms,
    numbers.numberOfExperts
  );

  console.log(alternativesAveragedEstimations);

  return (
    <>
      <GroupedEstimations
        groupedAlternativesEstimations={groupedAlternativesEstimations}
        groupedCriteriaEstimations={groupedCriteriaEstimations}
        names={names}
        criteriaLinguisticTerms={criteriaLinguisticTerms}
        alternativesLinguisticTerms={alternativesLinguisticTerms}
      />

      <AveragedEstimations
        alternativesAveragedEstimations={alternativesAveragedEstimations}
        criteriaAveragedEstimations={criteriaAveragedEstimations}
        names={names}
      />
    </>
  );
}
