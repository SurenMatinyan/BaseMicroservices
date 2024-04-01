import { Module } from '@nestjs/common';
import { ApplicationController } from './application.controller';
import { ApplicationService } from './application.service';
import { DatabaseModule } from 'src/database/database.module';
import { KafkaConsumerModule } from '../kafka-consumer/kafka-consumer.module';

@Module({
  imports: [DatabaseModule, KafkaConsumerModule],
  controllers: [ApplicationController],
  providers: [ApplicationService],
})
export class ApplicationModule {}
