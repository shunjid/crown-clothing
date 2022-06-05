import './directory-item.styles.scss'
import { ICategoryItem } from './types'

const DirectoryItem = ({ directory }: { directory: ICategoryItem }) => {
  const { title, imageUrl } = directory

  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="directory-item-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  )
}

export default DirectoryItem
