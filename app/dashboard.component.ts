import {Component, OnInit} from '@angular/core';
import {AthletesService} from './athletes.service';
import {Athlete} from './athlete';

@Component({
    moduleId: module.id,
    selector: 'ta-dashboard',
    templateUrl: './dashboard.component.html',
    styles: [``]
})
export class Dashboard implements OnInit {
    athletes: Array<Athlete>;
    title: 'Top 3 Athletes';

    constructor(private athletesService: AthletesService) {

    }

    ngOnInit() {
        this.athletesService.getAthletes().then(
            athletes => this.athletes = athletes.slice(0, 3),
            error => console.log(error)
        )
    }
}