import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinateurDetailComponent } from './ordinateur-detail.component';

describe('OrdinateurDetailComponent', () => {
  let component: OrdinateurDetailComponent;
  let fixture: ComponentFixture<OrdinateurDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdinateurDetailComponent]
    });
    fixture = TestBed.createComponent(OrdinateurDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
