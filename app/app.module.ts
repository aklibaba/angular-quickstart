import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {MaterialModule} from '@angular/material';
import {RouterModule} from '@angular/router'

import {AppComponent} from './app.component'
import {AthletesList}  from './athletes-list.component';
import {AthleteDetails}  from './ta-athlete-details.component';
import {AthletesService} from './athletes.service';
import {Dashboard} from './dashboard.component';
import {HomeComponent} from './home.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        MaterialModule.forRoot(),
        RouterModule.forRoot([
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
            }])
    ],
    declarations: [
        AppComponent,
        AthletesList,
        AthleteDetails,
        Dashboard,
        HomeComponent],
    providers: [
        AthletesService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

