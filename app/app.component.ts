import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    styles: [],
    template: ` <h1>{{ title }}</h1>
                <a routerLink="/">Home</a>
                <a routerLink="/athletes">List of Athletes</a>
                <a routerLink="/dashboard">The Dashboard</a>
                <router-outlet></router-outlet>`,
})
export class AppComponent {
    title = 'Tour of athletes';


}