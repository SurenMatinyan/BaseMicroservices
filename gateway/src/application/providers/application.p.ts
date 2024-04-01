import { Provider } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

export const APPLICATION_SERVICE = Symbol('APPLICATION_SERVICE');
export const APPLICATION = Symbol('APPLICATION');

export interface IRes {}

export interface IApplicationService {
  CreateFile: ({}) => Observable<IRes>;
  StoreData: ({}) => Observable<IRes>;
}

export const applicationProvider: Provider = {
  provide: APPLICATION,
  inject: [APPLICATION_SERVICE],
  useFactory: (inj: ClientGrpc) => {
    const res = inj.getService<IApplicationService>('ApplicationService');

    return res;
  },
};
