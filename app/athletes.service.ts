import { Injectable } from '@angular/core';
import { ATHLETES } from './mock-athletes'
import { Athlete } from './athlete'

@Injectable()
export class AthletesService {
    getAthletes(): Promise<Athlete[]> {
        return Promise.resolve(ATHLETES);
    }

    getAthletesSlowly(): Promise<Athlete[]> {
        return new Promise(resolve => {
            setTimeout( () => resolve(this.getAthletes()), 4000)
        })
    }
}