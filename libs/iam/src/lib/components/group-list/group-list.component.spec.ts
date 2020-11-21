import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { TableModule } from '@cnfs/angular-table';
import { GroupListComponent } from './group-list.component';

describe('GroupListComponent', () => {
  let component: GroupListComponent;
  let fixture: ComponentFixture<GroupListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupListComponent],
      imports: [TableModule, MatTableModule],
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
