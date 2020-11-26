import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { poolsAdapterMock } from '../../mocks/pools.adapter';
import { IPool } from '../../models/pool';
import { EditPoolComponent } from './edit-pool.component';
import { PoolsAdapter } from '../../services/pools.adapter';

@Component({ selector: 'cnfs-pool-edit', template: '' })
class PoolEditMockComponent {
  @Input() private pool: IPool;
}
describe('EditPoolComponent', () => {
  let component: EditPoolComponent;
  let fixture: ComponentFixture<EditPoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPoolComponent, PoolEditMockComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: PoolsAdapter, useValue: poolsAdapterMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
