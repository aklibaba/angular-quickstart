import {
  AthletesList
} from './athletes-list.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AthletesList', function () {
  let de: DebugElement;
  let comp: AthletesList;
  let fixture: ComponentFixture<AthletesList>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AthletesList ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AthletesList);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h1> text', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/angular/i,
      '<h1> should say something about "Angular"');
  });
});
