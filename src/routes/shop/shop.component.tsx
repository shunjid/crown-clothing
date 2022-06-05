import { useContext } from 'react'
import CategoryPreview from '../../components/category-preview/category-preview.components'
import { CategoriesContext } from '../../contexts/categories.context'
import './shop.components.scss'

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext)

  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title]
        return <CategoryPreview key={title} title={title} products={products} />
      })}
    </div>
  )
}

export default Shop
