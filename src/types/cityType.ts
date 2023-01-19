export interface City {
  id: number
  title: string
  created_at: Date
  updated_at: Date
  deleted_at: null
  number: number
  sessions: Session[]
}

export interface Session {
  id: number
  training_id: number
  order: number
  session_app_id: number
  session_chapter_id: number
  title: string
  icon: string
  type: Type
  created_at: Date
  updated_at: Date
  deleted_at: null
  background_image: string
}

export enum Type {
  Main = "main",
  Sub = "sub",
}
