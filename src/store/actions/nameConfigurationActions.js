export const SET_NAME = "SET_NAME";

export const setNameConfiguration = (
  alternativeNames,
  criteriaNames,
  linguisticTermsForAlternativesNames,
  linguisticTermsForCriteriaNames,
  expertNames
) => {
  // Indexing expert names
  const expertIndices = [];
  expertNames.forEach((name, index) => {
    expertIndices.push(index);
  });

  // Returning the action object with indexed expertNames
  return {
    type: SET_NAME,
    payload: {
      alternativeNames,
      criteriaNames,
      linguisticTermsForAlternativesNames,
      linguisticTermsForCriteriaNames,
      expertNames,
      expertIndices,
    },
  };
};
