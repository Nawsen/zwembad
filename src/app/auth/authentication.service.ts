import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';

import { Credentials, CredentialsService } from './credentials.service';
import { AngularFireAuth } from '@angular/fire/auth';

export interface LoginContext {
  username: string;
  password: string;
  remember?: boolean;
}

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private credentialsService: CredentialsService,
              private fireAuth: AngularFireAuth) {}

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */
   login(context: LoginContext): Observable<any> {

    return from(this.fireAuth.signInWithEmailAndPassword(context.username, context.password));
  }

  /**
   * Logs out the user and clear credentials.
   * @return True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.credentialsService.setCredentials();
    return of(true);
  }
}
