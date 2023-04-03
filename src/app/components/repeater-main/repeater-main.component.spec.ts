import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeaterMainComponent } from './repeater-main.component';

describe('RepeaterMainComponent', () => {
  let component: RepeaterMainComponent;
  let fixture: ComponentFixture<RepeaterMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepeaterMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepeaterMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
