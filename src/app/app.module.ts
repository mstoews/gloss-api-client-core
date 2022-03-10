import {
  AllCommunityModules,
  ModuleRegistry,
} from '@ag-grid-community/all-modules';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthService } from 'app/services/auth.service';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { GridComponent } from './components/grid/grid.component';
import { IntroComponent } from './components/intro/intro.component';
import { GraphQLModule } from './graphql.module';
import { IconsModule } from './icons.module';
import { EnvironmentService } from './services/environment.service';
import { MessageService } from './services/message.service';
import { SharedModule } from './shell/shared.module';

import { PartyService } from './services/party.service';
import { TokenInterceptor } from './token.interceptor';
import { UserModule } from './user/user.module';
import { PartyRefService } from './services/partyRef.service';
import { NavService } from './shell/static-sidebar/nav-list-item/nav-service';
import { MenuService } from './services/menu.service';

ModuleRegistry.registerModules(AllCommunityModules);
@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    UserModule,
    // KanbanTasksModule,
    IconsModule,
    MatStepperModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  exports: [GridComponent],
  providers: [
    AuthService,
    PartyService,
    PartyRefService,
    // KanbanService,
    MessageService,
    NavService,
    EnvironmentService,
    AuthGuard,
    MenuService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

// ng g c base --inline-template=true --skipTests
