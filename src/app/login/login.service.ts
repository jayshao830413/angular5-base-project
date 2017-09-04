import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
  constructor(private http: Http) { }

  authenticate(user: User): Promise<any> {
    return this.http.post('/chg-management-server/api/login',JSON.stringify(user))
            .map(response => response.json().result as any)
            .toPromise()
            .catch(this.handleError)
  };

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.json().description);
  };
}
