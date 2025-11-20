import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingDemoComponent } from './data-binding-demo.component';

describe('DataBindingDemoComponent', () => {
  let component: DataBindingDemoComponent;
  let fixture: ComponentFixture<DataBindingDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataBindingDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBindingDemoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
