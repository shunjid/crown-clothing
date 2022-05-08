import CategoryItem from '../category-item/category-item.component'
import { ICategoryItem } from '../category-item/types'
import './directory.styles.scss'

const Directory = ({ categories }: { categories: ICategoryItem[] }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default Directory
