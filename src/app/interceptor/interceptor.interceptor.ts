import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) { }

  intercept(httpRequest: HttpRequest<any>, httpHandler: HttpHandler): Observable<HttpEvent<any>> {
    // free api (no need to authenticate)
    if (httpRequest.url.includes(`${this.authenticationService.backendApiUrl}/auth/login`)) {
      return httpHandler.handle(httpRequest);
    }

    if (httpRequest.url.includes(`${this.authenticationService.backendApiUrl}/client/registerClient`)) {
      return httpHandler.handle(httpRequest);
    }


    // lkn nyenginge zte must authenticated
    this.authenticationService.loadToken();
    const token = this.authenticationService.getToken();
    const request = httpRequest.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
    return httpHandler.handle(request);
  }
}
