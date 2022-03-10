import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {
  BojenvironmentsGQL,
  ClientsGQL,
  GlossenvironmentsGQL,
  JasdecenvironmentsGQL,
} from './api.service';

/** Mock client-side authentication/authorization service */
@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  constructor(
    private glossenvironmentGQL: GlossenvironmentsGQL,
    private jasdecenvironmentGQL: JasdecenvironmentsGQL,
    private bojenvironmentGQL: BojenvironmentsGQL,
    private clientsGQL: ClientsGQL
  ) {}

  public getClients() {
    return this.clientsGQL
      .watch({})
      .valueChanges.pipe(map((result) => result.data.clients));
  }

  public getGlossEnvironmentsofClient(clientRef: string) {
    return this.glossenvironmentGQL
      .watch({ client_ref: clientRef })
      .valueChanges.pipe(map((result) => result.data.glossenvironments));
  }

  public getJasdecEnvironmentsofClient(clientRef: string) {
    return this.jasdecenvironmentGQL
      .watch({ client_ref: clientRef })
      .valueChanges.pipe(map((result) => result.data.jasdecenvironments));
  }

  public getBojEnvironmentsofClient(clientRef: string) {
    return this.bojenvironmentGQL
      .watch({ client_ref: clientRef })
      .valueChanges.pipe(map((result) => result.data.bojenvironments));
  }
}
