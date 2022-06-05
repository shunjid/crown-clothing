import DirectoryItem from '../directory-item/directory-item.component'
import { ICategoryItem } from '../directory-item/types'
import './directory.styles.scss'

const Directory = ({ directories }: { directories: ICategoryItem[] }) => {
  return (
    <div className="directory-items-container">
      {directories.map((directory) => (
        <DirectoryItem key={directory.id} directory={directory} />
      ))}
    </div>
  )
}

export default Directory
