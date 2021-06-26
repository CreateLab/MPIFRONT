import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyComponent } from './components/buy/buy.component';
import { SellComponent } from './components/sell/sell.component';
import { ArestComponent } from './components/arest/arest.component';
import { HeaderComponent } from './components/header/header.component';
import { ErrorComponent } from './components/error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { MatPaginatorModule} from '@angular/material/paginator';
import { GlobalService } from './services/global-constant.service';
import { BuyService } from './components/buy/buy.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ArestService } from './components/arest/arest.service';

@NgModule({
  declarations: [
    AppComponent,
    BuyComponent,
    SellComponent,
    ArestComponent,
    HeaderComponent,
    ErrorComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatPaginatorModule,
    HttpClientModule

  ],
  providers: [
    GlobalService,
    BuyService,
    ArestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
