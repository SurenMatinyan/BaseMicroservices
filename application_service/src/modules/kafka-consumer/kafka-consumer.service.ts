import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Kafka, Producer } from 'kafkajs';
import { SendMessage } from './interfaces/sendMessage.i';

@Injectable()
export class KafkaConsumerService implements OnModuleInit, OnModuleDestroy {
  private readonly _kafka = new Kafka({
    brokers: ['kafka:9092'],
    clientId: 'application',
    retry: { retries: 10, initialRetryTime: 10 },
  });

  private _producer: Producer;

  async onModuleDestroy() {
    await this._producer.disconnect();
  }
  async onModuleInit() {
    this._producer = this._kafka.producer();
    await this._producer.connect();
  }

  async sendMessage(payload: SendMessage) {
    const message = JSON.stringify(payload.message);
    await this._producer.send({
      messages: [{ value: message }],
      topic: payload.topic,
    });
  }
}
