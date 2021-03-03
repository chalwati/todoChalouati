import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultTaskComponent } from './consult-task.component';

describe('ConsultTaskComponent', () => {
  let component: ConsultTaskComponent;
  let fixture: ComponentFixture<ConsultTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
