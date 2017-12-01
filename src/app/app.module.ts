import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Http, HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentsService } from './services/students.service';
import { AppRoutingModule } from './/app-routing.module';
import { GraduatesComponent } from './graduates/graduates.component';
import { HomeComponent } from './home/home.component';
import { TestsComponent } from './tests/tests.component';
import { GraduatesService } from './services/graduates.service';
import { GreduatesComponent } from './greduates/greduates.component';
import { TeachersComponent } from './teachers/teachers.component';
import { ContactsComponent } from './contacts/contacts.component';
import { New1sComponent } from './new1s/new1s.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    GraduatesComponent,
    HomeComponent,
    TestsComponent,
    GreduatesComponent,
    TeachersComponent,
    ContactsComponent,
    New1sComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [StudentsService, GraduatesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }