import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTimeComponent } from './my-time.component';

describe('MyTimeComponent', () => {
  let component: MyTimeComponent;
  let fixture: ComponentFixture<MyTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
