import ResponseApi from "../types/response"
import apiConnect from "./index"

export default {
  getAllProducts: async (params: any): Promise<ResponseApi> => {
    /**
     * Format data
     * {pagination: page:1, total: 100, limit: 10}
     */
    const newParams = { ...params }
    newParams._start = !newParams._page || newParams._page <= 1 ? 0 : (newParams._page - 1) * (newParams._limit || 50)
    delete newParams._page
    const count = await apiConnect.get('/products/count', {params: newParams})

    const { data } = await apiConnect.get('/products', {params: newParams})

    return {
      data: data,
      pagination: {
        page: params._page,
        limit: params._limit,
        total: count.data
      }
    }
  }
}
