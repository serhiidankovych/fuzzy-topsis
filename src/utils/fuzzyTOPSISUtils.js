export function groupEstimations(selectedItems, type) {
  const groupedEstimations = {};
  for (const key in selectedItems) {
    const item = selectedItems[key];
    const { alternative, criteria, expertId, linguisticTermId } = item;
    const aggregationKey =
      type === "alternatives" ? `a${alternative}-c${criteria}` : `c${criteria}`;

    // Create the aggregation key if it doesn't exist
    if (!groupedEstimations[aggregationKey]) {
      groupedEstimations[aggregationKey] = {
        linguisticTermsId: [{ ...item }],
      };
    } else {
      // If the aggregation key already exists, push the linguisticTermId to the existing object
      groupedEstimations[aggregationKey].linguisticTermsId.push(item);
    }
  }

  return groupedEstimations;
}

export function getAveragedEstimations(
  groupedEstimations,
  linguisticTerms,
  numberOfExperts
) {
  const averagedEstimations = {};
  for (const key in groupedEstimations) {
    const { linguisticTermsId } = groupedEstimations[key];

    const fuzzyEstimations = linguisticTermsId.map(
      (estimation) =>
        linguisticTerms[estimation.linguisticTermId].normalizedConfines
    );
    const sumFuzzyEstimations = sumFuzzyNumbers(fuzzyEstimations);
    const averegeFuzzyEstimations = sumFuzzyEstimations.map(
      (sum) => sum / numberOfExperts
    );
    averagedEstimations[key] = averegeFuzzyEstimations;
  }
  return averagedEstimations;
}

function sumFuzzyNumbers(sumArray) {
  const leftElements = sumArray.map((subarray) => subarray[0]);
  const middleElements = sumArray.map((subarray) => subarray[1]);
  const rightElements = sumArray.map((subarray) => subarray[2]);

  const sumLeftElements = leftElements.reduce((a, b) => a + b, 0);
  const sumMiddleElements = middleElements.reduce((a, b) => a + b, 0);
  const sumRightElements = rightElements.reduce((a, b) => a + b, 0);

  return [sumLeftElements, sumMiddleElements, sumRightElements];
}

function multiplyFuzzyNumbersByWeight(firstArray, secondArray) {
  const multypliedFuzzyNumbers = firstArray.map((subarray, index) => [
    subarray[0] * secondArray[0],
    subarray[1] * secondArray[1],
    subarray[2] * secondArray[2],
  ]);

  return multypliedFuzzyNumbers;
}

function minFuzzyNumbers(minArray) {
  const leftElements = minArray.map((subarray) => subarray[0]);
  const minElement = Math.min(...leftElements);
  return minElement;
}
function maxFuzzyNumbers(maxArray) {
  const rightElements = maxArray.map((subarray) => subarray[2]);
  const maxElement = Math.max(...rightElements);
  return maxElement;
}

const groupByCriteria = (estimations) => {
  const groupCriteria = {};
  for (const key in estimations) {
    const item = estimations[key];
    const [, aggregationKey] = key.split("-");
    if (!groupCriteria[aggregationKey]) {
      groupCriteria[aggregationKey] = [];
    }
    groupCriteria[aggregationKey].push(item);
  }
  return groupCriteria;
};
const ungroupByCriteria = (groupedData) => {
  const ungroupedData = {};

  for (const key in groupedData) {
    const group = groupedData[key];

    for (let i = 0; i < group.length; i++) {
      const alternativeKey = `a${i + 1}`;
      const combinedKey = `${alternativeKey}-${key}`;

      if (!ungroupedData[combinedKey]) {
        ungroupedData[combinedKey] = [];
      }

      ungroupedData[combinedKey] = group[i];
    }
  }

  return ungroupedData;
};

export function getNormalizedEstimations(averagedEstimations, optimization) {
  const normalizedEstimations = {};
  const groupedAveragedEstimations = groupByCriteria(averagedEstimations);
  for (const key in groupedAveragedEstimations) {
    const linguisticTerms = groupedAveragedEstimations[key];
    const optimizationNumber =
      optimization[key] === "Max"
        ? maxFuzzyNumbers(linguisticTerms)
        : minFuzzyNumbers(linguisticTerms);
    const normalizedFuzzyNumbers = linguisticTerms.map((fuzzyNumbers) =>
      fuzzyNumbers.map((fuzzyNumber) => fuzzyNumber / optimizationNumber)
    );
    normalizedEstimations[key] = normalizedFuzzyNumbers;
  }
  return ungroupByCriteria(normalizedEstimations);
}

export function getWeightedNormalizedEstimations(
  alternativesNormalizedEstimations,
  criteriaAveragedEstimations
) {
  const groupedNormalizedEstimations = groupByCriteria(
    alternativesNormalizedEstimations
  );
  const weightedNormalizedEstimations = {};
  for (const key in groupedNormalizedEstimations) {
    const alternativesLinguisticTerms = groupedNormalizedEstimations[key];
    const criteriaLinguisticTerms = criteriaAveragedEstimations[key];
    weightedNormalizedEstimations[key] = multiplyFuzzyNumbersByWeight(
      alternativesLinguisticTerms,
      criteriaLinguisticTerms
    );
  }

  return ungroupByCriteria(weightedNormalizedEstimations);
}

export function getIdealSolutions(weightedNormalizedEstimations) {
  const groupedWeightedNormalizedEstimations = groupByCriteria(
    weightedNormalizedEstimations
  );

  const idealSolutions = {
    positive: {},
    negative: {},
  };

  for (const key in groupedWeightedNormalizedEstimations) {
    const alternativesLinguisticTerms =
      groupedWeightedNormalizedEstimations[key];
    idealSolutions.positive[key] = [
      maxFuzzyNumbers(alternativesLinguisticTerms),
      maxFuzzyNumbers(alternativesLinguisticTerms),
      maxFuzzyNumbers(alternativesLinguisticTerms),
    ];
    idealSolutions.negative[key] = [
      minFuzzyNumbers(alternativesLinguisticTerms),
      minFuzzyNumbers(alternativesLinguisticTerms),
      minFuzzyNumbers(alternativesLinguisticTerms),
    ];
  }

  return idealSolutions;
}

export function getIdealSolutionsDistance(
  idealSolutions,
  weightedNormalizedEstimations
) {
  const idealSolutionsDistance = {
    positive: {},
    negative: {},
  };

  const groupedWeightedNormalizedEstimations = groupByCriteria(
    weightedNormalizedEstimations
  );

  for (const key in groupedWeightedNormalizedEstimations) {
    const alternativesLinguisticTerms =
      groupedWeightedNormalizedEstimations[key];
    const positiveIdealSolution = idealSolutions.positive[key];
    const negativeIdealSolution = idealSolutions.negative[key];

    idealSolutionsDistance.positive[key] = distance(
      positiveIdealSolution,
      alternativesLinguisticTerms
    );
    idealSolutionsDistance.negative[key] = distance(
      negativeIdealSolution,
      alternativesLinguisticTerms
    );
  }

  return idealSolutionsDistance;
}

export function distance(idealSolution, alternativesLinguisticTerms) {
  const difference = alternativesLinguisticTerms.map((linguisticTerm, index) =>
    linguisticTerm.map(
      (fuzzyNumber, fuzzyNumberIndex) =>
        fuzzyNumber - idealSolution[fuzzyNumberIndex]
    )
  );
  const squaredDifference = difference.map((linguisticTerm) =>
    linguisticTerm.map((fuzzyNumber) => fuzzyNumber ** 2)
  );
  const sumSquaredDifference = squaredDifference.map((linguisticTerm) =>
    linguisticTerm.reduce((a, b) => a + b, 0)
  );
  const distance = sumSquaredDifference.map((squaredDifference) =>
    Math.sqrt(squaredDifference * (1 / 3))
  );

  return distance;
}

export function getClosenessCoefficient(idealSolutionsDistance) {
  const groupedIdealPositiveSolutionsDistance = groupByCriteria(
    idealSolutionsDistance.positive
  );
  const groupedIdealNegativeSolutionsDistance = groupByCriteria(
    idealSolutionsDistance.negative
  );
  const alternativesClosenessCoefficient = {};

  const sumIdealSolutionsDistanceValues = {
    positive: {},
    negative: {},
  };

  for (const key in groupedIdealPositiveSolutionsDistance) {
    const idealPositiveSolutionsDistanceValues =
      groupedIdealPositiveSolutionsDistance[key];
    sumIdealSolutionsDistanceValues.positive = sumFuzzyNumbers(
      idealPositiveSolutionsDistanceValues
    );
    const idealNegativeSolutionsDistanceValues =
      groupedIdealNegativeSolutionsDistance[key];
    sumIdealSolutionsDistanceValues.negative = sumFuzzyNumbers(
      idealNegativeSolutionsDistanceValues
    );
  }

  for (const key in sumIdealSolutionsDistanceValues.positive) {
    alternativesClosenessCoefficient[key] =
      sumIdealSolutionsDistanceValues.negative[key] /
      (sumIdealSolutionsDistanceValues.positive[key] +
        sumIdealSolutionsDistanceValues.negative[key]);
  }

  return alternativesClosenessCoefficient;
}

export function getRankAlternatives(alternativesClosenessCoefficient) {
  const rankedAlternativessClosenessCoefficient = Object.entries(
    alternativesClosenessCoefficient
  );
  rankedAlternativessClosenessCoefficient.sort((a, b) => b[1] - a[1]);

  return addComparisonSymbols(rankedAlternativessClosenessCoefficient);
}

const addComparisonSymbols = (rankedValues) => {
  for (let i = 0; i < rankedValues.length - 1; i++) {
    const currentRank = rankedValues[i][1];
    const nextRank = rankedValues[i + 1][1];

    rankedValues[i].push(currentRank === nextRank ? "=" : ">");
  }

  rankedValues[rankedValues.length - 1].push(" ");
  return rankedValues;
};
