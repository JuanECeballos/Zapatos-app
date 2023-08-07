import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardZapatosComponent } from './card-zapatos.component';

describe('CardZapatosComponent', () => {
  let component: CardZapatosComponent;
  let fixture: ComponentFixture<CardZapatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardZapatosComponent]
    });
    fixture = TestBed.createComponent(CardZapatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
