import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IonicModule} from '@ionic/angular';
import {EffectsModule} from '@ngrx/effects';
import {MetaReducer, StoreModule} from '@ngrx/store';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthModule} from './core/auth/auth.module';
import {ContentComponent} from './core/content/content.component';
import {IconsModule} from './core/icons/icons.module';
import {LoginComponent} from './core/login/login.component';
import {ToastComponent} from './core/toaster/toast/toast.component';
import {ToasterComponent} from './core/toaster/toaster.component';
import {ToasterService} from './core/toaster/toaster.service';
import {ToolbarComponent} from './core/toolbar/toolbar.component';
import {OrganizationsService} from './modules/organizations/organizations.service';
import {UsersService} from './modules/users/users.service';
import {CommonComponentsModule} from './shared/components/common/common-components.module';
import {ControlsModule} from './shared/components/controls/controls.module';
import {InputsModule} from './shared/components/inputs/inputs.module';
import {AppEffects} from './store/app/app.effects';
import {appReducer} from './store/app/app.reducers';
import {persistState} from './store/meta/persist.metareducer';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LoginComponent,
    ToasterComponent,
    ToastComponent,
    ContentComponent
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
    IonicModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [
    ToasterService,
    OrganizationsService,
    UsersService
  ]
})
export class AppModule {
}
