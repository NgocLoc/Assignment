import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreduatesComponent } from './greduates.component';

describe('GreduatesComponent', () => {
  let component: GreduatesComponent;
  let fixture: ComponentFixture<GreduatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreduatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreduatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
