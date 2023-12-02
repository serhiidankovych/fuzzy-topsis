import { SET_OPTIMIZATION } from "../actions/optimizationConfigurationActions";

const initialState = {
  optimization: {},
};

const optimizationConfigurationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OPTIMIZATION:
      return {
        ...state,
        optimization: action.payload,
      };
    default:
      return state;
  }
};

export default optimizationConfigurationReducer;
