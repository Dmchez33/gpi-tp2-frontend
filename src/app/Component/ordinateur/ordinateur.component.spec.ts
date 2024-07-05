import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinateurComponent } from './ordinateur.component';

describe('OrdinateurComponent', () => {
  let component: OrdinateurComponent;
  let fixture: ComponentFixture<OrdinateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdinateurComponent]
    });
    fixture = TestBed.createComponent(OrdinateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
