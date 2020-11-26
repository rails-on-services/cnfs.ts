import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { poolsAdapterMock } from '../../mocks/pools.adapter';
import { PoolsAdapter } from '../../services/pools.adapter';
import { PoolEditComponent } from './pool-edit.component';

describe('PoolEditComponent', () => {
  let component: PoolEditComponent;
  let fixture: ComponentFixture<PoolEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PoolEditComponent],
      imports: [
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
      ],
      providers: [{ provide: PoolsAdapter, useValue: poolsAdapterMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
