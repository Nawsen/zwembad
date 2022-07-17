import { Routes, Route } from '@angular/router';

import { ShellComponent } from './shell.component';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { canActivate, isNotAnonymous } from '@angular/fire/auth-guard';

/**
 * Provides helper methods to create routes.
 */
export const redirectAnonymousTo = (redirect: any[]) =>
  pipe(
    isNotAnonymous,
    map((loggedIn) => loggedIn || redirect)
  );

const redirectUnauthorizedToLogin = () => redirectAnonymousTo(['/login']);

export class Shell {
  /**
   * Creates routes using the shell component and authentication.
   * @param routes The routes to add.
   * @return The new route using shell as the base.
   */


  static childRoutes(routes: Routes): Route {
    return {
      path: 'tabs',
      component: ShellComponent,
      children: routes,
      ...canActivate(redirectUnauthorizedToLogin),
    };
  }
}
