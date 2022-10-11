import { Tag } from "./tag"

export type Blog = {
    id: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    revisedAt: string
    title: string
    content: string
    eyecatch: {
      url: string
      height: number
      width: number
    }
    tag: Tag
}