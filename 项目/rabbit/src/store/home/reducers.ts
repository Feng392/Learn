// reducer是用来改state值的
import { Action } from "redux";
import { getHomeBanner } from "@/api/home";

// 用来存放数据的  例如：user: UserState;
export interface homeState {
  head: any[];
  headChildren: any[];
  brand: any[];
  Banner: any[];
  commodity: any;
}

export interface T1 extends Action {
  type: "head";
  value: any;
}

// type T = T1 | T2;
export interface T2 extends Action {
  type: "commodity";
  value: any;
}

export interface TBrand extends Action {
  type: "brand";
  value: any;
}

export interface TBanner extends Action {
  type: "Banner";
  value: any;
}

// 初始化数据
const initialState: homeState = {
  head: [],
  headChildren: [],
  brand: [],
  Banner: [],
  commodity: { 1: "x" },
};
export default function homeReducer(
  state: homeState = initialState,
  action: T1 | T2 | TBrand | TBanner
) {
  switch (action.type) {
    case "head":
      return {
        ...state,
        head: action.value,
        headChildren: action.value.map((item: any) => item),
      };
    case "commodity":
      return {
        ...state,
        commodity: {
          123: "a",
        },
      };
    case "brand":
      return {
        ...state,
        brand: action.value,
      };
    case "Banner":
      return {
        ...state,
        brand: action.value,
      };
    default:
      return state;
  }
}