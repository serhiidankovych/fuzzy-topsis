import React from "react";
import { useSelector } from "react-redux";
import GroupedEstimations from "./GroupedEstimations";
import AveragedEstimations from "./AveragedEstimations";
import NormalizedEstimations from "./NormalizedEstimations";
import WeightedNormalizedEstimations from "./WeightedNormalizedEstimations";
import IdealSolutions from "./IdealSolutions";
import IdealSolutionsDistance from "./IdealSolutionsDistance";
import RankedAlternatives from "./RankedAlternatives";

import {
  getAveragedEstimations,
  groupEstimations,
  getNormalizedEstimations,
  getWeightedNormalizedEstimations,
  getIdealSolutions,
  getIdealSolutionsDistance,
  getClosenessCoefficient,
  getRankAlternatives,
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

  const alternativesAveragedEstimations = getAveragedEstimations(
    groupedAlternativesEstimations,
    alternativesLinguisticTerms.alternativeLinguisticTerms,
    numbers.numberOfExperts
  );

  const alternativesNormalizedEstimations = getNormalizedEstimations(
    alternativesAveragedEstimations,
    optimization.optimization
  );

  const alternativesWeightedNormalizedEstimations =
    getWeightedNormalizedEstimations(
      alternativesNormalizedEstimations,
      criteriaAveragedEstimations
    );

  const alternativesIdealSolutions = getIdealSolutions(
    alternativesWeightedNormalizedEstimations
  );

  const alternativesIdealSolutionsDistance = getIdealSolutionsDistance(
    alternativesIdealSolutions,
    alternativesWeightedNormalizedEstimations
  );

  const alternativesClosenessCoefficient = getClosenessCoefficient(
    alternativesIdealSolutionsDistance
  );

  const rankedAlternatives = getRankAlternatives(
    alternativesClosenessCoefficient
  );

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
        optimization={optimization.optimization}
      />
      <NormalizedEstimations
        alternativesNormalizedEstimations={alternativesNormalizedEstimations}
        names={names}
      />
      <WeightedNormalizedEstimations
        alternativesWeightedNormalizedEstimations={
          alternativesWeightedNormalizedEstimations
        }
        names={names}
      />
      <IdealSolutions
        alternativesIdealSolutions={alternativesIdealSolutions}
        names={names}
      />
      <IdealSolutionsDistance
        alternativesIdealSolutionsDistance={alternativesIdealSolutionsDistance}
        names={names}
      />
      <RankedAlternatives
        rankedAlternatives={rankedAlternatives}
        names={names}
      />
    </>
  );
}
