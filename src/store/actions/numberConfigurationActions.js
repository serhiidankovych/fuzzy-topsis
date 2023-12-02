export const SET_NUMBER = "SET_NUMBER";
export const setNumberConfiguration = (
  numberOfAlternatives,
  numberOfCriteria,
  numberOfLinguisticTermsForAlternatives,
  numberOfLinguisticTermsForCriteria,
  numberOfExperts,
  weightParameter
) => {
  return {
    type: "SET_NUMBER",
    payload: {
      numberOfAlternatives,
      numberOfCriteria,
      numberOfLinguisticTermsForAlternatives,
      numberOfLinguisticTermsForCriteria,
      numberOfExperts,
      weightParameter,
    },
  };
};

export const UPDATE_WEIGHT_PARAMETER = "UPDATE_WEIGHT_PARAMETER";

export const updateWeightParameter = (weightParameter) => {
  return {
    type: UPDATE_WEIGHT_PARAMETER,
    payload: {
      weightParameter,
    },
  };
};
