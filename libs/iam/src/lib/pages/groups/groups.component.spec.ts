import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from '@cnfs/angular-table';
import { GroupListComponent } from '../../components/group-list/group-list.component';
import { groupsAdapterMock } from '../../mocks/groups.adapter';
import { GroupsAdapter } from '../../services/groups.adapter';
import { GroupsComponent } from './groups.component';

describe('GroupsComponent', () => {
  let component: GroupsComponent;
  let fixture: ComponentFixture<GroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupsComponent, GroupListComponent],
      imports: [
        MatTableModule,
        TableModule,
        NoopAnimationsModule,
        MatSortModule,
      ],
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
