import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { TableModule } from '@cnfs/angular-table';
import { groupsAdapterMock } from '../../mocks/groups.adapter';
import { GroupsAdapter } from '../../services/groups.adapter';
import { GroupListComponent } from './group-list.component';

describe('GroupListComponent', () => {
  let component: GroupListComponent;
  let fixture: ComponentFixture<GroupListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupListComponent],
      imports: [
        TableModule,
        MatTableModule,
        NoopAnimationsModule,
        MatSortModule,
        MatIconModule,
        RouterTestingModule,
      ],
      providers: [{ provide: GroupsAdapter, useValue: groupsAdapterMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
