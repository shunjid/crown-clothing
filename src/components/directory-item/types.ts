export interface ICategoryItem {
  id: number
  title: string
  imageUrl: string
}

export interface IDirectory extends ICategoryItem {
  route: string
}
