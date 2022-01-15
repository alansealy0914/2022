import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
  
import { PostModule } from './post/post.module';
import { NavigationComponent } from './navigation/navigation.component';

import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module




  
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    NgxPaginationModule, // <-- include it in your app module
    BrowserModule,
    AppRoutingModule,
    PostModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
