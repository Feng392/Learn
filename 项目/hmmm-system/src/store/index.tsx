import {
  legacy_createStore, // create_store / createStore
  combineReducers,
  applyMiddleware,
  CombinedState,
} from "redux";
import thunk from "redux-thunk";
import company, { CompanyState } from "./reducers/company";

const reducers = {
  company,
};

export type StoreState = CombinedState<{
  company: CompanyState;
}>;
// 合并reducer
const rootReducer = combineReducers(reducers);

// 用合并好的reducer创建总store并导出
export default legacy_createStore(rootReducer, applyMiddleware(thunk));