import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardAnsSoftComponent } from './hard-ans-soft.component';

describe('HardAnsSoftComponent', () => {
  let component: HardAnsSoftComponent;
  let fixture: ComponentFixture<HardAnsSoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardAnsSoftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardAnsSoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
