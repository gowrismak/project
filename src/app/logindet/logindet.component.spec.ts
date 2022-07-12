import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogindetComponent } from './logindet.component';

describe('LogindetComponent', () => {
  let component: LogindetComponent;
  let fixture: ComponentFixture<LogindetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogindetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogindetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
