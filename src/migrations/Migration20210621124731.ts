import { Migration } from '@mikro-orm/migrations';

export class Migration20210621124731 extends Migration {

  async up(): Promise<void> {
    this.addSql('drop table if exists "user" cascade;');
  }

}
