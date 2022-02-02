import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FQAComponent } from './faq.component';

describe('FAQComponent', () => {
  let component: FQAComponent;
  let fixture: ComponentFixture<FQAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FQAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FQAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
