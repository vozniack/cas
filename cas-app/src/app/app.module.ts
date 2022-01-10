import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {SidebarComponent} from "./core/sidebar/sidebar.component";
import {SidebarLinkComponent} from './core/sidebar/sidebar-link/sidebar-link.component';
import {ToolbarComponent} from "./core/toolbar/toolbar.component";
import {IconsModule} from "./core/icons/icons.module";
import {StoreModule} from "@ngrx/store";
import {navigationReducer} from "./shared/store/navigation/navigation.reducers";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarLinkComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    IconsModule,
    StoreModule.forRoot({
      navigation: navigationReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
