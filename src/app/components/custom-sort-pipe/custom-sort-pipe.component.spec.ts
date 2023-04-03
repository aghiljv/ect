import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSortPipeComponent } from './custom-sort-pipe.component';

describe('CustomSortPipeComponent', () => {
  let component: CustomSortPipeComponent;
  let fixture: ComponentFixture<CustomSortPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSortPipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomSortPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
