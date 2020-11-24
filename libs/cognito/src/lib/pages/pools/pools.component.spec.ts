import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolsComponent } from './pools.component';
import { Component } from '@angular/core';

@Component({ selector: 'cnfs-pool-list', template: '' })
class PoolListMockComponent {}

describe('PoolsComponent', () => {
  let component: PoolsComponent;
  let fixture: ComponentFixture<PoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PoolsComponent, PoolListMockComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
