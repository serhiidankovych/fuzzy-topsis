import { SET_CRITERIA_ESTIMATION } from "../actions/criteriaEstimationConfigurationActions";

const initialState = {};

const criteriaEstimationConfigurationReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_CRITERIA_ESTIMATION:
      return {
        ...state,
        criteriaEstimation: action.payload,
      };
    default:
      return state;
  }
};

export default criteriaEstimationConfigurationReducer;
