import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { extract } from '@app/i18n';
import { LoginComponent } from './login.component';
import { canActivate, isNotAnonymous } from '@angular/fire/auth-guard';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

export const redirectLoggedInAndNotAnonTo = (redirect: any[]) =>
  pipe(
    isNotAnonymous,
    map((loggedIn) => !loggedIn || redirect)
  );

const redirectLoggedInToHome = () =>
  redirectLoggedInAndNotAnonTo(['/tabs/home']);

const routes: Routes = [{
  path: 'login',
  component: LoginComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AuthRoutingModule {
}
