import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestsComponent } from './tests/tests.component';
import { StudentsComponent } from './students/students.component';
import { HomeComponent } from './home/home.component';
import { GraduatesComponent } from './graduates/graduates.component';
import { GreduatesComponent } from './greduates/greduates.component';

const routes: Routes = [
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'graduates/:id', component: GraduatesComponent
    },
    {
        path: 'students', component: StudentsComponent
    },
    { path: 'courses', component: TestsComponent },
    { path: 'graduates', component: GreduatesComponent },

    { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
