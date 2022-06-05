export type IProduct = {
  id: number
  name: string
  imageUrl: string
  price: number
}

export type ICartItem = IProduct & { quantity: number }

export type IProductCategory = {
  title: string
  items: IProduct[]
}
