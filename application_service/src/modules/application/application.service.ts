import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { writeFile } from 'node:fs';
import { join } from 'node:path';
import { promisify } from 'node:util';
import { DatabaseService } from 'src/database/database.service';
import { KafkaConsumerService } from '../kafka-consumer/kafka-consumer.service';
import { TopicEnum } from '../kafka-consumer/enums/topic.e';

@Injectable()
export class ApplicationService {
  constructor(
    private readonly _databaseService: DatabaseService,
    private readonly _kafkaConsumer: KafkaConsumerService,
  ) {}

  async createFile() {
    const randomText = `
      # ${Math.random() * 10000}
      New file's text.
    `;

    const asyncWriteFile = promisify(writeFile);
    await asyncWriteFile(join(__dirname, '../../upload/text.txt'), randomText);

    await this._kafkaConsumer.sendMessage({
      topic: TopicEnum.SendEmail,
      message: {
        content: `The file is stored`,
        from: 'test@test.com',
        to: 'test1@test.com',
      },
    });

    return { status: 1, message: 'Success' };
  }

  async storeData() {
    await (
      await this._databaseService.dbConnection()
    ).query(`insert into store_data values('${randomUUID()}', 'Title')`);

    await this._kafkaConsumer.sendMessage({
      topic: TopicEnum.SendEmail,
      message: {
        content: `The data is stored`,
        from: 'test@test.com',
        to: 'test1@test.com',
      },
    });

    return { status: 1, message: 'Success' };
  }
}
