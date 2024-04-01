import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';


async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: ['application'],
        protoPath: join(__dirname, 'proto/application.proto'),
        url: 'application_service:5000',
      },
    },
  );

  app.listen();
}
bootstrap();
