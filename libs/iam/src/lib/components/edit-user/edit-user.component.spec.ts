import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterTestingModule } from '@angular/router/testing';
import { EditUserComponent } from './edit-user.component';
import { UsersAdapter } from '../../services/users.adapter';
import { IUsersService } from '../../services/users.service';
import { MockUsersService } from '../../services/mock.users.service';

describe('EditUserComponent', () => {
  let component: EditUserComponent;
  let fixture: ComponentFixture<EditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditUserComponent],
      imports: [ReactiveFormsModule, MatFormFieldModule, RouterTestingModule],
      providers: [
        UsersAdapter,
        { provide: IUsersService, useClass: MockUsersService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
