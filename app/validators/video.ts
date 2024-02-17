import vine from '@vinejs/vine'

export const createVideoPostValidator = vine.compile(
  vine.object({
    title: vine.string().trim().minLength(6),
    description: vine.string().trim(),
    url: vine.string().url(),
    page: vine.number(),
    count: vine.number(),
  })
)

export const editVideoPostValidator = vine.compile(
  vine.object({
    id: vine.number(),
    title: vine.string().trim().minLength(6).optional(),
    description: vine.string().trim().optional(),
    url: vine.string().url().optional(),
  })
)
