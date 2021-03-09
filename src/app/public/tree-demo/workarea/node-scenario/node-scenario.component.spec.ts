import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeScenarioComponent } from './node-scenario.component';

describe('NodeScenarioComponent', () => {
  let component: NodeScenarioComponent;
  let fixture: ComponentFixture<NodeScenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeScenarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
