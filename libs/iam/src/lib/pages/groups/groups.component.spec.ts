import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { TableModule } from '@cnfs/angular-table';
import { GroupListComponent } from '../../components/group-list/group-list.component';
import { GroupsComponent } from './groups.component';
import { GroupsAdapter } from '../../services/groups.adapter';
import { of } from 'rxjs';

describe('GroupsComponent', () => {
  let component: GroupsComponent;
  let fixture: ComponentFixture<GroupsComponent>;
  const groupsAdapterMock: Partial<GroupsAdapter> = {
    getTableData: () =>
      of({
        data: [],
        meta: {},
      }),
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupsComponent, GroupListComponent],
      imports: [MatTableModule, TableModule],
      providers: [{ provide: GroupsAdapter, useValue: groupsAdapterMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
