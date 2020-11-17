import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UsersAdapter } from '../users.adapter';
import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  const usersAdapterMock: Partial<UsersAdapter> = {};
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersComponent],
      imports: [
        MatIconModule,
        ReactiveFormsModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatTableModule,
        MatInputModule,
        MatSortModule,
        NoopAnimationsModule,
      ],
      providers: [{ provide: UsersAdapter, useValue: usersAdapterMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
