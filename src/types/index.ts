export interface IProduct {
  id: number
  name: string
  imageUrl: string
  price: number
}

export interface ICartItem extends IProduct {
  quantity: number
}

export interface IProductCategory {
  title: string
  items: IProduct[]
}

export type TCategoryToProductsMap = Record<string, IProduct[]>
