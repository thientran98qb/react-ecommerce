export default interface ProductType {
  id: string,
  description: string,
  originalPrice: number,
  salePrice: number,
  name: string,
  isFreeShip: boolean,
  thumbnail: {
    url: string
  }
}
