import { Module } from '@nestjs/common';
import { KafkaConsumerService } from './kafka-consumer.service';

@Module({
  imports: [],
  providers: [KafkaConsumerService],
  exports: [KafkaConsumerService],
})
export class KafkaConsumerModule {}
