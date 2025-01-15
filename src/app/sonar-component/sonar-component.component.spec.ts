import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonarComponentComponent } from './sonar-component.component';

describe('SonarComponentComponent', () => {
  let component: SonarComponentComponent;
  let fixture: ComponentFixture<SonarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SonarComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SonarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
