import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryFormComponent } from './try-form.component';

describe('TryFormComponent', () => {
  let component: TryFormComponent;
  let fixture: ComponentFixture<TryFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TryFormComponent]
    });
    fixture = TestBed.createComponent(TryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
