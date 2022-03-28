import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { GreetPipe } from './greet.pipe';
import { FullnamePipe } from './fullname.pipe';
import { PowPipe } from './pow.pipe';
import { CustomDirective } from './custom.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    GreetPipe,
    FullnamePipe,
    PowPipe,
    CustomDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
