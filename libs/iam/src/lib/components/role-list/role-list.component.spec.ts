import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from '@cnfs/angular-table';
import { rolesAdapterMock } from '../../mocks/roles.adapter';
import { RolesAdapter } from '../../services/roles.adapter';
import { RoleListComponent } from './role-list.component';

describe('RoleListComponent', () => {
  let component: RoleListComponent;
  let fixture: ComponentFixture<RoleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoleListComponent],
      imports: [
        MatSortModule,
        MatTableModule,
        TableModule,
        NoopAnimationsModule,
      ],
      providers: [{ provide: RolesAdapter, useValue: rolesAdapterMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
