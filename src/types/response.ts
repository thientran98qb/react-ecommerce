import ProductType from "./product";

export interface PaginationType {
  page: number,
  limit: number,
  total: number
}
export default interface ResponseApi {
  data: ProductType[],
  pagination: PaginationType
}
