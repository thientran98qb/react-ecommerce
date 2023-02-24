import apiConnect from "./index";

export default {
  getCategories: () => apiConnect.get('/categories')
}
