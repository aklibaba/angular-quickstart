import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AppComponent} from './app.component'
import {AthletesList}  from './athletes-list.component';
import {AthleteDetails}  from './ta-athlete-details.component';
import {Dashboard} from './dashboard.component';
import {HomeComponent} from './home.component';

const ROUTES: Routes = [
    {
        'path': 'athletes',
        'component': AthletesList
    },
    {
        path: 'dashboard',
        component: Dashboard
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: AthleteDetails
    }];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}