import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeAdd } from './node-add';

describe('NodeAdd', () => {
  let component: NodeAdd;
  let fixture: ComponentFixture<NodeAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NodeAdd],
    }).compileComponents();

    fixture = TestBed.createComponent(NodeAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
