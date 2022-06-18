import { useNavigate } from 'react-router-dom'
import {
  BackgroundImage,
  DirectoryItemBodyContainer,
  DirectoryItemContainer,
} from './directory-item.styles'
import { IDirectory } from './types'

const DirectoryItem = ({ directory }: { directory: IDirectory }) => {
  const { title, imageUrl, route } = directory
  const navigate = useNavigate()

  const onNavigateHandler = () => {
    navigate(route)
  }

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryItemBodyContainer>
        <h2>{title}</h2>
        <p>Shop now</p>
      </DirectoryItemBodyContainer>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem
