import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplicationModule } from './modules/application/application.module';
import { DatabaseModule } from './database/database.module';
import { KafkaConsumerModule } from './modules/kafka-consumer/kafka-consumer.module';

@Module({
  imports: [ApplicationModule, DatabaseModule, KafkaConsumerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
