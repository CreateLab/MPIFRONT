import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArestComponent } from './arest.component';

describe('ArestComponent', () => {
  let component: ArestComponent;
  let fixture: ComponentFixture<ArestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
