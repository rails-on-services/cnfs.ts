import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from '@cnfs/angular-table';
import { CnfsCommonModule } from '@cnfs/common';
import { poolsAdapterMock } from '../../mocks/pools.adapter';
import { PoolsAdapter } from '../../services/pools.adapter';
import { PoolListComponent } from './pool-list.component';

describe('PoolListComponent', () => {
  let component: PoolListComponent;
  let fixture: ComponentFixture<PoolListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PoolListComponent],
      imports: [
        MatTableModule,
        TableModule,
        CnfsCommonModule,
        MatSortModule,
        NoopAnimationsModule,
      ],
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
