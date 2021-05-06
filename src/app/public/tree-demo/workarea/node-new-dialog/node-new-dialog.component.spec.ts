import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeNewDialogComponent } from './node-new-dialog.component';

describe('NodeNewDialogComponent', () => {
  let component: NodeNewDialogComponent;
  let fixture: ComponentFixture<NodeNewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeNewDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeNewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
