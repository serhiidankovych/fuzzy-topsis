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
