import {
  legacy_createStore, // create_store / createStore
  combineReducers,
  applyMiddleware,
  CombinedState,
} from "redux";

import thunk from "redux-thunk";

import homeReducer, { homeState } from "./home/reducers";

const reducers = {
  homeReducer,
};

export type RootState = CombinedState<{
  homeReducer: homeState;
}>;

const rootReducer = combineReducers(reducers);

// 用合并好的 reducer创建总store并导出
export default legacy_createStore(rootReducer, applyMiddleware(thunk));