import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ToasterService} from './core/toaster/toaster.service';
import {SidebarComponent} from './core/sidebar/sidebar.component';
import {SidebarLinkComponent} from './core/sidebar/sidebar-link/sidebar-link.component';
import {ToolbarComponent} from './core/toolbar/toolbar.component';
import {IconsModule} from './core/icons/icons.module';
import {MetaReducer, StoreModule} from '@ngrx/store';
import {appReducer} from './store/app/app.reducers';
import {LoginComponent} from './core/login/login.component';
import {InputsModule} from './shared/components/inputs/inputs.module';
import {ControlsModule} from './shared/components/controls/controls.module';
import {persistState} from './store/meta/persist.metareducer';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthModule} from './core/auth/auth.module';
import {EffectsModule} from '@ngrx/effects';
import {AppEffects} from './store/app/app.effects';
import {OrganizationsService} from './modules/organizations/organizations.service';
import {UsersService} from './modules/users/users.service';
import {RolesService} from './modules/roles/roles.service';
import {PrivilegesService} from './modules/privileges/privileges.service';
import {CommonComponentsModule} from './shared/components/common/common-components.module';
import {ToasterComponent} from './core/toaster/toaster.component';
import {ToastComponent} from './core/toaster/toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarLinkComponent,
    ToolbarComponent,
    LoginComponent,
    ToasterComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AuthModule,
    IconsModule,
    InputsModule,
    ControlsModule,
    StoreModule.forRoot({app: appReducer}, {metaReducers: [persistState as MetaReducer]}),
    EffectsModule.forRoot([AppEffects]),
    CommonComponentsModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    ToasterService,
    OrganizationsService,
    UsersService,
    RolesService,
    PrivilegesService
  ]
})
export class AppModule {
}
