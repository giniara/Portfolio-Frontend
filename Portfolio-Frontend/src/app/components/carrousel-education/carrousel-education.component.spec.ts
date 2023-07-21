import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselEducationComponent } from './carrousel-education.component';

describe('CarrouselEducationComponent', () => {
  let component: CarrouselEducationComponent;
  let fixture: ComponentFixture<CarrouselEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselEducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrouselEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
