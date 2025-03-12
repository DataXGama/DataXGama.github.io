import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IotProjectComponent } from './iot-project.component';

describe('IotProjectComponent', () => {
  let component: IotProjectComponent;
  let fixture: ComponentFixture<IotProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IotProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IotProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
