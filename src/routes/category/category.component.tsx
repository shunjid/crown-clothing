import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card.component'
import { CategoriesContext } from '../../contexts/categories.context'
import { IProduct } from '../../types'
import './category.styles.scss'

const Category = () => {
  const { category } = useParams()
  const { categoriesMap } = useContext(CategoriesContext)
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    setProducts(categoriesMap[category || ''])
  }, [categoriesMap, category])

  return (
    <div className="categories-conatainer">
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
    </div>
  )
}

export default Category
