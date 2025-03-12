import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaussianProjectComponent } from './gaussian-project.component';

describe('GaussianProjectComponent', () => {
  let component: GaussianProjectComponent;
  let fixture: ComponentFixture<GaussianProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaussianProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaussianProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
