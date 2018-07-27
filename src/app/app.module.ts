import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {
  MatFormFieldModule,
  MatSelectModule,
  MatCardModule,
  MatToolbarModule,
  MatInputModule,
  MatButtonModule,
  MatExpansionModule,
  MatTabsModule,
  MatTooltipModule,
  MatDialogModule,
  MatCheckboxModule
} from '@angular/material';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { MainContactComponent } from './main-contact/main-contact.component';
import { AttachmentsComponent } from './attachments/attachments.component';

const appRoutes: Routes = [
  { path: 'company-details', component: CompanyDetailsComponent },
  { path: 'main-contact', component: MainContactComponent },
  { path: 'attachments', component: AttachmentsComponent },
  { path: '', redirectTo: '/company-details', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    CompanyDetailsComponent,
    MainContactComponent,
    AttachmentsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatTabsModule,
    MatTooltipModule,
    MatDialogModule,
    MatCheckboxModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
