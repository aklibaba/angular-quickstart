import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Athlete} from './athlete';
import {AthletesService} from './athletes.service';

@Component({
    selector: 'athletes-list',
    styleUrls: ['app/athletes-list.component.css'],
    templateUrl: 'app/athletes-list.component.html'
})
export class AthletesList implements OnInit {
    athletes: Athlete[];
    selectedAthlete: Athlete;
    loading: boolean;

    constructor(private form: FormsModule,
                private athletesService: AthletesService) {

    }

    ngOnInit(): void {
        this.getAthletes();
    }

    getAthletes(): void {
        this.loading = true;
        this.athletesService.getAthletesSlowly().then(athletes => {
                this.athletes = athletes;
                this.loading = false;
            },
            error => {
                console.log(error);
                this.loading = false;
            });
    }

    onSelect(athlete: Athlete, event: Event) {
        // debugger;
        this.selectedAthlete = athlete;
        event.currentTarget
    }
}
