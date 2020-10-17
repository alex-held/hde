import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCardGridComponent } from './service-card-grid.component';

describe('ServiceCardGridComponent', () => {
  let component: ServiceCardGridComponent;
  let fixture: ComponentFixture<ServiceCardGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceCardGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCardGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
