import {
  SET_CRITERIA_LT,
  ADD_CRITERIA_LT,
  UPDATE_CRITERIA_LT,
} from "../actions/criteriaConfigurationActions";

const initialState = {};

const criteriaConfigurationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CRITERIA_LT:
      return {
        ...state,
        criteriaLinguisticTerms: action.payload,
      };

    case ADD_CRITERIA_LT:
      return {
        ...state,
        criteriaLinguisticTerms: [
          ...state.criteriaLinguisticTerms,
          action.payload,
        ],
      };

    case UPDATE_CRITERIA_LT:
      const updatedTerms = state.criteriaLinguisticTerms.map((term) =>
        term.criteriaLinguisticTerms === action.payload.criteriaLinguisticTerms
          ? action.payload
          : term
      );
      return {
        ...state,
        criteriaLinguisticTerms: updatedTerms,
      };

    default:
      return state;
  }
};

export default criteriaConfigurationReducer;
