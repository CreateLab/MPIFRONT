import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArestComponent } from './components/arest/arest.component';
import { BuyComponent } from './components/buy/buy.component';
import { ErrorComponent } from './components/error/error.component';
import { SellComponent } from './components/sell/sell.component';

const routes: Routes = [
  { path: 'arest', component: ArestComponent },
  { path: 'buy', component: BuyComponent },
  { path: 'sell', component: SellComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
