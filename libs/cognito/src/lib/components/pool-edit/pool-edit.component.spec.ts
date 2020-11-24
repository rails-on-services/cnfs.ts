import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { PoolEditComponent } from './pool-edit.component';

describe('PoolEditComponent', () => {
  let component: PoolEditComponent;
  let fixture: ComponentFixture<PoolEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PoolEditComponent],
      imports: [ReactiveFormsModule, MatButtonModule],
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
