import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {AthletesService} from './athletes.service';
import {Athlete} from './athlete';
import 'rxjs/add/operator/switchMap';


@Component({
    moduleId: module.id,
    selector: 'ta-athlete-details',
    templateUrl: './ta-athlete-details.html',
    styleUrls: ['./ta-athlete-details.css']
})
export class AthleteDetails implements OnInit {
    athlete: Athlete;
    id: number;

    constructor(private activatedRoute: ActivatedRoute,
                private athleteService: AthletesService, private location: Location) {

    }

    ngOnInit() {
        let params = this.activatedRoute.params;

        let switched = params.switchMap((params: Params) => {
            debugger;
            return this.athleteService.getAthlete(+params['id']);

        });


        let subsciption = switched.subscribe(
            athlete => this.athlete = athlete
        );

    }

    goBack(): void {
        this.location.back();
    }


}