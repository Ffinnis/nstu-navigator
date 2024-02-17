import { PaginatedPayload } from '#types/core'

export interface VideoPayload extends PaginatedPayload {
  title: string
  description: string
  url: string
}

export interface VideoPayloadWithId extends Partial<Omit<VideoPayload, 'page' | 'count'>> {
  id: number
}
