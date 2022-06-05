import { Link } from 'react-router-dom'
import { IProduct } from '../../types'
import ProductCard from '../product-card/product-card.component'
import './category-preview.styles.scss'

const CategoryPreview = ({
  title,
  products,
}: {
  title: string
  products: IProduct[]
}) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>

      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </div>
    </div>
  )
}

export default CategoryPreview