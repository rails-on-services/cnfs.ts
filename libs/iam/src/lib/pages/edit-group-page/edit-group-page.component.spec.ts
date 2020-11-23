import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { groupsAdapterMock } from '../../mocks/groups.adapter';
import { IGroup } from '../../models/group.model';
import { GroupsAdapter } from '../../services/groups.adapter';
import { EditGroupPageComponent } from './edit-group-page.component';

@Component({ selector: 'cnfs-edit-group', template: '', styles: [] })
class EditGroupMockComponent {
  @Input() public group: IGroup;
}

describe('EditGroupPageComponent', () => {
  let component: EditGroupPageComponent;
  let fixture: ComponentFixture<EditGroupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditGroupPageComponent, EditGroupMockComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: GroupsAdapter, useValue: groupsAdapterMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGroupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
