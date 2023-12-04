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
