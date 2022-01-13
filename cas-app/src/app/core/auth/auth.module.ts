import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TokenGuard} from "./guard/token.guard";
import {AuthService} from "./auth.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "./interceptor/auth.interceptor";

@NgModule({
  declarations: [],
  providers: [
    AuthService,
    TokenGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule {
}
