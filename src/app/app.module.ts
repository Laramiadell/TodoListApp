import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoDirective } from './todo.directive';
import { HeaderDirective } from './header.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodoDirective,
    HeaderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
