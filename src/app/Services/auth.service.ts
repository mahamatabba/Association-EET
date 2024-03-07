import { Injectable } from '@angular/core';
import { ApiRequestService } from '../Utils/api-request.service';
import { ILogin } from '../Interface/InterfaceAdmin/ILogin';
import { ILoginResponse } from '../Interface/InterfaceAdmin/ILoginResponse';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiRequest: ApiRequestService) { }

  login(loginData: ILogin): Observable<ILoginResponse> {
    return this.apiRequest.post<ILoginResponse>('api/Users/login', loginData)
      .pipe(tap(res => this.setSession(res.token)));
  }
  private setSession(token: string): void {
    localStorage.setItem('auth_token', token);
  }


  
}
