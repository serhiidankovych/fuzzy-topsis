import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import numberConfigurationReducer from "./reducers/numberConfigurationReducer";
import nameConfigurationReducer from "./reducers/nameConfigurationReducer";
import criteriaConfigurationReducer from "./reducers/criteriaConfigurationReducer";
import alternativeConfigurationReducer from "./reducers/alternativeConfigurationReducer";
import criteriaEstimationConfigurationReducer from "./reducers/criteriaEstimationConfigurationReducer";
import expertsEstimationConfigurationReducer from "./reducers/expertsEstimationConfigurationReducer";
import optimizationConfigurationReducer from "./reducers/optimizationConfigurationReducer";

const rootReducer = combineReducers({
  numberConfiguration: numberConfigurationReducer,
  nameConfiguration: nameConfigurationReducer,
  criteriaConfiguration: criteriaConfigurationReducer,
  alternativeConfiguration: alternativeConfigurationReducer,
  criteriaEstimationConfiguration: criteriaEstimationConfigurationReducer,
  expertsEstimationConfiguration: expertsEstimationConfigurationReducer,
  optimizationConfiguration: optimizationConfigurationReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
