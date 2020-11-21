import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { TableModule } from '@cnfs/angular-table';
import { GroupsAdapter } from '../../services/groups.adapter';
import { GroupListComponent } from './group-list.component';
import { of } from 'rxjs';

describe('GroupListComponent', () => {
  let component: GroupListComponent;
  let fixture: ComponentFixture<GroupListComponent>;
  const groupsAdapterMock: Partial<GroupsAdapter> = {
    getTableData: () =>
      of({
        data: [],
        meta: {},
      }),
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupListComponent],
      imports: [TableModule, MatTableModule],
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
