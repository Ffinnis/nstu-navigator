import NavVideo from '#models/nav_video';
import db from '@adonisjs/lucid/services/db';
export default class VideoService {
    async getAll() {
        return NavVideo.all();
    }
    async getByTitle(title) {
        return this.searchByTitle('title', title);
    }
    async addOne(body) {
        await NavVideo.create(body);
        return {
            status: 'ok',
        };
    }
    async editOne(body) {
        const video = await NavVideo.findOrFail(body.id);
        await video.merge({ ...body }).save();
        return {
            status: 'ok',
        };
    }
    async deleteOne(id) {
        const video = await NavVideo.findOrFail(id);
        await video.delete();
        return {
            status: 'ok',
        };
    }
    async searchByTitle(key, value) {
        return db.query().select('*').from('nav_videos').whereILike(key, `%${value}%`);
    }
}
//# sourceMappingURL=video_service.js.map