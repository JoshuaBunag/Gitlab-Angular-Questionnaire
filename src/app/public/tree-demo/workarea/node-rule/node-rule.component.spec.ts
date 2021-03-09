import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeRuleComponent } from './node-rule.component';

describe('NodeRuleComponent', () => {
  let component: NodeRuleComponent;
  let fixture: ComponentFixture<NodeRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeRuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
