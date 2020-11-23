import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NotificationService } from '@cnfs/common';
import { groupsAdapterMock } from '../../mocks/groups.adapter';
import { GroupsAdapter } from '../../services/groups.adapter';
import { EditGroupComponent } from './edit-group.component';
import { notificationServiceMock } from '../../mocks/notification.service';

describe('EditGroupComponent', () => {
  let component: EditGroupComponent;
  let fixture: ComponentFixture<EditGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditGroupComponent],
      imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule],
      providers: [
        { provide: GroupsAdapter, useValue: groupsAdapterMock },
        { provide: NotificationService, useValue: notificationServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
