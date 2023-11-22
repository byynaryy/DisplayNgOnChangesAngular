import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElternComponent } from './eltern.component';

describe('ElternComponent', () => {
  let component: ElternComponent;
  let fixture: ComponentFixture<ElternComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElternComponent]
    });
    fixture = TestBed.createComponent(ElternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
