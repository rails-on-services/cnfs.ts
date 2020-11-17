import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IamComponent } from './iam.component';

describe('IamComponent', () => {
  let component: IamComponent;
  let fixture: ComponentFixture<IamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IamComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
