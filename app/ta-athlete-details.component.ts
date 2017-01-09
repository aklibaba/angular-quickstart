import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {AthletesService} from './athletes.service';
import {Athlete} from './athlete'


@Component({
    selector: 'ta-athlete-details',
    templateUrl: '/app/ta-athlete-details.html',
    styleUrls: ['/app/ta-athlete-details.css']
})
export class AthleteDetails implements OnInit {
    @Input() athlete: Athlete;

    constructor(private activatedRoute: ActivatedRoute,
                private athleteService: AthletesService, private location: Location) {

    }

    ngOnInit() {
        let id = this.activatedRoute.params['id'];
    }


}