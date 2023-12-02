import { SET_EXPERTS_ESTIMATION } from "../actions/expertsEstimationConfigurationActions";

const initialState = {};

const expertsEstimationConfigurationReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_EXPERTS_ESTIMATION:
      return {
        ...state,
        expertsEstimation: action.payload,
      };
    default:
      return state;
  }
};

export default expertsEstimationConfigurationReducer;
