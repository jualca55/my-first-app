import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CustomersModule} from './customers/customers.module';
import {MenuComponent} from './menu/menu.component';
import {CurrentOptionComponent} from './current-option/current-option.component';
import {OrdersModule} from './orders/orders.module';


import {  
  MdAutocompleteModule,  
  MdButtonModule,  
  MdButtonToggleModule,  
  MdCardModule,  
  MdCheckboxModule,  
  MdChipsModule,  
  MdCoreModule,  
  MdDatepickerModule,  
  MdDialogModule,  
  MdExpansionModule,  
  MdGridListModule,  
  MdIconModule,  
  MdInputModule,  
  MdListModule,  
  MdMenuModule,  
  MdNativeDateModule,  
  MdPaginatorModule,  
  MdProgressBarModule,  
  MdProgressSpinnerModule,  
  MdRadioModule,  
  MdRippleModule,  
  MdSelectModule,  
  MdSidenavModule,  
  MdSliderModule,  
  MdSlideToggleModule,  
  MdSnackBarModule,  
  MdSortModule,  
  MdTableModule,  
  MdTabsModule,  
  MdToolbarModule,  
  MdTooltipModule, 
  } from
  '@angular/material';

import {RouterModule,Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IndexComponent} from './customers/index/index.component';
import {AddComponent as OrderAddComponent} from './orders/add/add.component';

const appRoutes:Routes = [
  {path: "customers/index", component: IndexComponent},
  {path: "orders/add", component: OrderAddComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CurrentOptionComponent
  ],
  imports: [
    BrowserModule,
    CustomersModule,
    OrdersModule,
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserAnimationsModule,
    MdAutocompleteModule,  
    MdButtonModule,  
    MdButtonToggleModule,  
    MdCardModule,  
    MdCheckboxModule,  
    MdChipsModule,  
    MdCoreModule,  
    MdDatepickerModule,  
    MdDialogModule,  
    MdExpansionModule,  
    MdGridListModule,  
    MdIconModule,  
    MdInputModule,  
    MdListModule,  
    MdMenuModule,  
    MdNativeDateModule,  
    MdPaginatorModule,  
    MdProgressBarModule,  
    MdProgressSpinnerModule,  
    MdRadioModule,  
    MdRippleModule,  
    MdSelectModule,  
    MdSidenavModule,  
    MdSliderModule,  
    MdSlideToggleModule,  
    MdSnackBarModule,  
    MdSortModule,  
    MdTableModule,  
    MdTabsModule,  
    MdToolbarModule,  
    MdTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
