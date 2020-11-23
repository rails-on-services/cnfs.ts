import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CnfsCommonModule } from '@cnfs/common';
import { RolesComponent } from './roles.component';
import { Component } from '@angular/core';

@Component({
  selector: 'cnfs-role-list',
  template: '',
  styles: [],
})
class RolesListMockComponent {}

describe('RolesComponent', () => {
  let component: RolesComponent;
  let fixture: ComponentFixture<RolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RolesComponent, RolesListMockComponent],
      imports: [CnfsCommonModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
