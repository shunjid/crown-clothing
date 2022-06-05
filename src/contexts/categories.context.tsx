import { createContext, useEffect, useState } from 'react'
import { ICategoryToProductsMap } from '../types'
import { getProductsByCategories } from '../utils/firebase/firebase.utils'

type CategoriesContextType = {
  categoriesMap: ICategoryToProductsMap
}

export const CategoriesContext = createContext<CategoriesContextType>({
  categoriesMap: {},
})

export const CategoriesProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [categoriesMap, setCategoriesMap] = useState<ICategoryToProductsMap>({})

  useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getProductsByCategories()
      setCategoriesMap(categoryMap)
    }
    getCategories()
  }, [])

  const value = { categoriesMap }

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}
