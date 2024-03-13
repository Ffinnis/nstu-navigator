import router from '@adonisjs/core/services/router';
const VideoController = () => import('#controllers/video_controller');
router.get('/ping', async () => 'Pong!');
router
    .group(() => {
    router
        .group(() => {
        router
            .group(() => {
            router.post('/', [VideoController, 'addOne']);
            router.put('/', [VideoController, 'editOne']);
            router.delete('/:id', [VideoController, 'deleteOne']);
            router.get('/', [VideoController, 'index']);
        })
            .prefix('video');
    })
        .prefix('v1');
})
    .prefix('api');
//# sourceMappingURL=routes.js.map