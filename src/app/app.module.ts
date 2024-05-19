import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserRowComponent } from './user-row/user-row.component';
// import { ProductListComponent } from './product-list/product-list.component';
import { NewComponentComponent as NewComponent } from './new-component/new-component.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    UserRowComponent,
    NewComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }