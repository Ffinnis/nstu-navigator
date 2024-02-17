import NavVideo from '#models/nav_video'
import db from '@adonisjs/lucid/services/db'
import { VideoPayload, VideoPayloadWithId } from '#types/video'

export default class VideoService {
  async getAll() {
    return NavVideo.all()
  }

  async getByTitle(title: string) {
    return this.searchByTitle('title', title)
  }

  async addOne(body: VideoPayload) {
    await NavVideo.create(body)

    return {
      status: 'ok',
    }
  }

  async editOne(body: VideoPayloadWithId) {
    const video = await NavVideo.findOrFail(body.id)

    await video.merge({ ...body }).save()

    return {
      status: 'ok',
    }
  }

  async deleteOne(id: number) {
    const video = await NavVideo.findOrFail(id)

    await video.delete()

    return {
      status: 'ok',
    }
  }

  private async searchByTitle(key: string, value: string) {
    return db.query().select('*').from('nav_videos').whereILike(key, `%${value}%`)
  }
}
