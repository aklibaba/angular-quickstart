import { Component } from '@angular/core';

@Component({
    selector:'ta-home',
    template: `{{ title }}`,
    styles: []
})
export class HomeComponent {
    title = 'Hi, This is a page about some great athletes';

}