import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncDecDemo1 } from './inc-dec-demo1';

describe('IncDecDemo1', () => {
  let component: IncDecDemo1;
  let fixture: ComponentFixture<IncDecDemo1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncDecDemo1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncDecDemo1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
