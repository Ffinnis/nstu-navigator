var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { createVideoPostValidator, editVideoPostValidator } from '#validators/video';
import { inject } from '@adonisjs/core';
import VideoService from '#services/video_service';
let VideoController = class VideoController {
    videoService;
    constructor(videoService) {
        this.videoService = videoService;
    }
    async index(ctx) {
        const title = ctx.request.qs().title || '';
        return title ? this.videoService.getByTitle(title) : this.videoService.getAll();
    }
    async getOneByTitle(ctx) {
        const title = ctx.request.param('title');
        return this.videoService.getByTitle(title);
    }
    async addOne(ctx) {
        const body = ctx.request.body();
        const validatedData = await createVideoPostValidator.validate(body);
        return this.videoService.addOne(validatedData);
    }
    async editOne(ctx) {
        const body = ctx.request.body();
        const validatedData = await editVideoPostValidator.validate(body);
        return this.videoService.editOne(validatedData);
    }
    async deleteOne(ctx) {
        const id = ctx.request.param('id');
        return this.videoService.deleteOne(id);
    }
};
VideoController = __decorate([
    inject(),
    __metadata("design:paramtypes", [VideoService])
], VideoController);
export default VideoController;
//# sourceMappingURL=video_controller.js.map