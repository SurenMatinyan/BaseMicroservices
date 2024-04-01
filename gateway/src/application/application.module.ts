import { Module } from '@nestjs/common';
import { ApplicationController } from './application.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import {
  APPLICATION_SERVICE,
  applicationProvider,
} from './providers/application.p';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: APPLICATION_SERVICE,
        transport: Transport.GRPC,
        options: {
          package: 'application',
          protoPath: [join(__dirname, '../proto/application.proto')],
          url: 'application_service:5000',
        },
      },
    ]),
  ],
  providers: [applicationProvider],
  controllers: [ApplicationController],
})
export class ApplicationModule {}
