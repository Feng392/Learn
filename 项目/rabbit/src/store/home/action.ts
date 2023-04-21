import type { Dispatch } from "redux";
import { T1, TBrand, TBanner } from "./reducers";
import * as api from "@/api/home/index";

export function getHomeHead() {
  return function (dispatch: Dispatch<T1>) {
    api.getHomeHead().then((res) => {
      dispatch({
        type: "head",
        value: res.result,
      });
    });
  };
}

export function getHomeHotBrand(limit: number) {
  return function (dispatch: Dispatch<TBrand>) {
    api.getHomeHotBrand(limit).then((res) => {
      dispatch({
        type: "brand",
        value: res.result,
      });
    });
  };
}

export function getHomeBanner(distributionSite: number) {
  return function (dispatch: Dispatch<TBanner>) {
    api.getHomeBanner(distributionSite).then((res) => {
      dispatch({
        type: "Banner",
        value: res.result,
      });
    });
  };
}