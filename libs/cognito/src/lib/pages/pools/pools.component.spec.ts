import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { PoolsComponent } from './pools.component';

@Component({ selector: 'cnfs-pool-list', template: '' })
class PoolListMockComponent {}

describe('PoolsComponent', () => {
  let component: PoolsComponent;
  let fixture: ComponentFixture<PoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PoolsComponent, PoolListMockComponent],
      imports: [RouterTestingModule, MatIconModule],
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
