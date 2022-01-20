import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Amplify, { Auth } from 'aws-amplify';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    private router: Router
  ) {
    this.applyCurrentAmplifyConfigIfAvailable();
  }

  private applyCurrentAmplifyConfigIfAvailable() {
    const curAmplifyAuthConfig = localStorage.amplifyAuthConfig;

    if (curAmplifyAuthConfig) {
      this.configureAmplify(JSON.parse(curAmplifyAuthConfig));
    }
  }

  public configureAmplify(authConfig: any) {
    const config = environment.amplify;
    config.Auth = authConfig;

    localStorage.amplifyAuthConfig = JSON.stringify(authConfig);

    Amplify.configure(config);
  }
}
