import { BaseSchema } from '@adonisjs/lucid/schema';
export default class extends BaseSchema {
    tableName = 'nav_videos';
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('url');
            table.string('title');
            table.string('description');
            table.timestamp('created_at');
            table.timestamp('updated_at');
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
//# sourceMappingURL=1707648100424_create_nav_videos_table.js.map