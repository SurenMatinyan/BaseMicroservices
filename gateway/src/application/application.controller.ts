import { Controller, Inject, Post } from '@nestjs/common';
import { APPLICATION, IApplicationService } from './providers/application.p';
import { lastValueFrom } from 'rxjs';

@Controller('application')
export class ApplicationController {
  constructor(
    @Inject(APPLICATION)
    private readonly _applicationService: IApplicationService,
  ) {}

  @Post('data')
  async storeData() {
    return lastValueFrom(this._applicationService.StoreData({}));
  }

  @Post('file')
  async createFile() {
    return lastValueFrom(this._applicationService.CreateFile({}));
  }
}
