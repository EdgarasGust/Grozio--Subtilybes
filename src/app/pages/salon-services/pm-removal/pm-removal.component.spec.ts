import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmRemovalComponent } from './pm-removal.component';

describe('PmRemovalComponent', () => {
  let component: PmRemovalComponent;
  let fixture: ComponentFixture<PmRemovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmRemovalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmRemovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
