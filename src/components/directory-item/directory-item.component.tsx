import {
  BackgroundImage,
  DirectoryItemBodyContainer,
  DirectoryItemContainer,
} from './directory-item.styles'
import { ICategoryItem } from './types'

const DirectoryItem = ({ directory }: { directory: ICategoryItem }) => {
  const { title, imageUrl } = directory

  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryItemBodyContainer>
        <h2>{title}</h2>
        <p>Shop now</p>
      </DirectoryItemBodyContainer>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem
