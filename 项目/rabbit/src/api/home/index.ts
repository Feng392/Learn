import req from "@/util/req";

// 获取首页头部导航数据
export function getHomeHead() {
  return req.get("/home/category/head") as Promise<any>;
}

// 获取-热门品牌
export function getHomeHotBrand(limit: number) {
  console.log(limit);
  return req.get("/home/brand", {
    params: {
      limit,
    },
  }) as Promise<any>;
}

// 获取-轮播图数据
export function getHomeBanner(distributionSite: number) {
  return req.get("/home/banner") as Promise<any>;
}