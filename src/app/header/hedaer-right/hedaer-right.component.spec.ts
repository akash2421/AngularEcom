import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HedaerRightComponent } from './hedaer-right.component';

describe('HedaerRightComponent', () => {
  let component: HedaerRightComponent;
  let fixture: ComponentFixture<HedaerRightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HedaerRightComponent]
    });
    fixture = TestBed.createComponent(HedaerRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
