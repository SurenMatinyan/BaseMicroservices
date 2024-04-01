import { Controller } from '@nestjs/common';
import { ApplicationService } from './application.service';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('application')
export class ApplicationController {
  constructor(private readonly _applicationService: ApplicationService) {}

  @GrpcMethod('ApplicationService', 'CreateFile')
  async createFile() {
    return this._applicationService.createFile();
  }

  @GrpcMethod('ApplicationService', 'StoreData')
  async storeData() {
    return this._applicationService.storeData();
  }
}
