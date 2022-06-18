export type ICategoryItem = {
  id: number
  title: string
  imageUrl: string
}

export type IDirectory = ICategoryItem & {
  route: string
}
