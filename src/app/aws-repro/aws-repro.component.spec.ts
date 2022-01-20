import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsReproComponent } from './aws-repro.component';

describe('AwsReproComponent', () => {
  let component: AwsReproComponent;
  let fixture: ComponentFixture<AwsReproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwsReproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsReproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
