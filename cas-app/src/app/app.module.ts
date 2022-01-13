import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {SidebarComponent} from "./core/sidebar/sidebar.component";
import {SidebarLinkComponent} from './core/sidebar/sidebar-link/sidebar-link.component';
import {ToolbarComponent} from "./core/toolbar/toolbar.component";
import {IconsModule} from "./core/icons/icons.module";
import {MetaReducer, StoreModule} from "@ngrx/store";
import {navigationReducer} from "./shared/store/navigation/navigation.reducers";
import {userReducer} from "./shared/store/user/user.reducers";
import {LoginComponent} from './core/login/login.component';
import {InputsModule} from "./shared/components/inputs/inputs.module";
import {ControlsModule} from "./shared/components/controls/controls.module";
import {persistState} from "./shared/store/meta/persist.metareducer";
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AuthModule} from "./core/auth/auth.module";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarLinkComponent,
    ToolbarComponent,
    LoginComponent
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
    StoreModule.forRoot({
        navigation: navigationReducer,
        user: userReducer
      },
      {
        metaReducers: [persistState as MetaReducer]
      }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
