export const ADD_ALTERNATIVE_LT = "ADD_ALTERNATIVE_LT";
export const UPDATE_ALTERNATIVE_LT = "UPDATE_ALTERNATIVE_LT";
export const SET_ALTERNATIVES_LT = "SET_ALTERNATIVES_LT";

export const setAlternativeConfiguration = (linguisticTerms) => ({
  type: SET_ALTERNATIVES_LT,
  payload: linguisticTerms,
});

export const addAlternativeConfiguration = (alternativeLinguisticTerm) => ({
  type: ADD_ALTERNATIVE_LT,
  payload: alternativeLinguisticTerm,
});

export const updateAlternativeConfiguration = (alternativeLinguisticTerm) => ({
  type: UPDATE_ALTERNATIVE_LT,
  payload: alternativeLinguisticTerm,
});
