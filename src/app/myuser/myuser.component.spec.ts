import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyuserComponent } from './myuser.component';

describe('MyuserComponent', () => {
  let component: MyuserComponent;
  let fixture: ComponentFixture<MyuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
