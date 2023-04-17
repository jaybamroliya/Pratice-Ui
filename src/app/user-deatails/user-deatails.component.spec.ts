import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeatailsComponent } from './user-deatails.component';

describe('UserDeatailsComponent', () => {
  let component: UserDeatailsComponent;
  let fixture: ComponentFixture<UserDeatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDeatailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDeatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
