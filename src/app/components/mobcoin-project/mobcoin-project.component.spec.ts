import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobcoinProjectComponent } from './mobcoin-project.component';

describe('MobcoinProjectComponent', () => {
  let component: MobcoinProjectComponent;
  let fixture: ComponentFixture<MobcoinProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobcoinProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobcoinProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
