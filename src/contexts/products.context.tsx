import { createContext, useState } from 'react'
import PRODUCT_DATA from '../shop-data.json'
import { Product } from '../types'

type Products = Array<Product>

type ProductsContextType = {
  products: Products
}

export const ProductsContext = createContext<ProductsContextType>({
  products: [],
})

export const ProductsProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [products, setProducts] = useState<Products>(PRODUCT_DATA)
  const value = { products }

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}
