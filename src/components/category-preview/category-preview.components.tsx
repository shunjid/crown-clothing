import { IProduct } from '../../types'
import ProductCard from '../product-card/product-card.component'
import {
  CategoryPreviewContainer,
  CategoryPreviewContainerTitle,
  CategoryPreviewStyles,
} from './category-preview.styles'

const CategoryPreview = ({
  title,
  products,
}: {
  title: string
  products: IProduct[]
}) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryPreviewContainerTitle to={title}>
          {title.toUpperCase()}
        </CategoryPreviewContainerTitle>
      </h2>

      <CategoryPreviewStyles>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </CategoryPreviewStyles>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview
