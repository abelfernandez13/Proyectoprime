import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import { ProductsComponent } from './products/products.component';
import {DataViewModule} from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DialogModule } from 'primeng/dialog';
import { AddProductComponent } from './add-product/add-product.component';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { UpdatefileComponent } from './updatefile/updatefile.component';
import { CommonModule } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    ProductsComponent,
    AddProductComponent,
    UpdatefileComponent
  ],
  imports: [
    BrowserModule,
    RadioButtonModule,
    BadgeModule,
    ButtonModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatBadgeModule,
    DataViewModule,
    RatingModule,
    TagModule,
    FormsModule,
    HttpClientModule,
    DialogModule,
    InputTextModule,
    FileUploadModule ,
    ProgressBarModule,
    ToastModule,
    InputNumberModule


  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
