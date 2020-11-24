import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditPoolComponent } from './edit-pool.component';

@Component({ selector: 'cnfs-pool-edit', template: '' })
class PoolEditMockComponent {}
describe('EditPoolComponent', () => {
  let component: EditPoolComponent;
  let fixture: ComponentFixture<EditPoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPoolComponent, PoolEditMockComponent],
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
