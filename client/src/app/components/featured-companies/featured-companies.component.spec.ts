import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedCompaniesComponent } from './featured-companies.component';

describe('FeaturedCompaniesComponent', () => {
  let component: FeaturedCompaniesComponent;
  let fixture: ComponentFixture<FeaturedCompaniesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedCompaniesComponent]
    });
    fixture = TestBed.createComponent(FeaturedCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
