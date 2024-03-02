import type { HttpContext } from '@adonisjs/core/http'
import { createVideoPostValidator, editVideoPostValidator } from '#validators/video'
import { inject } from '@adonisjs/core'

import VideoService from '#services/video_service'

@inject()
export default class VideoController {
  constructor(protected videoService: VideoService) {}

  async index(ctx: HttpContext) {
    const title = ctx.request.qs().title || ''

    return title ? this.videoService.getByTitle(title) : this.videoService.getAll()
  }

  async getOneByTitle(ctx: HttpContext) {
    const title = ctx.request.param('title')

    return this.videoService.getByTitle(title)
  }

  async addOne(ctx: HttpContext) {
    const body = ctx.request.body()

    const validatedData = await createVideoPostValidator.validate(body)

    return this.videoService.addOne(validatedData)
  }

  async editOne(ctx: HttpContext) {
    const body = ctx.request.body()

    const validatedData = await editVideoPostValidator.validate(body)

    return this.videoService.editOne(validatedData)
  }

  async deleteOne(ctx: HttpContext) {
    const id = ctx.request.param('id')

    return this.videoService.deleteOne(id)
  }
}
