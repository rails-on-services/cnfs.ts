import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { TableModule } from '@cnfs/angular-table';
import { CnfsCommonModule } from '@cnfs/common';
import { PoolListComponent } from './pool-list.component';
import { MatSortModule } from '@angular/material/sort';
import { PoolsAdapter } from '../../services/pools.adapter';
import { poolsAdapterMock } from '../../mocks/pools.adapter';

describe('PoolListComponent', () => {
  let component: PoolListComponent;
  let fixture: ComponentFixture<PoolListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PoolListComponent],
      imports: [MatTableModule, TableModule, CnfsCommonModule, MatSortModule],
      providers: [{ provide: PoolsAdapter, useValue: poolsAdapterMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
