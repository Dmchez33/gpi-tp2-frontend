import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemeDetailComponent } from './probleme-detail.component';

describe('ProblemeDetailComponent', () => {
  let component: ProblemeDetailComponent;
  let fixture: ComponentFixture<ProblemeDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProblemeDetailComponent]
    });
    fixture = TestBed.createComponent(ProblemeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
