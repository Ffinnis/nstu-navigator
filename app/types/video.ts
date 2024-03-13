export interface VideoPayload {
  title: string
  description: string
  url: string
}

export interface VideoPayloadWithId extends Partial<Omit<VideoPayload, 'page' | 'count'>> {
  id: number
}
