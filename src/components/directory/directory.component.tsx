import DirectoryItem from '../directory-item/directory-item.component'
import { ICategoryItem } from '../directory-item/types'
import { DirectoryItemsContainer } from './directory.styles'

const Directory = ({ directories }: { directories: ICategoryItem[] }) => {
  return (
    <DirectoryItemsContainer>
      {directories.map((directory) => (
        <DirectoryItem key={directory.id} directory={directory} />
      ))}
    </DirectoryItemsContainer>
  )
}

export default Directory
