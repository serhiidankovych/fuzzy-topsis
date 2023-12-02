import {
  SET_ALTERNATIVES_LT,
  ADD_ALTERNATIVE_LT,
  UPDATE_ALTERNATIVE_LT,
} from "../actions/alternativeConfigurationActions";

const initialState = {
  alternativeLinguisticTerms: [],
};

const alternativeConfigurationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALTERNATIVES_LT:
      return {
        ...state,
        alternativeLinguisticTerms: action.payload,
      };

    case ADD_ALTERNATIVE_LT:
      return {
        ...state,
        alternativeLinguisticTerms: [
          ...state.alternativeLinguisticTerms,
          action.payload,
        ],
      };

    case UPDATE_ALTERNATIVE_LT:
      const updatedTerms = state.alternativeLinguisticTerms.map((term) =>
        term.alternativeLinguisticTerms ===
        action.payload.alternativeLinguisticTerms
          ? action.payload
          : term
      );
      return {
        ...state,
        alternativeLinguisticTerms: updatedTerms,
      };

    default:
      return state;
  }
};

export default alternativeConfigurationReducer;
