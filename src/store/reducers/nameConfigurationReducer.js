import { SET_NAME } from "../actions/nameConfigurationActions";

const initialState = {
  alternativeNames: [],
  criteriaNames: [],
  linguisticTermsForAlternativesNames: [],
  linguisticTermsForCriteriaNames: [],
  expertNames: [],
  expertIndices: [],
};

const nameConfigurationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        alternativeNames: action.payload.alternativeNames,
        criteriaNames: action.payload.criteriaNames,
        linguisticTermsForAlternativesNames:
          action.payload.linguisticTermsForAlternativesNames,
        linguisticTermsForCriteriaNames:
          action.payload.linguisticTermsForCriteriaNames,
        expertNames: action.payload.expertNames,
        expertIndices: action.payload.expertIndices,
      };
    default:
      return state;
  }
};

export default nameConfigurationReducer;
