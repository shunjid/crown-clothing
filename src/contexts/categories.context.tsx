import { createContext, useEffect, useState } from 'react'
import { TCategoryToProductsMap } from '../types'
import { getProductsByCategories } from '../utils/firebase/firebase.utils'
import { ICategoriesContextType } from './types'

export const CategoriesContext = createContext<ICategoriesContextType>({
  categoriesMap: {},
})

export const CategoriesProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [categoriesMap, setCategoriesMap] = useState<TCategoryToProductsMap>({})

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
